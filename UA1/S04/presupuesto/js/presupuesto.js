//presupuesto.js - Presupuesto con prompt
//definicion de constantes
const precioPersona = 105000;
//definicion de varaibles
total = 0;

//ENTRADA
const nombre = prompt("¿Cuál es su nombre?"); //devuelve texto
const personas = prompt("¿Cantidad de personas?");

//PROCESO
total = Number(personas) * precioPersona; //cuando se usa prompt entran como texto por lo que se deben castear a numeros

//SALIDA
console.log("Hola, " + nombre + ".");
console.log("Personas: " + personas);
console.log("Total: " + total);
console.log("¿Es grupo (3 o más)?", personas >= 3);
