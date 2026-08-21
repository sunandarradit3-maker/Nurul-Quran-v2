"use client";

import { useEffect, useState } from "react";

export function ArticleActions({ id, title }: { id: string; title: string }) {
  const [saved, setSaved] = useState(false);
  const key = `nq-article:${id}`;

  useEffect(() => {
    setSaved(localStorage.getItem(key) === "1");
  }, [key]);

  function toggleSaved() {
    const next = !saved;
    setSaved(next);
    if (next) localStorage.setItem(key, "1");
    else localStorage.removeItem(key);
  }

  async function copyLink() {
    await navigator.clipboard?.writeText(window.location.href);
  }

  async function share() {
    if (navigator.share) {
      await navigator.share({ title, url: window.location.href }).catch(() => undefined);
      return;
    }
    await copyLink();
  }

  return (
    <div className="prod-article-actions">
      <button onClick={toggleSaved}>{saved ? "★ Tersimpan" : "☆ Simpan"}</button>
      <button onClick={copyLink}>Salin link</button>
      <button onClick={share}>Bagikan</button>
    </div>
  );
}
