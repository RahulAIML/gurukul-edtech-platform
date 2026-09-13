import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

interface EvaluateButtonProps {
  disabled: boolean;
  loading: boolean;
  onClick: () => void;
}

export const EvaluateButton: React.FC<EvaluateButtonProps> = ({ disabled, loading, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Evaluating…</span>
        </>
      ) : (
        <>
          <span>Evaluate Assessment</span>
          <ArrowRight className="w-4 h-4" />
        </>
      )}
    </button>
  );
};
