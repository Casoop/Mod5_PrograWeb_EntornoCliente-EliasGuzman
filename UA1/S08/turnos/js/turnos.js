//turnos.js - Turnos con closure
function crearTurnos(taller) {
  let numero = 0;

  return () => {
    numero++;
    return `${taller} · turno ${numero}`;
  };
}

const turnoPan = crearTurnos("Panadería");
const turnotarta = crearTurnos("Tartas");

console.log(turnoPan());
console.log(turnoPan());
console.log(turnotarta());
console.log(turnoPan());
