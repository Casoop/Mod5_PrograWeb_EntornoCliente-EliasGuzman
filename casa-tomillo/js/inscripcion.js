//inscripcion.js - inscripcion a un taller
//definición de variables
let cupos = 8; //Cupos del grupo
let precioPersona = 0;
let total = 0;

//definicion de constantes
const nombreTaller = "Panadería: masa madre"; //Nombre del taller
const precioTaller = 95000; // Precio del taller
const matriculaPersona = 10000; //Matrícula por persona
const personas = 2; //Personas a inscribir

//Proceso
precioPersona = precioTaller + matriculaPersona;
total = precioPersona * personas;
cupos -= personas;

//Salida
console.log("Taller: ", nombreTaller);
console.log("Precio por persona: ", precioPersona);
console.log("Total para ", personas, " personas: ", total);
console.log("Cupos libres: ", cupos);
console.log("¿Hay cupos? ", cupos > 0);
console.log("¿Menos de ₡250 000 y con cupos? ", total < 250000 && cupos > 0);
console.log("Total para", personas, "personas:", total);
