//textos.js - Metodos de las cadenas y plantillas
const escrito = "  retrato familiar  "; //con espacios de más
const servicio = escrito.trim(); //quita espacios
console.log(escrito.length, servicio.length); //cantidad de letras
console.log(servicio.toLocaleUpperCase()); //cambia a mayusculas
console.log(servicio.includes("familiar")); //¿Contiene? = true
console.log(servicio.slice(0, 7)); //de la letra 0 a la 6 = retrato
console.log(`Servicio: ${servicio}`); //plantilla con ${}
