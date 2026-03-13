"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type RefItem = {
  id: number;
  srcBase: string;
  label: string;
};

const REFERENCES: RefItem[] = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  srcBase: `/referencias/ref${index + 1}`,
  label: `Referencia ${index + 1}`
}));

const EXTENSIONS = ["jpg", "png", "webp"];

export default function ReferenciasPage() {
  const [index, setIndex] = useState(0);
  const [extensionById, setExtensionById] = useState<Record<number, number>>({});
  const [fullyFailedById, setFullyFailedById] = useState<Record<number, boolean>>({});

  const current = REFERENCES[index];
  const extensionIndex = extensionById[current.id] ?? 0;
  const currentSrc = `${current.srcBase}.${EXTENSIONS[extensionIndex]}`;

  const progressText = useMemo(
    () => `${index + 1} / ${REFERENCES.length}`,
    [index]
  );

  const previous = () => {
    setIndex((prev) => (prev === 0 ? REFERENCES.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === REFERENCES.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="ref-page">
      <div className="bg-glow bg-glow-a" aria-hidden="true" />
      <div className="bg-glow bg-glow-b" aria-hidden="true" />

      <section className="ref-card" aria-label="Referencias de clientes">
        <header className="ref-header">
          <div className="ref-header-text">
            <p className="badge">Validación social</p>
            <h1>Referencias Marzo - 2026</h1>
            <p className="subtitle ref-subtitle">
              Historial de clientes y operaciones reales. También con referencias
              viejas de más de 2 años, mientras continuamos vendiendo en Telegram.
            </p>
            <p className="ref-telegram">
              Canal activo:{" "}
              <a href="https://t.me/referenciasfyis" target="_blank" rel="noreferrer">
                t.me/referenciasfyis
              </a>
            </p>
          </div>
          <Link href="/" className="back-home">
            ← Volver al inicio
          </Link>
        </header>

        <section className="ref-viewer" aria-label="Visor de referencias">
          <div className="ref-visual">
            {!fullyFailedById[current.id] ? (
              <img
                key={currentSrc}
                src={currentSrc}
                alt={current.label}
                className="ref-image"
                onError={() => {
                  const nextExtension = extensionIndex + 1;
                  if (nextExtension < EXTENSIONS.length) {
                    setExtensionById((prev) => ({
                      ...prev,
                      [current.id]: nextExtension
                    }));
                    return;
                  }

                  setFullyFailedById((prev) => ({ ...prev, [current.id]: true }));
                }}
              />
            ) : (
              <div className="ref-placeholder">
                <span>{current.label}</span>
                <p>Sube la imagen en `public/referencias/ref{current.id}.jpg`</p>
              </div>
            )}
          </div>

          <div className="ref-controls">
            <button type="button" className="nav-btn" onClick={previous}>
              ← Anterior
            </button>
            <span className="ref-progress">{progressText}</span>
            <button type="button" className="nav-btn" onClick={next}>
              Siguiente →
            </button>
          </div>

          <div className="ref-thumbs" aria-label="Selector de referencia">
            {REFERENCES.map((item, itemIndex) => (
              <button
                key={item.id}
                type="button"
                className={itemIndex === index ? "thumb active" : "thumb"}
                onClick={() => setIndex(itemIndex)}
                aria-label={`Ver ${item.label}`}
              >
                {item.id}
              </button>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
