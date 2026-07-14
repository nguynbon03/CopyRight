'use client';

import { useState, useEffect } from 'react';

interface OriginalWork {
  id: string;
  title: string;
  type: string;
  url: string;
  date: string;
  platform: string;
  description: string;
}

const WORK_TYPES = ['Image', 'Video', 'Text', 'Music', 'Design', 'Software', 'Other'];
const WORK_PLATFORMS = ['Personal Website', 'Facebook', 'Instagram', 'YouTube', 'TikTok', 'Other'];

const TYPE_ICONS: Record<string, string> = {
  Image: '🖼️',
  Video: '🎬',
  Text: '📝',
  Music: '🎵',
  Design: '🎨',
  Software: '💻',
  Other: '📁',
};

const inputClass = 'w-full px-4 py-3 bg-bg-primary border border-border rounded-lg text-text-primary text-sm';
const labelClass = 'text-sm font-medium text-text-secondary mb-1';
const sectionClass = 'bg-bg-card border border-border rounded-2xl p-6';

export default function OriginalWorksManager() {
  const [works, setWorks] = useState<OriginalWork[]>([]);
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Image');
  const [url, setUrl] = useState('');
  const [date, setDate] = useState('');
  const [platform, setPlatform] = useState('Personal Website');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('dmca_works');
    if (saved) {
      try {
        setWorks(JSON.parse(saved));
      } catch {}
    }
  }, []);

  const saveWorks = (updated: OriginalWork[]) => {
    setWorks(updated);
    localStorage.setItem('dmca_works', JSON.stringify(updated));
  };

  const handleSubmit = () => {
    if (!title.trim()) {
      alert('Please enter a title.');
      return;
    }

    const newWork: OriginalWork = {
      id: Date.now().toString(),
      title: title.trim(),
      type,
      url: url.trim(),
      date,
      platform,
      description: description.trim(),
    };

    saveWorks([...works, newWork]);
    setTitle('');
    setType('Image');
    setUrl('');
    setDate('');
    setPlatform('Personal Website');
    setDescription('');
  };

  const deleteWork = (id: string) => {
    saveWorks(works.filter((w) => w.id !== id));
  };

  const exportTextReport = () => {
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    let report = `ORIGINAL WORKS EVIDENCE REPORT\nGenerated: ${today}\nTotal Works: ${works.length}\n${'='.repeat(50)}\n\n`;

    works.forEach((work, i) => {
      report += `${i + 1}. ${work.title}\n`;
      report += `   Type: ${work.type}\n`;
      report += `   Platform: ${work.platform}\n`;
      report += `   Date: ${work.date || 'N/A'}\n`;
      report += `   URL: ${work.url || 'N/A'}\n`;
      report += `   Description: ${work.description || 'N/A'}\n\n`;
    });

    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'original-works-report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(works, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'original-works.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Registration Form */}
      <div className={sectionClass}>
        <h2 className="text-lg font-semibold text-text-primary mb-4">📝 Register Original Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className={labelClass}>Title</label>
            <input type="text" className={inputClass} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title of your original work" />
          </div>
          <div>
            <label className={labelClass}>Content Type</label>
            <select className={inputClass} value={type} onChange={(e) => setType(e.target.value)}>
              {WORK_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>Platform</label>
            <select className={inputClass} value={platform} onChange={(e) => setPlatform(e.target.value)}>
              {WORK_PLATFORMS.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>URL</label>
            <input type="url" className={inputClass} value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com/your-work" />
          </div>
          <div>
            <label className={labelClass}>Date</label>
            <input type="date" className={inputClass} value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>Description</label>
            <textarea className={`${inputClass} min-h-[80px]`} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe your original work..." />
          </div>
        </div>
        <button onClick={handleSubmit} className="mt-4 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-sm">
          ➕ Register Work
        </button>
      </div>

      {/* Gallery */}
      <div className={sectionClass}>
        <h2 className="text-lg font-semibold text-text-primary mb-4">🖼️ Registered Works ({works.length})</h2>
        {works.length === 0 ? (
          <p className="text-text-muted text-sm text-center py-8">No works registered yet. Add your first original work above.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {works.map((work) => (
              <div key={work.id} className="bg-bg-primary border border-border rounded-xl p-4 space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{TYPE_ICONS[work.type] || '📁'}</span>
                    <h3 className="text-sm font-semibold text-text-primary truncate">{work.title}</h3>
                  </div>
                  <button onClick={() => deleteWork(work.id)} className="text-text-muted hover:text-red-400 transition-colors text-xs">✕</button>
                </div>
                <div className="text-xs text-text-muted">{work.type} · {work.platform}</div>
                {work.date && <div className="text-xs text-text-muted">📅 {work.date}</div>}
                {work.description && <p className="text-xs text-text-secondary line-clamp-2">{work.description}</p>}
                {work.url && (
                  <a href={work.url} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline truncate block">
                    🔗 {work.url}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Export Section */}
      <div className={sectionClass}>
        <h2 className="text-lg font-semibold text-text-primary mb-4">📤 Export</h2>
        <div className="flex gap-3">
          <button onClick={exportTextReport} className="px-4 py-3 bg-bg-primary border border-border text-text-primary font-medium rounded-lg hover:border-border-hover transition-colors text-sm">
            📄 Export Evidence Report
          </button>
          <button onClick={exportJSON} className="px-4 py-3 bg-bg-primary border border-border text-text-primary font-medium rounded-lg hover:border-border-hover transition-colors text-sm">
            📦 Export JSON
          </button>
        </div>
      </div>
    </div>
  );
}
