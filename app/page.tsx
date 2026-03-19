"use client";

import { useState } from "react";

type TabKey = "contacto" | "bots";

const NETFLIX_LINK = "https://fyistv.mypemx.com/";
const WHATSAPP_PRIMARY_LINK = "https://wa.me/51994399929";
const WHATSAPP_MAIN_LINK = "https://wa.me/639631207428";
const WHATSAPP_PAYMENT_LINK = "https://wa.me/51986215989";
const TELEGRAM_MAIN = "https://t.me/Fyis2";
const TELEGRAM_SECONDARY = "https://t.me/Fyis1";
const SITE_LINK = "https://fyis.mypemx.com/";

export default function HomePage() {
  const [tab, setTab] = useState<TabKey>("contacto");
  const [logoMissing, setLogoMissing] = useState(false);

  const copySiteLink = async () => {
    const link = typeof window !== "undefined" ? SITE_LINK : SITE_LINK;
    await navigator.clipboard.writeText(link);
  };

  return (
    <main className="page">
      <div className="bg-glow bg-glow-a" aria-hidden="true" />
      <div className="bg-glow bg-glow-b" aria-hidden="true" />
      <section className="card" aria-label="Inicio FYIS">
        <header className="hero">
          {!logoMissing ? (
            <img
              src="/fyis-sello.png"
              alt="Sello oficial de FYIS"
              className="seal"
              onError={() => setLogoMissing(true)}
            />
          ) : (
            <div className="seal-fallback" aria-label="Marca FYIS">
              <span>FYIS</span>
            </div>
          )}
          <div>
            <p className="badge">Centro de soporte</p>
            <h1>FYIS</h1>
            <p className="subtitle">
              Presiona cualquier contacto y te dirigirá directo al canal
              correspondiente.
            </p>
          </div>
        </header>

        <nav className="tabs" aria-label="Secciones principales">
          <button
            type="button"
            className={tab === "contacto" ? "tab active" : "tab"}
            onClick={() => setTab("contacto")}
            aria-pressed={tab === "contacto"}
          >
            Contacto
          </button>
          <button
            type="button"
            className={tab === "bots" ? "tab active" : "tab"}
            onClick={() => setTab("bots")}
            aria-pressed={tab === "bots"}
          >
            Bots
          </button>
        </nav>

        {tab === "contacto" ? (
          <section className="panel" aria-label="Datos de contacto">
            <h2>Contacto oficial</h2>
            <p className="hint">
              A veces los números se suspenden; por eso en esta web siempre
              verás mis contactos actualizados.
            </p>
            <div className="backup-link-box">
              <span className="backup-link-label">Enlace:</span>
              <a href={SITE_LINK} target="_blank" rel="noreferrer">
                {SITE_LINK}
              </a>
              <button type="button" className="copy-btn" onClick={copySiteLink}>
                Copiar enlace
              </button>
            </div>
            <div className="contact-grid">
              <article className="contact-item">
                <p className="mini-tag">WhatsApp</p>
                <p>
                  <strong>Principal:</strong>{" "}
                  <a href={WHATSAPP_PRIMARY_LINK} target="_blank" rel="noreferrer">
                    +51 994 399 929
                  </a>
                </p>
                <p>
                  <strong>Secundario:</strong>{" "}
                  <a href={WHATSAPP_MAIN_LINK} target="_blank" rel="noreferrer">
                    +63 9631207428
                  </a>
                </p>
              </article>
              <article className="contact-item">
                <p className="mini-tag">Respaldo de pagos</p>
                <p>
                  <strong>WhatsApp del pago (escribir por respaldo):</strong>{" "}
                  <a href={WHATSAPP_PAYMENT_LINK} target="_blank" rel="noreferrer">
                    +51 986 215 989
                  </a>
                </p>
              </article>
              <article className="contact-item">
                <p className="mini-tag">Telegram</p>
                <p>
                  <strong>Principal:</strong>{" "}
                  <a href={TELEGRAM_MAIN} target="_blank" rel="noreferrer">
                    @Fyis2
                  </a>
                </p>
                <p>
                  <strong>Secundario:</strong>{" "}
                  <a href={TELEGRAM_SECONDARY} target="_blank" rel="noreferrer">
                    @Fyis1
                  </a>
                </p>
              </article>
            </div>
          </section>
        ) : (
          <section className="panel" aria-label="Bots de soporte">
            <h2>Soporte con bot</h2>
            <p className="hint">
              El bot ayuda al usuario con verificación de correo y acceso guiado.
            </p>
            <article className="platform-card">
              <div>
                <p className="platform-label">Plataforma activa</p>
                <h3>Netflix</h3>
                <p className="platform-description">
                  Abre la plataforma en una nueva pestaña para continuar el
                  soporte.
                </p>
              </div>
              <a
                href={NETFLIX_LINK}
                target="_blank"
                rel="noreferrer"
                className="cta"
              >
                Ir a Netflix
              </a>
            </article>
          </section>
        )}
      </section>
    </main>
  );
}