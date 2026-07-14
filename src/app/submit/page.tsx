import { Metadata } from "next";
import EvidenceForm from "@/components/EvidenceForm";

export const metadata: Metadata = {
  title: "Gửi Bằng Chứng Vi Phạm",
  description:
    "Đăng ký URL dẫn đến nội dung vi phạm. Bằng chứng sẽ được lưu trữ với timestamp để sử dụng cho DMCA takedown.",
};

export default function SubmitPage() {
  return (
    <>
      <section className="pt-28 pb-12 text-center bg-gradient-to-b from-bg-secondary to-bg-primary">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            📤 Gửi Bằng Chứng Vi Phạm Bản Quyền
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            Đăng ký URL dẫn đến nội dung vi phạm. Bằng chứng sẽ được lưu trữ
            với timestamp để sử dụng cho DMCA takedown.
          </p>
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">
            <EvidenceForm />
            <aside className="flex flex-col gap-5 lg:sticky lg:top-20">
              <div className="bg-bg-card border border-border rounded-xl p-5">
                <h4 className="font-semibold mb-3">💡 Mẹo khi gửi bằng chứng</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {[
                    "Chụp screenshot ngay khi phát hiện vi phạm",
                    "Lưu URL đầy đủ (không rút gọn)",
                    "Ghi rõ ngày bạn tạo nội dung gốc",
                    "Upload screenshot lên cloud storage",
                    "Càng nhiều bằng chứng càng tốt",
                  ].map((t) => (
                    <li key={t} className="pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-success before:font-bold">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-bg-card border border-border rounded-xl p-5">
                <h4 className="font-semibold mb-3">📋 Facebook Copyright Form</h4>
                <p className="text-sm text-text-secondary mb-3">
                  Sau khi tạo DMCA Notice, hãy copy và paste vào Facebook&apos;s
                  official form:
                </p>
                <a
                  href="https://www.facebook.com/help/contact/634636770043471"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 bg-bg-card border border-border rounded-lg text-accent text-sm font-medium hover:bg-accent-glow hover:border-accent transition-all"
                >
                  Mở Facebook Copyright Form →
                </a>
              </div>
              <div className="bg-bg-card border border-border rounded-xl p-5">
                <h4 className="font-semibold mb-3">⏱️ Thời gian xử lý</h4>
                <div className="space-y-2">
                  {[
                    { p: "Facebook", t: "24-72 giờ" },
                    { p: "Instagram", t: "24-72 giờ" },
                    { p: "Google", t: "1-2 tuần" },
                    { p: "Reddit", t: "1-3 ngày" },
                    { p: "YouTube", t: "1-3 ngày" },
                  ].map((item) => (
                    <div
                      key={item.p}
                      className="flex justify-between text-sm py-1 border-b border-border last:border-0"
                    >
                      <span className="font-medium">{item.p}</span>
                      <span className="text-accent font-semibold">{item.t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}