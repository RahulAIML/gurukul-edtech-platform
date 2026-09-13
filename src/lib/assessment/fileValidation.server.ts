import { fileTypeFromBuffer } from 'file-type';
import {
  ACCEPTED_EXTENSIONS,
  getExtension,
  getMaxUploadSizeMb,
  sanitizeFilename,
} from './fileValidation';

export interface ServerFileValidationResult {
  valid: boolean;
  error?: string;
  /** Detected real MIME type (from file content, not the declared header) */
  detectedMime?: string;
  safeFilename?: string;
}

// Extension -> the real MIME type(s) file-type is allowed to report for it.
// .txt has no reliable magic bytes (plain text), so it's checked separately.
const EXT_TO_EXPECTED_MIME: Record<string, string[]> = {
  '.pdf': ['application/pdf'],
  '.docx': ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/zip'],
  '.png': ['image/png'],
  '.jpg': ['image/jpeg'],
  '.jpeg': ['image/jpeg'],
};

/**
 * Validates an uploaded file's actual content — not just its extension or
 * the browser-declared Content-Type, which can both be spoofed.
 */
export async function validateUploadedFile(
  filename: string,
  buffer: Buffer
): Promise<ServerFileValidationResult> {
  const safeFilename = sanitizeFilename(filename);
  const ext = getExtension(safeFilename);
  const maxMb = getMaxUploadSizeMb();

  if (!ACCEPTED_EXTENSIONS.includes(ext as (typeof ACCEPTED_EXTENSIONS)[number])) {
    return { valid: false, error: `Unsupported file type "${ext || 'unknown'}".`, safeFilename };
  }

  if (buffer.length === 0) {
    return { valid: false, error: 'The uploaded file is empty.', safeFilename };
  }

  const maxBytes = maxMb * 1024 * 1024;
  if (buffer.length > maxBytes) {
    return {
      valid: false,
      error: `File exceeds the ${maxMb} MB upload limit.`,
      safeFilename,
    };
  }

  if (ext === '.txt') {
    // Plain text has no magic bytes to sniff — reject anything that isn't
    // decodable as text (e.g. a renamed binary file).
    const sample = buffer.subarray(0, Math.min(buffer.length, 4096));
    const hasNullByte = sample.includes(0);
    if (hasNullByte) {
      return { valid: false, error: 'File does not appear to be plain text.', safeFilename };
    }
    return { valid: true, detectedMime: 'text/plain', safeFilename };
  }

  const detected = await fileTypeFromBuffer(buffer);
  const expectedMimes = EXT_TO_EXPECTED_MIME[ext] ?? [];

  if (!detected || !expectedMimes.includes(detected.mime)) {
    return {
      valid: false,
      error:
        'This file\'s content does not match its extension. Please upload a genuine PDF, DOCX, PNG, or JPG file.',
      safeFilename,
    };
  }

  return { valid: true, detectedMime: detected.mime, safeFilename };
}
