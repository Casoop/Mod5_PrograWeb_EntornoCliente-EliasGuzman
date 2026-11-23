//objeto.js - Primer contacto con un vector de objetos
const tarifas = [
  { servicio: "Individual", precio: 45000 }, //cada { } es un objeto
  { servicio: "Familiar", precio: 75000 },
];

for (const t of tarifas) {
  //recorriendo los objetos
  console.log(`${t.servicio}: ${t.precio}`);
}
