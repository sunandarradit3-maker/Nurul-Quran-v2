import Link from "next/link";

const nav = [
  ["/", "Beranda"],
  ["/quran", "Al-Qur'an"],
  ["/doa", "Doa"],
  ["/belajar", "Belajar"],
  ["/kisah", "Kisah"],
  ["/agama", "Agama"]
] as const;

export function SiteHeader() {
  return (
    <header className="prod-header">
      <Link href="/" className="prod-brand" aria-label="Nurul Quran V2">
        <span className="prod-brand-mark">ن</span>
        <span><strong>Nurul Quran V2</strong><small>Qur'an • Ibadah • Kisah • Pengetahuan</small></span>
      </Link>
      <nav className="prod-nav" aria-label="Navigasi utama">
        {nav.map(([href, label]) => <Link href={href} key={href}>{label}</Link>)}
      </nav>
      <Link href="/quran" className="prod-header-cta">Mulai membaca</Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="prod-footer">
      <div>
        <strong>Nurul Quran V2</strong>
        <p>Platform edukasi berbasis materi, bukan sekadar kumpulan kartu.</p>
      </div>
      <p>Konten fikih dan lintas agama perlu mempertahankan rujukan, konteks, serta perbedaan mazhab/tradisi ketika dikembangkan lebih lanjut.</p>
    </footer>
  );
}
