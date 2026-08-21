import { prayers } from "@/data/content";
import { LibraryIndex } from "@/components/LibraryIndex";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata = {
  title: "Kumpulan Doa Lengkap — Nurul Quran V2",
  description: "Kumpulan doa dengan Arab, latin, arti, kapan dibaca, cara mengamalkan, catatan, dan rujukan."
};

export default function PrayerLibraryPage() {
  return (
    <div className="prod-shell">
      <SiteHeader />
      <main className="prod-main">
        <LibraryIndex
          kicker="Pustaka Doa"
          title="Doa bukan cuma teks untuk disalin."
          description="Setiap doa dibuka sebagai halaman materi penuh: teks Arab, latin, arti, konteks penggunaan, cara mengamalkan, catatan penting, serta rujukan."
          basePath="/doa"
          items={prayers.map((item) => ({ id: item.id, title: item.title, meta: item.category, summary: item.meaning, symbol: "د" }))}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
