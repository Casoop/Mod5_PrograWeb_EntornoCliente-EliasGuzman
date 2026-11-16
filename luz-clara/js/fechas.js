//fechas.js - fechas con Date
const hoy = new Date(); //fecha y hora de ahora = 16-11-2026
console.log(hoy.getFullYear()); //año = 2026
console.log(hoy.getMonth() + 1); //mes empieza en 0
console.log(hoy.getDate()); //día del mes = lunes
console.log(hoy.toLocaleDateString("es-CR")); //formato de CR
const sesion = new Date(2026, 11, 5);
console.log(sesion.toLocaleDateString("es-CR", { dateStyle: "full" }));
