import { notFound } from "next/navigation";
import { prayers } from "@/data/content";
import { PrayerArticle } from "@/components/ProductionArticle";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export function generateStaticParams() {
  return prayers.map((item) => ({ slug: item.id }));
}

export default async function PrayerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const prayer = prayers.find((item) => item.id === slug);
  if (!prayer) notFound();

  return (
    <div className="prod-shell">
      <SiteHeader />
      <main className="prod-main"><PrayerArticle data={prayer} /></main>
      <SiteFooter />
    </div>
  );
}
