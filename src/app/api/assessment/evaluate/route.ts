import { NextRequest, NextResponse } from 'next/server';
import { evaluateAssessment, AssessmentServiceError } from '@/lib/assessment/assessmentService';
import { evaluateRequestSchema, type EvaluateApiResponse } from '@/lib/assessment/schema';
import { checkRateLimit } from '@/lib/assessment/rateLimit';
import { getMaxUploadSizeMb } from '@/lib/assessment/fileValidation';

export const runtime = 'nodejs';
export const maxDuration = 60;

function errorResponse(code: string, message: string, status: number): NextResponse<EvaluateApiResponse> {
  return NextResponse.json({ success: false, error: { code, message } }, { status });
}

function getClientIdentifier(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  return forwarded?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'unknown';
}

export async function POST(req: NextRequest): Promise<NextResponse<EvaluateApiResponse>> {
  const identifier = getClientIdentifier(req);
  const rate = checkRateLimit(identifier);
  if (!rate.allowed) {
    return errorResponse(
      'rate_limited',
      `Too many evaluation requests. Please wait ${rate.retryAfterSeconds}s and try again.`,
      429
    );
  }

  // Fast reject on declared size before reading the full body, where the header is present.
  const maxMb = getMaxUploadSizeMb();
  const declaredLength = req.headers.get('content-length');
  if (declaredLength && Number(declaredLength) > maxMb * 1024 * 1024 * 1.5) {
    // *1.5 slack for multipart boundaries/other fields; the real per-file check happens below too.
    return errorResponse('file_too_large', `Upload exceeds the ${maxMb} MB limit.`, 413);
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return errorResponse('invalid_request', 'Could not read the submitted form data.', 400);
  }

  const file = formData.get('file');
  if (!file || !(file instanceof File)) {
    return errorResponse('missing_file', 'Please attach an assessment file to evaluate.', 400);
  }

  const rawFields = {
    assessment_title: formData.get('assessment_title')?.toString() || undefined,
    assessment_instructions: formData.get('assessment_instructions')?.toString() || undefined,
    rubric: formData.get('rubric')?.toString() || undefined,
  };

  const fieldsResult = evaluateRequestSchema.safeParse(rawFields);
  if (!fieldsResult.success) {
    return errorResponse('invalid_request', 'One or more form fields were invalid or too long.', 400);
  }

  let buffer: Buffer;
  try {
    const arrayBuffer = await file.arrayBuffer();
    buffer = Buffer.from(arrayBuffer);
  } catch {
    return errorResponse('invalid_file', 'Could not read the uploaded file.', 400);
  }

  if (buffer.length > maxMb * 1024 * 1024) {
    return errorResponse('file_too_large', `File exceeds the ${maxMb} MB limit.`, 413);
  }

  try {
    const evaluation = await evaluateAssessment({
      filename: file.name,
      buffer,
      assessmentTitle: fieldsResult.data.assessment_title,
      assessmentInstructions: fieldsResult.data.assessment_instructions,
      rubric: fieldsResult.data.rubric,
    });

    return NextResponse.json({ success: true, evaluation }, { status: 200 });
  } catch (err) {
    if (err instanceof AssessmentServiceError) {
      return errorResponse(err.code, err.message, err.status);
    }
    // Never leak internal error details/stack traces to the client.
    console.error('[assessment/evaluate] unexpected error', err);
    return errorResponse('internal_error', 'Something went wrong while evaluating your assessment.', 500);
  }
}
