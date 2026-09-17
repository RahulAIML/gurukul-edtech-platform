import { describe, it, expect } from 'vitest';
import { validateFileClientSide, formatBytes, sanitizeFilename, getExtension } from '@/lib/assessment/fileValidation';

function makeFile(name: string, sizeBytes: number, type = 'application/octet-stream'): File {
  const buffer = new Uint8Array(sizeBytes);
  return new File([buffer], name, { type });
}

describe('validateFileClientSide', () => {
  it('accepts a valid PDF within the size limit', () => {
    const file = makeFile('submission.pdf', 1024 * 1024, 'application/pdf');
    const result = validateFileClientSide(file, 15);
    expect(result.valid).toBe(true);
  });

  it('accepts a valid XLSX within the size limit', () => {
    const file = makeFile(
      'submission.xlsx',
      1024 * 50,
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    const result = validateFileClientSide(file, 15);
    expect(result.valid).toBe(true);
  });

  it('rejects an unsupported extension', () => {
    const file = makeFile('script.exe', 1024);
    const result = validateFileClientSide(file, 15);
    expect(result.valid).toBe(false);
    expect(result.error).toMatch(/unsupported file type/i);
  });

  it('rejects an oversized file', () => {
    const file = makeFile('huge.pdf', 20 * 1024 * 1024, 'application/pdf');
    const result = validateFileClientSide(file, 15);
    expect(result.valid).toBe(false);
    expect(result.error).toMatch(/too large/i);
  });

  it('rejects an empty file', () => {
    const file = makeFile('empty.txt', 0, 'text/plain');
    const result = validateFileClientSide(file, 15);
    expect(result.valid).toBe(false);
    expect(result.error).toMatch(/empty/i);
  });
});

describe('formatBytes', () => {
  it('formats bytes, KB and MB appropriately', () => {
    expect(formatBytes(500)).toBe('500 B');
    expect(formatBytes(2048)).toBe('2.0 KB');
    expect(formatBytes(5 * 1024 * 1024)).toBe('5.0 MB');
  });
});

describe('sanitizeFilename', () => {
  it('strips path separators and control characters', () => {
    expect(sanitizeFilename('../../etc/passwd')).not.toContain('/');
    expect(sanitizeFilename('..\\..\\windows\\system32')).not.toContain('\\');
  });
});

describe('getExtension', () => {
  it('extracts the lowercase extension', () => {
    expect(getExtension('Report.PDF')).toBe('.pdf');
    expect(getExtension('noext')).toBe('');
  });
});
