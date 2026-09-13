import type { EvaluationResult } from '@/lib/assessment/schema';

export type AssessmentStatus =
  | 'idle'
  | 'file_selected'
  | 'uploading'
  | 'evaluating'
  | 'success'
  | 'error';

export interface AssessmentState {
  status: AssessmentStatus;
  file: File | null;
  title: string;
  instructions: string;
  rubric: string;
  result: EvaluationResult | null;
  errorMessage: string | null;
}

export type AssessmentAction =
  | { type: 'SET_FILE'; file: File | null }
  | { type: 'SET_TITLE'; value: string }
  | { type: 'SET_INSTRUCTIONS'; value: string }
  | { type: 'SET_RUBRIC'; value: string }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_EVALUATING' }
  | { type: 'SUBMIT_SUCCESS'; result: EvaluationResult }
  | { type: 'SUBMIT_ERROR'; message: string }
  | { type: 'RESET' };

export const initialAssessmentState: AssessmentState = {
  status: 'idle',
  file: null,
  title: '',
  instructions: '',
  rubric: '',
  result: null,
  errorMessage: null,
};

export function assessmentReducer(state: AssessmentState, action: AssessmentAction): AssessmentState {
  switch (action.type) {
    case 'SET_FILE':
      return {
        ...state,
        file: action.file,
        status: action.file ? 'file_selected' : 'idle',
        errorMessage: null,
      };
    case 'SET_TITLE':
      return { ...state, title: action.value };
    case 'SET_INSTRUCTIONS':
      return { ...state, instructions: action.value };
    case 'SET_RUBRIC':
      return { ...state, rubric: action.value };
    case 'SUBMIT_START':
      return { ...state, status: 'uploading', errorMessage: null };
    case 'SUBMIT_EVALUATING':
      return { ...state, status: 'evaluating' };
    case 'SUBMIT_SUCCESS':
      return { ...state, status: 'success', result: action.result, errorMessage: null };
    case 'SUBMIT_ERROR':
      return { ...state, status: 'error', errorMessage: action.message };
    case 'RESET':
      return { ...initialAssessmentState };
    default:
      return state;
  }
}
