import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "DMCA Shield — Copyright Protection",
    template: "%s | DMCA Shield",
  },
  description:
    "Official DMCA Copyright Protection Portal. Protect your original content and report copyright infringement on Facebook, Reddit, Google.",
  keywords: [
    "DMCA",
    "copyright protection",
    "takedown notice",
    "Facebook copyright",
    "content protection",
    "intellectual property",
  ],
  authors: [{ name: "Robert Pham" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "DMCA Shield",
    title: "DMCA Shield — Copyright Protection",
    description:
      "Official DMCA Copyright Protection Portal. Protect your original content and report infringement.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}