import { Metadata } from "next";
import OriginalWorksManager from "@/components/OriginalWorksManager";

export const metadata: Metadata = { title: "Our Content", description: "Browse and verify original content published by CelebPost. All works are DMCA Protected." };

export default function OriginalWorksPage() {
  return (
    <>
      <section className="pt-20 pb-8 border-b border-border bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-2xl font-bold mb-2">Our Original Content</h1>
          <p className="text-sm text-text-secondary max-w-lg">
            All content below was originally published by CelebPost. This registry serves as proof of ownership for DMCA enforcement.
          </p>
        </div>
      </section>
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <OriginalWorksManager />
        </div>
      </section>
    </>
  );
}
