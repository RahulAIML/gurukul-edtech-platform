'use client';

import React, { useCallback, useRef, useState } from 'react';
import { UploadCloud } from 'lucide-react';
import { validateFileClientSide, DEFAULT_MAX_UPLOAD_SIZE_MB } from '@/lib/assessment/fileValidation';

interface FileUploaderProps {
  disabled: boolean;
  onFileAccepted: (file: File) => void;
  onError: (message: string) => void;
}

export const FileUploader: React.FC<FileUploaderProps> = ({ disabled, onFileAccepted, onError }) => {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList || fileList.length === 0) return;
      const file = fileList[0];
      const result = validateFileClientSide(file, DEFAULT_MAX_UPLOAD_SIZE_MB);
      if (!result.valid) {
        onError(result.error ?? 'This file could not be accepted.');
        return;
      }
      onFileAccepted(file);
    },
    [onFileAccepted, onError]
  );

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      aria-label="Upload your assessment file. Click to choose a file, or drag and drop it here."
      onClick={() => !disabled && inputRef.current?.click()}
      onKeyDown={(e) => {
        if (disabled) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          inputRef.current?.click();
        }
      }}
      onDragOver={(e) => {
        e.preventDefault();
        if (!disabled) setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragging(false);
        if (!disabled) handleFiles(e.dataTransfer.files);
      }}
      className={`relative rounded-2xl border-2 border-dashed px-6 py-10 sm:py-12 text-center transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-red-600/40 ${
        disabled
          ? 'border-slate-200 bg-slate-50 cursor-not-allowed'
          : isDragging
          ? 'border-red-400 bg-red-50/60 cursor-pointer'
          : 'border-slate-300 hover:border-red-300 hover:bg-red-50/30 cursor-pointer'
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.docx,.xlsx,.txt,.png,.jpg,.jpeg"
        disabled={disabled}
        onChange={(e) => handleFiles(e.target.files)}
        className="sr-only"
        aria-hidden="true"
        tabIndex={-1}
      />

      <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mx-auto mb-4">
        <UploadCloud className="w-6 h-6 text-red-600" />
      </div>

      <p className="text-sm font-bold text-slate-900 mb-1">Upload your assessment</p>
      <p className="text-xs text-slate-500 mb-4">Drag &amp; drop your file here, or</p>

      <span className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors shadow-sm">
        Choose File
      </span>

      <p className="text-[11px] text-slate-400 mt-4 tracking-wide uppercase">
        PDF &middot; Word &middot; Excel &middot; Images &middot; TXT &middot; Max {DEFAULT_MAX_UPLOAD_SIZE_MB} MB
      </p>
    </div>
  );
};
