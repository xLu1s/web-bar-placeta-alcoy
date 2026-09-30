# Repository Guidance — Web Bar La Placeta

Landing page (una sola página, en castellano) para la **Cervecería La Placeta**, un bar de tapas en el casco histórico de Alcoy.

## Comandos

- `npm run dev` — desarrollo local (`http://localhost:4321`).
- `npm run check` — diagnósticos de Astro/TypeScript.
- `npm run build` — build de producción en `dist/`.
- `npm run preview` — sirve el `dist/` ya construido.
- Ejecuta `npm run check` antes de `npm run build`. No hay suite de tests ni lint aparte.

## Estructura

- Astro estático, una única ruta: `src/pages/index.astro`, que envuelve `src/components/Landing.astro` con el layout `src/layouts/Base.astro`.
- Todo el contenido y los datos viven en `src/data/site.ts` (contacto, dirección, geo, horario, menú, FAQ). Edita ahí, no en el componente.
- `Base.astro` genera el `<head>` (SEO, Open Graph, JSON-LD `BarOrPub`, fuentes) y el `lang="es"`.
- `Landing.astro` contiene el markup completo de las secciones y un pequeño script vanilla (nav móvil, reveal-on-scroll, widget "abierto ahora", filtro de carta).
- `src/styles/global.css` es el design system: identidad cálida de comercio local (rojo `#D03229`, ámbar `#E08A1E`, dorado `#F7C948`, crema) con patrones de Material Design 2 (app bar, cards, botones, chips, FAB, elevación) y todo el responsive.

## Contenido (importante)

- Datos reales del negocio: teléfono `965 54 36 02`, email `laplacetalcoy@gmail.com`, dirección Carrer Pintor Casanova, 3 (03801 Alcoi), geo `38.6994388, -0.4732365`, valoración 4,1★ (~215 reseñas).
- Redes: Instagram `cervecerialaplacetacb` y Facebook (ver `site.ts`). **No** hay enlace a Glovo.
- Horario (el de Google): L–X 7:30–15:30 y 18:00–22:00; J 7:30–15:30 y 18:00–22:30; V 7:30–15:30 y 18:00–0:30; S 9:30–15:30 y 18:00–0:30; D cerrado.
- La carta sale de `images/menu.png`. **Los precios están pendientes**; no inventes precios.
- **No inventes alérgenos por plato**: la web remite a la lista de alérgenos disponible en el local.
- No inventes estadísticas, fechas ni reseñas atribuidas a personas.

## Imágenes y marca

- `public/favicon.svg` y `public/logo.svg` son el emblema vectorial (parcela roja + cerveza). El wordmark se compone con la fuente script `Kaushan Script`.
- Imágenes de contenido en `public/images/`. Mantén las URLs públicas estables.
- Las fotos del hero/platos se generan con **Higgsfield** (MCP `higgsfield` en la config global de opencode). Al terminar, añade las rutas al array `gallery` de `site.ts`.
- `og-image.png` (1200×630) se compone con el logo + imagen principal.

## Deploy

- GitHub Pages desde `github.com/xLu1s/web-bar-placeta-alcoy`, publicado en `https://xLu1s.github.io/web-bar-placeta-alcoy/`.
- Cada push a `main` construye y despliega con `.github/workflows/deploy.yml` (GitHub Actions, Node 22).
- `astro.config.mjs` deriva `site`/`base` de `GITHUB_REPOSITORY`, así que el subpath del proyecto se gestiona solo en CI y en local se mantiene `base: '/'`.
- Al ser un *project site*, cualquier URL de `public/` o enlace interno debe pasar por `import.meta.env.BASE_URL` (helper `asset()` en `Landing.astro`). Rutas fijas como `/images/...` dan 404 en el subpath.

## Verificación visual

- Valida con Playwright contra `npm run preview` en `http://localhost:4321`: desktop 1440×900 y móvil 390×844; revisa errores de consola, overflow horizontal, imágenes rotas y anclas.
- `astro preview` sirve el `dist/`, así que reconstruye antes de re-verificar.

## OpenCode

- El MCP `higgsfield` (`https://mcp.higgsfield.ai/mcp`) está en la config global; requiere reiniciar opencode tras cambios de config y autenticación OAuth.
- Playwright está configurado a nivel global.
