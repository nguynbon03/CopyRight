import { Metadata } from "next";
import PlatformCard from "@/components/PlatformCard";

export const metadata: Metadata = {
  title: "Hướng Dẫn DMCA",
  description:
    "Step-by-step hướng dẫn cách bảo vệ nội dung và báo cáo vi phạm trên từng nền tảng.",
};

const guides = [
  {
    icon: "📘",
    title: "Facebook / Instagram",
    meta: "Cập nhật: 07/2026 · Thời gian xử lý: 24-72 giờ",
    steps: [
      'Truy cập Facebook Copyright Report Form',
      'Chọn "I am the rights owner"',
      "Điền thông tin liên hệ: Robert Pham, copirightdc@gmail.com",
      'Thông tin chủ sở hữu: chọn quốc gia, loại tác phẩm, link tác phẩm gốc',
      "Dán URL nội dung vi phạm (tối đa 10 URL)",
      "Miêu tả vi phạm — sử dụng DMCA Notice template",
      "Ký điện tử (Robert Pham) và submit",
    ],
    formUrl: "https://www.facebook.com/help/contact/634636770043471",
    formLabel: "Mở Facebook Copyright Form →",
  },
  {
    icon: "🤖",
    title: "Reddit",
    meta: "Cập nhật: 07/2026 · Thời gian xử lý: 1-3 ngày",
    steps: [
      'Truy cập reddit.com/report → "Copyright Infringement"',
      "Cung cấp URL bài post/comment vi phạm",
      "Miêu tả nội dung bị đánh cắp",
      "Cung cấp link tác phẩm gốc",
      "Ký tuyên bố dưới penalty of perjury",
    ],
    formUrl: "https://www.reddit.com/report",
    formLabel: "Mở Reddit Report Form →",
  },
  {
    icon: "🔍",
    title: "Google Search",
    meta: "Cập nhật: 07/2026 · Thời gian xử lý: 1-2 tuần",
    steps: [
      "Truy cập Google Legal Troubleshooter",
      'Chọn "Web Search" hoặc "Blogger" removal',
      "Điền URL trang vi phạm",
      "Cung cấp URL tác phẩm gốc",
      "Miêu tả chi tiết vi phạm và ký điện tử",
    ],
    formUrl: "https://support.google.com/legal/troubleshooter/1114905",
    formLabel: "Mở Google Legal Help →",
  },
];

const tips = [
  { icon: "📸", title: "Chụp screenshot ngay", desc: "Khi phát hiện vi phạm, chụp screenshot ngay lập tức. Bao gồm URL, timestamp, và nội dung." },
  { icon: "🕐", title: "Ghi lại thời gian", desc: "Ghi lại chính xác thời điểm bạn tạo nội dung gốc và thời điểm phát hiện vi phạm." },
  { icon: "🔗", title: "Lưu URL đầy đủ", desc: "Không sử dụng link rút gọn. Copy URL đầy đủ từ thanh địa chỉ trình duyệt." },
  { icon: "☁️", title: "Backup bằng chứng", desc: "Upload screenshot lên Google Drive, Dropbox, hoặc cloud storage." },
  { icon: "📧", title: "Dùng email chuyên nghiệp", desc: "Facebook và các nền tảng ưu tiên email business/professional khi xem xét DMCA." },
  { icon: "📋", title: "Sử dụng template", desc: "Dùng DMCA Notice template từ trang Gửi bằng chứng để đảm bảo đầy đủ thông tin." },
];

export default function GuidesPage() {
  return (
    <>
      <section className="pt-28 pb-12 text-center bg-gradient-to-b from-bg-secondary to-bg-primary">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            📚 Hướng Dẫn Bảo Vệ Bản Quyền
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            Step-by-step hướng dẫn cách bảo vệ nội dung và báo cáo vi phạm
            trên từng nền tảng.
          </p>
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          {guides.map((g) => (
            <div
              key={g.title}
              className="bg-bg-card border border-border rounded-2xl overflow-hidden"
            >
              <div className="flex items-center gap-5 px-8 py-6 border-b border-border">
                <span className="text-4xl">{g.icon}</span>
                <div>
                  <h2 className="text-xl font-bold">{g.title}</h2>
                  <span className="text-sm text-text-muted">{g.meta}</span>
                </div>
              </div>
              <div className="px-8 py-6">
                {g.steps.map((s, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[40px_1fr] gap-4 py-5 border-b border-border last:border-0"
                  >
                    <span className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-full text-sm font-bold">
                      {i + 1}
                    </span>
                    <div className="text-sm text-text-secondary leading-relaxed pt-2">
                      {s}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 px-8 py-5 border-t border-border">
                <a
                  href={g.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg text-sm font-semibold hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all"
                >
                  {g.formLabel}
                </a>
                <a
                  href="/submit"
                  className="px-5 py-3 bg-bg-card border border-border rounded-lg text-sm font-medium hover:border-accent transition-colors"
                >
                  Tạo DMCA Notice trước →
                </a>
              </div>
            </div>
          ))}

          {/* Tips */}
          <div className="bg-bg-card border border-border rounded-2xl overflow-hidden">
            <div className="flex items-center gap-5 px-8 py-6 border-b border-border">
              <span className="text-4xl">💡</span>
              <h2 className="text-xl font-bold">Mẹo bảo vệ bản quyền hiệu quả</h2>
            </div>
            <div className="grid md:grid-cols-3">
              {tips.map((t, i) => (
                <div
                  key={i}
                  className="p-6 border-r border-b border-border last:border-r-0 [&:nth-child(3n)]:border-r-0"
                >
                  <h4 className="font-semibold text-sm mb-2">
                    {t.icon} {t.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}