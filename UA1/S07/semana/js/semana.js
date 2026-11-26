//semana.js - matriz
//nota: con este solicite ayuda a gemini, ya que no comprendia for of

//Matriz talleres x dia
const semana = [
  ["Martes", "Cocina inicial", "Tartas"],
  ["Miércoles", "Masa madre"],
  ["Jueves", "Cocina intermedia"],
  ["Viernes", "Pan de campo"],
  ["Sábado", "Bollería", "Decoración"],
];

//SALIDA
for (const dia of semana) {
  console.log(`${dia[0]} (${dia.length - 1}): ${dia.slice(1).join(", ")}`);
  //mi error fue pensar que for...of contaba con un indicador similar al for normal, sin embargo gemini me explico que no, no entrega el numero de indice de fila sino que, el arreglo completo de esa fila
  //la equivalencia seria:
  //for normal: semana[dia][0]
  //for...of: dia[0]

  //expliación del resto de lineas:
  //{dia.lenght - 1}: al ser dia las filas de semana, al pedir la cantidad de elementos daria numero de talleres + 1 (nombre de dia), asi que en base a eso se reduce 1.
  //dia.slice(1).join(", ")}: slice(1), recorta el primer elemento de dia, mientras que join(", "), los junta con una coma y un espacio
}
