import { QuranReaderV3 } from "@/components/QuranReaderV3";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata = {
  title: "Al-Qur'an Digital — Nurul Quran V2",
  description: "Baca 114 surah, terjemahan Indonesia, audio per ayat, dan pilihan qari."
};

export default function QuranPage() {
  return (
    <div className="prod-shell">
      <SiteHeader />
      <main className="prod-main"><QuranReaderV3 /></main>
      <SiteFooter />
    </div>
  );
}
