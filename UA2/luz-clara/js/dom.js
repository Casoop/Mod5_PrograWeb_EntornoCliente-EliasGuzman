// dom.js - Recorre el árbol de nodos de index.html (al final del body)

console.log(`Título de la página: ${document.title}`);

const raiz = document.documentElement;
console.log(`Raíz: ${raiz.tagName} · hijos: ${raiz.children.length}`);

const cuerpo = document.body;
for (const hijo of cuerpo.children) {
  if (hijo.tagName !== "SCRIPT") {
    console.log(`Hijo de <body>: ${hijo.tagName} · id ${hijo.id}`);
  }
}

const principal = cuerpo.children[1];
console.log(`Padre de <main>: ${principal.parentElement.tagName}`);
console.log(`Primer hijo de <main>: ${principal.firstElementChild.id}`);
console.log(`Secciones dentro de <main>: ${principal.children.length}`);
