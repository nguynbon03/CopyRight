'use client';

import { useState } from 'react';
import DMCAModal from './DMCAModal';

interface InfringingURL {
  url: string;
  platform: string;
}

const PLATFORMS = ['Facebook', 'Instagram', 'Reddit', 'Google', 'YouTube', 'TikTok'];
const CONTENT_TYPES = ['Hình ảnh', 'Video', 'Văn bản', 'Âm nhạc', 'Phần mềm', 'Thiết kế', 'Khác'];
const RELATIONSHIPS = ['Chủ sở hữu tác phẩm', 'Đại diện được ủy quyền', 'Người quản lý bản quyền', 'Khác'];

export default function EvidenceForm() {
  const [name, setName] = useState('Robert Pham');
  const [email, setEmail] = useState('copirightdc@gmail.com');
  const [relationship, setRelationship] = useState('Chủ sở hữu tác phẩm');

  const [workUrl, setWorkUrl] = useState('');
  const [contentType, setContentType] = useState('Hình ảnh');
  const [publishDate, setPublishDate] = useState('');
  const [description, setDescription] = useState('');

  const [infringingUrls, setInfringingUrls] = useState<InfringingURL[]>([
    { url: '', platform: 'Facebook' },
  ]);

  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [legalDeclared, setLegalDeclared] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [generatedNotice, setGeneratedNotice] = useState('');

  const addInfringingUrl = () => {
    setInfringingUrls([...infringingUrls, { url: '', platform: 'Facebook' }]);
  };

  const removeInfringingUrl = (index: number) => {
    setInfringingUrls(infringingUrls.filter((_, i) => i !== index));
  };

  const updateInfringingUrl = (index: number, field: keyof InfringingURL, value: string) => {
    const updated = [...infringingUrls];
    updated[index][field] = value;
    setInfringingUrls(updated);
  };

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]
    );
  };

  const generateDMCANotice = () => {
    const date = new Date().toLocaleDateString('vi-VN');
    const validUrls = infringingUrls.filter((u) => u.url.trim());

    const notice = `THÔNG BÁO DMCA - YÊU CẦU GỠ BỎ
========================================
Ngày: ${date}
ID: DMCA-2026-CopyRight

NGƯỜI BÁO CÁO:
- Họ tên: ${name}
- Email: ${email}
- Quan hệ: ${relationship}

TÁC PHẨM GỐC BỊ VI PHẠM:
- URL tác phẩm: ${workUrl || 'Chưa cung cấp'}
- Loại nội dung: ${contentType}
- Ngày xuất bản: ${publishDate || 'Chưa cung cấp'}
- Mô tả: ${description || 'Chưa cung cấp'}

CÁC URL VI PHẠM:
${validUrls.map((u, i) => `${i + 1}. ${u.url} (Nền tảng: ${u.platform})`).join('\n')}

NỀN TẢNG LIÊN QUAN:
${selectedPlatforms.length > 0 ? selectedPlatforms.join(', ') : 'Chưa chọn'}

TUYÊN BỐ PHÁP LÝ:
Tôi tuyên bố, với tư cách là người có quyền sở hữu hợp pháp hoặc đại diện được ủy quyền, rằng:
1. Nội dung được xác định là vi phạm bản quyền không được phép sử dụng bởi chủ sở hữu bản quyền, đại diện của chủ sở hữu, hoặc luật pháp.
2. Thông tin trong thông báo này là chính xác, và dưới hình phạt của tội khai man, tôi là chủ sở hữu hoặc được ủy quyền hành động thay mặt chủ sở hữu của quyền độc quyền bị cáo buộc vi phạm.

Được tạo tự động bởi DMCA Shield
© 2026 CopyRight DC`;

    return notice;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!legalDeclared) {
      alert('Vui lòng xác nhận tuyên bố pháp lý trước khi gửi.');
      return;
    }

    const notice = generateDMCANotice();
    setGeneratedNotice(notice);

    // Save to localStorage
    const submission = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      name,
      email,
      relationship,
      workUrl,
      contentType,
      publishDate,
      description,
      infringingUrls: infringingUrls.filter((u) => u.url.trim()),
      platforms: selectedPlatforms,
    };

    try {
      const existing = JSON.parse(localStorage.getItem('dmca_submissions') || '[]');
      existing.push(submission);
      localStorage.setItem('dmca_submissions', JSON.stringify(existing));
    } catch {
      localStorage.setItem('dmca_submissions', JSON.stringify([submission]));
    }

    setShowModal(true);
  };

  const inputClass =
    'w-full px-3 py-2.5 rounded-lg bg-bg-primary border border-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors';
  const selectClass =
    'w-full px-3 py-2.5 rounded-lg bg-bg-primary border border-border text-text-primary text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors';
  const labelClass = 'block text-sm font-medium text-text-secondary mb-1.5';

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Reporter Info */}
        <section className="bg-bg-card border border-border rounded-xl p-6">
          <h3 className="text-text-primary font-semibold text-lg mb-4 flex items-center gap-2">
            <span className="text-xl">👤</span> Thông tin người báo cáo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Họ và tên *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                required
              />
            </div>
            <div>
              <label className={labelClass}>Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Quan hệ với tác phẩm *</label>
              <select
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                className={selectClass}
              >
                {RELATIONSHIPS.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Original Work */}
        <section className="bg-bg-card border border-border rounded-xl p-6">
          <h3 className="text-text-primary font-semibold text-lg mb-4 flex items-center gap-2">
            <span className="text-xl">🎨</span> Thông tin tác phẩm gốc
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>URL tác phẩm gốc</label>
              <input
                type="url"
                value={workUrl}
                onChange={(e) => setWorkUrl(e.target.value)}
                placeholder="https://..."
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Loại nội dung *</label>
              <select
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                className={selectClass}
              >
                {CONTENT_TYPES.map((ct) => (
                  <option key={ct} value={ct}>{ct}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Ngày xuất bản</label>
              <input
                type="date"
                value={publishDate}
                onChange={(e) => setPublishDate(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Mô tả tác phẩm</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Mô tả ngắn gọn..."
                className={inputClass}
              />
            </div>
          </div>
        </section>

        {/* Infringing URLs */}
        <section className="bg-bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-text-primary font-semibold text-lg flex items-center gap-2">
              <span className="text-xl">🔗</span> URL vi phạm
            </h3>
            <button
              type="button"
              onClick={addInfringingUrl}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Thêm URL
            </button>
          </div>
          <div className="space-y-3">
            {infringingUrls.map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-[1fr_160px] gap-3">
                  <input
                    type="url"
                    value={item.url}
                    onChange={(e) => updateInfringingUrl(index, 'url', e.target.value)}
                    placeholder="https://..."
                    className={inputClass}
                  />
                  <select
                    value={item.platform}
                    onChange={(e) => updateInfringingUrl(index, 'platform', e.target.value)}
                    className={selectClass}
                  >
                    {PLATFORMS.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                {infringingUrls.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeInfringingUrl(index)}
                    className="mt-1 p-2 rounded-lg text-danger hover:bg-danger/10 transition-colors"
                    aria-label="Xóa URL"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Platform Checkboxes */}
        <section className="bg-bg-card border border-border rounded-xl p-6">
          <h3 className="text-text-primary font-semibold text-lg mb-4 flex items-center gap-2">
            <span className="text-xl">🌐</span> Nền tảng liên quan
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {PLATFORMS.map((platform) => (
              <label
                key={platform}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                  selectedPlatforms.includes(platform)
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-border bg-bg-primary text-text-secondary hover:border-border-hover'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedPlatforms.includes(platform)}
                  onChange={() => togglePlatform(platform)}
                  className="sr-only"
                />
                <div
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    selectedPlatforms.includes(platform)
                      ? 'bg-accent border-accent'
                      : 'border-border'
                  }`}
                >
                  {selectedPlatforms.includes(platform) && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-sm font-medium">{platform}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Legal Declaration */}
        <section className="bg-bg-card border border-border rounded-xl p-6">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="flex-shrink-0 mt-0.5">
              <input
                type="checkbox"
                checked={legalDeclared}
                onChange={(e) => setLegalDeclared(e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                  legalDeclared
                    ? 'bg-accent border-accent'
                    : 'border-border group-hover:border-text-muted'
                }`}
              >
                {legalDeclared && (
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-sm text-text-secondary leading-relaxed">
              Tôi tuyên bố rằng thông tin trên là chính xác và tôi có quyền sở hữu hoặc được ủy quyền hành động
              thay mặt chủ sở hữu của quyền bản quyền bị cáo buộc vi phạm. Tôi hiểu rằng việc khai man có thể
              dẫn đến hậu quả pháp lý.
            </span>
          </label>
        </section>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-accent to-purple-600 hover:from-accent-hover hover:to-purple-500 text-white font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98]"
        >
          🚀 Tạo Thông Báo DMCA
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <DMCAModal notice={generatedNotice} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
