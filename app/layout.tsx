import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./production.css";

export const metadata: Metadata = {
  title: "Nurul Quran V2 — Qur'an, Ibadah & Pengetahuan Agama",
  description:
    "Qur'an digital, audio tilawah, doa, panduan ibadah, kisah, dan pusat pengetahuan lintas agama yang terstruktur dan netral.",
  applicationName: "Nurul Quran V2",
  keywords: [
    "Al-Quran",
    "Quran 30 juz",
    "murottal",
    "doa",
    "wudhu",
    "mandi wajib",
    "belajar agama",
    "kisah nabi",
    "pengetahuan agama"
  ],
  icons: { icon: "/favicon.svg" }
};

export const viewport: Viewport = {
  themeColor: "#0d3d35",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
