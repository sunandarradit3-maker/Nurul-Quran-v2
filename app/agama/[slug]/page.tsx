import { notFound } from "next/navigation";
import { faithPacks } from "@/data/content";
import { FaithArticle } from "@/components/ProductionArticle";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export function generateStaticParams() {
  return faithPacks.map((item) => ({ slug: item.id }));
}

export default async function FaithDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const faith = faithPacks.find((item) => item.id === slug);
  if (!faith) notFound();

  return (
    <div className="prod-shell">
      <SiteHeader />
      <main className="prod-main"><FaithArticle data={faith} /></main>
      <SiteFooter />
    </div>
  );
}
