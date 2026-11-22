//promocion.js - Descuento según el monto (final de index.html)
const monto = 113000; //familiar + perfil (s4)
let descuento = 0; //empieza sin descuento
if (monto >= 100000) {
  //¿Compra grande?
  descuento = 10;
} else if (monto >= 50000) {
  //¿Compra mediana?
  descuento = 5;
} else {
  descuento = 0; //compra pequeña
}
const total = monto - (monto * descuento) / 100;
console.log(`Descuento: ${descuento} %`);
console.log(`Total: ${total}`);
console.log(total > 90000 ? "Pago en dos tractos" : "Pago de contado");
