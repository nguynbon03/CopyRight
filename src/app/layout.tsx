import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "DMCA Shield — Bảo Vệ Bản Quyền",
    template: "%s | DMCA Shield",
  },
  description:
    "Trang web DMCA Protection chính thức. Bảo vệ bản quyền nội dung, báo cáo vi phạm trên Facebook, Reddit, Google. DMCA Protected®.",
  keywords: [
    "DMCA",
    "copyright protection",
    "bản quyền",
    "takedown",
    "Facebook copyright",
    "bảo vệ nội dung",
  ],
  authors: [{ name: "Robert Pham" }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "DMCA Shield",
    title: "DMCA Shield — Bảo Vệ Bản Quyền",
    description:
      "Trang web DMCA Protection chính thức. Bảo vệ bản quyền nội dung và báo cáo vi phạm.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}