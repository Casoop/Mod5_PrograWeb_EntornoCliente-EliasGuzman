//pago.js - Plan de pago

//Definición de constantes
const nombre = "  panadería: masa madre ";
const fechaInicio = new Date(2026, 10, 21);
const total = 105000;
const cuotas = 4;

const sinEspacios = nombre.trim(); //se encargara de quitar los espacios

//PROCESO
const opciones = { style: "currency", currency: "CRC" };
const colones = new Intl.NumberFormat("es-CR", opciones);

//SALIDA
console.log("Taller: " + sinEspacios.toLocaleUpperCase()); //cambia el texto a mayusculas
console.log(
  "Inicia: " + fechaInicio.toLocaleDateString("es-CR", { dateStyle: "full" }),
);
console.log("Total: " + colones.format(total));
console.log(cuotas + " cuotas de " + colones.format(total / cuotas));
console.log("¿Cuota exacta? " + Number.isInteger(colones / cuotas));
console.log("Con 3 cuotas: " + Math.ceil(total / 3) + " cada una");
