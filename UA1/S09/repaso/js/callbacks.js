//callbacks.js - forEach, map, filter

console.log("— Con callbacks —");
cursos.forEach((c, i) => console.log(`${i + 1}. ${c.nombre}`)); //el primer espacio (c) se refiere a un objeto dentro del arreglo, mientras que el segundo (i) se refiere al indice, for each tiene uno que lo crea automaticamente.

const conMatricula2 = cursos.map((c) => c.precio + 10000); //al usar maps debo recordar que pongo el vector de objetos primero y ya dentro de la funcion flecha pongo el objeto (c) y el punto con el elemento (precio)
console.log(`Con matrícula: ${conMatricula2.join(", ")}`);

const iniciales2 = cursos.filter((c) => c.nivel === "Inicial");
const inicialesMap = iniciales2.map((c) => c.nombre);
console.log(`Inicial: ${inicialesMap.join(", ")}`);
