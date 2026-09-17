/**
 * Shared (client + server) file-acceptance rules. The server re-validates
 * everything here independently — this module only drives the client's
 * immediate UX (instant rejection, accept="" hint) and must never be
 * trusted as the actual security boundary.
 */

export const ACCEPTED_EXTENSIONS = ['.pdf', '.docx', '.xlsx', '.txt', '.png', '.jpg', '.jpeg'] as const;

export const ACCEPTED_MIME_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/plain',
  'image/png',
  'image/jpeg',
] as const;

export const DEFAULT_MAX_UPLOAD_SIZE_MB = 15;

export function getMaxUploadSizeMb(): number {
  const raw = process.env.MAX_UPLOAD_SIZE_MB ?? process.env.NEXT_PUBLIC_MAX_UPLOAD_SIZE_MB;
  const parsed = raw ? Number(raw) : NaN;
  return Number.isFinite(parsed) && parsed > 0 ? parsed : DEFAULT_MAX_UPLOAD_SIZE_MB;
}

export function getExtension(filename: string): string {
  const idx = filename.lastIndexOf('.');
  return idx === -1 ? '' : filename.slice(idx).toLowerCase();
}

export interface ClientValidationResult {
  valid: boolean;
  error?: string;
}

/** Fast, client-side pre-check only — used for instant UX feedback. */
export function validateFileClientSide(file: File, maxSizeMb: number): ClientValidationResult {
  const ext = getExtension(file.name);
  if (!ACCEPTED_EXTENSIONS.includes(ext as (typeof ACCEPTED_EXTENSIONS)[number])) {
    return {
      valid: false,
      error: `Unsupported file type "${ext || 'unknown'}". Please upload a PDF, Word (DOCX), Excel (XLSX), TXT, PNG, or JPG file.`,
    };
  }
  const maxBytes = maxSizeMb * 1024 * 1024;
  if (file.size > maxBytes) {
    return {
      valid: false,
      error: `File is too large (${(file.size / (1024 * 1024)).toFixed(1)} MB). Maximum allowed is ${maxSizeMb} MB.`,
    };
  }
  if (file.size === 0) {
    return { valid: false, error: 'This file appears to be empty.' };
  }
  return { valid: true };
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/** Strips path separators/control characters before a filename is ever echoed back to the client. */
export function sanitizeFilename(filename: string): string {
  return filename
    .replace(/[/\\]/g, '_')
    .replace(/[\x00-\x1f\x7f]/g, '')
    .slice(-150);
}
