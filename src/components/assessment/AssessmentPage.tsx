'use client';

import React, { useReducer, useRef, useCallback } from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';
import { AssessmentHeader } from './AssessmentHeader';
import { AssessmentForm } from './AssessmentForm';
import { FileUploader } from './FileUploader';
import { FilePreview } from './FilePreview';
import { EvaluateButton } from './EvaluateButton';
import { EvaluationLoading } from './EvaluationLoading';
import { EvaluationResult } from './EvaluationResult';
import { assessmentReducer, initialAssessmentState } from './assessmentState';
import type { EvaluateApiResponse } from '@/lib/assessment/schema';

export const AssessmentPage: React.FC = () => {
  const [state, dispatch] = useReducer(assessmentReducer, initialAssessmentState);
  // Belt-and-suspenders double-submit guard, independent of React state timing.
  const inFlightRef = useRef(false);

  const isBusy = state.status === 'uploading' || state.status === 'evaluating';

  const handleSubmit = useCallback(async () => {
    if (inFlightRef.current || !state.file) return;
    inFlightRef.current = true;

    dispatch({ type: 'SUBMIT_START' });

    try {
      const formData = new FormData();
      formData.append('file', state.file);
      if (state.title.trim()) formData.append('assessment_title', state.title.trim());
      if (state.instructions.trim()) formData.append('assessment_instructions', state.instructions.trim());
      if (state.rubric.trim()) formData.append('rubric', state.rubric.trim());

      dispatch({ type: 'SUBMIT_EVALUATING' });

      const res = await fetch('/api/assessment/evaluate', {
        method: 'POST',
        body: formData,
      });

      const data: EvaluateApiResponse = await res.json();

      if (!res.ok || !data.success) {
        const message = !data.success ? data.error.message : 'Something went wrong. Please try again.';
        dispatch({ type: 'SUBMIT_ERROR', message });
        return;
      }

      dispatch({ type: 'SUBMIT_SUCCESS', result: data.evaluation });
    } catch {
      dispatch({
        type: 'SUBMIT_ERROR',
        message: 'Could not reach the server. Please check your connection and try again.',
      });
    } finally {
      inFlightRef.current = false;
    }
  }, [state.file, state.title, state.instructions, state.rubric]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <AssessmentHeader />

      {state.status === 'success' && state.result ? (
        <EvaluationResult result={state.result} onEvaluateAnother={() => dispatch({ type: 'RESET' })} />
      ) : (
        <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-card">
          <AssessmentForm
            title={state.title}
            instructions={state.instructions}
            rubric={state.rubric}
            disabled={isBusy}
            onTitleChange={(value) => dispatch({ type: 'SET_TITLE', value })}
            onInstructionsChange={(value) => dispatch({ type: 'SET_INSTRUCTIONS', value })}
            onRubricChange={(value) => dispatch({ type: 'SET_RUBRIC', value })}
          />

          <section aria-labelledby="upload-heading" className="mb-8">
            <h2 id="upload-heading" className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-4">
              Upload Your Assessment
            </h2>

            {state.file ? (
              <FilePreview file={state.file} disabled={isBusy} onRemove={() => dispatch({ type: 'SET_FILE', file: null })} />
            ) : (
              <FileUploader
                disabled={isBusy}
                onFileAccepted={(file) => dispatch({ type: 'SET_FILE', file })}
                onError={(message) => dispatch({ type: 'SUBMIT_ERROR', message })}
              />
            )}
          </section>

          {state.status === 'error' && state.errorMessage && (
            <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 mb-6">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-red-900 leading-relaxed">{state.errorMessage}</p>
                {state.file && (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-red-700 hover:text-red-900"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Try Again
                  </button>
                )}
              </div>
            </div>
          )}

          {isBusy ? (
            <EvaluationLoading />
          ) : (
            <div className="flex justify-center sm:justify-start">
              <EvaluateButton disabled={!state.file || isBusy} loading={isBusy} onClick={handleSubmit} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
