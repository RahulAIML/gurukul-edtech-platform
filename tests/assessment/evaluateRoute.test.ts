import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { NextRequest } from 'next/server';

function buildRequest(formData: FormData): NextRequest {
  const req = new Request('http://localhost/api/assessment/evaluate', {
    method: 'POST',
    body: formData,
  });
  return req as unknown as NextRequest;
}

function pdfFile(name = 'submission.pdf', sizeBytes = 1024): File {
  // Minimal valid PDF magic bytes (%PDF-1.4) padded to the desired size.
  const header = new TextEncoder().encode('%PDF-1.4\n');
  const bytes = new Uint8Array(Math.max(sizeBytes, header.length));
  bytes.set(header, 0);
  return new File([bytes], name, { type: 'application/pdf' });
}

describe('POST /api/assessment/evaluate', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
    process.env.USE_MOCK_ASSESSMENT_EVALUATION = 'true';
  });

  afterEach(() => {
    process.env = { ...originalEnv };
    vi.unstubAllGlobals();
  });

  it('rejects a request with no file', async () => {
    const { POST } = await import('@/app/api/assessment/evaluate/route');
    const fd = new FormData();
    const res = await POST(buildRequest(fd));
    const body = await res.json();
    expect(res.status).toBe(400);
    expect(body.success).toBe(false);
    expect(body.error.code).toBe('missing_file');
  });

  it('rejects an unsupported file type', async () => {
    const { POST } = await import('@/app/api/assessment/evaluate/route');
    const fd = new FormData();
    fd.append('file', new File([new Uint8Array(10)], 'script.exe', { type: 'application/octet-stream' }));
    const res = await POST(buildRequest(fd));
    const body = await res.json();
    expect(res.status).toBe(400);
    expect(body.success).toBe(false);
    expect(body.error.code).toBe('invalid_file');
  });

  it('returns a successful mock evaluation for a valid PDF (mock mode)', async () => {
    const { POST } = await import('@/app/api/assessment/evaluate/route');
    const fd = new FormData();
    fd.append('file', pdfFile());
    fd.append('assessment_title', 'Unit Test Assessment');
    const res = await POST(buildRequest(fd));
    const body = await res.json();
    expect(res.status).toBe(200);
    expect(body.success).toBe(true);
    expect(body.evaluation.overall_score).toBeTypeOf('number');
    expect(body.evaluation.percentage).toBeGreaterThanOrEqual(0);
    expect(Array.isArray(body.evaluation.strengths)).toBe(true);
  }, 10000);

  it('handles empty optional instructions/rubric fields gracefully', async () => {
    const { POST } = await import('@/app/api/assessment/evaluate/route');
    const fd = new FormData();
    fd.append('file', pdfFile());
    // no title/instructions/rubric appended at all
    const res = await POST(buildRequest(fd));
    const body = await res.json();
    expect(res.status).toBe(200);
    expect(body.success).toBe(true);
  }, 10000);

  it('surfaces a Gemini upstream failure as a friendly 502/503 error, not a raw stack trace', async () => {
    process.env.USE_MOCK_ASSESSMENT_EVALUATION = 'false';
    process.env.GEMINI_API_KEY = 'test-key';
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response('Internal error', { status: 500 }))
    );

    const { POST } = await import('@/app/api/assessment/evaluate/route');
    const fd = new FormData();
    fd.append('file', pdfFile());
    const res = await POST(buildRequest(fd));
    const body = await res.json();

    expect(res.status).toBeGreaterThanOrEqual(500);
    expect(body.success).toBe(false);
    expect(body.error.message).not.toMatch(/at Object\.|node_modules|\.ts:\d+/); // no stack trace leakage
  });

  it('surfaces malformed Gemini JSON output as a structured error', async () => {
    process.env.USE_MOCK_ASSESSMENT_EVALUATION = 'false';
    process.env.GEMINI_API_KEY = 'test-key';
    vi.stubGlobal(
      'fetch',
      vi.fn(
        async () =>
          new Response(
            JSON.stringify({
              candidates: [{ content: { parts: [{ text: 'not valid json {' }] } }],
            }),
            { status: 200 }
          )
      )
    );

    const { POST } = await import('@/app/api/assessment/evaluate/route');
    const fd = new FormData();
    fd.append('file', pdfFile());
    const res = await POST(buildRequest(fd));
    const body = await res.json();

    expect(res.status).toBe(502);
    expect(body.success).toBe(false);
    expect(body.error.code).toBe('malformed_response');
  });

  it('rejects when Gemini returns valid JSON that fails schema validation', async () => {
    process.env.USE_MOCK_ASSESSMENT_EVALUATION = 'false';
    process.env.GEMINI_API_KEY = 'test-key';
    vi.stubGlobal(
      'fetch',
      vi.fn(
        async () =>
          new Response(
            JSON.stringify({
              candidates: [{ content: { parts: [{ text: JSON.stringify({ overall_score: 82 }) }] } }],
            }),
            { status: 200 }
          )
      )
    );

    const { POST } = await import('@/app/api/assessment/evaluate/route');
    const fd = new FormData();
    fd.append('file', pdfFile());
    const res = await POST(buildRequest(fd));
    const body = await res.json();

    expect(res.status).toBe(502);
    expect(body.success).toBe(false);
    expect(body.error.code).toBe('invalid_structured_output');
  });
});
