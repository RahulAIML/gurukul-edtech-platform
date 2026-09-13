import mammoth from 'mammoth';

export interface GeminiInlinePart {
  inlineData: {
    mimeType: string;
    data: string; // base64
  };
}

export interface GeminiTextPart {
  text: string;
}

export type GeminiPart = GeminiInlinePart | GeminiTextPart;

export interface ProcessedSubmission {
  /** Content parts to append to the Gemini request (after the instruction/rubric text). */
  parts: GeminiPart[];
  /** True when the submission was converted to plain text (docx/txt) rather than sent natively. */
  extractedAsText: boolean;
}

/**
 * Turns an uploaded file into the Gemini content parts needed to evaluate it.
 *
 * - PDF / PNG / JPEG: sent natively as inlineData — Gemini's multimodal
 *   document/vision understanding reads these directly, no local parsing.
 * - DOCX: text-extracted with mammoth (pure JS, safe on serverless) since
 *   Gemini does not accept .docx as a native mimeType.
 * - TXT: read directly as UTF-8 text.
 */
export async function buildSubmissionParts(
  buffer: Buffer,
  detectedMime: string,
  extension: string
): Promise<ProcessedSubmission> {
  if (extension === '.pdf' || extension === '.png' || extension === '.jpg' || extension === '.jpeg') {
    const mimeType = extension === '.pdf' ? 'application/pdf' : detectedMime;
    return {
      parts: [{ inlineData: { mimeType, data: buffer.toString('base64') } }],
      extractedAsText: false,
    };
  }

  if (extension === '.docx') {
    const result = await mammoth.extractRawText({ buffer });
    const text = result.value.trim();
    if (!text) {
      throw new DocumentProcessingError(
        'No readable text could be extracted from this DOCX file. It may be empty, image-only, or corrupted.'
      );
    }
    return { parts: [{ text }], extractedAsText: true };
  }

  if (extension === '.txt') {
    const text = buffer.toString('utf-8').trim();
    if (!text) {
      throw new DocumentProcessingError('This text file appears to be empty.');
    }
    return { parts: [{ text }], extractedAsText: true };
  }

  throw new DocumentProcessingError(`Unsupported extension for content processing: ${extension}`);
}

export class DocumentProcessingError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DocumentProcessingError';
  }
}
