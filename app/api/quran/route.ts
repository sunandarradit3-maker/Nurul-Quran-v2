import { NextRequest, NextResponse } from "next/server";

const API = "https://api.alquran.cloud/v1";
const ALLOWED_QARI = new Set([
  "ar.alafasy",
  "ar.abdurrahmaansudais",
  "ar.mahermuaiqly",
  "ar.saoodshuraym",
  "ar.abdulsamad",
  "ar.husary",
  "ar.shaatree",
  "ar.aymanswoaid"
]);

export async function GET(request: NextRequest) {
  const surah = Number(request.nextUrl.searchParams.get("surah") ?? "1");
  const requestedQari = request.nextUrl.searchParams.get("qari") ?? "ar.alafasy";
  const qari = ALLOWED_QARI.has(requestedQari) ? requestedQari : "ar.alafasy";

  if (!Number.isInteger(surah) || surah < 1 || surah > 114) {
    return NextResponse.json({ ok: false, error: "Nomor surah tidak valid." }, { status: 400 });
  }

  try {
    const editionsRes = await fetch(`${API}/edition/language/id`, { next: { revalidate: 86400 } });
    let translationEdition = "id.indonesian";
    if (editionsRes.ok) {
      const editions = await editionsRes.json();
      const candidates = Array.isArray(editions.data) ? editions.data : [];
      const preferred = candidates.find((item: any) => item.identifier === "id.indonesian");
      const fallback = candidates.find((item: any) => item.format === "text" && item.type === "translation");
      translationEdition = preferred?.identifier ?? fallback?.identifier ?? translationEdition;
    }

    const [arabicRes, translationRes, audioRes] = await Promise.all([
      fetch(`${API}/surah/${surah}/quran-uthmani`, { next: { revalidate: 86400 } }),
      fetch(`${API}/surah/${surah}/${translationEdition}`, { next: { revalidate: 86400 } }),
      fetch(`${API}/surah/${surah}/${qari}`, { next: { revalidate: 86400 } })
    ]);

    if (![arabicRes, translationRes, audioRes].every((r) => r.ok)) {
      throw new Error("One or more upstream Quran API requests failed");
    }

    const [arabic, translation, audio] = await Promise.all([
      arabicRes.json(),
      translationRes.json(),
      audioRes.json()
    ]);

    const verses = arabic.data.ayahs.map((ayah: any, index: number) => ({
      number: ayah.number,
      numberInSurah: ayah.numberInSurah,
      juz: ayah.juz,
      page: ayah.page,
      arabic: ayah.text,
      translation: translation.data.ayahs[index]?.text ?? "",
      audio: audio.data.ayahs[index]?.audio ?? null
    }));

    return NextResponse.json({
      ok: true,
      data: {
        number: arabic.data.number,
        name: arabic.data.name,
        englishName: arabic.data.englishName,
        englishNameTranslation: arabic.data.englishNameTranslation,
        revelationType: arabic.data.revelationType,
        numberOfAyahs: arabic.data.numberOfAyahs,
        qari,
        verses
      }
    }, {
      headers: { "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800" }
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Data surah sedang tidak tersedia. Coba lagi beberapa saat." },
      { status: 502 }
    );
  }
}
