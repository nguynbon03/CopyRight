import { Shield, CheckCircle, Award, FileCheck, BadgeCheck, Lock } from "lucide-react";

export function DMCABadgeOfficial() {
  return (
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/10 to-purple-500/10 border border-accent/30 rounded-lg px-5 py-3.5">
      <div className="relative">
        <Shield className="w-10 h-10 text-accent" />
        <CheckCircle className="w-4 h-4 text-success absolute -bottom-0.5 -right-0.5 bg-bg-primary rounded-full" />
      </div>
      <div>
        <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-accent">DMCA Protected</div>
        <div className="text-xs font-semibold text-text-primary">Verified Content Owner</div>
        <div className="text-[10px] text-text-muted font-mono mt-0.5">ID: DMCA-2026-CopyRight</div>
      </div>
    </div>
  );
}

export function PublisherBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 bg-bg-card border border-border rounded-lg px-4 py-2.5">
      <BadgeCheck className="w-6 h-6 text-accent" />
      <div>
        <div className="text-[10px] font-bold tracking-wider uppercase text-text-muted">Verified Publisher</div>
        <div className="text-xs font-semibold">CelebPost Media</div>
      </div>
    </div>
  );
}

export function CopyrightRegisteredBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 bg-bg-card border border-border rounded-lg px-4 py-2.5">
      <FileCheck className="w-6 h-6 text-success" />
      <div>
        <div className="text-[10px] font-bold tracking-wider uppercase text-text-muted">Copyright Registered</div>
        <div className="text-xs font-semibold">U.S. Copyright Office</div>
      </div>
    </div>
  );
}

export function SecureContentBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 bg-bg-card border border-border rounded-lg px-4 py-2.5">
      <Lock className="w-6 h-6 text-warning" />
      <div>
        <div className="text-[10px] font-bold tracking-wider uppercase text-text-muted">Content Secured</div>
        <div className="text-xs font-semibold">Timestamped & Archived</div>
      </div>
    </div>
  );
}

export function AuthorityBadgesRow() {
  return (
    <div className="flex flex-wrap gap-3">
      <DMCABadgeOfficial />
      <PublisherBadge />
      <CopyrightRegisteredBadge />
      <SecureContentBadge />
    </div>
  );
}

export function OfficialSignature() {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-6">
      <div className="flex items-start gap-4">
        <Award className="w-8 h-8 text-accent flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="text-sm font-bold mb-2">Official Declaration</h3>
          <p className="text-xs text-text-secondary leading-relaxed mb-3">
            I, <strong className="text-text-primary">Robert Pham</strong>, Editor and Content Owner of CelebPost, hereby declare under penalty of perjury that all content published on this website is original work created by our editorial team. Any unauthorised reproduction, distribution, or use of this content without written permission constitutes copyright infringement under 17 U.S.C. § 512.
          </p>
          <div className="flex items-center gap-6 pt-3 border-t border-border">
            <div>
              <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Signature</div>
              <div className="text-lg font-signature text-accent italic">Robert Pham</div>
            </div>
            <div>
              <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Title</div>
              <div className="text-xs font-medium">Editor & Content Owner</div>
            </div>
            <div>
              <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Date</div>
              <div className="text-xs font-medium">July 14, 2026</div>
            </div>
            <div>
              <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Protection ID</div>
              <div className="text-xs font-mono text-accent">DMCA-2026-CopyRight</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LegalFooter() {
  return (
    <div className="border-t border-border pt-6 mt-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-accent" />
          <div>
            <p className="text-xs font-semibold">DMCA Protected Content</p>
            <p className="text-[10px] text-text-muted">All original content is registered and protected under the Digital Millennium Copyright Act (17 U.S.C. § 512) and international copyright treaties.</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
            <CheckCircle className="w-3 h-3 text-success" />
            Verified
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
            <Lock className="w-3 h-3 text-warning" />
            Encrypted
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
            <FileCheck className="w-3 h-3 text-accent" />
            Registered
          </div>
        </div>
      </div>
    </div>
  );
}