import { Metadata } from "next";
import DMCABadge from "@/components/DMCABadge";
import StepCard from "@/components/StepCard";
import PlatformCard from "@/components/PlatformCard";
import Link from "next/link";
import { CopyButton } from "@/components/CopyButton";

export const metadata: Metadata = {
  title: "DMCA Shield — Bảo Vệ Bản Quyền Của Bạn",
  description:
    "Trang web DMCA Protection chính thức. Đăng ký DMCA Protected® và báo cáo vi phạm bản quyền trên Facebook, Reddit, Google.",
};

const steps = [
  {
    stepNum: 1,
    icon: "📸",
    title: "Phát hiện vi phạm",
    description: "Tìm thấy nội dung (ảnh, video, bài viết) của bạn bị sao chép hoặc sử dụng trái phép trên Facebook, Reddit, Google...",
  },
  {
    stepNum: 2,
    icon: "📝",
    title: "Thu thập bằng chứng",
    description: "Chụp screenshot, lưu URL vi phạm, chuẩn bị link đến tác phẩm gốc. Sử dụng trang web này làm bằng chứng sở hữu.",
  },
  {
    stepNum: 3,
    icon: "📨",
    title: "Gửi DMCA Notice",
    description: "Điền form DMCA takedown trên Facebook/Google/Reddit. Cung cấp đầy đủ thông tin theo yêu cầu pháp lý.",
  },
  {
    stepNum: 4,
    icon: "✅",
    title: "Nội dung bị gỡ",
    description: "Nền tảng sẽ xem xét và gỡ nội dung vi phạm. Thời gian xử lý: 24-72 giờ cho Facebook, 1-2 tuần cho Google.",
  },
];

const contentTypes = [
  { icon: "🖼️", title: "Hình ảnh & Ảnh", desc: "Photography, illustrations, digital art, avatars, profile pictures" },
  { icon: "🎬", title: "Video & Reels", desc: "Video content, reels, stories, short-form video, live recordings" },
  { icon: "✍️", title: "Bài viết & Nội dung", desc: "Blog posts, articles, captions, copywriting, social media content" },
  { icon: "🎵", title: "Âm nhạc & Audio", desc: "Music, podcasts, voice recordings, sound effects, compositions" },
  { icon: "💻", title: "Thiết kế & Code", desc: "UI/UX design, templates, source code, software, digital products" },
  { icon: "📦", title: "Thương hiệu", desc: "Logos, brand assets, trademarks, product images, packaging design" },
];

const platforms = [
  {
    icon: "📘",
    title: "Facebook / Instagram",
    steps: [
      'Truy cập Copyright Report Form',
      'Chọn "I am the rights owner"',
      "Điền thông tin liên hệ (name, email)",
      "Cung cấp link tác phẩm gốc (trang web này)",
      "Dán URL nội dung vi phạm",
      "Ký điện tử và gửi",
    ],
    formUrl: "https://www.facebook.com/help/contact/634636770043471",
    formLabel: "Mở Facebook Form →",
  },
  {
    icon: "🤖",
    title: "Reddit",
    steps: [
      "Truy cập Reddit DMCA Form",
      "Cung cấp URL bài post vi phạm",
      "Miêu tả nội dung bị đánh cắp",
      "Đính kèm bằng chứng sở hữu",
      "Ký tuyên bố dưới penalty of perjury",
    ],
    formUrl: "https://www.reddit.com/report",
    formLabel: "Mở Reddit Form →",
  },
  {
    icon: "🔍",
    title: "Google Search",
    steps: [
      "Truy cập Google DMCA Dashboard",
      'Chọn "Web Search" removal',
      "Điền URL trang vi phạm",
      "Cung cấp URL tác phẩm gốc",
      "Miêu tả chi tiết vi phạm",
    ],
    formUrl: "https://support.google.com/legal/troubleshooter/1114905",
    formLabel: "Mở Google Form →",
  },
];

const dmcaTemplate = `Subject: DMCA Takedown Notice — Copyright Infringement

To Whom It May Concern,

I am writing to report copyright infringement under the Digital Millennium Copyright Act (DMCA), 17 U.S.C. § 512.

COPYRIGHTED WORK:
[Description of your original work — photo, video, article, etc.]
Original URL: [Link to your website/post where the work was first published]

INFRINGING MATERIAL:
The following URL(s) contain material that infringes my copyright:
1. [URL of infringing content]
2. [URL of infringing content]

STATEMENT:
I have a good faith belief that the use of the copyrighted material described above is not authorized by the copyright owner, its agent, or the law. I declare under penalty of perjury that the information in this notice is accurate and that I am the copyright owner or authorized to act on behalf of the owner.

CONTACT INFORMATION:
Name: [Your Full Name]
Email: [Your Email]
Website: [Your DMCA Protected Website URL]

ELECTRONIC SIGNATURE:
[Your Full Name]
[Date]

---
This notice is submitted pursuant to 17 U.S.C. § 512(c) of the DMCA.`;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <DMCABadge />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Bảo Vệ <span className="gradient-text">Bản Quyền</span> Của Bạn
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
            Trang web chính thức dùng để bảo vệ bản quyền nội dung. Đăng ký
            DMCA Protected® và báo cáo vi phạm bản quyền trên Facebook, Reddit,
            Google và các nền tảng khác.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <Link
              href="/submit"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] text-white font-semibold hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all"
            >
              📤 Gửi bằng chứng vi phạm
            </Link>
            <Link
              href="/policy"
              className="px-8 py-4 rounded-xl bg-bg-card border border-border text-text-primary font-semibold hover:border-border-hover transition-all"
            >
              📋 Xem chính sách DMCA
            </Link>
          </div>
          <div className="flex gap-6 justify-center flex-wrap text-sm text-text-muted">
            <span>✅ DMCA Protected®</span>
            <span>🔒 Verified Content Owner</span>
            <span>⚖️ Legal Documentation</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { num: "100%", label: "Nội dung gốc" },
            { num: "24/7", label: "Giám sát bản quyền" },
            { num: "DMCA", label: "Protected® Verified" },
            { num: "Rapid", label: "Takedown Response" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-bg-card border border-border rounded-xl p-6 text-center hover:border-border-hover hover:-translate-y-0.5 transition-all"
            >
              <div className="text-2xl font-extrabold gradient-text mb-2">
                {s.num}
              </div>
              <div className="text-sm text-text-secondary">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">
            DMCA Hoạt Động Như Thế Nào?
          </h2>
          <p className="text-text-secondary text-center max-w-xl mx-auto mb-12">
            Digital Millennium Copyright Act (DMCA) bảo vệ bản quyền nội dung
            trực tuyến. Quy trình takedown bao gồm 4 bước chính.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <StepCard key={s.stepNum} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-bg-card border border-border rounded-2xl p-10 md:p-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                📋 Gửi Bằng Chứng Vi Phạm Bản Quyền
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Đăng URL dẫn đến nội dung vi phạm. Hệ thống sẽ lưu trữ làm
                bằng chứng cho quá trình DMCA takedown.
              </p>
              <div className="flex flex-col gap-3 mb-8 text-sm text-text-secondary">
                {[
                  "🔗 Submit nhiều URL vi phạm cùng lúc",
                  "📊 Lưu trữ bằng chứng có timestamp",
                  "📑 Tạo DMCA notice tự động",
                  "📤 Xuất báo cáo cho Facebook/Reddit/Google",
                ].map((f) => (
                  <div key={f}>{f}</div>
                ))}
              </div>
              <Link
                href="/submit"
                className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] text-white font-semibold hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all"
              >
                Gửi bằng chứng ngay →
              </Link>
            </div>
            <div className="bg-bg-secondary border border-border rounded-xl p-6">
              <div className="text-sm font-semibold text-accent mb-4 pb-3 border-b border-border">
                Evidence Submission
              </div>
              {[
                { label: "Original Work URL", val: "https://..." },
                { label: "Infringing URL", val: "https://facebook.com/..." },
                { label: "Content Type", val: "Photo / Video / Post" },
              ].map((f) => (
                <div key={f.label} className="mb-3">
                  <div className="text-[11px] text-text-muted uppercase tracking-wide mb-1">
                    {f.label}
                  </div>
                  <div className="bg-bg-primary border border-border rounded-md px-3 py-2 text-sm text-text-muted">
                    {f.val}
                  </div>
                </div>
              ))}
              <div className="mt-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white text-center py-2 rounded-md text-sm font-semibold">
                Submit Evidence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nội Dung Được Bảo Vệ
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {contentTypes.map((c) => (
              <div
                key={c.title}
                className="bg-bg-card border border-border rounded-xl p-7 hover:border-border-hover hover:-translate-y-0.5 transition-all"
              >
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-text-secondary">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Guides */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Hướng Dẫn Báo Cáo Theo Nền Tảng
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <PlatformCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* DMCA Template */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">
            📄 Mẫu DMCA Takedown Notice
          </h2>
          <p className="text-text-secondary text-center mb-8">
            Sao chép và điều chỉnh mẫu dưới đây để gửi DMCA takedown notice.
          </p>
          <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
            <div className="flex justify-between items-center px-6 py-4 bg-bg-secondary border-b border-border">
              <span className="font-semibold text-sm">
                DMCA Takedown Notice Template
              </span>
              <CopyButton text={dmcaTemplate} />
            </div>
            <pre className="p-6 text-sm text-text-secondary leading-relaxed whitespace-pre-wrap font-mono max-h-96 overflow-y-auto">
              {dmcaTemplate}
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}

