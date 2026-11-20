//vuelto.js - Vuelto de un pago

//Definición de constantes
const porPersona = 105000; //total por persona

//Definición de constantes
let aPagar = 0.0;
let vuelto = 0.0;

//Entrada de datos
let montoPago = prompt("¿Con cuanto va a pagar?");
let cantidadPersonas = prompt("¿Cantidad de personas?");

//Proceso
montoPagoNum = parseFloat(montoPago);
cantidadPersonasNum = parseInt(cantidadPersonas);

aPagar = cantidadPersonasNum * porPersona;
vuelto = (montoPagoNum - aPagar).toFixed(2);

//salida
console.log("Personas: " + cantidadPersonasNum);
console.log("A pagar: " + aPagar.toLocaleString("es-CR"));
console.log("Pagó: " + montoPagoNum.toFixed(2));
console.log("Vuelto: " + vuelto);
