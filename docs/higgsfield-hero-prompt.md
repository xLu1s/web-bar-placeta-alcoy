# Prompt del vídeo del hero (Higgsfield)

Objetivo: un clip corto (8–15 s) para el fondo del hero, estilo "bar de tapas
con alma" en el casco histórico de Alcoy. Debe funcionar en bucle, sin sonido y
en horizontal 16:9.

## Estado

- `site.ts` → `hero.hasVideo: false` mientras no exista `public/video/hero.mp4`.
- Al generar el vídeo: guardar en `public/video/hero.mp4` y poner
  `hero.hasVideo: true`. El componente ya lo renderiza con poster y overlay.

## Prompt (texto)

> Cinematic close-up of a young beer being poured from the tap into a tulip
> glass on a warm wooden bar counter in a cozy Spanish tapas bar, golden foam
> rising, soft bokeh of a small historic plaza through the window, hanging warm
> Edison lights, shallow depth of field, rich amber and deep red tones, steam
> from fresh tapas in the background, handheld subtle camera move, warm film
> grain, no people faces, slow motion, 4k, cinematic color grading.

## Negative / a evitar

- Texto o logos en pantalla.
- Caras reconocibles (evita problemas de imagen).
- Estética fría, colores azulados o look "corporativo".
- Movimientos bruscos de cámara (rompe el bucle).

## Especificaciones

- Duración: 8–15 s (o el mínimo disponible).
- Relación: 16:9 horizontal.
- Sin audio.
- Se recorta a `object-fit: cover`, así que el sujeto debe estar centrado y con
  aire arriba/abajo para el recorte responsive.

## Poster de respaldo

`public/images/hero.jpg` se usa como `poster` del `<video>` y como fondo si el
vídeo no carga. Puede sustituirse por un frame del vídeo generado.
