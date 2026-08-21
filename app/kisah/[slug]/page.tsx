import { notFound } from "next/navigation";
import { stories } from "@/data/content";
import { StoryArticle } from "@/components/ProductionArticle";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export function generateStaticParams() {
  return stories.map((item) => ({ slug: item.id }));
}

export default async function StoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = stories.find((item) => item.id === slug);
  if (!story) notFound();

  return (
    <div className="prod-shell">
      <SiteHeader />
      <main className="prod-main"><StoryArticle data={story} /></main>
      <SiteFooter />
    </div>
  );
}
