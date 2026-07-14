import Link from 'next/link';

const navLinks = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Gửi bằng chứng', href: '/submit' },
  { label: 'Chính sách DMCA', href: '/policy' },
  { label: 'Tác phẩm gốc', href: '/original-works' },
  { label: 'Hướng dẫn', href: '/guides' },
];

const dmcaResources = [
  { label: 'US Copyright Office', url: 'https://www.copyright.gov/' },
  { label: 'DMCA.com', url: 'https://www.dmca.com/' },
  { label: 'Copyright Alliance', url: 'https://copyrightalliance.org/' },
  { label: 'Facebook Copyright Form', url: 'https://www.facebook.com/help/contact/634636770043290' },
];

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🛡️</span>
              <span className="text-lg font-bold gradient-text">DMCA Shield</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Hệ thống bảo vệ bản quyền chuyên nghiệp. Hỗ trợ gửi thông báo DMCA và theo dõi vi phạm bản quyền trên toàn cầu.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">Điều hướng</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DMCA Resources */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">Tài nguyên DMCA</h3>
            <ul className="space-y-2">
              {dmcaResources.map((res) => (
                <li key={res.url}>
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-accent transition-colors duration-200 inline-flex items-center gap-1"
                  >
                    {res.label}
                    <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">Liên hệ</h3>
            <div className="space-y-3 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <span className="text-base">📧</span>
                <a href="mailto:copirightdc@gmail.com" className="hover:text-accent transition-colors">
                  copirightdc@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base">👤</span>
                <span>Robert Pham</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © 2026 DMCA Shield — Bảo vệ bản quyền toàn cầu. Mọi quyền được bảo lưu.
          </p>
          <p className="text-text-muted text-xs">
            ID Bảo vệ: <span className="text-accent font-mono">DMCA-2026-CopyRight</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
