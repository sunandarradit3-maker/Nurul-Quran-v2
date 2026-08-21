import { faithPacks } from "@/data/content";
import { LibraryIndex } from "@/components/LibraryIndex";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata = {
  title: "Pusat Pengetahuan Agama — Nurul Quran V2",
  description: "Pengenalan tradisi agama secara terpisah, netral, dan berbasis konteks."
};

export default function FaithLibraryPage() {
  return (
    <div className="prod-shell">
      <SiteHeader />
      <main className="prod-main">
        <LibraryIndex
          kicker="Pusat Pengetahuan"
          title="Setiap tradisi punya ruang sendiri."
          description="Kitab, tokoh, tempat penting, tema, hari besar, dan praktik ditampilkan per tradisi. Tidak ada pencampuran ritual atau ranking agama."
          basePath="/agama"
          items={faithPacks.map((item) => ({ id: item.id, title: item.name, meta: "Paket pengetahuan", summary: item.overview, symbol: item.symbol }))}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
