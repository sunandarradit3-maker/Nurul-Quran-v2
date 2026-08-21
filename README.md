# Nurul Quran V2 — DiTz Store

Production-oriented Next.js source for a Qur'an, Islamic learning, prayer, stories, and neutral multi-faith knowledge platform.

## Main modules

- **Al-Qur'an:** 114 surahs via Al Quran Cloud, Indonesian translation, ayah audio, 8 qari, auto-play next ayah, last-read persistence.
- **Doa:** searchable local data with Arabic, latin, meaning, category, and source notes.
- **Belajar:** wudhu, mandi wajib, tayamum, shalat, fasting, zakat, janazah overview, tajwid basics.
- **Kisah & Tokoh:** Islamic stories plus introductory cross-tradition stories/history.
- **Lintas Agama:** separate knowledge packs for Islam, Christianity, Catholicism, Hinduism, Buddhism, Confucianism, Judaism, and Sikhism.
- **White-label:** branding/content lives in `data/content.ts` so resellers can rebrand without touching core UI.
- **Local persistence:** theme, favorites, and last-read stored in localStorage.
- **Responsive:** desktop + Android-first bottom navigation.

## Stack

- Next.js 16.3.1
- React 19.2
- TypeScript
- No database required
- No API key required for the default Qur'an integration

The Qur'an integration uses the public Al Quran Cloud REST API and its audio URLs. Review the upstream service terms/availability before packaging a paid hosted service.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run build
npm start
```

## Deploy to Vercel

### Dashboard / Git

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: **Next.js**.
4. No environment variables are required for the default build.
5. Deploy.

### CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

If updating an existing Vercel project, link the project first (`vercel link`) or place the existing `.vercel/project.json` inside this project before deployment.

## White-label edits

Edit `data/content.ts`:

- `siteConfig`: product name, owner, tagline.
- `qaris`: reciter options.
- `prayers`: doa library.
- `learningModules`: tutorial library.
- `stories`: story/history cards.
- `faithPacks`: one isolated data pack per religion/tradition.

Edit `app/globals.css` variables at the top for brand colors and visual identity.

## Editorial rules for resale

1. Keep each religion/tradition in a separate content pack.
2. Avoid writing one sect/denomination as if it represents every follower.
3. For detailed ritual instructions, cite a recognized source for the exact school/denomination/tradition.
4. Never market voice-recitation scoring as a replacement for a qualified teacher.
5. For Qur'an translations, avoid automatically re-translating a vetted translation with machine translation.
6. Before selling as “verified religious content”, run an editorial review with knowledgeable reviewers from each covered tradition.

## Suggested commercial upgrades

- Supabase/Postgres user accounts + cloud bookmarks
- Admin CMS for content packs
- Push notification / daily verse
- PWA offline Qur'an cache
- Prayer times + Qibla
- Per-customer license key and update channel
- Multi-language content packs
- Content review workflow and source bibliography per article
- Analytics + feature flags

## Project structure

```text
app/
  api/quran/route.ts     # server proxy for Arabic + Indonesian + qari audio
  api/surahs/route.ts    # list of 114 surahs
  globals.css
  layout.tsx
  page.tsx
components/
  ReligioApp.tsx
data/
  content.ts             # all white-label/content packs
public/
  favicon.svg
```

## Content disclaimer

The multi-faith section is designed as a neutral educational introduction, not a declaration of theological truth or official religious instruction. Practices and interpretations can differ among schools, denominations, lineages, regions, and communities.

## Brand

Built for **DiTz Store**. Replace brand identity before resale if your commercial license/customer agreement requires it.
