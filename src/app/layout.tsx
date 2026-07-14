import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "CelebPost — Celebrity News & Entertainment",
    template: "%s | CelebPost",
  },
  description:
    "Your source for the latest celebrity news, entertainment updates, and exclusive stories. DMCA Protected content.",
  keywords: [
    "celebrity news",
    "entertainment",
    "celebrity gossip",
    "Hollywood",
    "pop culture",
    "exclusive interviews",
    "red carpet",
  ],
  authors: [{ name: "Robert Pham" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CelebPost",
    title: "CelebPost — Celebrity News & Entertainment",
    description:
      "Your source for the latest celebrity news, entertainment updates, and exclusive stories.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-bg-primary text-text-primary">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}