'use client';

import { useState, useEffect } from 'react';
import { FileText, Camera, Video, Music, Trash2, Download, Plus } from 'lucide-react';

const CONTENT_TYPES = ['Article', 'Photo', 'Video', 'Interview', 'Graphic', 'Audio', 'Other'] as const;
const PLATFORMS = ['CelebPost', 'Facebook', 'Instagram', 'YouTube', 'TikTok', 'Other'] as const;

interface Work {
  id: string;
  title: string;
  type: string;
  url: string;
  date: string;
  platform: string;
  description: string;
}

const TYPE_ICONS: Record<string, typeof FileText> = {
  Article: FileText,
  Photo: Camera,
  Video: Video,
  Interview: FileText,
  Graphic: Camera,
  Audio: Music,
  Other: FileText,
};

export default function OriginalWorksManager() {
  const [works, setWorks] = useState<Work[]>([]);
  const [title, setTitle] = useState('');
  const [type, setType] = useState<string>(CONTENT_TYPES[0]);
  const [url, setUrl] = useState('');
  const [date, setDate] = useState('');
  const [platform, setPlatform] = useState<string>(PLATFORMS[0]);
  const [description, setDescription] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('dmca_works');
      if (saved) {
        setWorks(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const saveWorks = (next: Work[]) => {
    setWorks(next);
    localStorage.setItem('dmca_works', JSON.stringify(next));
  };

  const handleAdd = () => {
    if (!title.trim()) return;
    const work: Work = {
      id: Date.now().toString(),
      title: title.trim(),
      type,
      url: url.trim(),
      date,
      platform,
      description: description.trim(),
    };
    saveWorks([work, ...works]);
    setTitle('');
    setUrl('');
    setDate('');
    setDescription('');
  };

  const handleDelete = (id: string) => {
    saveWorks(works.filter((w) => w.id !== id));
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(works, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `original-works-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const exportReport = () => {
    const lines = [
      'ORIGINAL WORKS REGISTRY REPORT',
      `Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
      `Total Entries: ${works.length}`,
      '',
      '---',
      '',
      ...works.map((w, i) => [
        `Entry #${i + 1}: ${w.title}`,
        `Type: ${w.type} | Platform: ${w.platform}`,
        `URL: ${w.url || 'N/A'}`,
        `Date: ${w.date || 'N/A'}`,
        `Description: ${w.description || 'N/A'}`,
        '',
        '---',
        '',
      ]).flat(),
    ];
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `original-works-report-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="space-y-6">
      {/* Registration Form */}
      <div className="bg-bg-card border border-border rounded-xl p-5 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Plus className="w-4 h-4 text-accent" />
          <h3 className="text-sm font-semibold text-text-primary">Register Original Work</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="text-xs font-medium text-text-secondary mb-1.5 block">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Work title..."
              className="w-full px-3 py-2.5 bg-bg-primary border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-text-secondary mb-1.5 block">Content Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-3 py-2.5 bg-bg-primary border border-border rounded-lg text-sm text-text-primary"
            >
              {CONTENT_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-text-secondary mb-1.5 block">Platform</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full px-3 py-2.5 bg-bg-primary border border-border rounded-lg text-sm text-text-primary"
            >
              {PLATFORMS.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-text-secondary mb-1.5 block">URL</label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://..."
              className="w-full px-3 py-2.5 bg-bg-primary border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-text-secondary mb-1.5 block">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2.5 bg-bg-primary border border-border rounded-lg text-sm text-text-primary"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-xs font-medium text-text-secondary mb-1.5 block">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the work..."
              rows={2}
              className="w-full px-3 py-2.5 bg-bg-primary border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted resize-none"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          disabled={!title.trim()}
          className="flex items-center gap-1.5 px-4 py-2.5 bg-accent text-white rounded-lg text-xs font-semibold hover:bg-accent/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Plus className="w-3.5 h-3.5" />
          Register Work
        </button>
      </div>

      {/* Export Buttons */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={exportReport}
          disabled={works.length === 0}
          className="flex items-center gap-1.5 px-3 py-2 bg-bg-card border border-border rounded-lg text-xs font-medium text-text-primary hover:bg-bg-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Download className="w-3.5 h-3.5" />
          Export Report
        </button>
        <button
          type="button"
          onClick={exportJSON}
          disabled={works.length === 0}
          className="flex items-center gap-1.5 px-3 py-2 bg-bg-card border border-border rounded-lg text-xs font-medium text-text-primary hover:bg-bg-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Download className="w-3.5 h-3.5" />
          Export JSON
        </button>
      </div>

      {/* Gallery */}
      {works.length === 0 ? (
        <div className="bg-bg-card border border-border rounded-xl p-10 text-center">
          <FileText className="w-8 h-8 text-text-muted mx-auto mb-3" />
          <p className="text-sm text-text-muted">No content registered yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {works.map((work) => {
            const Icon = TYPE_ICONS[work.type] || FileText;
            return (
              <div key={work.id} className="bg-bg-card border border-border rounded-xl p-4 space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-accent shrink-0" />
                    <h4 className="text-sm font-semibold text-text-primary truncate">{work.title}</h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDelete(work.id)}
                    className="p-1 rounded hover:bg-bg-secondary text-text-secondary hover:text-red-400 transition-colors shrink-0"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="flex items-center gap-3 text-xs text-text-secondary">
                  <span>{work.type}</span>
                  {work.platform && <span>{work.platform}</span>}
                  {work.date && <span>{work.date}</span>}
                </div>
                {work.description && (
                  <p className="text-xs text-text-muted leading-relaxed line-clamp-2">{work.description}</p>
                )}
                {work.url && (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:underline truncate block"
                  >
                    {work.url}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
