# FYIS Web

Sitio principal de FYIS, pensado para inicio rápido en móvil y PC.

## Lo que incluye

- Diseño limpio y liviano (sin animaciones pesadas)
- 2 botones principales: **Contacto** y **Bots**
- **Contacto** como vista principal para acceso inmediato
- En **Bots** muestra plataformas activas y abre Netflix en nueva pestaña
- En **Contacto** muestra WhatsApp principal, WhatsApp de pago y Telegram
- Enlace oficial: `https://fyis.mypemx.com/`
- URL limpias (sin `.html`) gracias a Next.js
- Configuración lista para deploy en Vercel

## Contactos configurados

- WhatsApp principal: `+63 9631207428`
- WhatsApp del pago (escribir por respaldo): `+51 986 215 989`
- Telegram principal: `@Fyis2`
- Telegram secundario: `@Fyis1`

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

Actualmente se usa `public/fyis-sello.png`.
Si quieres actualizarlo, reemplázalo con el mismo nombre:

- `public/fyis-sello.png`