/**
 * Configurable score → performance-level thresholds.
 * Shared between the Gemini prompt (so its "performance_level" label
 * uses these bands) and the frontend ScoreOverview component.
 */
export interface PerformanceLevelBand {
  min: number;
  label: string;
  colorClass: string; // Tailwind text color for the label/badge
  ringClass: string; // Tailwind color for the circular score ring
}

export const PERFORMANCE_LEVELS: PerformanceLevelBand[] = [
  { min: 90, label: 'Excellent', colorClass: 'text-emerald-700', ringClass: 'stroke-emerald-600' },
  { min: 75, label: 'Strong', colorClass: 'text-red-700', ringClass: 'stroke-red-600' },
  { min: 60, label: 'Developing', colorClass: 'text-amber-700', ringClass: 'stroke-amber-500' },
  { min: 40, label: 'Needs Improvement', colorClass: 'text-orange-700', ringClass: 'stroke-orange-500' },
  { min: 0, label: 'Needs Significant Improvement', colorClass: 'text-red-800', ringClass: 'stroke-red-800' },
];

export function getPerformanceLevel(percentage: number): PerformanceLevelBand {
  const clamped = Math.max(0, Math.min(100, percentage));
  return (
    PERFORMANCE_LEVELS.find((band) => clamped >= band.min) ??
    PERFORMANCE_LEVELS[PERFORMANCE_LEVELS.length - 1]
  );
}
