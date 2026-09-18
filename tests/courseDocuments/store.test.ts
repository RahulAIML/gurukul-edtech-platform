import { describe, it, expect, beforeEach } from 'vitest';
import { listDocuments, createDocument, replaceDocument, deleteDocument, getDocument } from '@/lib/courseDocuments/store';

const COURSE = 'test-course-store';

describe('courseDocuments store', () => {
  beforeEach(() => {
    // Clean slate: delete anything left over from a previous test in this file.
    listDocuments(COURSE).forEach((doc) => deleteDocument(COURSE, doc.id));
  });

  it('starts empty for an unknown course', () => {
    expect(listDocuments('never-seen-course')).toEqual([]);
  });

  it('creates and lists a document', () => {
    const doc = createDocument({
      courseSlug: COURSE,
      title: 'Syllabus',
      filename: 'syllabus.pdf',
      mimeType: 'application/pdf',
      data: Buffer.from('fake pdf bytes').toString('base64'),
      sizeBytes: 14,
    });

    expect(doc.id).toBeTruthy();
    expect(listDocuments(COURSE)).toHaveLength(1);
    expect(getDocument(COURSE, doc.id)?.title).toBe('Syllabus');
  });

  it('replaces a document in place, keeping its id', () => {
    const doc = createDocument({
      courseSlug: COURSE,
      title: 'Notes v1',
      filename: 'notes.txt',
      mimeType: 'text/plain',
      data: Buffer.from('v1').toString('base64'),
      sizeBytes: 2,
    });

    const updated = replaceDocument(COURSE, doc.id, {
      filename: 'notes.txt',
      mimeType: 'text/plain',
      data: Buffer.from('v2').toString('base64'),
      sizeBytes: 2,
    });

    expect(updated?.id).toBe(doc.id);
    expect(Buffer.from(updated!.data, 'base64').toString()).toBe('v2');
    expect(listDocuments(COURSE)).toHaveLength(1);
  });

  it('returns undefined when replacing a document that does not exist', () => {
    const result = replaceDocument(COURSE, 'does-not-exist', {
      filename: 'x.txt',
      mimeType: 'text/plain',
      data: 'ZmFrZQ==',
      sizeBytes: 4,
    });
    expect(result).toBeUndefined();
  });

  it('deletes a document', () => {
    const doc = createDocument({
      courseSlug: COURSE,
      title: 'To delete',
      filename: 'temp.txt',
      mimeType: 'text/plain',
      data: 'eA==',
      sizeBytes: 1,
    });
    expect(deleteDocument(COURSE, doc.id)).toBe(true);
    expect(listDocuments(COURSE)).toHaveLength(0);
    expect(deleteDocument(COURSE, doc.id)).toBe(false);
  });

  it('keeps documents scoped to their own course', () => {
    createDocument({
      courseSlug: COURSE,
      title: 'Course A doc',
      filename: 'a.txt',
      mimeType: 'text/plain',
      data: 'YQ==',
      sizeBytes: 1,
    });
    createDocument({
      courseSlug: 'test-course-store-2',
      title: 'Course B doc',
      filename: 'b.txt',
      mimeType: 'text/plain',
      data: 'Yg==',
      sizeBytes: 1,
    });

    expect(listDocuments(COURSE)).toHaveLength(1);
    expect(listDocuments('test-course-store-2')).toHaveLength(1);
    deleteDocument('test-course-store-2', listDocuments('test-course-store-2')[0].id);
  });
});
