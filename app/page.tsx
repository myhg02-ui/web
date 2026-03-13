"use client";

import { useState } from "react";

type TabKey = "bots" | "contacto";

const NETFLIX_LINK = "https://fyistv.mypemx.com/";
const WHATSAPP_LINK = "https://wa.me/51942354613";
const TELEGRAM_MAIN = "https://t.me/Fyis2";
const TELEGRAM_SECONDARY = "https://t.me/Fyis1";

export default function HomePage() {
  const [tab, setTab] = useState<TabKey>("bots");

  return (
    <main className="page">
      <section className="card" aria-label="Inicio FYIS">
        <header className="hero">
          <img src="/fyis-seal.svg" alt="Sello de FYIS" className="seal" />
          <div>
            <p className="badge">Inicio principal</p>
            <h1>FYIS</h1>
            <p className="subtitle">
              Portal simple, rápido y animalista. Diseñado para celular y PC.
            </p>
          </div>
        </header>

        <nav className="tabs" aria-label="Secciones principales">
          <button
            type="button"
            className={tab === "bots" ? "tab active" : "tab"}
            onClick={() => setTab("bots")}
            aria-pressed={tab === "bots"}
          >
            Bots
          </button>
          <button
            type="button"
            className={tab === "contacto" ? "tab active" : "tab"}
            onClick={() => setTab("contacto")}
            aria-pressed={tab === "contacto"}
          >
            Contacto
          </button>
        </nav>

        {tab === "bots" ? (
          <section className="panel" aria-label="Plataformas activas">
            <h2>Plataformas activas</h2>
            <p className="hint">Tu acceso rápido para esta ocasión:</p>
            <article className="platform-card">
              <div>
                <p className="platform-label">Streaming</p>
                <h3>Netflix</h3>
                <p className="platform-description">
                  Abre la plataforma en una pestaña nueva con un solo toque.
                </p>
              </div>
              <a
                href={NETFLIX_LINK}
                target="_blank"
                rel="noreferrer"
                className="cta"
              >
                Abrir Netflix
              </a>
            </article>
          </section>
        ) : (
          <section className="panel" aria-label="Datos de contacto">
            <h2>Contacto directo</h2>
            <div className="contact-list">
              <p>
                <strong>WhatsApp:</strong>{" "}
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  +51 942 354 613
                </a>
              </p>
              <p>
                <strong>Telegram principal:</strong>{" "}
                <a href={TELEGRAM_MAIN} target="_blank" rel="noreferrer">
                  @Fyis2
                </a>
              </p>
              <p>
                <strong>Telegram secundario:</strong>{" "}
                <a href={TELEGRAM_SECONDARY} target="_blank" rel="noreferrer">
                  @Fyis1
                </a>
              </p>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}