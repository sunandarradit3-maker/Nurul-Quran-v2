import Link from "next/link";
import { prayers, learningModules, stories, faithPacks } from "@/data/content";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function HomePage() {
  const featuredPrayer = prayers.find((x) => x.id === "ghusl-intention") ?? prayers[0];
  const featuredLearn = learningModules.find((x) => x.id === "ghusl") ?? learningModules[0];
  const featuredStory = stories.find((x) => x.id === "yusuf") ?? stories[0];

  return (
    <div className="prod-shell">
      <SiteHeader />
      <main className="prod-main">
        <section className="prod-home-hero">
          <div>
            <span className="prod-kicker">Nurul Quran V2 • Production Edition</span>
            <h1>Bukan kumpulan kartu. <em>Ini pustaka belajar.</em></h1>
            <p>Al-Qur'an digital, doa dengan konteks dan rujukan, panduan ibadah langkah demi langkah, kisah panjang dengan alur, serta pusat pengetahuan agama yang punya halaman sendiri.</p>
            <div className="prod-home-actions">
              <Link href="/quran">☾ Baca Al-Qur'an</Link>
              <Link href="/belajar/ghusl" className="secondary">Pelajari mandi wajib</Link>
            </div>
            <div className="prod-home-stats">
              <span><strong>114</strong> surah</span>
              <span><strong>{prayers.length}</strong> doa</span>
              <span><strong>{learningModules.length}</strong> modul ibadah</span>
              <span><strong>{stories.length}</strong> kisah/tokoh</span>
            </div>
          </div>
          <aside className="prod-home-quote">
            <span>Asy-Syarh 94:5</span>
            <p dir="rtl" lang="ar">فَإِنَّ مَعَ الْعُسْرِ يُسْرًا</p>
            <small>“Maka sesungguhnya bersama kesulitan ada kemudahan.”</small>
          </aside>
        </section>

        <section className="prod-feature-section">
          <div className="prod-section-title"><span className="prod-kicker">Coba isinya</span><h2>Klik, lalu masuk ke materi penuh.</h2></div>
          <div className="prod-feature-grid">
            <Link href={`/doa/${featuredPrayer.id}`}><span>د</span><small>DOA • BERSUCI</small><h3>{featuredPrayer.title}</h3><p>{featuredPrayer.meaning}</p><strong>Buka doa lengkap →</strong></Link>
            <Link href={`/belajar/${featuredLearn.id}`}><span>✦</span><small>BELAJAR • {featuredLearn.level.toUpperCase()}</small><h3>{featuredLearn.title}</h3><p>{featuredLearn.summary}</p><strong>Buka modul lengkap →</strong></Link>
            <Link href={`/kisah/${featuredStory.id}`}><span>☾</span><small>KISAH • {featuredStory.tradition.toUpperCase()}</small><h3>{featuredStory.title}</h3><p>{featuredStory.summary.split("\n").find(Boolean)}</p><strong>Baca kisah lengkap →</strong></Link>
          </div>
        </section>

        <section className="prod-module-section">
          <div className="prod-section-title"><span className="prod-kicker">Semua modul</span><h2>Satu produk, banyak jalur belajar.</h2></div>
          <div className="prod-module-grid">
            <Link href="/quran"><b>01</b><h3>Al-Qur'an</h3><p>114 surah, terjemahan, audio ayat, pilihan qari.</p></Link>
            <Link href="/doa"><b>02</b><h3>Kumpulan Doa</h3><p>Arab, latin, arti, kapan dibaca, cara mengamalkan, catatan dan rujukan.</p></Link>
            <Link href="/belajar"><b>03</b><h3>Belajar Ibadah</h3><p>Wudhu, mandi wajib, tayamum, shalat, puasa, zakat, jenazah dan tajwid.</p></Link>
            <Link href="/kisah"><b>04</b><h3>Kisah & Tokoh</h3><p>Konteks, alur kejadian, pelajaran, catatan editorial dan rujukan awal.</p></Link>
            <Link href="/agama"><b>05</b><h3>Pengetahuan Agama</h3><p>{faithPacks.length} paket tradisi yang dipisahkan secara netral.</p></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
