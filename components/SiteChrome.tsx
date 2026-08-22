import Link from "next/link";

const nav = [
  ["/", "Beranda"],
  ["/quran", "Al-Qur'an"],
  ["/doa", "Doa"],
  ["/belajar", "Belajar"],
  ["/kisah", "Kisah"],
  ["/agama", "Agama"]
] as const;

const mobileNav = [
  ["/", "⌂", "Home"],
  ["/quran", "☾", "Qur'an"],
  ["/doa", "د", "Doa"],
  ["/belajar", "✦", "Belajar"],
  ["/kisah", "◌", "Kisah"],
  ["/agama", "◎", "Agama"]
] as const;

export function SiteHeader() {
  return (
    <>
      <header className="topbar" aria-label="Navigasi utama">
        <Link href="/" className="brand" aria-label="Nurul Quran V2">
          <span className="brand-mark">ن</span>
          <span className="brand-copy">
            <strong>Nurul Quran <small>V2</small></strong>
            <span>Qur'an • Ibadah • Kisah • Pengetahuan</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Menu utama">
          {nav.map(([href, label]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </nav>

        <div className="top-actions">
          <Link href="/quran" className="continue-button" aria-label="Mulai membaca">
            <span>☾</span><span>Mulai membaca</span>
          </Link>
        </div>
      </header>

      <nav className="mobile-nav" aria-label="Menu mobile">
        {mobileNav.map(([href, icon, label]) => (
          <Link href={href} key={href}>
            <span>{icon}</span>
            <small>{label}</small>
          </Link>
        ))}
      </nav>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer section-wrap">
      <div>
        <strong>Nurul Quran V2</strong>
        <p>Platform edukasi dengan materi Qur'an, doa, ibadah, kisah, dan pengetahuan lintas tradisi.</p>
      </div>
      <p className="footer-note">Materi fikih dan lintas agama dikembangkan dengan konteks, rujukan, serta penjelasan perbedaan mazhab/tradisi agar tetap informatif dan bertanggung jawab.</p>
    </footer>
  );
}
