//catalogo.js - Catálogo de talleres (vector de objetos)

//vector de objetos
const talleres = [
  { nombre: "Cocina de la casa · Inicial", precio: 68000 }, //cada { } es un objeto
  { nombre: "Cocina de la casa · Intermedio", precio: 72000 },
  { nombre: "Panadería · Masa madre", precio: 95000 },
  { nombre: "Panadería · Pan de campo", precio: 70000 },
  { nombre: "Panadería · Bollería", precio: 88000 },
  { nombre: "Repostería · Tartas", precio: 82000 },
  { nombre: "Repostería · Decoración", precio: 58000 },
];

//definición de constantes
const tope = 80000; //tope para el limite de + de 80000
const opciones = { Style: "currency", currency: "CRC" };
const colones = new Intl.NumberFormat("es-CR", opciones); //se crea una vez se usa muchas

//definición de variables
let suma = 0; //acumulador
let caros = 0; //contador
let masCaro = talleres[0];
let promedio = 0;

for (const t of talleres) {
  //recorre los objetos
  suma += t.precio; //suma el precio en cada iteración, para dar un total

  if (t.precio > tope) {
    //se encarga de sumar +1 a caros si el precio se pasa de 80000
    caros++;
  }

  if (t.precio > masCaro.precio) {
    //compara el precio guardado como mas caro, contra el precio de la iteración actual, en caso de ser mayor masCaro.precio se actualiza
    masCaro = t;
  }

  //SALIDA A
  console.log(`${t.nombre}: ¢${colones.format(t.precio)}`); //imprime tanto el nombre como el precio de los talleres
}

//calcular promedio
promedio = Math.round(suma / talleres.length);

//SALIDA B
console.log(`Talleres: ${talleres.length}`);
console.log(`Promedio: ¢${colones.format(promedio)}`);
console.log(`Más de ¢${colones.format(tope)}: ${colones.format(caros)}`);
console.log(`El más caro: ${masCaro.nombre}`);
