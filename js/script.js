// ============================================================
// CONFIG — tus enlaces y proyectos reales
// ============================================================
const LINKS = {
  github:      "https://github.com/IsmaelBrea",
  htb:         "https://app.hackthebox.com/users/2231279",
  thm:         "https://tryhackme.com/p/IsmaBrea",
  dockerlabs:  "https://dockerlabs.es/u/ismaelbrea",
  writeups:    "https://github.com/IsmaelBrea/DockerLabs",
  linkedin:    "https://www.linkedin.com/in/ismael-brea-arias-a05761312",
  email:       "ismabrearias@gmail.com",
};

const PROJECTS = [
  {
    id: "irm-tracker",
    name: "IRM Tracker",
    desc: "App de analítica de fútbol con Django, Plotly.js y comparativas H2H.",
    url: `${LINKS.github}/irm2526`,
  },
  {
    id: "shell-c",
    name: "Shell de Linux en C",
    desc: "Shell de Unix implementada en C — fundamentos de C y comandos básicos de Linux.",
    url: "https://github.com/IsmaelBrea/Sistemas_operativos",
  },
];

// certificaciones: añade más aquí cuando las tengas ({name, issuer, date, url, status, credentialId, notesUrl})
const CERTIFICATIONS = [
  {
    name: "eJPT v2 — Junior Penetration Tester",
    issuer: "INE / eLearnSecurity",
    date: "",
    status: "completada",
    credentialId: "194537502",
    url: "https://certs.ine.com/ec900b07-b741-42c3-8a32-7946692b955f",
    notesUrl: "https://lunar-chokeberry-993.notion.site/EJPT-37bb8af95991809db957dffb79260e3f",
  },
  {
    name: "Cisco Certified Support Technician (CCST)",
    issuer: "Cisco Networking Academy",
    date: "abr. 2026 – abr. 2031",
    status: "completada",
    credentialId: "b086de22-f403-4321-8097-408bbd2071b9",
    url: "https://www.credly.com/earner/earned/badge/b086de22-f403-4321-8097-408bbd2071b9",
  },
  {
    name: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco Networking Academy",
    date: "mar. 2026",
    status: "completada",
    credentialId: "f850fbcb-c2c8-4c24-b080-a2c6a1024164",
    url: "https://www.credly.com/earner/earned/badge/f850fbcb-c2c8-4c24-b080-a2c6a1024164",
  },
  {
    name: "Network Technician Career Path",
    issuer: "Cisco Networking Academy",
    date: "mar. 2026",
    status: "completada",
    credentialId: "cc5acfac-0923-4652-83f6-775e0338df",
    url: "https://www.credly.com/earner/earned/badge/cc5acfac-0923-4652-83f6-775e0338df",
  },
];

// apuntes: organizados por categoría → bloques → enlaces.
// Para añadir uno nuevo, solo hay que tocar este array — el árbol de la
// web y la terminal (cd/ls/cat) se generan solos a partir de él.
const NOTES = [

  {
    category: "Ciberseguridad",

    sections: [

      {
        title: "1 — Hacking & Pentesting",

        links: [

          {
            name: "EJPT",
            url: "https://app.notion.com/p/EJPT-37bb8af95991809db957dffb79260e3f?pvs=21"
          },

          {
            name: "Burp Suite",
            url: "https://app.notion.com/p/Burp-Suite-3bfb8af9599180b993dafa89d46f72a5?pvs=21",

            sublinks: [
              {
                name: "Labs Web Security Academy"
              },
              {
                name: "BSCP"
              }
            ]
          },

          {
            name: "Active Directory",
            url: "https://app.notion.com/p/Active-Directory-3c5b8af959918089858ced3923134a6f?pvs=21",

            sublinks: [
              {
                name: "AD-RTA"
              }
            ]
          },

          {
            name: "Auditoría Smishing",
            url: "https://app.notion.com/p/AUDITOR-A-SMISHING-3bab8af9599180d4a4f9e80c0aaa8f14?pvs=21"
          },

          {
            name: "Hacking Web",
            url: "https://app.notion.com/p/HACKING-WEB-3c9b8af9599180038b2cd42a48188dc4?pvs=21",

            sublinks: [
              {
                name: "WEB-RTA"
              },
              {
                name: "API-RTA"
              }
            ]
          },

          {
            name: "Hacking WiFi"
          }

        ]
      },

      {
        title: "2 — Blue Team & SOC",

        links: [
          {
            name: "10 proyectos Analista SOC",
            url: "https://app.notion.com/p/10-proyectos-Analista-SOC-3c7b8af95991800eb5f9de0ffc74a75f?pvs=21"
          }
        ]
      },

      {
        title: "3 — Cloud Security",

        links: [
          {
            name: "Microcredential AWS Incident Response Demonstrated",
            url: "https://app.notion.com/p/Microcredential-AWS-Incident-Response-Demonstrated-3c5b8af9599180a18df8ecd64b54d8e1?pvs=21"
          }
        ]
      },

      {
        title: "4 — Digital Forensic",

        links: []

      }

    ]
  }

];

// ============================================================
// UTILIDADES compartidas (escape de HTML, slugs para rutas)
// ============================================================
function escapeHtml(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

function slugify(str) {
  return str
    .toString()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "y")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ============================================================
// AÑO EN FOOTER
// ============================================================
document.getElementById("year").textContent = new Date().getFullYear();

// ============================================================
// MENÚ MÓVIL
// ============================================================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav__links");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  navLinks.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", false);
    })
  );
}

// ============================================================
// TYPEWRITER en el hero ("~/portfolio $ whoami")
// ============================================================
(function typewriter() {
  const el = document.getElementById("whoamiType");
  if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    if (el) el.textContent = "whoami";
    return;
  }
  const text = "whoami";
  let i = 0;
  const type = () => {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 110);
    }
  };
  type();
})();

// ============================================================
// RENDER de "apuntes" — construye el árbol visual a partir de NOTES
// ============================================================
// ============================================================
// RENDER de "apuntes" — construye el árbol visual a partir de NOTES
// ============================================================
(function renderNotesTree() {
  const el = document.getElementById("notesTree");
  if (!el) return;

  el.innerHTML = NOTES.map(cat => `
    <div class="notes-category">

      <span class="notes-category__label">
        ${escapeHtml(cat.category)}
      </span>

      ${cat.sections.map(sec => `
        <div class="notes-section">

          <span class="notes-section__title">
            ${escapeHtml(sec.title)}
          </span>

          ${
            sec.links.length
              ? `
                <ul class="notes-links">

                  ${sec.links.map(l => `
                    <li class="notes-link-item">

                      ${
                        l.url
                          ? `
                            <a href="${l.url}" target="_blank" rel="noopener">
                              ${escapeHtml(l.name)}
                            </a>
                          `
                          : `
                            <span class="notes-links__pending">
                              ${escapeHtml(l.name)}
                              <span class="notes-pending-tag">pendiente</span>
                            </span>
                          `
                      }

                      ${
                        l.sublinks && l.sublinks.length
                          ? `
                            <ul class="notes-sublinks">

                              ${l.sublinks.map(sub => `
                                <li class="notes-sublink-item">

                                  ${
                                    sub.url
                                      ? `
                                        <a href="${sub.url}" target="_blank" rel="noopener">
                                          ${escapeHtml(sub.name)}
                                        </a>
                                      `
                                      : `
                                        <span class="notes-sublink">
                                          ${escapeHtml(sub.name)}
                                        </span>
                                      `
                                  }

                                </li>
                              `).join("")}

                            </ul>
                          `
                          : ""
                      }

                    </li>
                  `).join("")}

                </ul>
              `
              : `<p class="notes-empty">// próximamente</p>`
          }

        </div>
      `).join("")}

    </div>
  `).join("");
})();

// ============================================================
// SCROLL REVEAL — las tarjetas y bloques aparecen al hacer scroll
// ============================================================
(function scrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach(el => el.classList.add("in-view"));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

  targets.forEach(el => io.observe(el));
})();

// ============================================================
// SISTEMA DE ARCHIVOS VIRTUAL — usado por ls / cd / cat
// ============================================================
const FS = {

  "/": {
    type: "dir",
    children: ["about.txt", "proyectos", "ctf", "certificaciones", "apuntes", "contacto.txt"]
  },

  "/about.txt": {
    type: "file",
    content:
`Ismael Brea

Estudiante de Ingeniería Informática · UDC
Pentester & Security Analyst Junior

Enfoque: sistemas, redes, ciberseguridad, desarrollo web y cloud.

Stack:
  Administración: Linux, FreeBSD, Solaris, OpenBSD, NetBSD, Ansible
  Infraestructura: Vagrant, Packer, Kubernetes, Docker
  Desarrollo: Java, Spring, Python, Django, React, Bash
  Datos: Pandas, SQL, Talend, LaTeX
  Seguridad: criptografía, forense digital, SIEM, análisis de red

Actualmente:
Aprendiendo pentesting y ciberseguridad defensiva,
ampliando conocimientos y enfrentándome a nuevos retos cada semana.`
  },

  "/proyectos": { type: "dir", children: PROJECTS.map(p => p.id + ".txt") },

  "/ctf": { type: "dir", children: ["hackthebox.txt", "tryhackme.txt", "dockerlabs.txt", "writeups.txt"] },
  "/ctf/hackthebox.txt": { type: "file", content: `Hack The Box\nperfil: ${LINKS.htb}`, url: LINKS.htb },
  "/ctf/tryhackme.txt":  { type: "file", content: `TryHackMe\nperfil: ${LINKS.thm}`, url: LINKS.thm },
  "/ctf/dockerlabs.txt": { type: "file", content: `DockerLabs\nperfil: ${LINKS.dockerlabs}`, url: LINKS.dockerlabs },
  "/ctf/writeups.txt":   { type: "file", content: `Writeups (DockerLabs)\nrepo: ${LINKS.writeups}`, url: LINKS.writeups },

  "/certificaciones": {
    type: "dir",
    children: CERTIFICATIONS.length ? CERTIFICATIONS.map((c, i) => `cert-${i + 1}.txt`) : ["README.txt"]
  },
  "/certificaciones/README.txt": {
    type: "file",
    content: "// TODO: añadir certificados aquí (nombre, emisor, fecha, enlace al badge)."
  },

  "/contacto.txt": {
    type: "file",
    content: `email: ${LINKS.email}\nlinkedin: ${LINKS.linkedin}`
  },
};

PROJECTS.forEach(p => {
  FS["/proyectos/" + p.id + ".txt"] = {
    type: "file",
    content: `${p.name}\n${p.desc}\nrepo: ${p.url}`
  };
});

CERTIFICATIONS.forEach((c, i) => {
  const lines = [
    c.name,
    `emisor: ${c.issuer}`,
  ];
  if (c.date) lines.push(`fecha: ${c.date}`);
  lines.push(`estado: ${c.status || "completada"}`);
  if (c.credentialId) lines.push(`ID credencial: ${c.credentialId}`);
  if (c.url) lines.push(`credencial: ${c.url}`);
  if (c.notesUrl) lines.push(`apuntes: ${c.notesUrl}`);
  FS["/certificaciones/cert-" + (i + 1) + ".txt"] = { type: "file", content: lines.join("\n"), url: c.url };
});

// /apuntes se genera solo a partir de NOTES: categoría → bloque → enlace
FS["/apuntes"] = { type: "dir", children: NOTES.map(cat => slugify(cat.category)) };
NOTES.forEach(cat => {
  const catPath = "/apuntes/" + slugify(cat.category);
  FS[catPath] = { type: "dir", children: cat.sections.map(sec => slugify(sec.title)) };
  cat.sections.forEach(sec => {
    const secPath = catPath + "/" + slugify(sec.title);
    FS[secPath] = {
      type: "dir",
      children: sec.links.length ? sec.links.map(l => slugify(l.name) + ".txt") : []
    };
    sec.links.forEach(link => {
      FS[secPath + "/" + slugify(link.name) + ".txt"] = link.url
        ? { type: "file", content: `${link.name}\nenlace: ${link.url}`, url: link.url }
        : { type: "file", content: `${link.name}\n(apuntes pendientes de subir)` };
    });
  });
});

function resolvePath(base, target) {
  if (!target || target === "~") return "/";
  const rawParts = target.startsWith("/")
    ? target.split("/")
    : base.split("/").concat(target.split("/"));
  const stack = [];
  for (const p of rawParts) {
    if (!p || p === ".") continue;
    if (p === "..") stack.pop();
    else stack.push(p);
  }
  return "/" + stack.join("/");
}

// ============================================================
// TERMINAL INTERACTIVA — elemento firma del diseño
// ============================================================
const output = document.getElementById("terminalOutput");
const input = document.getElementById("terminalInput");
const body = document.getElementById("terminalBody");
const promptSep = document.getElementById("promptSep");

let cwd = "/";

function updatePromptDisplay() {
  const shown = cwd === "/" ? "~" : "~" + cwd;
  promptSep.textContent = `:${shown}$`;
}

function printLine(html, cls = "") {
  const div = document.createElement("div");
  div.className = "line" + (cls ? " " + cls : "");
  div.innerHTML = html;
  output.appendChild(div);
  body.scrollTop = body.scrollHeight;
}

function printEcho(cmd) {
  const shown = cwd === "/" ? "~" : "~" + cwd;
  printLine(`<span class="out-accent2">ismael@portfolio:${shown}$</span> ${escapeHtml(cmd)}`, "echo");
}

const COMMANDS = {
  help() {
    printLine(
`comandos disponibles:
  <span class="out-accent2">help</span>              muestra esta ayuda
  <span class="out-accent2">ls [dir]</span>          lista el contenido del directorio actual (o de [dir])
  <span class="out-accent2">cd &lt;dir&gt;</span>           cambia de directorio (cd .. / cd / cd ~ para volver a la raíz)
  <span class="out-accent2">cat &lt;archivo&gt;</span>      muestra el contenido de un archivo
  <span class="out-accent2">pwd</span>               muestra el directorio actual
  <span class="out-accent2">whoami</span> / about     info rápida sobre mí
  <span class="out-accent2">projects</span>           lista mis proyectos
  <span class="out-accent2">open &lt;proyecto&gt;</span>     abre el repo de un proyecto
  <span class="out-accent2">github</span>             abre mi GitHub
  <span class="out-accent2">htb</span>                abre mi perfil de Hack The Box
  <span class="out-accent2">thm</span>                abre mi perfil de TryHackMe
  <span class="out-accent2">dockerlabs</span>         abre mi perfil de DockerLabs
  <span class="out-accent2">contact</span>            info de contacto
  <span class="out-accent2">banner</span>             ascii art
  <span class="out-accent2">clear</span>              limpia la terminal

prueba: <span class="out-dim">cd apuntes/ciberseguridad &amp;&amp; ls</span> (uno a la vez)`
    );
  },
  ls(arg) {
    const target = arg ? resolvePath(cwd, arg) : cwd;
    const node = FS[target];
    if (!node) { printLine(`ls: no existe: ${escapeHtml(arg)}`, "out-danger"); return; }
    if (node.type === "file") { printLine(target.split("/").pop()); return; }
    printLine(node.children.length ? node.children.join("   ") : "(vacío)");
  },
  cd(arg) {
    if (!arg) { cwd = "/"; updatePromptDisplay(); return; }
    const target = resolvePath(cwd, arg);
    const node = FS[target];
    if (!node) { printLine(`cd: no existe el directorio: ${escapeHtml(arg)}`, "out-danger"); return; }
    if (node.type !== "dir") { printLine(`cd: no es un directorio: ${escapeHtml(arg)}`, "out-danger"); return; }
    cwd = target;
    updatePromptDisplay();
  },
  cat(arg) {
    if (!arg) { printLine("uso: cat &lt;archivo&gt;", "out-dim"); return; }
    const target = resolvePath(cwd, arg);
    const node = FS[target];
    if (!node) { printLine(`cat: no existe el archivo: ${escapeHtml(arg)}`, "out-danger"); return; }
    if (node.type !== "file") { printLine(`cat: es un directorio. prueba "cd ${escapeHtml(arg)}"`, "out-danger"); return; }
    if (node.url) {
      const firstLine = node.content.split("\n")[0];
      printLine(`${escapeHtml(firstLine)}<br><a class="out-accent2" href="${node.url}" target="_blank" rel="noopener">${node.url}</a>`);
    } else {
      printLine(escapeHtml(node.content).replace(/\n/g, "<br>"));
    }
  },
  pwd() { printLine(cwd); },
  whoami() { this.about(); },
  about() {
    printLine(
`Ismael Brea — estudiante de Ingeniería Informática (UDC), Pentester &amp;
Security Analyst Junior. Ver la sección "sobre-mi" arriba para el stack
completo, o escribe "cat about.txt".`
    );
  },
  projects() {
    if (!PROJECTS.length) {
      printLine("(sin proyectos listados todavía)", "out-dim");
      return;
    }
    PROJECTS.forEach(p => printLine(`<span class="out-accent">${p.id}</span> — ${p.desc}`));
    printLine('escribe "open &lt;proyecto&gt;" para abrir uno, ej: open irm-tracker', "out-dim");
  },
  open(arg) {
    if (!arg) { printLine("uso: open &lt;proyecto&gt;", "out-dim"); return; }
    const proj = PROJECTS.find(p => p.id === arg.toLowerCase());
    if (!proj) { printLine(`no existe el proyecto "${escapeHtml(arg)}". prueba "projects".`, "out-danger"); return; }
    printLine(`abriendo ${proj.name}…`, "out-accent2");
    window.open(proj.url, "_blank", "noopener");
  },
  github() { printLine("abriendo GitHub…", "out-accent2"); window.open(LINKS.github, "_blank", "noopener"); },
  htb() { printLine("abriendo Hack The Box…", "out-accent2"); window.open(LINKS.htb, "_blank", "noopener"); },
  thm() { printLine("abriendo TryHackMe…", "out-accent2"); window.open(LINKS.thm, "_blank", "noopener"); },
  dockerlabs() { printLine("abriendo DockerLabs…", "out-accent2"); window.open(LINKS.dockerlabs, "_blank", "noopener"); },
  linkedin() { printLine("abriendo LinkedIn…", "out-accent2"); window.open(LINKS.linkedin, "_blank", "noopener"); },
  contact() {
    printLine(`email: <span class="out-accent">${LINKS.email}</span>`);
    printLine(`linkedin: <span class="out-accent">${LINKS.linkedin}</span>`);
  },
  banner() {
    printLine(
`<span class="out-accent">
 _____ ____  __  __    _    _____ _
|_ _|__  |  \\/  |  / \\  | ____| |
 | |   / /| |\\/| | / _ \\ |  _| | |
 | |  / /_| |  | |/ ___ \\| |___| |___
|___|/____|_|  |_/_/   \\_\\_____|_____|
</span><span class="out-dim">portfolio-shell v1.0 — Ismael Brea · escribe "help" para empezar</span>`
    );
  },
  clear() { output.innerHTML = ""; },
  sudo() {
    printLine("Permission denied: necesitas ser root (o invitarme a un café ☕).", "out-danger");
  },
};

function runCommand(raw) {
  const trimmed = raw.trim();
  printEcho(trimmed || " ");
  if (!trimmed) return;

  const [cmdRaw, ...rest] = trimmed.split(/\s+/);
  const cmd = cmdRaw.toLowerCase();
  const arg = rest.join(" ");

  if (cmd === "sudo") { COMMANDS.sudo(); return; }
  if (COMMANDS[cmd]) {
    COMMANDS[cmd](arg);
  } else {
    printLine(`comando no encontrado: ${escapeHtml(cmd)}. escribe "help".`, "out-danger");
  }
}

// historial de comandos (flechas arriba/abajo)
let history = [];
let historyIdx = -1;

if (input) {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const val = input.value;
      runCommand(val);
      if (val.trim()) { history.push(val); historyIdx = history.length; }
      input.value = "";
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIdx > 0) { historyIdx--; input.value = history[historyIdx]; }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx < history.length - 1) { historyIdx++; input.value = history[historyIdx]; }
      else { historyIdx = history.length; input.value = ""; }
    }
  });

  body.addEventListener("click", () => input.focus());
}

// banner de arranque, al estilo de las herramientas de ciber que
// muestran su logo ASCII nada más abrirse
updatePromptDisplay();
COMMANDS.banner();
printLine('bienvenido. escribe <span class="out-accent2">help</span> para ver los comandos disponibles (incluye <span class="out-accent2">cd</span> y <span class="out-accent2">cat</span>).', "out-dim");