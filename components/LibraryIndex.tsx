import Link from "next/link";

export function LibraryIndex({
  kicker,
  title,
  description,
  basePath,
  items
}: {
  kicker: string;
  title: string;
  description: string;
  basePath: string;
  items: Array<{ id: string; title: string; meta: string; summary: string; symbol?: string }>;
}) {
  return (
    <>
      <section className="prod-library-head">
        <span className="prod-kicker">{kicker}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="prod-library-stats"><span>{items.length} materi tersedia</span><span>Halaman penuh</span><span>SEO-ready</span></div>
      </section>
      <section className="prod-library-grid">
        {items.map((item, index) => (
          <Link href={`${basePath}/${item.id}`} className="prod-library-card" key={item.id}>
            <div className="prod-card-top"><span className="prod-card-symbol">{item.symbol ?? String(index + 1).padStart(2, "0")}</span><span>{item.meta}</span></div>
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <strong>Baca materi lengkap →</strong>
          </Link>
        ))}
      </section>
    </>
  );
}
