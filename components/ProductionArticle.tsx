import Link from "next/link";
import type { LearningModule, Prayer, Story, FaithPack } from "@/data/content";
import { ArticleActions } from "./ArticleActions";
import { LearningProgress } from "./LearningProgress";

function isHeading(line: string) {
  const clean = line.trim();
  return clean.length > 0 && clean.length < 80 && clean === clean.toUpperCase() && /[A-ZÀ-Ý0-9]/.test(clean);
}

function RichText({ text }: { text?: string }) {
  if (!text) return null;
  const blocks = text.split(/\n\n+/).map((x) => x.trim()).filter(Boolean);
  return (
    <div className="prod-richtext">
      {blocks.map((block, index) => {
        const lines = block.split("\n").map((x) => x.trim()).filter(Boolean);
        const heading = lines[0] && isHeading(lines[0]) ? lines.shift() : null;
        const numbered = lines.length > 0 && lines.every((line) => /^\d+[.)]\s/.test(line));
        const bullets = lines.length > 0 && lines.every((line) => /^[•*-]\s?/.test(line));
        return (
          <section key={`${heading ?? "p"}-${index}`} className="prod-text-section">
            {heading && <h2>{heading}</h2>}
            {numbered ? (
              <ol>{lines.map((line) => <li key={line}>{line.replace(/^\d+[.)]\s*/, "")}</li>)}</ol>
            ) : bullets ? (
              <ul>{lines.map((line) => <li key={line}>{line.replace(/^[•*-]\s?/, "")}</li>)}</ul>
            ) : (
              lines.map((line) => <p key={line}>{line}</p>)
            )}
          </section>
        );
      })}
    </div>
  );
}

function ArticleFrame({ type, title, meta, summary, children, id }: {
  type: string;
  title: string;
  meta: string;
  summary: string;
  children: React.ReactNode;
  id: string;
}) {
  return (
    <>
      <div className="prod-article-hero">
        <span className="prod-kicker">Nurul Quran • {type}</span>
        <h1>{title}</h1>
        <p>{summary}</p>
        <div className="prod-article-meta"><span>{meta}</span><span>Materi lengkap</span><span>Rujukan tersedia</span></div>
        <ArticleActions id={id} title={title} />
      </div>
      <div className="prod-article-layout">
        <aside className="prod-toc">
          <strong>Di halaman ini</strong>
          <a href="#materi">Materi utama</a>
          <a href="#rujukan">Rujukan & catatan</a>
          <Link href={`/${type.toLowerCase()}`}>← Kembali ke pustaka</Link>
        </aside>
        <article className="prod-article" id="materi">{children}</article>
      </div>
    </>
  );
}

export function PrayerArticle({ data }: { data: Prayer }) {
  return (
    <ArticleFrame type="Doa" title={data.title} meta={data.category} summary={data.meaning} id={`doa:${data.id}`}>
      <section className="prod-prayer-display">
        <span>Teks Arab</span>
        <p lang="ar" dir="rtl">{data.arabic}</p>
      </section>
      <section className="prod-info-grid">
        <div><span>Latin</span><p><em>{data.latin}</em></p></div>
        <div><span>Arti</span><p>{data.meaning}</p></div>
      </section>
      <RichText text={data.note} />
      <section className="prod-source" id="rujukan"><span>Rujukan</span><p>{data.source}</p></section>
    </ArticleFrame>
  );
}

export function LearningArticle({ data }: { data: LearningModule }) {
  return (
    <ArticleFrame type="Belajar" title={data.title} meta={`${data.category} • ${data.level}`} summary={data.summary} id={`belajar:${data.id}`}>
      {data.essentials?.length ? (
        <section className="prod-section-block"><h2>Inti yang wajib dipahami</h2><ul className="prod-checklist">{data.essentials.map((x) => <li key={x}>✓ {x}</li>)}</ul></section>
      ) : null}
      <section className="prod-section-block">
        <h2>Langkah demi langkah</h2>
        <ol className="prod-step-list">{data.steps.map((step, index) => <li key={step}><span>{index + 1}</span><div><strong>Langkah {index + 1}</strong><p>{step}</p></div></li>)}</ol>
      </section>
      <LearningProgress slug={data.id} total={data.steps.length} />
      <section className="prod-source" id="rujukan"><span>Catatan fikih & editorial</span><RichText text={data.caution} /></section>
    </ArticleFrame>
  );
}

export function StoryArticle({ data }: { data: Story }) {
  return (
    <ArticleFrame type="Kisah" title={data.title} meta={`${data.tradition} • ${data.kind}`} summary={data.summary.split("\n")[0]} id={`kisah:${data.id}`}>
      <RichText text={data.summary} />
      <section className="prod-section-block"><RichText text={data.lesson} /></section>
      <section className="prod-source" id="rujukan"><RichText text={data.sourceHint} /></section>
    </ArticleFrame>
  );
}

export function FaithArticle({ data }: { data: FaithPack }) {
  return (
    <ArticleFrame type="Agama" title={data.name} meta="Pusat pengetahuan lintas agama" summary={data.overview} id={`agama:${data.id}`}>
      <section className="prod-section-block"><h2>Gambaran umum</h2><p>{data.overview}</p></section>
      <section className="prod-info-grid">
        <div><span>Kitab / teks</span><ul>{data.scripture.map((x) => <li key={x}>{x}</li>)}</ul></div>
        <div><span>Tokoh</span><ul>{data.figures.map((x) => <li key={x}>{x}</li>)}</ul></div>
        <div><span>Tempat penting</span><ul>{data.places.map((x) => <li key={x}>{x}</li>)}</ul></div>
        <div><span>Hari / praktik</span><ul>{data.observances.map((x) => <li key={x}>{x}</li>)}</ul></div>
      </section>
      <section className="prod-section-block"><h2>Praktik dan tema</h2><p>{data.practiceOverview}</p><div className="prod-tags">{data.themes.map((x) => <span key={x}>{x}</span>)}</div></section>
      <section className="prod-source" id="rujukan"><span>Catatan editorial</span><p>{data.note}</p></section>
    </ArticleFrame>
  );
}
