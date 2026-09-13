import React from 'react';
import { FileText, X } from 'lucide-react';
import { formatBytes } from '@/lib/assessment/fileValidation';

interface FilePreviewProps {
  file: File;
  disabled: boolean;
  onRemove: () => void;
}

export const FilePreview: React.FC<FilePreviewProps> = ({ file, disabled, onRemove }) => {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
          <FileText className="w-5 h-5 text-emerald-600" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold text-slate-900 truncate" title={file.name}>
            {file.name}
          </p>
          <p className="text-xs text-slate-500">{formatBytes(file.size)}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onRemove}
        disabled={disabled}
        aria-label={`Remove ${file.name}`}
        className="flex-shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold text-slate-500 hover:text-red-700 hover:bg-red-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <X className="w-3.5 h-3.5" />
        Remove
      </button>
    </div>
  );
};
