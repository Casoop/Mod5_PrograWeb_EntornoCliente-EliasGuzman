//formato.js - Numeros con formato de cr
const precio = 45000; //numero
console.log(precio.toLocaleString("es-CR")); //Separa miles
const opciones = { style: "currency", currency: "CRC" }; //colones
const colones = new Intl.NumberFormat("es-CR", opciones); //se crea una vez se usa muchas
console.log(colones.format(precio)); // ¢ y decimales
console.log(colones.format(75000 * 1.13)); //redondea solo
