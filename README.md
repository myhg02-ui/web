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

## Deploy en Vercel (CI/CD automático)

El repositorio incluye un workflow de GitHub Actions (`.github/workflows/deploy.yml`) que despliega automáticamente:

- **Push a `main`** → deploy de **producción**
- **Pull Request** → deploy de **preview** (publica la URL como comentario en el PR)

### Paso 1 — Conectar el proyecto a Vercel

1. Inicia sesión en [vercel.com](https://vercel.com) y crea un nuevo proyecto importando este repositorio.
2. En la primera configuración Vercel detecta Next.js automáticamente; haz clic en **Deploy** una sola vez para registrar el proyecto.
3. Una vez creado el proyecto, ve a **Settings → General** y anota:
   - **Project ID** (`prj_xxxxxxxxxx`)
4. Ve a **Settings → Account** (o **Team Settings** si es una organización) y anota:
   - **Team/Org ID** (`team_xxxxxxxxxx`)
5. Ve a tu perfil → **Settings → Tokens** y crea un token con nombre `github-actions`.

### Paso 2 — Agregar los secrets en GitHub

En tu repositorio de GitHub → **Settings → Secrets and variables → Actions → New repository secret**, agrega:

| Secret | Valor |
|---|---|
| `VERCEL_TOKEN` | Token de API creado en el paso anterior |
| `VERCEL_ORG_ID` | Team/Org ID de tu cuenta Vercel |
| `VERCEL_PROJECT_ID` | Project ID del proyecto en Vercel |

### Paso 3 — Hacer push

Cualquier push a `main` (o abrir un PR) disparará el workflow automáticamente.


## Dominio corto sugerido

Si compras/configuras el dominio corto `fyis`, apúntalo en Vercel desde:

- `Project Settings` → `Domains`

## Nota del sello

Actualmente se usa `public/fyis-seal.svg` como sello visual optimizado.
Si quieres usar exactamente tu imagen original, reemplázala por ejemplo con:

- `public/fyis-seal.png`

y cambia la ruta en `app/page.tsx`.