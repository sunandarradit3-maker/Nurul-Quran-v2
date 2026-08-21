import { notFound } from "next/navigation";
import { learningModules } from "@/data/content";
import { LearningArticle } from "@/components/ProductionArticle";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export function generateStaticParams() {
  return learningModules.map((item) => ({ slug: item.id }));
}

export default async function LearningDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const module = learningModules.find((item) => item.id === slug);
  if (!module) notFound();

  return (
    <div className="prod-shell">
      <SiteHeader />
      <main className="prod-main"><LearningArticle data={module} /></main>
      <SiteFooter />
    </div>
  );
}
