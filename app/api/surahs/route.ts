import { NextResponse } from "next/server";

const API = "https://api.alquran.cloud/v1";

export async function GET() {
  try {
    const response = await fetch(`${API}/surah`, { next: { revalidate: 86400 } });
    if (!response.ok) throw new Error(`Quran API responded ${response.status}`);
    const payload = await response.json();
    return NextResponse.json({ ok: true, data: payload.data }, {
      headers: { "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800" }
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Daftar surah sedang tidak tersedia." },
      { status: 502 }
    );
  }
}
