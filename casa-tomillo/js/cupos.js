// cupos.js - Estado de los cupos

//definición de constantes
const nivel = "Intermedio";
const cuposs = 2; //debido a un conflicto con inscripcion.js la variable cupos pasa a llamarse cuposs

//PROCESO / SALIDA
if (cuposs === 0) {
  //compara la constante contra 0
  console.error("Taller lleno");
} else if (cuposs <= 2) {
  console.warn("¡Últimos cupos!");
} else {
  console.log("Hay cupos disponibles");
}

console.log(cuposs === 1 ? "Queda 1 cupo" : `Quedan ${cuposs} cupos`); //ternario compara si cupos es igual a 1, dependiendo de lo cual muestra un mensaje u otro

switch (nivel) {
  case "Inicial": //se ejecuta en caso de que nivel sea igual a inicial
    console.log("No necesita experiencia");
    break;
  case "Intermedio": //se ejecuta en caso de que nivel sea igual a inicial
    console.log("Requiere el nivel inicial");
    break;
  default:
    console.log("Consulte con la escuela");
    break;
}
