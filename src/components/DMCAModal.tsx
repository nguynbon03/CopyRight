'use client';

interface DMCAModalProps {
  notice: string;
  onClose: () => void;
}

export default function DMCAModal({ notice, onClose }: DMCAModalProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(notice);
      alert('Notice copied to clipboard!');
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = notice;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('Notice copied to clipboard!');
    }
  };

  const handleDownload = () => {
    const blob = new Blob([notice], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dmca-takedown-notice.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-3xl max-h-[85vh] bg-bg-card border border-border rounded-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="text-lg font-semibold text-text-primary">📄 DMCA Takedown Notice</h2>
          <button onClick={onClose} className="text-text-muted hover:text-text-primary transition-colors text-xl">✕</button>
        </div>

        {/* Notice Content */}
        <div className="flex-1 overflow-auto p-6">
          <pre className="whitespace-pre-wrap text-sm text-text-secondary font-mono leading-relaxed bg-bg-primary border border-border rounded-xl p-4">
            {notice}
          </pre>
        </div>

        {/* Actions */}
        <div className="flex gap-3 px-6 py-4 border-t border-border">
          <button onClick={handleCopy} className="flex-1 px-4 py-3 bg-accent text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-sm">
            📋 Copy to Clipboard
          </button>
          <button onClick={handleDownload} className="flex-1 px-4 py-3 bg-bg-primary border border-border text-text-primary font-medium rounded-lg hover:border-border-hover transition-colors text-sm">
            💾 Download as .txt
          </button>
          <button onClick={onClose} className="px-4 py-3 bg-red-500/10 border border-red-500/30 text-red-400 font-medium rounded-lg hover:bg-red-500/20 transition-colors text-sm">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
