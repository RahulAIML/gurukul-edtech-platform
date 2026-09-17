import { describe, it, expect } from 'vitest';
import { getModuleDocument, moduleDocuments } from '@/data/moduleDocuments';

describe('getModuleDocument', () => {
  it('finds a document by its slug', () => {
    const doc = getModuleDocument('python-data-structures');
    expect(doc).toBeDefined();
    expect(doc?.title).toContain('Lists vs. Tuples');
    expect(doc?.content.length).toBeGreaterThan(0);
  });

  it('returns undefined for an unknown slug', () => {
    expect(getModuleDocument('does-not-exist')).toBeUndefined();
  });

  it('every seeded document has non-empty content and a download filename', () => {
    moduleDocuments.forEach((doc) => {
      expect(doc.content.trim().length).toBeGreaterThan(0);
      expect(doc.downloadFilename).toMatch(/\.\w+$/);
    });
  });
});
