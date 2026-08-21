import { learningModules } from "@/data/content";
import { LibraryIndex } from "@/components/LibraryIndex";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata = {
  title: "Belajar Ibadah Lengkap — Nurul Quran V2",
  description: "Panduan wudhu, mandi wajib, tayamum, shalat, puasa, zakat, jenazah, dan tajwid dengan langkah serta catatan fikih."
};

export default function LearnLibraryPage() {
  return (
    <div className="prod-shell">
      <SiteHeader />
      <main className="prod-main">
        <LibraryIndex
          kicker="Belajar Ibadah"
          title="Bukan checklist. Ini modul belajar."
          description="Setiap topik punya halaman sendiri dengan inti yang perlu dipahami, langkah rinci, progress belajar, kesalahan umum, serta catatan perbedaan fikih."
          basePath="/belajar"
          items={learningModules.map((item) => ({ id: item.id, title: item.title, meta: `${item.category} • ${item.level}`, summary: item.summary, symbol: "✦" }))}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
