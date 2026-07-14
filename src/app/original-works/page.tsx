import { Metadata } from "next";
import OriginalWorksManager from "@/components/OriginalWorksManager";

export const metadata: Metadata = {
  title: "Original Works",
  description:
    "Register and manage your original works. All content is protected by DMCA and international copyright law.",
};

export default function OriginalWorksPage() {
  return (
    <>
      <section className="pt-28 pb-12 text-center bg-gradient-to-b from-bg-secondary to-bg-primary">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">🎨 Registered Original Works</h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            All content below was created and is owned by Robert Pham. Any
            unauthorised copying, distribution, or use is a copyright violation.
          </p>
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <OriginalWorksManager />
        </div>
      </section>
    </>
  );
}
