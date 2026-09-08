/* ═══════════════════════════════════════════════════════════════════════
   CARTA INTERACTIVA
   ───────────────────────────────────────────────────────────────────────
   TODO lo que se edita está en el objeto CONFIG de acá abajo.
   Más abajo del CONFIG está la lógica: no hace falta tocar nada ahí.

   Para las fotos: poné los archivos en la carpeta `assets/` y escribí la
   ruta (ej: 'assets/foto-1.jpg'). Si dejás la ruta vacía ('') se muestra
   un marco elegante en su lugar, así podés armar todo y agregar las
   fotos después.
   ═══════════════════════════════════════════════════════════════════════ */

const CONFIG = {

    /* ── Cómo la llamamos ───────────────────────────────────────────── */
    name: 'Pipi',   // el nombre grande de la portada
                    // el del cierre se configura abajo, en `closingName`

    /* ── 1. PANTALLA DE APERTURA ────────────────────────────────────── */
    /* Cualquier texto que dejes vacío ('') desaparece sin dejar hueco.
       Si querés la portada todavía más pelada, vaciá también introKicker. */
    introKicker: '8 de septiembre',
    introLine: '',
    openLabel: 'Abrir',
    introHint: '',

    /* ── 2. LA CARTA ────────────────────────────────────────────────── */
    /* Cada string es un párrafo. Aparecen de a uno al hacer scroll.
       Agregá o quitá los que quieras. */
    letterEyebrow: '',
    /* Lo que va entre **dobles asteriscos** se resalta.
       Están puestos con cuentagotas a propósito: si se resalta mucho, no
       se resalta nada. Son seis en toda la carta, y caen todos en la
       segunda mitad, que es donde el texto tuyo pega más fuerte.       */
    letter: [
        'Hola hermosa, FELIZ CUMPLEAÑOS.',
        'Este año cambio la metodología (? pero no la esencia: sigo sin encontrar mejor forma de decir todo lo que te amo, todo lo que me hacés sentir.',
        'Esta carta tiene otra forma. ¿Por qué? te preguntarás (ahre). PORQUE VIVIMOS JUNTOS: hace ya más de medio año que compartimos absolutamente todos nuestros días, y desde que nos mudamos hasta hoy me encargué de demostrarte lo contento que esto me tiene en la vida. No hay costumbre en las palabras de todos los días, donde encuentro una luz distinta que genera felicidad.',
        'Te amo. Gracias por elegirme siempre, por confiar en mí, por apostar y amarme como nadie me amó jamás en la vida, por demostrarme que sí se puede devolver todo lo que se recibe. Te juro pu, que **esto es para siempre**.',
        'No tengo grandes discursos para prometerte (me escuchás todos los días) y a veces siento que no hace falta: te ofrezco el respeto que te tengo, el amor que me generás, y las ganas de seguir adelante, de progresar, que **aparecieron justo cuando apareciste vos**.',
        'Tenés, sin dudas, la magia de hacer sonreír al más triste de tus amigos, de amar el doble de lo que decidís recibir. Sos de verdad, **la mejor persona del mundo** — no dejo de pensarlo, no dejo de decírtelo, no dejo de creerlo, me siento amado hermosa.',
        'Es por eso que vivir con vos — **con vos y Sombri** — me hace sentir la persona más afortunada del mundo.',
        'Dicen que el tiempo es un río; con vos se parece más a un laberinto donde, dé la vuelta que dé, termino en el mismo lugar: **siempre enamorado de vos**.',
        'Te amo, hermosa. Gracias por dejarme ser parte de tu vida. Te prometo que vamos a ser siempre todo lo que somos hoy, y mucho menos de lo que vamos a ser mañana.',
        'Gracias, linda. **Feliz cumpleaños**. Te amo.'
    ],
    signature: 'Tolei',

    /* ── 2b. EFECTO MÁQUINA DE ESCRIBIR ─────────────────────────────── */
    /* Cada párrafo se tipea cuando entra en pantalla. No borra ni repite:
       es una carta, no un cartel publicitario.
       `speed` son milisegundos por caracter. Más bajo = más rápido.
       Si lo ponés en false, la carta aparece con el fade de siempre.   */
    typing: {
        enabled: true,
        speed: 22,
        startDelay: 250,
        cursor: '_',
        cursorBlink: 0.7      // segundos por parpadeo
    },

    /* ── 3. LÍNEA DE TIEMPO ─────────────────────────────────────────── */
    /* Un bloque por año, con sus fotos. `text` es opcional: si lo dejás
       vacío queda solo el año, que es como pediste.
       Para agregar fotos, copialas a assets/ y sumá la ruta al array.
       Un '' dentro del array deja un marco vacío marcando el lugar.    */
    timelineEyebrow: 'Cinco años',
    timelineTitle: 'Nosotros, por año',
    timeline: [
        {
            year: '2021',
            text: '',
            photos: ['assets/2021-1.jpg', 'assets/2021-2.jpg', 'assets/2021-3.jpg']
        },
        {
            year: '2022',
            text: '',
            photos: ['assets/2022-1.jpg', 'assets/2022-2.jpg', 'assets/2022-3.jpg']
        },
        {
            year: '2023',
            text: '',
            photos: ['assets/2023-1.jpg', 'assets/2023-2.jpg', 'assets/2023-3.jpg']
        },
        {
            year: '2024',
            text: '',
            photos: ['assets/2024-1.jpg', 'assets/2024-2.jpg']
        },
        {
            year: '2025',
            text: '',
            photos: ['assets/2025-1.jpg', 'assets/2025-2.jpg', 'assets/2025-3.jpg']
        },
        {
            year: '2026',
            text: '',
            photos: [
                'assets/2026-1.jpg', 'assets/2026-2.jpg', 'assets/2026-3.jpg',
                'assets/2026-4.jpg', 'assets/2026-5.jpg'
            ]
        }
    ],

    /* ── FONDO ANIMADO ──────────────────────────────────────────────── */
    /* EL INTERRUPTOR: poné `enabled: false` y la carta vuelve al fondo
       crema de siempre, sin tocar nada más.
       Con el fondo prendido, cada sección se apoya sobre una hoja de
       papel para que el texto siga siendo negro sobre claro y se lea
       igual de bien. `fps` bajo y `dpr` en 1 para no fundir la batería
       del celular: el efecto es lento, no necesita 60 cuadros.        */
    background: {
        enabled: true,
        lineColor: '#EC4899',
        glowColor: '#F43F5E',
        speed: 0.2,
        scale: 2,
        rotation: 0,
        rotationSpeed: 0.25,
        layers: 4,
        waveAmplitude: 0.015,
        waveFrequency: 3,
        waveSpeed: 0.15,
        layerSpeed: 0.08,
        twist: 0.1,
        twistFrequency: 5,
        twistSpeed: 1.2,
        lineFrequency: 5,
        lineSpacing: 2,
        lineSharpness: 16,
        glowFalloff: 10,
        glowIntensity: 1.6,
        brightness: 1.5,     // más bajo que el ejemplo: detrás del papel
        blueBoost: 1.25,     // el original quemaba demasiado
        vignette: 0.8,
        grain: 0.05,
        dpr: 1,
        fps: 30
    },

    /* ── 3b. SOMBRI ─────────────────────────────────────────────────── */
    /* Las fotos giran sobre un recorrido en forma de corazón.
       `rotation` inclina el corazón, `duration` es lo que tarda una
       vuelta completa (en segundos), `itemSize` es el tamaño de cada
       foto dentro de un lienzo de 600, y `showPath` dibuja el contorno.
       Tocando el corazón se pausa y se reanuda el giro.                */
    sombriEyebrow: 'El tercero en discordia',
    sombriTitle: 'Sombri',
    sombriSub: 'Tocá el corazón para frenarlo.',
    sombri: {
        photos: [
            'assets/sombri-1.jpg', 'assets/sombri-2.jpg', 'assets/sombri-3.jpg',
            'assets/sombri-4.jpg', 'assets/sombri-5.jpg', 'assets/sombri-6.jpg'
        ],
        size: 400,          // tamaño del corazón dentro del lienzo de 600
        rotation: -8,       // grados de inclinación
        duration: 38,       // segundos por vuelta
        itemSize: 112,
        showPath: true
    },

    /* ── 4. GALERÍA ─────────────────────────────────────────────────── */
    /* Ahora las fotos viven en la línea de tiempo, agrupadas por año, así
       que esta sección está vacía y no se muestra. Si algún día querés
       una tanda de fotos suelta aparte, sumá rutas acá y reaparece sola.
       Sin usar por ahora: 'assets/sin-year-1.jpg' (el abrazo entre los
       jazmines), que me pasaste sin año asignado.                      */
    galleryEyebrow: 'Nosotros',
    galleryTitle: 'Algunas favoritas',
    gallery: [],

    /* ── 5. MENSAJES ESCONDIDOS ─────────────────────────────────────── */
    /* Cada tarjeta se abre al tocarla y reproduce su audio.
       - hint:    lo que se lee en la tapa, antes de abrirla
       - message: la frase que aparece adentro
       - source:  de dónde sale (película, serie, quien sea). Opcional.
       - audio:   el clip. Ponelo en assets/ y escribí la ruta acá.
                  Si lo dejás vacío, la tarjeta funciona igual, muda.
       Podés poner las que quieras: la grilla se acomoda sola.          */
    /* El texto que se ve es el remate de cada clip, no la transcripción
       entera: el audio dice todo lo demás. Si te dejo el párrafo
       completo en la tarjeta, ella lee en vez de escuchar.
       `source` está vacío porque no quiero inventarte de qué película es
       cada uno: completalos vos y aparecen abajo en chiquito.          */
    surprisesEyebrow: 'Hay más',
    surprisesTitle: 'Escuchá esto',
    surprisesSub: 'Tocá cada una. La música baja sola mientras suena.',
    clipVolume: 1,
    surprises: [
        {
            hint: 'Lo más fácil que hice en mi vida',
            message: 'Te amé el día que te conocí. Te amo hoy y te amaré el resto de mi vida.',
            source: '',
            audio: 'assets/uno.mp3'
        },
        {
            hint: 'En qué pienso todo el día',
            message: 'Mientras estés tú en mi vida, tengo todo lo que siempre quise.',
            source: '',
            audio: 'assets/dos.mp3'
        },
        {
            hint: 'Tengo una oferta para vos',
            message: 'Seré tu certeza. Es mi última oferta, y no podés negociar porque no tengo nada más que ofrecerte.',
            source: '',
            audio: 'assets/tres.mp3'
        },
        {
            hint: '¿Cómo lo sabés?',
            message: 'Porque sin ella nada tiene sentido.',
            source: '',
            audio: 'assets/cuatro.mp3'
        },
        {
            hint: 'Cómo se escribe "te elijo a ti"',
            message: 'Te elijo con la tranquilidad de que también te elegiré mañana.',
            source: 'Alejandra Pizarnik',
            audio: 'assets/cinco.mp3'
        }
    ],

    /* ── 6. MÚSICA ──────────────────────────────────────────────────── */
    /* Poné el .mp3 en `assets/` y escribí la ruta acá.
       Si lo dejás vacío, el reproductor simplemente no aparece.        */
    /* Dos canciones: una en la portada y otra al abrir la carta.
       OJO: los navegadores prohíben que un sitio haga sonar audio sin
       que el usuario toque algo. La de la portada arranca con el primer
       toque en cualquier parte de la pantalla que NO sea el botón; si
       toca el botón directo, pasa a la otra y listo.                  */
    introAudio: 'assets/intro-web.mp3',
    introVolume: 0.3,

    audio: 'assets/cancioncarta.mp3',
    song: 'Do You Want To Know A Secret — The Beatles',
    volume: 0.1,                        // de 0 a 1, bien de fondo
    /* La canción es corta (1:57), así que se repite en loop mientras
       ella lee. El loop está puesto en el <audio> del index.html.     */

    /* ── 7. CIERRE ──────────────────────────────────────────────────── */
    closingEyebrow: 'Una última cosa',
    closingGreeting: 'Feliz cumpleaños,',
    closingName: 'mi amor',
    closingLine: '¿NOS RE FUIMOS A LAS EUROPAS? OA.',
    closingSign: 'Te amo, hermosa. — Tolei'
};


/* ═══════════════════════════════════════════════════════════════════════
   De acá para abajo es la lógica. Podés no tocar nada.
   ═══════════════════════════════════════════════════════════════════════ */

(function () {
    'use strict';

    const $  = (sel) => document.querySelector(sel);
    const $$ = (sel) => Array.from(document.querySelectorAll(sel));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ── Volcado de textos simples a los [data-slot] del HTML ─────────
       Si el texto viene vacío sacamos el elemento del DOM, así no queda
       un margen fantasma ocupando lugar en la portada.                 */
    $$('[data-slot]').forEach((el) => {
        const value = CONFIG[el.dataset.slot];
        if (typeof value !== 'string') return;

        if (value === '') el.remove();
        else el.textContent = value;
    });

    /* ── Helper: devuelve un bloque de foto o un marco vacío ────────── */
    function buildPhoto(src, alt) {
        const box = document.createElement('div');
        box.className = 'photo';

        if (!src) {
            box.classList.add('photo--empty');
            box.innerHTML = '<span>Foto</span>';
            return box;
        }

        const img = document.createElement('img');
        img.src = src;
        img.alt = alt || '';
        img.loading = 'lazy';
        img.decoding = 'async';
        box.appendChild(img);
        return box;
    }

    /* ── Helper: la misma foto, pero montada como polaroid ───────────
       Primer toque la endereza, el segundo la amplía. En desktop se
       endereza sola con el mouse, así que el click amplía directo.    */
    const ROTATIONS = [-2.5, 1.8, -1.4, 2.6, -2, 1.2, -1.7, 2.2, -2.8, 1.6];
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    function buildPolaroid(src, alt, caption, index) {
        const wrap = document.createElement('div');
        wrap.className = 'polaroid-wrap';

        const card = document.createElement('div');
        card.className = 'polaroid';
        card.style.setProperty('--rot', ROTATIONS[index % ROTATIONS.length] + 'deg');
        card.appendChild(buildPhoto(src, alt));

        if (caption) {
            const cap = document.createElement('span');
            cap.className = 'polaroid__caption';
            cap.textContent = caption;
            card.appendChild(cap);
        } else {
            // Sin leyenda no hace falta el margen ancho de abajo
            card.classList.add('polaroid--bare');
        }

        wrap.appendChild(card);

        card.addEventListener('click', () => {
            // Si ya está derecha (o estamos con mouse), ampliamos
            if (src && (finePointer || wrap.classList.contains('is-straight'))) {
                openLightbox(src, alt);
                return;
            }
            // Enderezamos esta y volvemos a torcer las demás
            $$('.polaroid-wrap.is-straight').forEach((other) => {
                if (other !== wrap) other.classList.remove('is-straight');
            });
            wrap.classList.toggle('is-straight');
        });

        return wrap;
    }

    /* ── 2. Carta, con efecto de máquina de escribir ──────────────────
       Cada párrafo lleva dos capas:
         · el "fantasma" tiene el texto completo con opacidad 0. No se ve,
           pero ocupa el lugar exacto que va a ocupar el texto final, así
           la página no salta hacia abajo mientras se escribe. Los
           lectores de pantalla lo leen normalmente.
         · el visible va encima, en absoluto, y recibe letra por letra.
       Se tipea de a un párrafo por vez, en orden, en una cola.         */
    const letterBody = $('#letterBody');
    const typing = CONFIG.typing || {};
    const typeEnabled = typing.enabled && !reduceMotion;
    const lines = [];

    /* Parte el texto en tramos normales y resaltados, según los
       **asteriscos**. El tipeo necesita esto porque no puede escribir
       HTML letra por letra: escribe dentro de un tramo a la vez. */
    function tokenize(raw) {
        const out = [];
        const re = /\*\*(.+?)\*\*/g;
        let last = 0;
        let m;

        while ((m = re.exec(raw)) !== null) {
            if (m.index > last) out.push({ bold: false, text: raw.slice(last, m.index) });
            out.push({ bold: true, text: m[1] });
            last = m.index + m[0].length;
        }
        if (last < raw.length) out.push({ bold: false, text: raw.slice(last) });
        return out;
    }

    function renderTokens(target, tokens) {
        target.textContent = '';
        tokens.forEach((tk) => {
            const node = document.createElement(tk.bold ? 'strong' : 'span');
            node.textContent = tk.text;
            target.appendChild(node);
        });
    }

    CONFIG.letter.forEach((raw, i) => {
        const tokens = tokenize(raw);
        const p = document.createElement('p');
        p.className = 'letter-line reveal';
        p.style.setProperty('--delay', (i % 2) * 90 + 'ms');

        if (!typeEnabled) {
            renderTokens(p, tokens);
            letterBody.appendChild(p);
            return;
        }

        const ghost = document.createElement('span');
        ghost.className = 'letter-line__ghost';
        renderTokens(ghost, tokens);

        const typed = document.createElement('span');
        typed.className = 'letter-line__typed';
        typed.setAttribute('aria-hidden', 'true');

        const cursor = document.createElement('span');
        cursor.className = 'letter-line__cursor';
        cursor.textContent = typing.cursor || '_';
        cursor.style.setProperty('--blink', (typing.cursorBlink || 0.7) + 's');

        p.append(ghost, typed);
        letterBody.appendChild(p);
        lines.push({ el: p, tokens: tokens, typed: typed, cursor: cursor, done: false });
    });

    /* La cola: los párrafos se anotan al entrar en pantalla y se escriben
       de a uno. Si ella scrollea rápido y deja atrás uno sin terminar, se
       completa de golpe en vez de hacerla esperar. */
    const queue = [];
    let busy = false;

    function finishLine(line) {
        line.done = true;
        renderTokens(line.typed, line.tokens);
        if (line.cursor.parentNode) line.cursor.remove();
    }

    function typeLine(line, whenDone) {
        // Ya quedó arriba de la pantalla: no tiene sentido hacerla esperar
        if (line.el.getBoundingClientRect().bottom < 0) {
            finishLine(line);
            whenDone();
            return;
        }

        line.typed.textContent = '';
        line.typed.appendChild(line.cursor);

        let ti = 0;    // tramo actual
        let ci = 0;    // caracter dentro del tramo
        let node = null;

        (function step() {
            if (line.done) { whenDone(); return; }

            if (ti >= line.tokens.length) {
                finishLine(line);
                whenDone();
                return;
            }

            const tk = line.tokens[ti];

            // Arranca un tramo nuevo: crea su contenedor antes del cursor
            if (node === null) {
                node = document.createElement(tk.bold ? 'strong' : 'span');
                line.typed.insertBefore(node, line.cursor);
            }

            node.textContent += tk.text[ci];
            ci++;

            if (ci >= tk.text.length) { ti++; ci = 0; node = null; }

            setTimeout(step, typing.speed || 22);
        })();
    }

    function pump() {
        if (busy) return;
        const line = queue.shift();
        if (!line) return;
        if (line.done) { pump(); return; }

        busy = true;
        typeLine(line, () => { busy = false; pump(); });
    }

    function initTyping() {
        if (!typeEnabled) return;

        if (!('IntersectionObserver' in window)) {
            lines.forEach(finishLine);
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const line = lines.find((l) => l.el === entry.target);
                if (line && !line.done && !queue.includes(line)) {
                    queue.push(line);
                    setTimeout(pump, typing.startDelay || 0);
                }
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.1 });

        lines.forEach((l) => observer.observe(l.el));

        // Salida de emergencia: si se impacienta, toca y aparece todo
        letterBody.addEventListener('click', () => {
            queue.length = 0;
            lines.forEach(finishLine);
        });
    }

    /* ── 3. Timeline por año ────────────────────────────────────────── */
    const timelineList = $('#timelineList');
    let rotIndex = 0;   // corre a lo largo de toda la página, así no se
                        // repite el mismo ángulo en fotos vecinas

    CONFIG.timeline.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'tl-item reveal';

        const year = document.createElement('h3');
        year.className = 'tl-year';
        year.textContent = item.year;
        li.appendChild(year);

        if (item.text) {
            const text = document.createElement('p');
            text.className = 'tl-text';
            text.textContent = item.text;
            li.appendChild(text);
        }

        const photos = item.photos || [];
        if (photos.length) {
            const grid = document.createElement('div');
            grid.className = 'tl-photos';
            photos.forEach((src) => {
                grid.appendChild(buildPolaroid(src, item.year, '', rotIndex++));
            });
            li.appendChild(grid);
        }

        timelineList.appendChild(li);
    });

    /* ── FONDO ANIMADO (WebGL2 puro) ──────────────────────────────────
       El componente original usaba la librería `ogl`. Acá está hecho con
       WebGL2 a mano: es el mismo shader, sin sumar dependencias.
       Si algo falla —no hay WebGL2, no compila el shader— devolvemos
       false y la carta se queda con su fondo crema. Nunca se rompe.  */
    const BG_VERT = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }`;

    const BG_FRAG = `#version 300 es
precision highp float;

uniform vec2 uResolution;
uniform float uTime, uSpeed, uScale, uRotation, uLayers;
uniform float uWaveAmplitude, uWaveFrequency, uWaveSpeed, uLayerSpeed;
uniform float uTwist, uTwistFrequency, uTwistSpeed;
uniform float uLineFrequency, uLineSpacing, uLineSharpness;
uniform float uGlowFalloff, uGlowIntensity;
uniform float uBrightness, uBlueBoost, uVignette, uGrain, uRotationSpeed;
uniform vec3 uLineColor, uGlowColor;

out vec4 fragColor;
#define MAX_LAYERS 10

mat2 rotate2d(float a) {
  float s = sin(a), c = cos(a);
  return mat2(c, -s, s, c);
}

float grainHash(vec2 p) {
  p = floor(p);
  return fract(52.9829189 * fract(dot(p, vec2(0.065, 0.005))));
}

float layeredGrain(vec2 fp) {
  vec2 p = mod(fp + vec2(uTime * 30.0, -uTime * 21.0), 1024.0);
  vec2 r = mat2(0.8, -0.5, 0.5, 0.8) * p;
  float g = 0.0;
  g += 0.40 * grainHash(r);
  g += 0.25 * grainHash(r * 2.0 + 17.0);
  g += 0.20 * grainHash(r * 4.0 + 47.0);
  g += 0.10 * grainHash(r * 8.0 + 113.0);
  g += 0.05 * grainHash(r * 16.0 + 191.0);
  return g;
}

void main() {
  vec2 res = max(uResolution, vec2(1.0));
  vec2 uv = (2.0 * gl_FragCoord.xy - res) / res.y;
  float time = uTime * uSpeed;
  vec3 backdrop = vec3(0.070588, 0.058824, 0.090196);
  vec3 centerTone = max(uLineColor * 0.85567 - uGlowColor * 0.06186, vec3(0.0));
  vec3 cloudTone = uLineColor * 0.19588 + uGlowColor * 0.2268;

  vec2 p = uv / max(uScale, 0.05);
  p = rotate2d(radians(uRotation) + time * uRotationSpeed) * p;
  vec3 color = vec3(0.0);

  for (int i = 0; i < MAX_LAYERS; i++) {
    float fi = float(i) + 1.0;
    if (fi > uLayers) break;

    p += uWaveAmplitude * sin(p.yx * fi * uWaveFrequency + time * (uWaveSpeed + fi * uLayerSpeed));

    float radius = length(p);
    float ang = atan(p.y, p.x) + sin(radius * uTwistFrequency - time * uTwistSpeed + fi) * uTwist;
    p = vec2(cos(ang), sin(ang)) * radius;

    float lines = abs(sin(p.x * (uLineFrequency + fi * uLineSpacing) + sin(p.y * 3.0 + time)));
    lines = pow(max(0.0, 1.0 - lines), uLineSharpness);
    color += uLineColor * lines / fi;

    float glow = exp(-uGlowFalloff * abs(sin(p.x * 3.0 + time + fi)));
    color += uGlowColor * glow * uGlowIntensity / (fi * 2.0);
  }

  float center = exp(-2.2 * dot(uv, uv));
  color += centerTone * center;

  float cloud = exp(-1.5 * length(uv + vec2(sin(time * 0.3) * 0.25, cos(time * 0.25) * 0.18)));
  color += cloudTone * cloud;

  float vig = 1.0 - smoothstep(0.35, 1.45, length(uv));
  color *= mix(1.0 - uVignette, 1.0, vig);
  color = 1.0 - exp(-color * uBrightness);
  color.b *= uBlueBoost;

  vec3 out3 = backdrop + color;
  float noise = (layeredGrain(gl_FragCoord.xy) - 0.5) * uGrain;
  fragColor = vec4(clamp(out3 + noise, 0.0, 1.0), 1.0);
}`;

    function hexToRgb(hex) {
        const v = String(hex).trim().replace(/^#/, '');
        const n = v.length === 3 ? v.replace(/./g, (c) => c + c) : v;
        const m = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);
        if (!m) return [1, 1, 1];
        return [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255];
    }

    function initBackground() {
        const cfg = CONFIG.background;
        const canvas = $('#bg');
        if (!cfg || !cfg.enabled || !canvas) return false;

        const gl = canvas.getContext('webgl2', { alpha: false, antialias: false });
        if (!gl) return false;

        function compile(type, src) {
            const sh = gl.createShader(type);
            gl.shaderSource(sh, src);
            gl.compileShader(sh);
            if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
                console.warn('shader:', gl.getShaderInfoLog(sh));
                return null;
            }
            return sh;
        }

        const vs = compile(gl.VERTEX_SHADER, BG_VERT);
        const fs = compile(gl.FRAGMENT_SHADER, BG_FRAG);
        if (!vs || !fs) return false;

        const prog = gl.createProgram();
        gl.attachShader(prog, vs);
        gl.attachShader(prog, fs);
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return false;
        gl.useProgram(prog);

        // Un solo triángulo que tapa toda la pantalla: más barato que dos
        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
        const loc = gl.getAttribLocation(prog, 'position');
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

        const U = (name) => gl.getUniformLocation(prog, name);
        const uTime = U('uTime');
        const uRes = U('uResolution');

        // Los que no cambian nunca se cargan una sola vez
        gl.uniform3fv(U('uLineColor'), hexToRgb(cfg.lineColor));
        gl.uniform3fv(U('uGlowColor'), hexToRgb(cfg.glowColor));
        [
            ['uSpeed', cfg.speed], ['uScale', cfg.scale],
            ['uRotation', cfg.rotation], ['uRotationSpeed', cfg.rotationSpeed],
            ['uLayers', Math.min(Math.max(Math.round(cfg.layers), 1), 10)],
            ['uWaveAmplitude', cfg.waveAmplitude], ['uWaveFrequency', cfg.waveFrequency],
            ['uWaveSpeed', cfg.waveSpeed], ['uLayerSpeed', cfg.layerSpeed],
            ['uTwist', cfg.twist], ['uTwistFrequency', cfg.twistFrequency],
            ['uTwistSpeed', cfg.twistSpeed], ['uLineFrequency', cfg.lineFrequency],
            ['uLineSpacing', cfg.lineSpacing], ['uLineSharpness', cfg.lineSharpness],
            ['uGlowFalloff', cfg.glowFalloff], ['uGlowIntensity', cfg.glowIntensity],
            ['uBrightness', cfg.brightness], ['uBlueBoost', cfg.blueBoost],
            ['uVignette', cfg.vignette], ['uGrain', cfg.grain]
        ].forEach(([name, value]) => gl.uniform1f(U(name), value));

        const dpr = Math.min(Math.max(cfg.dpr || 1, 0.5), 2);

        function resize() {
            const w = Math.max(1, Math.floor(window.innerWidth * dpr));
            const h = Math.max(1, Math.floor(window.innerHeight * dpr));
            if (canvas.width === w && canvas.height === h) return;
            canvas.width = w;
            canvas.height = h;
            gl.viewport(0, 0, w, h);
            gl.uniform2f(uRes, w, h);
        }

        let raf = 0;
        let elapsed = 0;
        let prev = performance.now();
        let lastDraw = 0;
        const frameMs = 1000 / Math.min(Math.max(cfg.fps || 30, 1), 120);

        function draw() {
            gl.uniform1f(uTime, elapsed);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
        }

        function loop(now) {
            raf = 0;
            if (document.hidden || reduceMotion) return;

            elapsed += Math.min((now - prev) / 1000, 0.1);
            prev = now;

            if (now - lastDraw >= frameMs - 0.5) { draw(); lastDraw = now; }
            raf = requestAnimationFrame(loop);
        }

        function start() {
            if (raf || document.hidden || reduceMotion) return;
            prev = performance.now();
            raf = requestAnimationFrame(loop);
        }
        function stop() {
            if (raf) cancelAnimationFrame(raf);
            raf = 0;
        }

        resize();
        draw();          // un cuadro fijo, para que se vea aunque no anime
        start();

        window.addEventListener('resize', () => { resize(); draw(); });
        // Si se va a otra pestaña o bloquea el celu, frenamos: si no,
        // sigue quemando batería dibujando algo que nadie ve
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) stop(); else start();
        });

        return true;
    }

    /* El fondo es lo último que importa: si explota por cualquier motivo
       (un driver raro, un navegador que dice soportar WebGL2 y miente),
       no puede llevarse puesta la carta. Por eso va envuelto en un
       try/catch y la clase del tema oscuro se agrega solo si arrancó. */
    let bgOk = false;
    try {
        bgOk = initBackground();
    } catch (err) {
        console.warn('Fondo animado desactivado:', err);
        bgOk = false;
    }
    if (bgOk) document.documentElement.classList.add('has-bg');

    /* ── 3b. Sombri: fotos girando sobre un corazón ───────────────────
       Se dibuja en un lienzo fijo de 600x600 y después se escala al
       ancho real del contenedor. Trabajar en coordenadas fijas es lo
       que permite que el recorrido sea idéntico en cualquier pantalla.
       El movimiento lo hace `offset-path` de CSS, no JavaScript: es el
       navegador el que mueve las fotos, así no laguea en un celular.  */
    const BASE = 600;

    function heartPath(cx, cy, size) {
        const s = size / 30;
        return `M ${cx} ${cy + 12 * s}` +
               ` C ${cx - 20 * s} ${cy - 5 * s}, ${cx - 12 * s} ${cy - 18 * s}, ${cx} ${cy - 8 * s}` +
               ` C ${cx + 12 * s} ${cy - 18 * s}, ${cx + 20 * s} ${cy - 5 * s}, ${cx} ${cy + 12 * s}`;
    }

    function buildOrbit() {
        const box = $('#orbit');
        const cfg = CONFIG.sombri;

        if (!box) return;
        if (!cfg || !cfg.photos || !cfg.photos.length) { $('#sombri').remove(); return; }

        // offset-path es lo que mueve las fotos. Sin soporte, mostramos
        // las mismas fotos en una fila prolija en lugar de nada.
        const canOrbit = window.CSS && CSS.supports && CSS.supports('offset-path', 'path("M 0 0 L 1 1")');
        if (!canOrbit) {
            box.classList.add('orbit--fallback');
            cfg.photos.forEach((src) => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = 'Sombri';
                img.loading = 'lazy';
                box.appendChild(img);
            });
            return;
        }

        const path = heartPath(BASE / 2, BASE / 2, cfg.size);

        const scaler = document.createElement('div');
        scaler.className = 'orbit__scale';
        scaler.style.width = BASE + 'px';
        scaler.style.height = BASE + 'px';

        const rot = document.createElement('div');
        rot.className = 'orbit__rot';
        rot.style.transform = `rotate(${cfg.rotation}deg)`;

        if (cfg.showPath) {
            rot.insertAdjacentHTML('beforeend',
                `<svg class="orbit__svg" viewBox="0 0 ${BASE} ${BASE}" aria-hidden="true">
                     <path d="${path}" fill="none" stroke-width="2" />
                 </svg>`);
        }

        const total = cfg.photos.length;
        cfg.photos.forEach((src, i) => {
            const item = document.createElement('div');
            item.className = 'orbit__item';
            item.style.width = cfg.itemSize + 'px';
            item.style.height = cfg.itemSize + 'px';
            item.style.offsetPath = `path("${path}")`;
            // Reparte las fotos a lo largo del recorrido arrancando la
            // animación de cada una en un punto distinto del ciclo
            item.style.animationDuration = cfg.duration + 's';
            item.style.animationDelay = `-${(cfg.duration * i) / total}s`;
            item.style.offsetDistance = `${(i / total) * 100}%`;

            const inner = document.createElement('div');
            inner.className = 'orbit__photo';
            // Contrarresta la inclinación del corazón para que las fotos
            // queden derechas y no torcidas
            inner.style.transform = `rotate(${-cfg.rotation}deg)`;

            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Sombri';
            img.loading = 'lazy';
            img.decoding = 'async';
            img.draggable = false;

            inner.appendChild(img);
            item.appendChild(inner);
            rot.appendChild(item);
        });

        scaler.appendChild(rot);
        box.appendChild(scaler);

        const center = document.createElement('span');
        center.className = 'orbit__center';
        center.textContent = CONFIG.sombriTitle;
        box.appendChild(center);

        if (!reduceMotion) box.classList.add('orbit--running');

        // Escalar el lienzo de 600 al ancho real
        function fit() {
            scaler.style.transform =
                `translate(-50%, -50%) scale(${box.clientWidth / BASE})`;
        }
        fit();

        if ('ResizeObserver' in window) new ResizeObserver(fit).observe(box);
        else window.addEventListener('resize', fit);

        // Tocar el corazón frena el giro
        box.addEventListener('click', () => box.classList.toggle('is-paused'));
    }

    buildOrbit();

    /* ── 4. Galería ─────────────────────────────────────────────────── */
    const galleryGrid = $('#galleryGrid');

    if (!CONFIG.gallery.length) {
        // Vacía: la sacamos entera en vez de dejar un título huérfano
        $('#galeria').remove();
    } else {
        CONFIG.gallery.forEach((item, i) => {
            const photo = buildPolaroid(item.photo, item.alt, item.caption, rotIndex++);
            photo.classList.add('reveal');
            photo.style.setProperty('--delay', (i % 3) * 120 + 'ms');
            galleryGrid.appendChild(photo);
        });
    }

    /* ── 5. Tarjetas sorpresa, con audio ─────────────────────────────
       Un solo reproductor compartido para todos los clips: si cada
       tarjeta tuviera el suyo, se podrían pisar entre ellas.          */
    const clipAudio = new Audio();
    clipAudio.preload = 'none';
    let playingCard = null;

    function stopClip() {
        clipAudio.pause();
        clipAudio.currentTime = 0;
        if (playingCard) {
            playingCard.classList.remove('is-playing');
            playingCard = null;
        }
        unduckMusic();
    }

    function playClip(src, card) {
        if (!src) return;

        stopClip();
        clipAudio.src = src;
        clipAudio.volume = CONFIG.clipVolume;

        clipAudio.play().then(() => {
            playingCard = card;
            card.classList.add('is-playing');
            duckMusic();
        }).catch(() => { /* si no carga, la frase igual se lee */ });
    }

    clipAudio.addEventListener('ended', stopClip);

    /* Solo pedimos los metadatos de cada clip, no el audio completo:
       bajar los cinco enteros serían más de 5 MB de datos móviles antes
       de que ella toque nada. El mp3 arranca igual de rápido porque se
       reproduce mientras se descarga. */
    const clipCache = [];

    function preloadClips() {
        CONFIG.surprises.forEach((item) => {
            if (!item.audio) return;
            const a = new Audio();
            a.preload = 'metadata';
            a.src = item.audio;
            clipCache.push(a);
        });
    }

    const cardsGrid = $('#cardsGrid');

    CONFIG.surprises.forEach((item, i) => {
        // div y no button porque adentro va otro botón, el de repetir
        const card = document.createElement('div');
        card.className = 'card reveal';
        card.style.setProperty('--delay', (i % 3) * 120 + 'ms');
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-expanded', 'false');

        const inner = document.createElement('div');
        inner.className = 'card__inner';

        const front = document.createElement('div');
        front.className = 'card__face card__face--front';
        const hint = document.createElement('span');
        hint.className = 'card__hint';
        hint.textContent = item.hint;
        const small = document.createElement('small');
        small.textContent = item.audio ? 'Tocar para escuchar' : 'Tocar';
        hint.appendChild(small);
        front.appendChild(hint);

        const back = document.createElement('div');
        back.className = 'card__face card__face--back';

        const msg = document.createElement('p');
        msg.className = 'card__msg';
        msg.textContent = item.message;
        back.appendChild(msg);

        if (item.source) {
            const source = document.createElement('span');
            source.className = 'card__source';
            source.textContent = item.source;
            back.appendChild(source);
        }

        // Barritas que se mueven mientras suena, y sirven para repetir
        let replay = null;
        if (item.audio) {
            replay = document.createElement('button');
            replay.type = 'button';
            replay.className = 'card__replay';
            replay.setAttribute('aria-label', 'Volver a escuchar');
            replay.innerHTML = '<i></i><i></i><i></i><i></i>';
            back.appendChild(replay);

            replay.addEventListener('click', (e) => {
                e.stopPropagation();   // que no cierre la tarjeta
                playClip(item.audio, card);
            });
        }

        inner.append(front, back);
        card.appendChild(inner);

        function toggleCard() {
            const opening = !card.classList.contains('is-flipped');

            if (opening) {
                // Una sola abierta a la vez: si no, se solapan los audios
                $$('.card.is-flipped').forEach((other) => {
                    other.classList.remove('is-flipped');
                    other.setAttribute('aria-expanded', 'false');
                });
                card.classList.add('is-flipped');
                card.setAttribute('aria-expanded', 'true');
                playClip(item.audio, card);
            } else {
                card.classList.remove('is-flipped');
                card.setAttribute('aria-expanded', 'false');
                if (playingCard === card) stopClip();
            }
        }

        card.addEventListener('click', toggleCard);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleCard();
            }
        });

        cardsGrid.appendChild(card);
    });

    /* ── Fondos alternados ──────────────────────────────────────────────
       Se calculan acá y no en el CSS porque alguna sección puede haberse
       eliminado (la galería, si está vacía) y quedarían dos fondos
       iguales pegados. */
    $$('.section:not(.section--closing)').forEach((section, i) => {
        section.classList.toggle('section--alt', i % 2 === 1);
    });

    /* ── Reveals al entrar en pantalla ──────────────────────────────────
       Se activan recién al abrir la carta: si observáramos desde el
       arranque, la primera sección se revelaría detrás de la portada y
       ella no vería la animación.                                      */
    function initReveals() {
        const revealables = $$('.reveal');

        if (reduceMotion || !('IntersectionObserver' in window)) {
            revealables.forEach((el) => el.classList.add('is-in'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-in');
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

        revealables.forEach((el) => observer.observe(el));
    }

    /* ── Música ─────────────────────────────────────────────────────── */
    const audio    = $('#audio');
    const player   = $('#player');
    const musicBtn = $('#musicBtn');
    const hasAudio = Boolean(CONFIG.audio);

    if (hasAudio) {
        audio.src = CONFIG.audio;
        audio.volume = CONFIG.volume;
    }

    /* Fader genérico: sirve para la entrada de la música, para bajarla
       cuando suena un clip, y para el cruce entre las dos canciones. */
    function fade(el, target, ms, whenDone) {
        clearInterval(el._fade);
        const from = el.volume;
        const step = 50;
        let elapsed = 0;

        el._fade = setInterval(() => {
            elapsed += step;
            const t = Math.min(1, elapsed / ms);
            el.volume = Math.max(0, Math.min(1, from + (target - from) * t));
            if (t === 1) {
                clearInterval(el._fade);
                if (whenDone) whenDone();
            }
        }, step);
    }

    let fadeTimer = null;
    function fadeTo(target, ms) {
        fadeTimer = null;
        fade(audio, target, ms);
    }

    /* ── Canción de la portada ────────────────────────────────────────
       Se intenta arrancar sola al cargar, pero lo normal es que el
       navegador lo bloquee. El respaldo real es el primer toque en la
       portada: cualquier lugar menos el botón, para que un toque en el
       botón no haga sonar media nota antes de cambiar de canción.    */
    const introEl = CONFIG.introAudio ? new Audio() : null;

    if (introEl) {
        introEl.src = CONFIG.introAudio;
        introEl.loop = true;
        introEl.preload = 'none';
        introEl.volume = CONFIG.introVolume;
    }

    function tryIntroMusic() {
        if (!introEl || !introEl.paused) return;
        introEl.play().catch(() => { /* bloqueado: esperamos un toque */ });
    }

    function stopIntroMusic() {
        if (!introEl || introEl.paused) return;
        fade(introEl, 0, 700, () => introEl.pause());
    }

    /* Baja la música para que se entienda el clip, y la devuelve después.
       Es relativa al volumen configurado: si fuera un valor fijo, con la
       música ya en 0.1 la bajada no se notaría. */
    function duckMusic()   { if (hasAudio && !audio.paused) fadeTo(CONFIG.volume * 0.12, 400); }
    function unduckMusic() { if (hasAudio && !audio.paused) fadeTo(CONFIG.volume, 1200); }

    function startMusic() {
        if (!hasAudio) return;
        player.hidden = false;
        requestAnimationFrame(() => player.classList.add('is-visible'));

        // play() va sincrónico dentro del click: si lo demoramos, el
        // navegador ya no lo considera un gesto del usuario y lo bloquea.
        audio.volume = 0;
        audio.play().then(() => fadeTo(CONFIG.volume, 2500)).catch(() => {
            // Si igual lo bloquea, dejamos el botón listo en "play"
            audio.volume = CONFIG.volume;
            player.classList.add('is-paused');
            musicBtn.setAttribute('aria-label', 'Reproducir música');
        });
    }

    musicBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            player.classList.remove('is-paused');
            musicBtn.setAttribute('aria-label', 'Pausar música');
        } else {
            clearInterval(fadeTimer);
            audio.pause();
            player.classList.add('is-paused');
            musicBtn.setAttribute('aria-label', 'Reproducir música');
        }
    });

    /* ── 1. Apertura ────────────────────────────────────────────────── */
    const intro   = $('#intro');
    const page    = $('#page');
    const openBtn = $('#openBtn');

    // Intento optimista: en algunos navegadores de escritorio funciona
    tryIntroMusic();

    // El respaldo que sí funciona en el celular: el primer toque
    intro.addEventListener('pointerdown', (e) => {
        if (e.target.closest('#openBtn')) return;   // ese toque abre la carta
        tryIntroMusic();
    });

    openBtn.addEventListener('click', () => {
        stopIntroMusic();
        intro.classList.add('is-gone');
        document.body.classList.remove('is-locked');
        page.classList.add('is-open');
        page.removeAttribute('aria-hidden');
        document.title = 'Feliz cumpleaños, ' + CONFIG.name;

        startMusic();
        initReveals();
        initTyping();
        watchClosing();

        // Después de la música, para no competir por el ancho de banda
        setTimeout(preloadClips, 3000);

        setTimeout(() => { intro.remove(); }, 1200);
    }, { once: true });

    /* ── Lightbox ───────────────────────────────────────────────────── */
    const lightbox    = $('#lightbox');
    const lightboxImg = $('#lightboxImg');

    function openLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt || '';
        lightbox.hidden = false;
        document.body.classList.add('is-locked');
    }
    function closeLightbox() {
        lightbox.hidden = true;
        lightboxImg.removeAttribute('src');
        document.body.classList.remove('is-locked');
    }

    $('#lightboxClose').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
    });

    /* ── 7. Confetti del cierre ─────────────────────────────────────── */
    const canvas = $('#confetti');
    const closing = $('#cierre');

    function celebrate() {
        if (reduceMotion) return;

        const ctx = canvas.getContext('2d');
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        let width, height, raf;

        function resize() {
            width  = canvas.offsetWidth;
            height = canvas.offsetHeight;
            canvas.width  = width  * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        resize();

        const colors = ['#C4675A', '#E9BEB2', '#D9A48F', '#F4EBE3', '#B8836F'];
        // Menos partículas en pantallas chicas, para que no laguee
        const count = width < 640 ? 60 : 110;

        const parts = Array.from({ length: count }, () => ({
            x: Math.random() * width,
            y: -Math.random() * height * 0.6 - 20,
            size: 4 + Math.random() * 6,
            vx: (Math.random() - 0.5) * 0.7,
            vy: 0.7 + Math.random() * 1.5,
            rot: Math.random() * Math.PI * 2,
            vr: (Math.random() - 0.5) * 0.06,
            sway: Math.random() * Math.PI * 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            heart: Math.random() < 0.28,
            life: 0
        }));

        function heartPath(size) {
            const s = size / 16;
            ctx.beginPath();
            ctx.moveTo(0, 4 * s);
            ctx.bezierCurveTo(-8 * s, -4 * s, -3 * s, -10 * s, 0, -5 * s);
            ctx.bezierCurveTo(3 * s, -10 * s, 8 * s, -4 * s, 0, 4 * s);
            ctx.closePath();
        }

        const started = performance.now();
        const DURATION = 7000;   // milisegundos de lluvia

        function frame(now) {
            const elapsed = now - started;
            const fade = Math.max(0, 1 - Math.max(0, elapsed - DURATION * 0.65) / (DURATION * 0.35));

            ctx.clearRect(0, 0, width, height);

            parts.forEach((p) => {
                p.life += 1;
                p.sway += 0.02;
                p.x += p.vx + Math.sin(p.sway) * 0.6;
                p.y += p.vy;
                p.rot += p.vr;

                if (p.y > height + 20) {
                    p.y = -20;
                    p.x = Math.random() * width;
                }

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rot);
                ctx.globalAlpha = 0.85 * fade;
                ctx.fillStyle = p.color;

                if (p.heart) {
                    heartPath(p.size * 1.6);
                    ctx.fill();
                } else {
                    ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
                }
                ctx.restore();
            });

            if (elapsed < DURATION) {
                raf = requestAnimationFrame(frame);
            } else {
                ctx.clearRect(0, 0, width, height);
                cancelAnimationFrame(raf);
                window.removeEventListener('resize', resize);
            }
        }

        window.addEventListener('resize', resize);
        raf = requestAnimationFrame(frame);
    }

    function watchClosing() {
        if (!('IntersectionObserver' in window)) return;

        const closingObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                celebrate();
                closingObserver.unobserve(entry.target);
            });
        }, { threshold: 0.45 });

        closingObserver.observe(closing);
    }
})();
