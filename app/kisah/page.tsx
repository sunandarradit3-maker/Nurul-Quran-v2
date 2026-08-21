import { stories } from "@/data/content";
import { LibraryIndex } from "@/components/LibraryIndex";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata = {
  title: "Kisah & Tokoh Lengkap — Nurul Quran V2",
  description: "Kisah nabi, sirah, tokoh, dan sejarah yang dibagi ke konteks, alur, pelajaran, serta rujukan."
};

export default function StoryLibraryPage() {
  return (
    <div className="prod-shell">
      <SiteHeader />
      <main className="prod-main">
        <LibraryIndex
          kicker="Kisah & Tokoh"
          title="Kisah harus punya alur, bukan caption."
          description="Materi kisah dibuka sebagai artikel penuh: konteks, fase kejadian, pelajaran utama, catatan editorial, serta sumber awal untuk pendalaman."
          basePath="/kisah"
          items={stories.map((item) => ({ id: item.id, title: item.title, meta: `${item.tradition} • ${item.kind}`, summary: item.summary.split("\n").find(Boolean) ?? item.summary, symbol: item.tradition === "Islam" ? "☾" : "◫" }))}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
