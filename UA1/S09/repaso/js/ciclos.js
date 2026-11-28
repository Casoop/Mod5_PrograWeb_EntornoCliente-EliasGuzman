// ciclos.js - Versión con ciclos (es la referencia: no la cambie)
console.log("— Con ciclos —");
for (let i = 0; i < cursos.length; i++) {
  // 1. listar
  console.log(`${i + 1}. ${cursos[i].nombre}`);
}
const conMatricula1 = []; // 2. transformar
for (const c of cursos) {
  conMatricula1.push(c.precio + 10000);
}
console.log(`Con matrícula: ${conMatricula1.join(", ")}`);
const iniciales1 = []; // 3. filtrar
for (const c of cursos) {
  if (c.nivel === "Inicial") {
    iniciales1.push(c.nombre);
  }
}
console.log(`Inicial: ${iniciales1.join(", ")}`);
