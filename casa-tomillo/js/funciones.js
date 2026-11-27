//funciones.js -

//función: declaración
function enColones(monto1) {
  return `¢${monto1.toLocaleString("es-CR")}`; //le coloaca el caracter de colones y le da el formato que se usa en CR
}

//función: flecha
const conMatricula = (monto2) => monto2 + 10000;

//función: expresión
const costoGrupo = function (monto3, cantidad) {
  let total = 0;
  let descuento = 1;

  if (isNaN(cantidad) || cantidad < 1 || cantidad > 8) {
    return "Cantidad inválida";
  }

  let costo = conMatricula(monto3) * cantidad;

  if (cantidad >= 3) {
    descuento = 0.9;
  }

  costo = costo * descuento;

  total = Math.round(costo);
  return enColones(total);
};

//SALIDAS
console.log(enColones(95000));
console.log(conMatricula(68000));
console.log(costoGrupo(68000, 2));
console.log(costoGrupo(95000, 3));
console.log(costoGrupo(95000, 9));
