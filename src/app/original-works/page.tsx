import { Metadata } from "next";
import OriginalWorksManager from "@/components/OriginalWorksManager";

export const metadata: Metadata = {
  title: "Tác Phẩm Gốc",
  description:
    "Đăng ký và quản lý tác phẩm gốc. Tất cả nội dung được bảo vệ bởi DMCA và luật bản quyền quốc tế.",
};

export default function OriginalWorksPage() {
  return (
    <>
      <section className="pt-28 pb-12 text-center bg-gradient-to-b from-bg-secondary to-bg-primary">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            🎨 Tác Phẩm Gốc Đã Đăng Ký
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            Tất cả nội dung dưới đây được tạo và sở hữu bởi Robert Pham. Mọi
            sao chép, phân phối, hoặc sử dụng trái phép đều vi phạm bản quyền.
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