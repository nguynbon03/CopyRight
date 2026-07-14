'use client';

import { useState, useEffect } from 'react';
import DMCAModal from './DMCAModal';

interface InfringingURL {
  url: string;
  platform: string;
}

const RELATIONSHIPS = ['Copyright Owner', 'Authorised Representative', 'Copyright Manager', 'Other'];
const CONTENT_TYPES = ['Image', 'Video', 'Text', 'Music', 'Software', 'Design', 'Other'];
const PLATFORMS = ['Facebook', 'Instagram', 'Reddit', 'Google', 'YouTube', 'TikTok'];

const inputClass = 'w-full px-4 py-3 bg-bg-primary border border-border rounded-lg text-text-primary text-sm';
const labelClass = 'text-sm font-medium text-text-secondary mb-1';
const sectionClass = 'bg-bg-card border border-border rounded-2xl p-6';

export default function EvidenceForm() {
  const [name, setName] = useState('Robert Pham');
  const [email, setEmail] = useState('copirightdc@gmail.com');
  const [relationship, setRelationship] = useState('Copyright Owner');
  const [originalUrl, setOriginalUrl] = useState('');
  const [contentType, setContentType] = useState('Image');
  const [publishDate, setPublishDate] = useState('');
  const [description, setDescription] = useState('');
  const [infringingUrls, setInfringingUrls] = useState<InfringingURL[]>([{ url: '', platform: 'Facebook' }]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [legalDeclared, setLegalDeclared] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('dmca_evidence');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.name) setName(data.name);
        if (data.email) setEmail(data.email);
        if (data.relationship) setRelationship(data.relationship);
        if (data.originalUrl) setOriginalUrl(data.originalUrl);
        if (data.contentType) setContentType(data.contentType);
        if (data.publishDate) setPublishDate(data.publishDate);
        if (data.description) setDescription(data.description);
        if (data.infringingUrls) setInfringingUrls(data.infringingUrls);
        if (data.selectedPlatforms) setSelectedPlatforms(data.selectedPlatforms);
      } catch {}
    }
  }, []);

  const addInfringingUrl = () => {
    setInfringingUrls([...infringingUrls, { url: '', platform: 'Facebook' }]);
  };

  const removeInfringingUrl = (index: number) => {
    setInfringingUrls(infringingUrls.filter((_, i) => i !== index));
  };

  const updateInfringingUrl = (index: number, field: keyof InfringingURL, value: string) => {
    const updated = [...infringingUrls];
    updated[index] = { ...updated[index], [field]: value };
    setInfringingUrls(updated);
  };

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]
    );
  };

  const generateNotice = () => {
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const validUrls = infringingUrls.filter((u) => u.url.trim());
    const urlsList = validUrls.map((u) => `  - ${u.url} (${u.platform})`).join('\n');
    const platformsList = selectedPlatforms.length > 0 ? selectedPlatforms.join(', ') : 'N/A';

    return `DMCA TAKEDOWN NOTICE
Date: ${today}

TO: The Designated Agent of the respective service provider

FROM:
  Name: ${name}
  Email: ${email}
  Relationship: ${relationship}

RE: Notice of Copyright Infringement under the Digital Millennium Copyright Act (DMCA)

I. IDENTIFICATION OF COPYRIGHTED WORK

The original copyrighted work is described below:
  URL: ${originalUrl}
  Content Type: ${contentType}
  Date of First Publication: ${publishDate}
  Description: ${description}

II. IDENTIFICATION OF INFRINGING MATERIAL

The following URLs contain material that infringes upon the above-identified copyrighted work:
${urlsList}

Affected Platforms: ${platformsList}

III. CONTACT INFORMATION

  Name: ${name}
  Email: ${email}

IV. GOOD FAITH STATEMENT

I hereby declare that the information in this notification is accurate and, under penalty of perjury, that I am the owner or am authorised to act on behalf of the owner of the copyright that is allegedly infringed.

V. SIGNATURE

${name}
${today}`;
  };

  const handleSubmit = () => {
    if (!legalDeclared) {
      alert('Please accept the legal declaration before submitting.');
      return;
    }

    const data = { name, email, relationship, originalUrl, contentType, publishDate, description, infringingUrls, selectedPlatforms };
    localStorage.setItem('dmca_evidence', JSON.stringify(data));

    const generatedNotice = generateNotice();
    setNotice(generatedNotice);
    setShowModal(true);
  };

  return (
    <>
      <div className="space-y-6">
        {/* Reporter Section */}
        <div className={sectionClass}>
          <h2 className="text-lg font-semibold text-text-primary mb-4">👤 Reporter Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Full Name</label>
              <input type="text" className={inputClass} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
            </div>
            <div>
              <label className={labelClass}>Email Address</label>
              <input type="email" className={inputClass} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Relationship to Copyright Owner</label>
              <select className={inputClass} value={relationship} onChange={(e) => setRelationship(e.target.value)}>
                {RELATIONSHIPS.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Original Work Section */}
        <div className={sectionClass}>
          <h2 className="text-lg font-semibold text-text-primary mb-4">🎨 Original Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className={labelClass}>Original Work URL</label>
              <input type="url" className={inputClass} value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)} placeholder="https://example.com/original-work" />
            </div>
            <div>
              <label className={labelClass}>Content Type</label>
              <select className={inputClass} value={contentType} onChange={(e) => setContentType(e.target.value)}>
                {CONTENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass}>Date of First Publication</label>
              <input type="date" className={inputClass} value={publishDate} onChange={(e) => setPublishDate(e.target.value)} />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Description</label>
              <textarea className={`${inputClass} min-h-[100px]`} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe the original work..." />
            </div>
          </div>
        </div>

        {/* Infringing URLs Section */}
        <div className={sectionClass}>
          <h2 className="text-lg font-semibold text-text-primary mb-4">🔗 Infringing URLs</h2>
          <div className="space-y-3">
            {infringingUrls.map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <input type="url" className={`${inputClass} flex-1`} value={item.url} onChange={(e) => updateInfringingUrl(index, 'url', e.target.value)} placeholder="https://example.com/infringing-content" />
                <select className={`${inputClass} w-40`} value={item.platform} onChange={(e) => updateInfringingUrl(index, 'platform', e.target.value)}>
                  {PLATFORMS.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
                {infringingUrls.length > 1 && (
                  <button onClick={() => removeInfringingUrl(index)} className="px-3 py-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors text-sm">✕</button>
                )}
              </div>
            ))}
          </div>
          <button onClick={addInfringingUrl} className="mt-4 px-4 py-2 bg-accent/10 border border-accent/30 text-accent rounded-lg hover:bg-accent/20 transition-colors text-sm font-medium">
            ➕ Add URL
          </button>
        </div>

        {/* Platform Checkboxes */}
        <div className={sectionClass}>
          <h2 className="text-lg font-semibold text-text-primary mb-4">📱 Affected Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {PLATFORMS.map((platform) => (
              <label key={platform} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedPlatforms.includes(platform)}
                  onChange={() => togglePlatform(platform)}
                  className="w-4 h-4 rounded border-border accent-accent"
                />
                <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">{platform}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Legal Declaration */}
        <div className={sectionClass}>
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={legalDeclared}
              onChange={(e) => setLegalDeclared(e.target.checked)}
              className="w-4 h-4 mt-1 rounded border-border accent-accent"
            />
            <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed">
              I declare that the information above is accurate and I have the right of ownership or am authorised to act on behalf of the owner of the allegedly infringed copyright. I understand that false statements may lead to legal consequences.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full px-6 py-4 bg-accent text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-base"
        >
          🚀 Generate DMCA Notice
        </button>
      </div>

      {showModal && <DMCAModal notice={notice} onClose={() => setShowModal(false)} />}
    </>
  );
}
