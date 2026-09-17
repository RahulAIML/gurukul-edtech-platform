export interface ModuleDocument {
  slug: string;
  title: string;
  moduleTitle: string;
  description: string;
  /** Plain-text content rendered inline and offered for download. */
  content: string;
  /** Filename used for the downloadable copy. */
  downloadFilename: string;
}

/**
 * Placeholder module-document content. In the real LMS this will be
 * fetched by module ID from the course/content system; kept as static
 * data here since no course backend exists yet — swapping this for a
 * fetch call later does not change ModuleDocumentViewer's props.
 */
export const moduleDocuments: ModuleDocument[] = [
  {
    slug: 'python-data-structures',
    title: 'Python Data Structures — Lists vs. Tuples',
    moduleTitle: 'Module 2: Python for Data Analysis',
    description:
      'Read through this study document, then complete the module assessment to check your understanding.',
    downloadFilename: 'python-data-structures.txt',
    content: `PYTHON DATA STRUCTURES — LISTS VS. TUPLES

1. Mutability
A list is mutable: you can change, add, or remove elements after creation.
A tuple is immutable: once created, its contents cannot change.

2. Syntax
Lists use square brackets: my_list = [1, 2, 3]
Tuples use parentheses: my_tuple = (1, 2, 3)

3. Performance
Because tuples are immutable, Python can store and access them slightly
more efficiently than lists. This makes tuples a good choice for fixed
collections of values, such as coordinates (x, y) or RGB color values.

4. Common Use Cases
- Use a list when the collection may grow, shrink, or be reordered
  (e.g. a queue of tasks, a list of user inputs).
- Use a tuple when the collection represents a fixed, related group of
  values that should not change (e.g. a database record, a point in
  2D space).

5. Methods
Lists support .append(), .remove(), .sort(), and many other mutating
methods. Tuples support only non-mutating operations like .count() and
.index(), since their contents can never change.

When you're ready, take the module assessment to check your understanding.`,
  },
];

export function getModuleDocument(slug: string): ModuleDocument | undefined {
  return moduleDocuments.find((doc) => doc.slug === slug);
}
