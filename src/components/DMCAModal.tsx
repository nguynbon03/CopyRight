'use client';

import { useState } from 'react';
import { Copy, Download, X } from 'lucide-react';

interface DMCAModalProps {
  notice: string;
  onClose: () => void;
}

export default function DMCAModal({ notice, onClose }: DMCAModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(notice);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement('textarea');
      textarea.value = notice;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([notice], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dmca-takedown-notice-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-bg-card border border-border rounded-xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 className="text-sm font-semibold text-text-primary">DMCA Takedown Notice</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-bg-secondary text-text-secondary hover:text-text-primary transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-5">
          <pre className="whitespace-pre-wrap text-xs leading-relaxed text-text-secondary font-mono bg-bg-primary border border-border rounded-lg p-4">
            {notice}
          </pre>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-2 px-5 py-4 border-t border-border">
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-2 bg-bg-primary border border-border rounded-lg text-xs font-medium text-text-primary hover:bg-bg-secondary transition-colors"
          >
            <Copy className="w-3.5 h-3.5" />
            {copied ? 'Copied' : 'Copy'}
          </button>
          <button
            type="button"
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3 py-2 bg-bg-primary border border-border rounded-lg text-xs font-medium text-text-primary hover:bg-bg-secondary transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Download
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-2 bg-accent text-white rounded-lg text-xs font-semibold hover:bg-accent/90 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
