//listado.js - filter, forEach y map
/*1) Crear casa-tomillo/js/listado.js (ya está enlazado).
2) Con filter, los talleres de menos de ₡75 000.
3) Con forEach, mostrarlos con enColones.
4) Mostrar cuántos son.
5) Con map, un vector con el precio + matrícula de cada taller (use conMatricula) y mostrarlo con join.*/

const economicos = talleres.filter((t) => t.precio < 75000);

const vectorConMatricula = talleres.map((t) => conMatricula(t.precio));

//SALIDA
economicos.forEach((e) => console.log(`¢${e.precio.toLocaleString("es-CR")}`));
console.log(`Económicos: ${economicos.length}`);
console.log(`Con matrícula: ${vectorConMatricula.join(", ")}`);
