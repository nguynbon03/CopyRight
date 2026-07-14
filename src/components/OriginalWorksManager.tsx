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
  registeredAt: string;
}

const WORK_TYPES = ['Hình ảnh', 'Video', 'Văn bản', 'Âm nhạc', 'Phần mềm', 'Thiết kế', 'Bài viết', 'Khác'];

export default function OriginalWorksManager() {
  const [works, setWorks] = useState<OriginalWork[]>([]);
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Hình ảnh');
  const [url, setUrl] = useState('');
  const [date, setDate] = useState('');
  const [platform, setPlatform] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('dmca_original_works');
      if (stored) setWorks(JSON.parse(stored));
    } catch {}
  }, []);

  const saveWorks = (updated: OriginalWork[]) => {
    setWorks(updated);
    localStorage.setItem('dmca_original_works', JSON.stringify(updated));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newWork: OriginalWork = {
      id: Date.now().toString(),
      title: title.trim(),
      type,
      url: url.trim(),
      date,
      platform: platform.trim(),
      description: description.trim(),
      registeredAt: new Date().toISOString(),
    };

    saveWorks([newWork, ...works]);

    setTitle('');
    setType('Hình ảnh');
    setUrl('');
    setDate('');
    setPlatform('');
    setDescription('');
  };

  const deleteWork = (id: string) => {
    if (!confirm('Bạn có chắc muốn xóa tác phẩm này?')) return;
    saveWorks(works.filter((w) => w.id !== id));
  };

  const exportText = () => {
    const text = works
      .map(
        (w, i) =>
          `${i + 1}. ${w.title}\n   Loại: ${w.type}\n   URL: ${w.url || 'N/A'}\n   Ngày: ${w.date || 'N/A'}\n   Nền tảng: ${w.platform || 'N/A'}\n   Mô tả: ${w.description || 'N/A'}\n   Đăng ký: ${new Date(w.registeredAt).toLocaleDateString('vi-VN')}`
      )
      .join('\n\n');

    const content = `BÁO CÁO TÁC PHẨM GỐC\n========================\nNgày tạo: ${new Date().toLocaleDateString('vi-VN')}\nTổng: ${works.length} tác phẩm\n========================\n\n${text}`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = `original-works-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(works, null, 2)], { type: 'application/json' });
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = `original-works-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);
  };

  const inputClass =
    'w-full px-3 py-2.5 rounded-lg bg-bg-primary border border-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors';
  const selectClass =
    'w-full px-3 py-2.5 rounded-lg bg-bg-primary border border-border text-text-primary text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors';
  const labelClass = 'block text-sm font-medium text-text-secondary mb-1.5';

  return (
    <div className="space-y-8">
      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="bg-bg-card border border-border rounded-xl p-6">
        <h3 className="text-text-primary font-semibold text-lg mb-4 flex items-center gap-2">
          <span className="text-xl">📝</span> Đăng ký tác phẩm gốc
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className={labelClass}>Tên tác phẩm *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Nhập tên tác phẩm..."
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className={labelClass}>Loại</label>
            <select value={type} onChange={(e) => setType(e.target.value)} className={selectClass}>
              {WORK_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>URL tác phẩm</label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://..."
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Ngày tạo</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Nền tảng đăng</label>
            <input
              type="text"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              placeholder="VD: DeviantArt, Pixiv..."
              className={inputClass}
            />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>Mô tả</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Mô tả ngắn về tác phẩm..."
              className={inputClass}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 px-6 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors duration-200"
        >
          ➕ Đăng ký tác phẩm
        </button>
      </form>

      {/* Gallery */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-text-primary font-semibold text-lg">
            📂 Tác phẩm đã đăng ký ({works.length})
          </h3>
          {works.length > 0 && (
            <div className="flex gap-2">
              <button
                onClick={exportText}
                className="px-3 py-1.5 rounded-lg bg-bg-card border border-border text-text-secondary hover:text-text-primary hover:border-border-hover text-xs font-medium transition-colors"
              >
                📄 Text
              </button>
              <button
                onClick={exportJSON}
                className="px-3 py-1.5 rounded-lg bg-bg-card border border-border text-text-secondary hover:text-text-primary hover:border-border-hover text-xs font-medium transition-colors"
              >
                📦 JSON
              </button>
            </div>
          )}
        </div>

        {works.length === 0 ? (
          <div className="bg-bg-card border border-border rounded-xl p-8 text-center">
            <p className="text-text-muted text-sm">Chưa có tác phẩm nào được đăng ký.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {works.map((work) => (
              <div
                key={work.id}
                className="group bg-bg-card border border-border rounded-xl p-4 hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-text-primary font-medium text-sm leading-tight pr-2 group-hover:text-accent-hover transition-colors">
                    {work.title}
                  </h4>
                  <button
                    onClick={() => deleteWork(work.id)}
                    className="flex-shrink-0 p-1 rounded text-text-muted hover:text-danger hover:bg-danger/10 transition-colors"
                    aria-label="Xóa"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-1 text-xs text-text-secondary">
                  <div className="flex gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-accent/10 text-accent">{work.type}</span>
                    {work.platform && (
                      <span className="px-1.5 py-0.5 rounded bg-bg-primary">{work.platform}</span>
                    )}
                  </div>
                  {work.url && (
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-accent hover:underline truncate"
                    >
                      {work.url}
                    </a>
                  )}
                  {work.description && (
                    <p className="text-text-muted truncate">{work.description}</p>
                  )}
                  <p className="text-text-muted">
                    Đăng ký: {new Date(work.registeredAt).toLocaleDateString('vi-VN')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
