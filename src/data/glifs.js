// ============================================================
//  ⬡ GLIFOS DE LA WEB
//  Un glifo por página, en el mismo orden que el menú:
//  0 Inici · 1 Currículum · 2 Especialització · 3 Pla de formació · 4 Contacte
//  Los usan el menú (Nav.astro) y el navegador de la portada (GlyphNav.astro).
//  Cada glifo es el interior de un <svg viewBox="0 0 100 100">.
// ============================================================

const hex = '<path d="M50 6 88 28v44L50 94 12 72V28Z"/>';

export const glifs = [
  hex + '<circle cx="50" cy="50" r="7"/>',                                   // Inici
  hex + '<path d="M50 26v48"/><circle cx="50" cy="50" r="10"/>',              // Currículum
  hex + '<path d="M32 64 50 32l18 32Z"/><path d="M50 74v6"/>',                // Especialització
  hex + '<path d="M30 42h40M30 58h40"/><circle cx="50" cy="50" r="4"/>',      // Pla de formació
  hex + '<path d="M50 28 70 50 50 72 30 50Z"/><path d="M50 40v20M40 50h20"/>', // Contacte
];

export const svgGlif = (i) =>
  `<svg viewBox="0 0 100 100" aria-hidden="true">${glifs[i] ?? glifs[0]}</svg>`;
