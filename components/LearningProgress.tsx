"use client";

import { useEffect, useState } from "react";

export function LearningProgress({ slug, total }: { slug: string; total: number }) {
  const storageKey = `nq-learning:${slug}`;
  const [done, setDone] = useState<number[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setDone(JSON.parse(raw));
    } catch {}
  }, [storageKey]);

  function toggle(index: number) {
    const next = done.includes(index) ? done.filter((x) => x !== index) : [...done, index];
    setDone(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
  }

  const percent = total ? Math.round((done.length / total) * 100) : 0;

  return (
    <section className="prod-progress-card">
      <div className="prod-progress-head"><strong>Progress belajar</strong><span>{percent}%</span></div>
      <div className="prod-progress-track"><span style={{ width: `${percent}%` }} /></div>
      <div className="prod-progress-list">
        {Array.from({ length: total }, (_, index) => (
          <label key={index}>
            <input type="checkbox" checked={done.includes(index)} onChange={() => toggle(index)} />
            <span>Langkah {index + 1} sudah dipahami</span>
          </label>
        ))}
      </div>
    </section>
  );
}
