//tarifas.js - Funciones para cotizar
function formatoColones(monto) {
  //declaración
  return `¢${monto.toLocaleString("es-CR")}`; //texto con formato
}
const precioConIva = (monto) => Math.round(monto * 1.13); //flecha
function totalSesiones(monto, cantidad) {
  //2 parametros
  if (isNaN(cantidad) || cantidad < 1) {
    //validación de cantidad
    return "Cantidad invalida";
  }
  const total1 = precioConIva(monto) * cantidad; //local
  return formatoColones(total1);
}
console.log(formatoColones(45000)); //45 000
console.log(totalSesiones(45000, 2)); //101 700
console.log(totalSesiones(75000, 0)); //cantidad invalida
