//callbacks.js - forEach, map, filter

console.log("— Con callbacks —");
cursos.forEach((c, i) => console.log(`${i + 1}. ${c.nombre}`));

const conMatricula2 = cursos.map((c) => c.precio + 10000);
console.log(`Con matrícula: ${conMatricula2.join(", ")}`);

const iniciales2 = cursos.filter((c) => c.nivel === "Inicial");
const inicialesMap = iniciales2.map((c) => c.nombre);
console.log(`Inicial: ${inicialesMap.join(", ")}`);
