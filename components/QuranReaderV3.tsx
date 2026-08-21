"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { qaris } from "@/data/content";

type SurahSummary = { number: number; name: string; englishName: string; englishNameTranslation: string; numberOfAyahs: number; revelationType: string };
type Verse = { number: number; numberInSurah: number; juz: number; page: number; arabic: string; translation: string; audio: string | null };
type SurahDetail = { number: number; name: string; englishName: string; englishNameTranslation: string; revelationType: string; numberOfAyahs: number; qari: string; verses: Verse[] };

export function QuranReaderV3() {
  const [surahs, setSurahs] = useState<SurahSummary[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState<SurahDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [error, setError] = useState("");
  const [qari, setQari] = useState<string>(qaris[0].id);
  const [active, setActive] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    fetch("/api/surahs").then((r) => r.json()).then((json) => {
      if (json.ok) setSurahs(json.data);
      else setError(json.error || "Daftar surah tidak tersedia.");
    }).catch(() => setError("Gagal memuat daftar surah.")).finally(() => setLoading(false));
    return () => audioRef.current?.pause();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return surahs;
    return surahs.filter((s) => `${s.number} ${s.name} ${s.englishName} ${s.englishNameTranslation}`.toLowerCase().includes(q));
  }, [query, surahs]);

  async function openSurah(number: number, selected = qari) {
    audioRef.current?.pause();
    setActive(null);
    setDetailLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/quran?surah=${number}&qari=${encodeURIComponent(selected)}`);
      const json = await response.json();
      if (!json.ok) throw new Error(json.error || "Gagal memuat surah.");
      setDetail(json.data);
      localStorage.setItem("nq-last-surah", String(number));
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Gagal memuat surah.");
    } finally {
      setDetailLoading(false);
    }
  }

  async function changeQari(next: string) {
    setQari(next);
    if (detail) await openSurah(detail.number, next);
  }

  function play(index: number) {
    if (!detail) return;
    const verse = detail.verses[index];
    if (!verse.audio) return;
    audioRef.current?.pause();
    const audio = new Audio(verse.audio);
    audioRef.current = audio;
    setActive(index);
    localStorage.setItem("nq-last-read", JSON.stringify({ surah: detail.number, ayah: verse.numberInSurah }));
    audio.onended = () => index + 1 < detail.verses.length ? play(index + 1) : setActive(null);
    audio.play().catch(() => setActive(null));
  }

  if (detail) {
    return (
      <section className="prod-quran-reader">
        <div className="prod-reader-toolbar">
          <button onClick={() => { audioRef.current?.pause(); setDetail(null); setActive(null); }}>← Semua surah</button>
          <label>Qari<select value={qari} onChange={(e) => changeQari(e.target.value)}>{qaris.map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}</select></label>
        </div>
        <div className="prod-surah-hero">
          <div><span className="prod-kicker">Surah {detail.number}</span><h1>{detail.englishName}</h1><p>{detail.englishNameTranslation} • {detail.numberOfAyahs} ayat • {detail.revelationType}</p></div>
          <div lang="ar" dir="rtl">{detail.name}</div>
        </div>
        {detailLoading && <div className="prod-state">Memuat audio qari…</div>}
        <div className="prod-verse-list">
          {detail.verses.map((verse, index) => (
            <article key={verse.number} className={active === index ? "prod-verse active" : "prod-verse"}>
              <div className="prod-verse-top"><strong>{detail.number}:{verse.numberInSurah}</strong><button onClick={() => active === index ? (audioRef.current?.pause(), setActive(null)) : play(index)}>{active === index ? "■ Stop" : "▶ Audio"}</button></div>
              <p className="prod-arabic" dir="rtl" lang="ar">{verse.arabic}</p>
              <p className="prod-translation">{verse.translation}</p>
              <small>Juz {verse.juz} • Halaman {verse.page}</small>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="prod-library-head">
        <span className="prod-kicker">Al-Qur'an Digital</span>
        <h1>114 surah, audio, dan terjemahan.</h1>
        <p>Pilih surah, ganti qari, putar ayat berurutan, dan lanjutkan bacaan tanpa menjadikan Qur'an sekadar elemen dekorasi.</p>
        <label className="prod-search"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari Yasin, Al-Kahf, nomor surah…" /></label>
      </div>
      {loading && <div className="prod-state">Memuat daftar surah…</div>}
      {error && <div className="prod-state error">{error}</div>}
      <div className="prod-surah-grid">
        {filtered.map((s) => (
          <button key={s.number} onClick={() => openSurah(s.number)}>
            <span>{s.number}</span><div><strong>{s.englishName}</strong><small>{s.numberOfAyahs} ayat • {s.revelationType}</small></div><b dir="rtl">{s.name}</b>
          </button>
        ))}
      </div>
    </section>
  );
}
