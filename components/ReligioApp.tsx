"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  faithPacks,
  featuredSurahs,
  homeHighlights,
  learningModules,
  prayers,
  qaris,
  siteConfig,
  stories,
  type FaithPack,
  type LearningModule,
  type Prayer,
  type Story
} from "@/data/content";

type View = "home" | "quran" | "prayers" | "learn" | "stories" | "faiths";
type SurahSummary = {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
};
type Verse = {
  number: number;
  numberInSurah: number;
  juz: number;
  page: number;
  arabic: string;
  translation: string;
  audio: string | null;
};
type SurahDetail = {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  numberOfAyahs: number;
  qari: string;
  verses: Verse[];
};

type DetailItem =
  | { type: "prayer"; data: Prayer }
  | { type: "learn"; data: LearningModule }
  | { type: "story"; data: Story }
  | { type: "faith"; data: FaithPack }
  | null;

const nav: { id: View; label: string; icon: string }[] = [
  { id: "home", label: "Beranda", icon: "⌂" },
  { id: "quran", label: "Al-Qur'an", icon: "☾" },
  { id: "prayers", label: "Doa", icon: "♡" },
  { id: "learn", label: "Belajar", icon: "✦" },
  { id: "stories", label: "Kisah", icon: "◫" },
  { id: "faiths", label: "Lintas Agama", icon: "◎" }
];

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function titleForView(view: View) {
  return nav.find((item) => item.id === view)?.label ?? "Beranda";
}

function normalize(text: string) {
  return text.toLowerCase().normalize("NFKD");
}

export function ReligioApp() {
  const [view, setView] = useState<View>("home");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [query, setQuery] = useState("");
  const [detail, setDetail] = useState<DetailItem>(null);
  const [surahs, setSurahs] = useState<SurahSummary[]>([]);
  const [surahsLoading, setSurahsLoading] = useState(false);
  const [surah, setSurah] = useState<SurahDetail | null>(null);
  const [surahLoading, setSurahLoading] = useState(false);
  const [surahError, setSurahError] = useState("");
  const [selectedQari, setSelectedQari] = useState<string>(qaris[0].id);
  const [activeVerse, setActiveVerse] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [lastRead, setLastRead] = useState<{ surah: number; ayah: number } | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("nq-theme");
    const savedFavs = localStorage.getItem("nq-favorites");
    const savedLastRead = localStorage.getItem("nq-last-read");
    if (savedTheme === "dark" || savedTheme === "light") setTheme(savedTheme);
    if (savedFavs) {
      try { setFavorites(JSON.parse(savedFavs)); } catch {}
    }
    if (savedLastRead) {
      try { setLastRead(JSON.parse(savedLastRead)); } catch {}
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("nq-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("nq-favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (view !== "quran" || surahs.length) return;
    setSurahsLoading(true);
    fetch("/api/surahs")
      .then((r) => r.json())
      .then((json) => {
        if (json.ok) setSurahs(json.data);
      })
      .finally(() => setSurahsLoading(false));
  }, [view, surahs.length]);

  useEffect(() => {
    return () => audioRef.current?.pause();
  }, []);

  const filteredPrayers = useMemo(() => {
    const q = normalize(query);
    if (!q) return prayers;
    return prayers.filter((item) => normalize(`${item.title} ${item.category} ${item.meaning}`).includes(q));
  }, [query]);

  const filteredLearn = useMemo(() => {
    const q = normalize(query);
    if (!q) return learningModules;
    return learningModules.filter((item) => normalize(`${item.title} ${item.category} ${item.summary}`).includes(q));
  }, [query]);

  const filteredStories = useMemo(() => {
    const q = normalize(query);
    if (!q) return stories;
    return stories.filter((item) => normalize(`${item.title} ${item.tradition} ${item.summary}`).includes(q));
  }, [query]);

  const filteredFaiths = useMemo(() => {
    const q = normalize(query);
    if (!q) return faithPacks;
    return faithPacks.filter((item) => normalize(`${item.name} ${item.overview} ${item.themes.join(" ")}`).includes(q));
  }, [query]);

  const filteredSurahs = useMemo(() => {
    const q = normalize(query);
    if (!q) return surahs;
    return surahs.filter((item) =>
      normalize(`${item.number} ${item.name} ${item.englishName} ${item.englishNameTranslation}`).includes(q)
    );
  }, [query, surahs]);

  function go(next: View) {
    setView(next);
    setQuery("");
    setDetail(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleFavorite(id: string) {
    setFavorites((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  }

  async function openSurah(number: number, qari = selectedQari) {
    audioRef.current?.pause();
    setActiveVerse(null);
    setSurahLoading(true);
    setSurahError("");
    try {
      const response = await fetch(`/api/quran?surah=${number}&qari=${encodeURIComponent(qari)}`);
      const json = await response.json();
      if (!json.ok) throw new Error(json.error || "Gagal memuat surah");
      setSurah(json.data);
      setLastRead({ surah: number, ayah: 1 });
      localStorage.setItem("nq-last-read", JSON.stringify({ surah: number, ayah: 1 }));
      setView("quran");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setSurahError(error instanceof Error ? error.message : "Gagal memuat surah");
    } finally {
      setSurahLoading(false);
    }
  }

  async function changeQari(nextQari: string) {
    setSelectedQari(nextQari);
    if (surah) await openSurah(surah.number, nextQari);
  }

  function playVerse(index: number) {
    if (!surah) return;
    const verse = surah.verses[index];
    if (!verse?.audio) return;
    audioRef.current?.pause();
    const audio = new Audio(verse.audio);
    audioRef.current = audio;
    setActiveVerse(index);
    const current = { surah: surah.number, ayah: verse.numberInSurah };
    setLastRead(current);
    localStorage.setItem("nq-last-read", JSON.stringify(current));
    audio.onended = () => {
      if (index + 1 < surah.verses.length) playVerse(index + 1);
      else setActiveVerse(null);
    };
    audio.play().catch(() => setActiveVerse(null));
  }

  function stopAudio() {
    audioRef.current?.pause();
    setActiveVerse(null);
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => go("home")} aria-label="Buka beranda">
          <span className="brand-mark">ن</span>
          <span className="brand-copy">
            <strong>{siteConfig.name} <small>{siteConfig.version}</small></strong>
            <span>{siteConfig.tagline}</span>
          </span>
        </button>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          {nav.map((item) => (
            <button key={item.id} className={cx(view === item.id && "active")} onClick={() => go(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="top-actions">
          <button className="round-button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label="Ganti tema">
            {theme === "light" ? "☾" : "☀"}
          </button>
          <button className="continue-button" onClick={() => openSurah(lastRead?.surah ?? 1)}>
            <span>☰</span>
            <span>{lastRead ? `Lanjut ${lastRead.surah}:${lastRead.ayah}` : "Mulai baca"}</span>
          </button>
        </div>
      </header>

      <main>
        {view === "home" && (
          <HomeView
            onGo={go}
            onOpenSurah={openSurah}
            lastRead={lastRead}
            favoriteCount={favorites.length}
          />
        )}

        {view !== "home" && (
          <section className="page-head section-wrap">
            <div>
              <span className="eyebrow">Nurul Quran • {titleForView(view)}</span>
              <h1>{pageTitle(view)}</h1>
              <p>{pageDescription(view)}</p>
            </div>
            {view !== "quran" || !surah ? (
              <label className="search-field">
                <span>⌕</span>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={searchPlaceholder(view)}
                />
              </label>
            ) : null}
          </section>
        )}

        {view === "quran" && (
          <QuranView
            surah={surah}
            surahs={filteredSurahs}
            loading={surahLoading || surahsLoading}
            error={surahError}
            selectedQari={selectedQari}
            activeVerse={activeVerse}
            onOpen={openSurah}
            onBack={() => { stopAudio(); setSurah(null); }}
            onPlay={playVerse}
            onStop={stopAudio}
            onQari={changeQari}
            lastRead={lastRead}
          />
        )}

        {view === "prayers" && (
          <CardCollection
            kicker="Pustaka doa"
            items={filteredPrayers.map((item) => ({
              id: item.id,
              icon: "د",
              title: item.title,
              meta: item.category,
              text: item.meaning,
              favorite: favorites.includes(`prayer:${item.id}`),
              onFavorite: () => toggleFavorite(`prayer:${item.id}`),
              onClick: () => setDetail({ type: "prayer", data: item })
            }))}
          />
        )}

        {view === "learn" && (
          <CardCollection
            kicker="Belajar ibadah"
            items={filteredLearn.map((item) => ({
              id: item.id,
              icon: "✦",
              title: item.title,
              meta: `${item.category} • ${item.level}`,
              text: item.summary,
              favorite: favorites.includes(`learn:${item.id}`),
              onFavorite: () => toggleFavorite(`learn:${item.id}`),
              onClick: () => setDetail({ type: "learn", data: item })
            }))}
          />
        )}

        {view === "stories" && (
          <CardCollection
            kicker="Kisah & tokoh"
            items={filteredStories.map((item) => ({
              id: item.id,
              icon: item.tradition === "Islam" ? "☾" : "◫",
              title: item.title,
              meta: `${item.tradition} • ${item.kind}`,
              text: item.summary,
              favorite: favorites.includes(`story:${item.id}`),
              onFavorite: () => toggleFavorite(`story:${item.id}`),
              onClick: () => setDetail({ type: "story", data: item })
            }))}
          />
        )}

        {view === "faiths" && (
          <FaithView packs={filteredFaiths} onOpen={(item) => setDetail({ type: "faith", data: item })} />
        )}
      </main>

      <footer className="footer section-wrap">
        <div>
          <strong>{siteConfig.name} {siteConfig.version}</strong>
          <p>Produk edukasi • White-label source code by {siteConfig.owner}.</p>
        </div>
        <p className="footer-note">
          Konten lintas agama bersifat pengantar netral. Detail ajaran dan praktik dapat berbeda antar mazhab, denominasi, aliran, dan komunitas; gunakan sumber resmi saat memperluas materi.
        </p>
      </footer>

      <nav className="mobile-nav" aria-label="Navigasi seluler">
        {nav.slice(0, 5).map((item) => (
          <button key={item.id} className={cx(view === item.id && "active")} onClick={() => go(item.id)}>
            <span>{item.icon}</span><small>{item.label}</small>
          </button>
        ))}
        <button className={cx(view === "faiths" && "active")} onClick={() => go("faiths")}>
          <span>◎</span><small>Agama</small>
        </button>
      </nav>

      {detail && <DetailDrawer detail={detail} onClose={() => setDetail(null)} />}
    </div>
  );
}

function HomeView({
  onGo,
  onOpenSurah,
  lastRead,
  favoriteCount
}: {
  onGo: (view: View) => void;
  onOpenSurah: (number: number) => void;
  lastRead: { surah: number; ayah: number } | null;
  favoriteCount: number;
}) {
  return (
    <>
      <section className="hero section-wrap">
        <div className="hero-copy">
          <span className="eyebrow">Qur'an • Ibadah • Kisah • Pengetahuan</span>
          <h1>Satu ruang untuk belajar dengan <em>tenang dan terarah.</em></h1>
          <p>
            Dari membaca Al-Qur'an dan tilawah, belajar wudhu serta mandi wajib, sampai mengenal sejarah dan tradisi agama lain secara netral.
          </p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => onOpenSurah(lastRead?.surah ?? 1)}>
              ☾ {lastRead ? "Lanjut membaca" : "Mulai Al-Qur'an"}
            </button>
            <button className="secondary-button" onClick={() => onGo("learn")}>✦ Buka menu Belajar</button>
          </div>
          <div className="trust-row">
            <span>✓ 30 juz & audio</span>
            <span>✓ 8 qari</span>
            <span>✓ White-label ready</span>
          </div>
        </div>
        <aside className="daily-card">
          <div className="daily-head"><span>Ayat penguat</span><span className="pill">94:5</span></div>
          <p className="daily-arabic" dir="rtl">فَإِنَّ مَعَ الْعُسْرِ يُسْرًا</p>
          <p className="daily-latin">Fa inna ma'al-'usri yusrā.</p>
          <p className="daily-meaning">“Maka sesungguhnya bersama kesulitan ada kemudahan.”</p>
          <div className="daily-footer">
            <button onClick={() => onOpenSurah(94)}>▶ Buka Asy-Syarh</button>
            <span>Tersimpan: {favoriteCount} favorit</span>
          </div>
        </aside>
      </section>

      <section className="section-wrap popular-section">
        <div className="section-heading">
          <div><span className="section-kicker">Cepat dibuka</span><h2>Surah pilihan</h2></div>
          <button className="text-button" onClick={() => onGo("quran")}>Semua surah →</button>
        </div>
        <div className="surah-grid home-surah-grid">
          {featuredSurahs.map((item) => (
            <button key={item.number} className="surah-card" onClick={() => onOpenSurah(item.number)}>
              <span className="surah-number">{item.number}</span>
              <span className="surah-info"><strong>{item.name}</strong><small>{item.ayahs} ayat</small></span>
              <span className="surah-arabic" dir="rtl">{item.arabic}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="section-wrap hub-section">
        <div className="section-heading">
          <div><span className="section-kicker">Versi 2.0</span><h2>Lebih dari website Qur'an</h2></div>
          <span className="soft-badge">Siap dikembangkan & dijual</span>
        </div>
        <div className="highlight-grid">
          {homeHighlights.map((item, index) => (
            <button
              key={item.title}
              className="highlight-card"
              onClick={() => onGo((["quran", "learn", "prayers", "stories", "faiths", "home"] as View[])[index])}
            >
              <span className="highlight-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="card-link">Buka modul →</span>
            </button>
          ))}
        </div>
      </section>

      <section className="section-wrap multi-faith-preview">
        <div className="mf-copy">
          <span className="section-kicker">Pusat Pengetahuan</span>
          <h2>Agama tidak dicampur. Setiap tradisi punya ruangnya sendiri.</h2>
          <p>
            Modul lintas agama memisahkan pengenalan kitab, tokoh, sejarah, nilai, tempat ibadah, dan hari penting. Detail yang sensitif diberi catatan agar pembeli source dapat menambahkan rujukan resmi komunitas masing-masing.
          </p>
          <button className="primary-button" onClick={() => onGo("faiths")}>◎ Jelajahi lintas agama</button>
        </div>
        <div className="faith-orbit">
          {faithPacks.slice(0, 8).map((faith) => (
            <div key={faith.id} className="faith-chip"><span>{faith.symbol}</span>{faith.shortName}</div>
          ))}
        </div>
      </section>
    </>
  );
}

function QuranView({
  surah,
  surahs,
  loading,
  error,
  selectedQari,
  activeVerse,
  onOpen,
  onBack,
  onPlay,
  onStop,
  onQari,
  lastRead
}: {
  surah: SurahDetail | null;
  surahs: SurahSummary[];
  loading: boolean;
  error: string;
  selectedQari: string;
  activeVerse: number | null;
  onOpen: (number: number) => void;
  onBack: () => void;
  onPlay: (index: number) => void;
  onStop: () => void;
  onQari: (qari: string) => void;
  lastRead: { surah: number; ayah: number } | null;
}) {
  if (surah) {
    return (
      <section className="section-wrap reader-wrap">
        <div className="reader-toolbar">
          <button className="back-button" onClick={onBack}>← Semua surah</button>
          <label className="qari-select">Qari
            <select value={selectedQari} onChange={(e) => onQari(e.target.value)}>
              {qaris.map((qari) => <option key={qari.id} value={qari.id}>{qari.name}</option>)}
            </select>
          </label>
        </div>

        <div className="surah-banner">
          <div>
            <span className="section-kicker">Surah {surah.number}</span>
            <h2>{surah.englishName}</h2>
            <p>{surah.englishNameTranslation} • {surah.numberOfAyahs} ayat • {surah.revelationType}</p>
          </div>
          <div className="surah-banner-arabic" dir="rtl">{surah.name}</div>
        </div>

        <div className="reader-list">
          {surah.verses.map((verse, index) => (
            <article key={verse.number} className={cx("verse-card", activeVerse === index && "playing", lastRead?.surah === surah.number && lastRead.ayah === verse.numberInSurah && "last-read")}> 
              <div className="verse-meta">
                <span>{surah.number}:{verse.numberInSurah}</span>
                <div>
                  {activeVerse === index ? (
                    <button className="mini-action active" onClick={onStop} aria-label="Hentikan audio">■</button>
                  ) : (
                    <button className="mini-action" onClick={() => onPlay(index)} aria-label="Putar ayat">▶</button>
                  )}
                  <button className="mini-action" onClick={() => navigator.clipboard?.writeText(`${verse.arabic}\n\n${verse.translation}`)} aria-label="Salin ayat">⧉</button>
                </div>
              </div>
              <p className="verse-arabic" dir="rtl" lang="ar">{verse.arabic}</p>
              <p className="verse-translation">{verse.translation}</p>
              <small className="verse-extra">Juz {verse.juz} • Halaman {verse.page}</small>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="section-wrap quran-library">
      {loading && <div className="state-card"><span className="spinner"/> Memuat Al-Qur'an…</div>}
      {error && <div className="state-card error">{error}</div>}
      {!loading && !error && surahs.length === 0 && (
        <div className="state-card">Daftar surah belum tersedia. Periksa koneksi lalu muat ulang.</div>
      )}
      <div className="surah-grid full-surah-grid">
        {surahs.map((item) => (
          <button key={item.number} className="surah-card" onClick={() => onOpen(item.number)}>
            <span className="surah-number">{item.number}</span>
            <span className="surah-info">
              <strong>{item.englishName}</strong>
              <small>{item.numberOfAyahs} ayat • {item.revelationType}</small>
            </span>
            <span className="surah-arabic" dir="rtl">{item.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function CardCollection({ kicker, items }: {
  kicker: string;
  items: Array<{
    id: string;
    icon: string;
    title: string;
    meta: string;
    text: string;
    favorite: boolean;
    onFavorite: () => void;
    onClick: () => void;
  }>;
}) {
  return (
    <section className="section-wrap collection-section">
      <div className="collection-bar"><span>{kicker}</span><strong>{items.length} materi</strong></div>
      <div className="content-grid">
        {items.map((item) => (
          <article className="content-card" key={item.id}>
            <div className="content-icon">{item.icon}</div>
            <button className={cx("favorite-button", item.favorite && "active")} onClick={item.onFavorite} aria-label="Favorit">{item.favorite ? "♥" : "♡"}</button>
            <span className="content-meta">{item.meta}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <button className="card-link button-link" onClick={item.onClick}>Baca selengkapnya →</button>
          </article>
        ))}
      </div>
      {items.length === 0 && <div className="state-card">Tidak ada materi yang cocok dengan pencarian.</div>}
    </section>
  );
}

function FaithView({ packs, onOpen }: { packs: FaithPack[]; onOpen: (pack: FaithPack) => void }) {
  return (
    <section className="section-wrap faith-section">
      <div className="neutral-notice">
        <strong>Mode edukasi netral</strong>
        <p>Materi dipisahkan per tradisi. Tidak ada ranking agama, klaim “paling benar”, atau pencampuran ritual. Penjelasan detail sebaiknya diverifikasi ke sumber komunitas masing-masing sebelum dijual sebagai materi resmi.</p>
      </div>
      <div className="faith-grid">
        {packs.map((faith) => (
          <button key={faith.id} className="faith-card" onClick={() => onOpen(faith)}>
            <span className="faith-symbol">{faith.symbol}</span>
            <span className="content-meta">Paket pengetahuan</span>
            <h3>{faith.name}</h3>
            <p>{faith.overview}</p>
            <div className="tag-row">{faith.themes.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
            <span className="card-link">Buka paket →</span>
          </button>
        ))}
      </div>
      {packs.length === 0 && <div className="state-card">Tidak ada tradisi yang cocok dengan pencarian.</div>}
    </section>
  );
}

function DetailDrawer({ detail, onClose }: { detail: NonNullable<DetailItem>; onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="drawer-layer" role="dialog" aria-modal="true">
      <button className="drawer-backdrop" onClick={onClose} aria-label="Tutup detail" />
      <aside className="drawer">
        <div className="drawer-head">
          <span className="eyebrow">Nurul Quran • Materi</span>
          <button className="round-button" onClick={onClose} aria-label="Tutup">×</button>
        </div>
        {detail.type === "prayer" && <PrayerDetail data={detail.data} />}
        {detail.type === "learn" && <LearningDetail data={detail.data} />}
        {detail.type === "story" && <StoryDetail data={detail.data} />}
        {detail.type === "faith" && <FaithDetail data={detail.data} />}
      </aside>
    </div>
  );
}

function PrayerDetail({ data }: { data: Prayer }) {
  return (
    <div className="detail-body">
      <span className="detail-label">{data.category}</span>
      <h2>{data.title}</h2>
      <div className="arabic-box" dir="rtl">{data.arabic}</div>
      <section><h4>Latin</h4><p><em>{data.latin}</em></p></section>
      <section><h4>Arti</h4><p>{data.meaning}</p></section>
      <section className="source-box"><h4>Sumber/ringkasan rujukan</h4><p>{data.source}</p>{data.note && <p>{data.note}</p>}</section>
    </div>
  );
}

function LearningDetail({ data }: { data: LearningModule }) {
  return (
    <div className="detail-body">
      <span className="detail-label">{data.category} • {data.level}</span>
      <h2>{data.title}</h2>
      <p className="lead">{data.summary}</p>
      {data.essentials && <section><h4>Inti yang perlu dipahami</h4><ul className="check-list">{data.essentials.map((x) => <li key={x}>✓ {x}</li>)}</ul></section>}
      <section><h4>Urutan belajar</h4><ol className="step-list">{data.steps.map((step, index) => <li key={step}><span>{index + 1}</span><p>{step}</p></li>)}</ol></section>
      {data.caution && <section className="source-box"><h4>Catatan</h4><p>{data.caution}</p></section>}
    </div>
  );
}

function StoryDetail({ data }: { data: Story }) {
  return (
    <div className="detail-body">
      <span className="detail-label">{data.tradition} • {data.kind}</span>
      <h2>{data.title}</h2>
      <p className="lead">{data.summary}</p>
      <section><h4>Pelajaran utama</h4><p>{data.lesson}</p></section>
      <section className="source-box"><h4>Petunjuk sumber</h4><p>{data.sourceHint}</p></section>
    </div>
  );
}

function FaithDetail({ data }: { data: FaithPack }) {
  return (
    <div className="detail-body faith-detail">
      <div className="detail-faith-title"><span>{data.symbol}</span><div><span className="detail-label">Pusat pengetahuan</span><h2>{data.name}</h2></div></div>
      <p className="lead">{data.overview}</p>
      <InfoList title="Kitab / sumber teks" items={data.scripture} />
      <InfoList title="Tokoh" items={data.figures} />
      <InfoList title="Tempat ibadah / ruang penting" items={data.places} />
      <InfoList title="Tema utama" items={data.themes} />
      <InfoList title="Hari / praktik penting" items={data.observances} />
      <section><h4>Gambaran praktik</h4><p>{data.practiceOverview}</p></section>
      <section className="source-box"><h4>Catatan editorial</h4><p>{data.note}</p></section>
    </div>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return <section><h4>{title}</h4><ul className="plain-list">{items.map((item) => <li key={item}>{item}</li>)}</ul></section>;
}

function pageTitle(view: View) {
  const map: Record<View, string> = {
    home: "Beranda",
    quran: "Baca dan dengarkan Al-Qur'an.",
    prayers: "Kumpulan doa yang mudah dicari.",
    learn: "Belajar ibadah langkah demi langkah.",
    stories: "Kisah, tokoh, dan sejarah untuk dipelajari.",
    faiths: "Mengenal tradisi agama dengan cara yang netral."
  };
  return map[view];
}

function pageDescription(view: View) {
  const map: Record<View, string> = {
    home: "",
    quran: "114 surah, terjemahan Indonesia, audio per ayat, qari pilihan, dan bacaan terakhir tersimpan di perangkat.",
    prayers: "Materi doa disusun berdasarkan kategori dengan teks Arab, latin, arti, serta catatan sumber.",
    learn: "Mulai dari bersuci sampai tajwid. Detail fikih diberi catatan agar tidak menyamakan semua mazhab.",
    stories: "Kisah Islam menjadi modul utama, dengan ruang tambahan untuk sejarah dan tokoh lintas tradisi.",
    faiths: "Setiap tradisi memiliki halaman sendiri; konten tidak dicampur dan perbedaan internal tetap diberi ruang."
  };
  return map[view];
}

function searchPlaceholder(view: View) {
  const map: Partial<Record<View, string>> = {
    quran: "Cari Al-Kahf, Yasin, nomor surah...",
    prayers: "Cari doa makan, orang tua, perjalanan...",
    learn: "Cari wudhu, mandi wajib, tayamum...",
    stories: "Cari Nabi Yusuf, Buddha, Kongzi...",
    faiths: "Cari Islam, Hindu, Buddha, Sikh..."
  };
  return map[view] ?? "Cari...";
}
