# Portfolio de Ismael

Sitio estático (HTML/CSS/JS puro, sin frameworks ni build) con estética
terminal/hacker y una terminal interactiva real en la parte inferior.

```
portfolio/
├── index.html
├── css/style.css
├── js/script.js
├── assets/         ← aquí va tu foto (profile.jpg)
└── README.md
```

## 1. Personalizar (lo primero que hay que tocar)

### Enlaces y datos
Todo lo editable está centralizado en **dos sitios**:

1. `index.html` — busca `TU_USUARIO`, `TU_ID` y `tucorreo@ejemplo.com` (Ctrl+F / Cmd+F)
   y sustitúyelos por tus enlaces reales de GitHub, Hack The Box, TryHackMe,
   LinkedIn y tu email.
2. `js/script.js` — al principio del archivo hay un objeto `LINKS` y una lista
   `PROJECTS`. Son los mismos datos, pero los usa la terminal interactiva.
   Actualízalos también ahí.

### Foto
Coloca tu foto en `assets/profile.jpg` (ese nombre exacto, o cambia la ruta
en `index.html` → `<img src="assets/profile.jpg">`). Si no hay foto, se
muestra automáticamente un placeholder.

### Proyectos
Cada proyecto es una `<article class="window project-card">` dentro de
`<section id="projects">` en `index.html`. Hay dos tarjetas vacías
(`proyecto-02`, `proyecto-03`) listas para rellenar copiando el bloque de
`irm-tracker` y cambiando el texto. Recuerda añadir también el proyecto al
array `PROJECTS` en `js/script.js` si quieres que se pueda abrir con el
comando `open <proyecto>` de la terminal.

## 2. Ver el resultado en local

No hace falta instalar nada. Basta con abrir `index.html` en el navegador,
o si prefieres servirlo (recomendado, evita problemas con rutas):

```bash
cd portfolio
python3 -m http.server 8000
# abre http://localhost:8000
```

## 3. Desplegarlo de verdad (gratis)

La forma más simple para una web estática como esta es **GitHub Pages** o
**Vercel**. Con cualquiera de las dos puedes luego enganchar un dominio propio.

### Opción A — GitHub Pages (sencillo, y ya usas GitHub para tus proyectos)

1. Crea un repo nuevo en GitHub, por ejemplo `ismael.github.io` (si usas
   exactamente `TU_USUARIO.github.io` como nombre, la web queda directamente
   en esa URL sin configuración extra) o cualquier otro nombre, ej. `portfolio`.
2. Sube estos archivos:
   ```bash
   git init
   git add .
   git commit -m "primer commit del portfolio"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```
3. En GitHub → **Settings → Pages** → en "Source" elige la rama `main` y
   carpeta `/ (root)`. Guarda.
4. En 1-2 minutos tu web estará en `https://TU_USUARIO.github.io/TU_REPO/`
   (o en `https://TU_USUARIO.github.io/` si usaste el nombre especial).

### Opción B — Vercel (deploy con un comando, buena si luego quieres añadir más cosas)

1. Crea cuenta en [vercel.com](https://vercel.com) con tu GitHub.
2. "Add New Project" → importa el repo que subiste a GitHub.
3. Como es HTML estático, no hace falta configurar nada (framework:
   "Other"). Deploy.
4. Te da una URL tipo `tuportfolio.vercel.app` al momento.

## 4. Comprar y conectar un dominio real

1. **Compra el dominio** en un registrador. Opciones normales de precio y
   sin sorpresas: [Porkbun](https://porkbun.com), [Namecheap](https://namecheap.com)
   o [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)
   (este último vende al precio de coste, sin margen). Un `.dev` o `.com`
   suele rondar 8-15 €/año; hay `.tech` o `.me` que a veces salen más
   baratos el primer año.
2. **Conéctalo a tu hosting:**
   - *Con GitHub Pages:* en el repo, Settings → Pages → "Custom domain",
     escribe tu dominio. GitHub te dirá qué registros DNS (`A` o `CNAME`)
     añadir en el panel de tu registrador. Se tarda unos minutos/horas en
     propagar.
   - *Con Vercel:* en el proyecto → Settings → Domains → añade tu dominio.
     Vercel te da los registros DNS exactos a configurar en tu registrador.
3. Activa HTTPS: ambas plataformas lo hacen automáticamente y de forma
   gratuita en cuanto el DNS propaga (certificado Let's Encrypt).

## 5. Ideas para seguir completando

- Rellenar `proyecto-02` y `proyecto-03` con proyectos reales o writeups.
- Añadir estadísticas reales de HTB/THM (rango, máquinas resueltas) en la
  sección `#ctf` cuando las tengas a mano.
- Añadir más comandos a la terminal (`js/script.js` → objeto `COMMANDS`),
  por ejemplo `cv` para descargar tu currículum en PDF.
- Analítica de visitas: si quieres saber cuánta gente visita la web sin
  usar cookies/tracking invasivo, [Plausible](https://plausible.io) o
  [GoatCounter](https://www.goatcounter.com) son opciones ligeras.
