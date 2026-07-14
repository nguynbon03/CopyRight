'use client';

import { useState, useEffect } from 'react';
import { User, Mail, Globe, Camera, Plus, Trash2, Shield, Send } from 'lucide-react';
import DMCAModal from './DMCAModal';

const RELATIONSHIPS = ['Copyright Owner', 'Authorised Representative', 'Copyright Manager', 'Other'] as const;
const CONTENT_TYPES = ['Article', 'Photo', 'Video', 'Interview', 'Graphic', 'Audio', 'Other'] as const;
const PLATFORMS = ['Facebook', 'Instagram', 'Reddit', 'Google', 'YouTube', 'TikTok', 'Website'] as const;
const CHECK_PLATFORMS = ['Facebook', 'Instagram', 'Reddit', 'Google', 'YouTube', 'TikTok'] as const;

interface InfringingURL {
  url: string;
  platform: string;
}

export default function EvidenceForm() {
  const [reporterName, setReporterName] = useState('Robert Pham');
  const [reporterEmail, setReporterEmail] = useState('copirightdc@gmail.com');
  const [relationship, setRelationship] = useState<string>(RELATIONSHIPS[0]);

  const [originalUrl, setOriginalUrl] = useState('');
  const [contentType, setContentType] = useState<string>(CONTENT_TYPES[0]);
  const [publishDate, setPublishDate] = useState('');
  const [description, setDescription] = useState('');

  const [infringingUrls, setInfringingUrls] = useState<InfringingURL[]>([{ url: '', platform: PLATFORMS[0] }]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<Record<string, boolean>>({});
  const [legalDeclaration, setLegalDeclaration] = useState(false);
  const [modalNotice, setModalNotice] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('dmca_evidence');
      if (saved) {
        const data = JSON.parse(saved);
        if (data.reporterName) setReporterName(data.reporterName);
        if (data.reporterEmail) setReporterEmail(data.reporterEmail);
        if (data.relationship) setRelationship(data.relationship);
        if (data.originalUrl) setOriginalUrl(data.originalUrl);
        if (data.contentType) setContentType(data.contentType);
        if (data.publishDate) setPublishDate(data.publishDate);
        if (data.description) setDescription(data.description);
        if (data.infringingUrls) setInfringingUrls(data.infringingUrls);
        if (data.selectedPlatforms) setSelectedPlatforms(data.selectedPlatforms);
        if (data.legalDeclaration) setLegalDeclaration(data.legalDeclaration);
      }
    } catch {
      // ignore
    }
  }, []);

  const addInfringingUrl = () => {
    setInfringingUrls((prev) => [...prev, { url: '', platform: PLATFORMS[0] }]);
  };

  const removeInfringingUrl = (index: number) => {
    setInfringingUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const updateInfringingUrl = (index: number, field: keyof InfringingURL, value: string) => {
    setInfringingUrls((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((prev) => ({ ...prev, [platform]: !prev[platform] }));
  };

  const generateNotice = () => {
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const activePlatforms = CHECK_PLATFORMS.filter((p) => selectedPlatforms[p]);
    const infringingList = infringingUrls
      .filter((i) => i.url.trim())
      .map((i) => `  - ${i.url} (Platform: ${i.platform})`)
      .join('\n');

    return `DMCA TAKEDOWN NOTICE
Date: ${date}

To Whom It May Concern:

I am writing to notify you that certain content hosted on your platform infringes upon my copyrighted work, in accordance with the Digital Millennium Copyright Act (DMCA), 17 U.S.C. 512(c).

IDENTIFICATION OF COPYRIGHTED WORK:
  Original URL: ${originalUrl}
  Content Type: ${contentType}
  Date of Publication: ${publishDate || 'Not specified'}
  Description: ${description || 'N/A'}

IDENTIFICATION OF INFRINGING MATERIAL:
${infringingList || '  (None provided)'}

PLATFORMS AFFECTED:
${activePlatforms.length > 0 ? activePlatforms.map((p) => `  - ${p}`).join('\n') : '  (None selected)'}

REPORTER INFORMATION:
  Name: ${reporterName}
  Email: ${reporterEmail}
  Relationship: ${relationship}

LEGAL DECLARATION:
I hereby declare, under penalty of perjury, that:
  1. I am the copyright owner or am authorised to act on behalf of the owner of the exclusive right that is allegedly infringed.
  2. The information in this notice is accurate.
  3. I have a good faith belief that the use of the material in the manner complained of is not authorised by the copyright owner, its agent, or the law.

I request that you expeditiously remove or disable access to the infringing material identified above.

Please respond to this notice within the timeframe prescribed by the DMCA (17 U.S.C. 512(c)(3)).

Sincerely,
${reporterName}
${reporterEmail}
CelebPost DMCA Enforcement`;
  };

  const handleSubmit = () => {
    if (!legalDeclaration) return;

    const data = {
      reporterName,
      reporterEmail,
      relationship,
      originalUrl,
      contentType,
      publishDate,
      description,
      infringingUrls,
      selectedPlatforms,
      legalDeclaration,
    };

    localStorage.setItem('dmca_evidence', JSON.stringify(data));
    setModalNotice(generateNotice());
  };

  return (
    <>
      <div className="space-y-6">
        {/* Reporter Information */}
        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <User className="w-4 h-4 text-accent" />
            <h3 className="text-sm font-semibold text-text-primary">Reporter Information</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-text-secondary mb-1.5 block">Full Name</label>
              <input
                type="text"
                value={reporterName}
                onChange={(e) => setReporterName(e.target.value)}
                className="w-full px-3 py-2.5 bg-bg-primary border border-border rounded-lg text-sm text-text-primary"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-text-secondary mb-1.5 block">Email Address</label>
              <input
                type="email"
                value={reporterEmail}
                onChange={(e) => setReporterEmail(e.target.value)}
                className="w-full px-3 py-2.5 bg-bg-primary border border-border rounded-lg text-sm text-text-primary"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-text-secondary mb-1.5 block">Relationship to Content</label>
            <select
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              className="w-full px-3 py-2.5 bg-bg-primary border border-border rounded-lg text-sm text-text-primary"
            >
              {RELATIONSHIPS.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Original Work */}
        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Camera className="w-4 h-4 text-accent" />
            <h3 className="text-sm font-semibold text-text-primary">Original Work</h3>
          </div>

          <div>
            <label className="text-xs font-medium text-text-secondary mb-1.5 block">Original Work URL</label>
            <input
              type="url"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
              placeholder="https://celebpost.com/article/..."
              className="w-full px-3 py-2.5 bg-bg-primary border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-text-secondary mb-1.5 block">Content Type</label>
              <select
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                className="w-full px-3 py-2.5 bg-bg-primary border border-border rounded-lg text-sm text-text-primary"
              >
                {CONTENT_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-text-secondary mb-1.5 block">Publish Date</label>
              <input
                type="date"
                value={publishDate}
                onChange={(e) => setPublishDate(e.target.value)}
                className="w-full px-3 py-2.5 bg-bg-primary border border-border rounded-lg text-sm text-text-primary"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-text-secondary mb-1.5 block">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the original work..."
              rows={3}
              className="w-full px-3 py-2.5 bg-bg-primary border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted resize-none"
            />
          </div>
        </div>

        {/* Infringing URLs */}
        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="w-4 h-4 text-accent" />
            <h3 className="text-sm font-semibold text-text-primary">Infringing URLs</h3>
          </div>

          <div className="space-y-3">
            {infringingUrls.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="url"
                  value={item.url}
                  onChange={(e) => updateInfringingUrl(index, 'url', e.target.value)}
                  placeholder="https://..."
                  className="flex-1 px-3 py-2.5 bg-bg-primary border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted"
                />
                <select
                  value={item.platform}
                  onChange={(e) => updateInfringingUrl(index, 'platform', e.target.value)}
                  className="w-36 px-3 py-2.5 bg-bg-primary border border-border rounded-lg text-sm text-text-primary"
                >
                  {PLATFORMS.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => removeInfringingUrl(index)}
                  className="p-2 rounded-lg hover:bg-bg-secondary text-text-secondary hover:text-red-400 transition-colors"
                  disabled={infringingUrls.length <= 1}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addInfringingUrl}
            className="flex items-center gap-1.5 text-xs text-accent hover:text-accent/80 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            Add URL
          </button>
        </div>

        {/* Platform Checkboxes */}
        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="w-4 h-4 text-accent" />
            <h3 className="text-sm font-semibold text-text-primary">Affected Platforms</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {CHECK_PLATFORMS.map((platform) => (
              <label key={platform} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={!!selectedPlatforms[platform]}
                  onChange={() => togglePlatform(platform)}
                  className="w-4 h-4 rounded border-border bg-bg-primary accent-accent"
                />
                <span className="text-sm text-text-primary">{platform}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Legal Declaration */}
        <div className="bg-bg-card border border-border rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-accent" />
            <h3 className="text-sm font-semibold text-text-primary">Legal Declaration</h3>
          </div>

          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={legalDeclaration}
              onChange={(e) => setLegalDeclaration(e.target.checked)}
              className="w-4 h-4 mt-0.5 rounded border-border bg-bg-primary accent-accent"
            />
            <span className="text-xs text-text-secondary leading-relaxed">
              I declare, under penalty of perjury, that the information in this notice is accurate and that I am the copyright owner or authorised to act on behalf of the owner of the exclusive right that is allegedly infringed.
            </span>
          </label>
        </div>

        {/* Submit */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!legalDeclaration}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-accent text-white rounded-lg text-sm font-semibold hover:bg-accent/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
          Generate DMCA Notice
        </button>
      </div>

      {modalNotice && (
        <DMCAModal notice={modalNotice} onClose={() => setModalNotice(null)} />
      )}
    </>
  );
}
