"use client";

import Link from "next/link";
import { useState } from "react";

type TabKey = "bots" | "contacto";

const NETFLIX_LINK = "https://fyistv.mypemx.com/";
const WHATSAPP_LINK = "https://wa.me/51942354613";
const TELEGRAM_MAIN = "https://t.me/Fyis2";
const TELEGRAM_SECONDARY = "https://t.me/Fyis1";
const SITE_LINK = "https://fyis.mypemx.com/";

function IconWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

function IconTelegram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

export default function HomePage() {
  const [tab, setTab] = useState<TabKey>("bots");
  const [logoMissing, setLogoMissing] = useState(false);
  const [copied, setCopied] = useState(false);

  const copySiteLink = async () => {
    await navigator.clipboard.writeText(SITE_LINK);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          <div className="hero-text">
            <div className="badge-row">
              <p className="badge">
                <span className="status-dot" aria-hidden="true" />
                Centro de soporte
              </p>
            </div>
            <h1>FYIS</h1>
            <p className="subtitle">
              Servicio premium para soporte digital, verificación y atención
              continua.
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
          <Link href="/referencias" className="tab tab-link">
            Referencias
          </Link>
        </nav>

        {tab === "bots" ? (
          <section className="panel" aria-label="Bots de soporte">
            <div className="panel-title-row">
              <h2>Soporte con bot</h2>
            </div>
            <p className="hint">
              El bot ayuda al usuario con verificación de correo y acceso guiado.
            </p>
            <article className="platform-card">
              <div className="platform-meta">
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
                Ir a Netflix <IconArrow />
              </a>
            </article>
          </section>
        ) : (
          <section className="panel" aria-label="Datos de contacto">
            <div className="panel-title-row">
              <h2>Contacto actualizado</h2>
            </div>
            <p className="hint">
              Guarda este enlace ahora. Si se pierde WhatsApp, aquí siempre
              tendrás los contactos vigentes.
            </p>
            <div className="backup-link-box">
              <span className="backup-link-label">Enlace de respaldo:</span>
              <a href={SITE_LINK} target="_blank" rel="noreferrer">
                {SITE_LINK}
              </a>
              <button type="button" className="copy-btn" onClick={copySiteLink}>
                {copied ? "¡Copiado!" : "Copiar enlace"}
              </button>
            </div>
            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-icon whatsapp">
                  <IconWhatsApp />
                </div>
                <div className="contact-info">
                  <span className="contact-label">WhatsApp</span>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="contact-value">
                    +51 942 354 613
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon telegram">
                  <IconTelegram />
                </div>
                <div className="contact-info">
                  <span className="contact-label">Telegram principal</span>
                  <a href={TELEGRAM_MAIN} target="_blank" rel="noreferrer" className="contact-value">
                    @Fyis2
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon telegram">
                  <IconTelegram />
                </div>
                <div className="contact-info">
                  <span className="contact-label">Telegram secundario</span>
                  <a href={TELEGRAM_SECONDARY} target="_blank" rel="noreferrer" className="contact-value">
                    @Fyis1
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}