import { describe, it, expect } from 'vitest';
import * as XLSX from 'xlsx';
import { buildSubmissionParts, DocumentProcessingError } from '@/lib/assessment/documentProcessing';

function makeXlsxBuffer(): Buffer {
  const workbook = XLSX.utils.book_new();
  const sheet = XLSX.utils.aoa_to_sheet([
    ['Question', 'Answer'],
    ['What is 2 + 2?', '4'],
    ['Capital of France?', 'Paris'],
  ]);
  XLSX.utils.book_append_sheet(workbook, sheet, 'Answers');
  const out = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
  return Buffer.from(out);
}

function makeEmptyXlsxBuffer(): Buffer {
  const workbook = XLSX.utils.book_new();
  const sheet = XLSX.utils.aoa_to_sheet([[]]);
  XLSX.utils.book_append_sheet(workbook, sheet, 'Empty');
  const out = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
  return Buffer.from(out);
}

describe('buildSubmissionParts — XLSX', () => {
  it('extracts sheet contents as CSV-like text', async () => {
    const buffer = makeXlsxBuffer();
    const result = await buildSubmissionParts(
      buffer,
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      '.xlsx'
    );
    expect(result.extractedAsText).toBe(true);
    expect(result.parts).toHaveLength(1);
    const part = result.parts[0];
    expect('text' in part).toBe(true);
    const text = (part as { text: string }).text;
    expect(text).toContain('Sheet: Answers');
    expect(text).toContain('What is 2 + 2?');
    expect(text).toContain('Paris');
  });

  it('rejects an XLSX with no readable data', async () => {
    const buffer = makeEmptyXlsxBuffer();
    await expect(
      buildSubmissionParts(buffer, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', '.xlsx')
    ).rejects.toThrow(DocumentProcessingError);
  });
});

describe('buildSubmissionParts — PDF/image passthrough', () => {
  it('sends PDFs natively as inlineData rather than extracting text', async () => {
    const fakePdfBytes = Buffer.from('%PDF-1.4\nnot a real pdf body');
    const result = await buildSubmissionParts(fakePdfBytes, 'application/pdf', '.pdf');
    expect(result.extractedAsText).toBe(false);
    expect('inlineData' in result.parts[0]).toBe(true);
  });
});
