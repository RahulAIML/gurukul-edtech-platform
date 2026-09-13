import { describe, it, expect } from 'vitest';
import { getPerformanceLevel } from '@/lib/assessment/performanceLevels';

describe('getPerformanceLevel', () => {
  it('maps score bands to the correct labels', () => {
    expect(getPerformanceLevel(95).label).toBe('Excellent');
    expect(getPerformanceLevel(90).label).toBe('Excellent');
    expect(getPerformanceLevel(82).label).toBe('Strong');
    expect(getPerformanceLevel(65).label).toBe('Developing');
    expect(getPerformanceLevel(45).label).toBe('Needs Improvement');
    expect(getPerformanceLevel(10).label).toBe('Needs Significant Improvement');
  });

  it('clamps out-of-range percentages', () => {
    expect(getPerformanceLevel(-20).label).toBe('Needs Significant Improvement');
    expect(getPerformanceLevel(150).label).toBe('Excellent');
  });
});
