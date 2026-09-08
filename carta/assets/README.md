# Archivos de la carta

Acá van las fotos y la música. Después referenciá las rutas en `CONFIG`, arriba de `carta.js`.

## Fotos

- Nombres sin espacios ni acentos: `hito-1.jpg`, `foto-a.jpg`.
- Redimensionalas a **1600 px** de lado mayor y guardalas en JPG con calidad ~80.
  Cada foto debería pesar menos de 400 KB: si no, en el celular se va a ver el salto mientras carga.
- Si dejás una ruta vacía (`photo: ''`) la página muestra un marco en su lugar,
  así podés armar todo el texto primero y agregar las fotos después.

## Música

- Un solo archivo `.mp3` (no Spotify ni YouTube: no se pueden usar como música de fondo).
- Idealmente menos de 5 MB. Si la canción es larga, exportala a 128 kbps.
- Ruta en `CONFIG.audio`, nombre visible en `CONFIG.song`, volumen en `CONFIG.volume`.
