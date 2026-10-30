# IPOP · Arley Arenas Saavedra

Informe Personal d'Orientació Professional (IPOP) i portfoli web, fet amb [Astro](https://astro.build) i publicat a GitHub Pages.

---

## 🚀 Ponerlo en marcha (Windows 11)

1. Descomprime esta carpeta en `Documentos\ipop`.
2. Ábrela en VS Code: clic derecho en la carpeta → **Abrir con Code**.
3. Abre la terminal de VS Code (**Ctrl + ñ**) y ejecuta:

   ```powershell
   npm install
   npm run dev
   ```

4. Abre **http://localhost:4321** en el navegador.

Para pararlo: **Ctrl + C** en la terminal.

---

## ✏️ Dónde cambiar cada cosa

| Quiero cambiar…                           | Archivo                       |
| ----------------------------------------- | ----------------------------- |
| **Mis textos y datos** (casi todo)        | `src/data/perfil.js`          |
| Los colores y tipografías                 | `src/styles/global.css` (`:root`) |
| El menú                                   | `src/components/Nav.astro`    |
| La estructura de una página               | `src/pages/*.astro`           |
| Mi CV en PDF                              | Ponlo en `public/` con el nombre `cv-arley-arenas.pdf` |

Los textos marcados con ✏️ en `perfil.js` son de ejemplo: revísalos.

---

## 🗂️ Estructura

```
ipop/
├── public/                 → Archivos tal cual (favicon, CV en PDF, imágenes)
├── src/
│   ├── data/perfil.js      → 📝 TODO tu contenido
│   ├── styles/global.css   → 🎨 Colores y estilos comunes
│   ├── layouts/Layout.astro→ Plantilla común (cabecera, menú, pie)
│   ├── components/         → Piezas reutilizables (menú, pie, títulos)
│   └── pages/              → Cada archivo = una página
│       ├── index.astro           → 01 Inici
│       ├── curriculum.astro      → 02 Currículum per competències
│       ├── especialitzacio.astro → 03 Àmbit d'especialització
│       ├── pla-formacio.astro    → 04 Pla de formació / projecte
│       ├── contacte.astro        → 05 Contacte
│       └── 404.astro             → Página de error
├── .github/workflows/deploy.yml → Publicación automática
└── astro.config.mjs        → Configuración (tu usuario de GitHub)
```

---

## 🌍 Publicar en GitHub Pages

1. En `astro.config.mjs`, cambia `TU_USUARIO` por tu usuario de GitHub.
2. Crea en GitHub un repositorio llamado `TU_USUARIO.github.io`.
3. En el repositorio: **Settings → Pages → Source → GitHub Actions**.
4. Sube el proyecto:

   ```powershell
   git init
   git add .
   git commit -m "Primera versión del IPOP"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_USUARIO.github.io.git
   git push -u origin main
   ```

5. En la pestaña **Actions** verás cómo se publica. En 1–2 minutos estará en `https://TU_USUARIO.github.io`.

Después, cada `git push` actualiza la web sola.
