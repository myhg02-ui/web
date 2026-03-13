# FYIS Web

Sitio principal de FYIS, pensado para inicio rápido en móvil y PC.

## Lo que incluye

- Diseño limpio y liviano (sin animaciones pesadas)
- 3 botones principales: **Bots**, **Contacto** y **Referencias**
- En **Bots** muestra plataformas activas y abre Netflix en nueva pestaña
- En **Contacto** muestra WhatsApp y Telegram
- En **Referencias** muestra visor de 10 imágenes (Marzo 2026)
- URL limpias (sin `.html`) gracias a Next.js
- Configuración lista para deploy en Vercel

## Carpeta de referencias

Guarda tus pruebas en:

- `public/referencias/`

Nombres sugeridos:

- `ref1.jpg`, `ref2.jpg`, ..., `ref10.jpg`

También acepta `png` y `webp` con el mismo nombre base.

## Ejecutar en local

Requisito local: **Node.js 18.17+** (recomendado 20 LTS).

```bash
npm install
npm run dev
```

Abre: `http://localhost:3000`

## Build de producción

```bash
npm run build
npm run start
```

## Deploy en Vercel

1. Sube este proyecto a GitHub.
2. Entra a Vercel y elige **New Project**.
3. Importa el repositorio.
4. Framework detectado: **Next.js**.
5. Deploy.

## Dominio corto sugerido

Si compras/configuras el dominio corto `fyis`, apúntalo en Vercel desde:

- `Project Settings` → `Domains`

## Nota del sello

Actualmente se usa `public/fyis-seal.svg` como sello visual optimizado.
Si quieres usar exactamente tu imagen original, reemplázala por ejemplo con:

- `public/fyis-seal.png`

y cambia la ruta en `app/page.tsx`.