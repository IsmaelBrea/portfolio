# Portfolio — Ismael Brea

Portfolio personal de **Ismael Brea**, estudiante de Ingeniería Informática especializado en **ciberseguridad, redes y sistemas**.

Web estática desarrollada con **HTML, CSS y JavaScript**, con una estética inspirada en terminales Linux y una terminal interactiva integrada.

## Tecnologías

* HTML5
* CSS3
* JavaScript
* Linux / Kali Linux
* Git & GitHub

## Estructura

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── profile.jpg
└── README.md
```

## Contenido

El portfolio incluye:

* Presentación personal
* Formación académica
* Certificaciones de ciberseguridad
* Conocimientos técnicos
* Proyectos
* Experiencia práctica en laboratorios de ciberseguridad
* Perfiles de GitHub, LinkedIn, Hack The Box y TryHackMe
* Terminal interactiva con comandos personalizados

## Terminal interactiva

La web incluye una terminal funcional desde la que se pueden consultar diferentes secciones del portfolio.

Los comandos y la información utilizada por la terminal se encuentran en:

```text
js/script.js
```

Ahí se pueden modificar los enlaces, proyectos y comandos disponibles.

## Ejecutar en local

No requiere instalación de frameworks ni dependencias.

Puedes abrir directamente `index.html` en el navegador.

También puedes utilizar un servidor HTTP local:

```bash
cd portfolio
python3 -m http.server 8000
```

Después abre:

```text
http://localhost:8000
```

## Actualizar el portfolio

Para modificar el contenido:

1. Edita `index.html`, `css/style.css` o `js/script.js`.
2. Comprueba los cambios en local.
3. Guarda los cambios en Git:

```bash
git add .
git commit -m "Actualización del portfolio"
git push
```

El repositorio está conectado a **Vercel**, por lo que los nuevos cambios se despliegan automáticamente después de hacer `git push`.

## Despliegue

El portfolio está alojado mediante **Vercel** y conectado directamente con este repositorio de GitHub.

Cada cambio enviado a la rama `main` genera automáticamente un nuevo despliegue.

## Próximas mejoras

* Añadir nuevos proyectos y writeups de ciberseguridad.
* Incorporar más laboratorios y CTF completados.
* Añadir un CV descargable.
* Mejorar la terminal interactiva.
* Incorporar estadísticas de Hack The Box y TryHackMe.
* Conectar un dominio personalizado.

---

**Ismael Brea**
Computer Engineering · Cybersecurity · Networks

