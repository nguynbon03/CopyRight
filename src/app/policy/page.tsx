import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính Sách DMCA",
  description:
    "Chính sách bảo vệ bản quyền và quy trình báo cáo vi phạm theo Digital Millennium Copyright Act.",
};

export default function PolicyPage() {
  return (
    <>
      <section className="pt-28 pb-12 text-center bg-gradient-to-b from-bg-secondary to-bg-primary">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            📋 Chính Sách DMCA
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            Chính sách bảo vệ bản quyền và quy trình báo cáo vi phạm theo
            Digital Millennium Copyright Act.
          </p>
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-[1fr_260px] gap-10 items-start">
          <article className="bg-bg-card border border-border rounded-2xl p-8 md:p-10">
            <div className="flex justify-between text-sm text-text-muted mb-6 pb-4 border-b border-border">
              <span>Cập nhật lần cuối: 14/07/2026</span>
              <span>DMCA Protected® ID: DMCA-2026-CopyRight</span>
            </div>

            <Section n={1} title="Tổng quan về DMCA">
              <p>
                DMCA (Digital Millennium Copyright Act) là luật bản quyền của
                Hoa Kỳ được ban hành năm 1998, bảo vệ quyền sở hữu trí tuệ
                trên môi trường kỹ thuật số. Luật này cung cấp cơ chế cho chủ
                sở hữu bản quyền báo cáo và yêu cầu gỡ bỏ nội dung vi phạm.
              </p>
              <Highlight>
                <strong>DMCA Protected®:</strong> Tất cả nội dung trên trang web
                này được bảo vệ bởi DMCA và luật bản quyền quốc tế. Việc sao
                chép, phân phối, hoặc sử dụng nội dung mà không có sự cho phép
                bằng văn bản là vi phạm pháp luật.
              </Highlight>
            </Section>

            <Section n={2} title="Phạm vi bảo vệ bản quyền">
              <p>Các loại nội dung được bảo vệ bởi bản quyền bao gồm:</p>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li><strong>Hình ảnh:</strong> Ảnh, illustration, digital art, avatar</li>
                <li><strong>Video:</strong> Clips, reels, stories, live recordings</li>
                <li><strong>Văn bản:</strong> Blog posts, articles, captions, copywriting</li>
                <li><strong>Âm thanh:</strong> Music, podcasts, voice recordings</li>
                <li><strong>Thiết kế:</strong> UI/UX, templates, source code</li>
                <li><strong>Thương hiệu:</strong> Logos, brand assets, trademarks</li>
              </ul>
            </Section>

            <Section n={3} title="Quy trình DMCA Takedown">
              <SubSection title="3.1. Phát hiện vi phạm">
                <ul className="list-disc pl-6 space-y-1 text-text-secondary">
                  <li>Chụp screenshot ngay lập tức (có timestamp)</li>
                  <li>Lưu URL đầy đủ của nội dung vi phạm</li>
                  <li>Ghi lại thời điểm phát hiện</li>
                  <li>Xác minh rằng đây thực sự là vi phạm</li>
                </ul>
              </SubSection>
              <SubSection title="3.2. Chuẩn bị bằng chứng">
                <ul className="list-disc pl-6 space-y-1 text-text-secondary">
                  <li>Link đến tác phẩm gốc</li>
                  <li>Metadata của file gốc (EXIF data cho ảnh)</li>
                  <li>Screenshot có timestamp</li>
                  <li>Link URL dẫn đến nội dung vi phạm</li>
                </ul>
              </SubSection>
              <SubSection title="3.3. Gửi DMCA Notice">
                <p className="text-text-secondary mb-2">
                  DMCA takedown notice phải bao gồm đầy đủ (theo 17 U.S.C. § 512):
                </p>
                <ol className="list-decimal pl-6 space-y-1 text-text-secondary">
                  <li>Chữ ký điện tử của chủ sở hữu bản quyền</li>
                  <li>Mô tả tác phẩm bị vi phạm</li>
                  <li>URL của nội dung vi phạm cần gỡ bỏ</li>
                  <li>Thông tin liên hệ (tên, email, địa chỉ)</li>
                  <li>Tuyên bố thiện chí rằng việc sử dụng không được phép</li>
                  <li>Tuyên bố chính xác dưới penalty of perjury</li>
                  <li>Xác nhận quyền đại diện (nếu gửi thay)</li>
                </ol>
              </SubSection>
            </Section>

            <Section n={4} title="Báo cáo trên Facebook/Instagram">
              <PlatformBox
                title="📘 Cách gửi DMCA trên Facebook:"
                steps={[
                  'Truy cập Facebook Copyright Report Form',
                  'Chọn "I am the rights owner"',
                  'Điền đầy đủ thông tin liên hệ',
                  'Cung cấp link dẫn đến tác phẩm gốc',
                  'Dán URL nội dung vi phạm (tối đa 10 URL)',
                  'Miêu tả cách nội dung vi phạm quyền sở hữu',
                  'Ký điện tử và gửi',
                ]}
              />
              <p className="text-sm text-text-muted mt-2">
                <strong>Lưu ý:</strong> Facebook yêu cầu email chuyên nghiệp.
                Sử dụng email copirightdc@gmail.com.
              </p>
            </Section>

            <Section n={5} title="Báo cáo trên Reddit">
              <PlatformBox
                title="🤖 Cách gửi DMCA trên Reddit:"
                steps={[
                  'Truy cập Reddit Report Form',
                  'Chọn "Copyright Infringement"',
                  'Cung cấp URL bài post/comment vi phạm',
                  'Miêu tả nội dung bị đánh cắp',
                  'Đính kèm bằng chứng sở hữu',
                  'Ký tuyên bố dưới penalty of perjury',
                ]}
              />
            </Section>

            <Section n={6} title="Báo cáo trên Google">
              <PlatformBox
                title="🔍 Cách gửi DMCA trên Google:"
                steps={[
                  'Truy cập Google Legal Help',
                  'Chọn "Web Search" hoặc "Blogger" removal',
                  'Điền URL trang vi phạm',
                  'Cung cấp URL tác phẩm gốc',
                  'Miêu tả chi tiết vi phạm',
                  'Ký điện tử',
                ]}
              />
            </Section>

            <Section n={7} title="Counter-Notice (Phản đối DMCA)">
              <p className="text-text-secondary">
                Nếu bạn nhận được DMCA takedown mà bạn cho là nhầm lẫn, bạn có
                quyền nộp counter-notice. Counter-notice phải bao gồm: chữ ký
                điện tử, URL của nội dung bị gỡ, tuyên bố dưới penalty of
                perjury rằng nội dung bị gỡ do nhầm lẫn, đồng ý với jurisdiction
                của tòa án liên bang, và thông tin liên hệ.
              </p>
            </Section>

            <Section n={8} title="Fair Use (Sử dụng hợp lý)">
              <p className="text-text-secondary">
                DMCA không cấm mọi việc sử dụng nội dung có bản quyền. &quot;Fair
                use&quot; cho phép sử dụng trong: bình luận, critique, review;
                giáo dục và nghiên cứu; tin tức và báo chí; parody và satire.
                Tuy nhiên, sao chép nguyên văn mà không attribution hoặc
                permission là <strong>vi phạm bản quyền</strong>.
              </p>
            </Section>

            <Section n={9} title="Hình phạt vi phạm">
              <ul className="list-disc pl-6 space-y-1 text-text-secondary">
                <li>Nội dung bị gỡ bỏ ngay lập tức</li>
                <li>Tài khoản bị khóa/vĩnh viễn</li>
                <li>Bồi thường $750 - $150,000 per work</li>
                <li>Phí luật sư</li>
                <li>Truy tố hình sự (trường hợp nghiêm trọng)</li>
              </ul>
            </Section>

            <Section n={10} title="Liên hệ">
              <ul className="list-none space-y-1 text-text-secondary">
                <li><strong>Email:</strong> copirightdc@gmail.com</li>
                <li><strong>Chủ sở hữu:</strong> Robert Pham</li>
                <li><strong>DMCA Protected ID:</strong> DMCA-2026-CopyRight</li>
              </ul>
              <div className="mt-6 bg-[rgba(245,158,11,0.08)] border border-warning rounded-xl p-5 text-sm text-text-secondary">
                <strong>⚖️ Lưu ý pháp lý:</strong> Trang web này được tạo nhằm
                bảo vệ bản quyền nội dung. Mọi thông tin dựa trên luật DMCA
                của Hoa Kỳ. Tham khảo luật sư chuyên về bản quyền để được tư
                vấn pháp lý cụ thể.
              </div>
            </Section>
          </article>

          <aside className="lg:sticky lg:top-20 space-y-5">
            <div className="bg-bg-card border border-border rounded-xl p-5">
              <h4 className="font-semibold mb-3">Mục lục</h4>
              <nav className="flex flex-col gap-1">
                {[
                  "1. Tổng quan",
                  "2. Phạm vi bảo vệ",
                  "3. Quy trình Takedown",
                  "4. Facebook/Instagram",
                  "5. Reddit",
                  "6. Google",
                  "7. Counter-Notice",
                  "8. Fair Use",
                  "9. Hình phạt",
                  "10. Liên hệ",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 text-sm text-text-secondary rounded-md hover:bg-accent-glow hover:text-accent cursor-pointer transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </nav>
            </div>
            <div className="bg-bg-card border border-border rounded-xl p-5">
              <h4 className="font-semibold mb-3">📤 Báo cáo vi phạm</h4>
              <p className="text-sm text-text-secondary mb-3">
                Phát hiện nội dung bị đánh cắp?
              </p>
              <a
                href="/submit"
                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg font-semibold text-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all"
              >
                Gửi bằng chứng →
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

/* Helper components */
function Section({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10 first:mt-0 pt-6 first:pt-0 border-t border-border first:border-0">
      <h2 className="text-xl font-bold mb-4">
        {n}. {title}
      </h2>
      {children}
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h3 className="text-accent font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 bg-accent-glow border border-accent rounded-xl p-4 text-sm">
      {children}
    </div>
  );
}

function PlatformBox({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="bg-bg-primary border border-border rounded-xl p-5 mt-3">
      <h4 className="font-semibold mb-3">{title}</h4>
      <ol className="list-decimal pl-5 space-y-1 text-sm text-text-secondary">
        {steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
    </div>
  );
}