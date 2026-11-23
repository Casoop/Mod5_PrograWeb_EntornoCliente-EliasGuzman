//vectores.js - Un vector (array) guarda varios valores en orden
const servicios = ["Retrato", "Familiar", "Eventos"];
console.log(servicios[0]); //posicion 0: el primero = Retrato
console.log(servicios.length); //cantidad de elementos del vector
servicios.push("Perfil"); //agrega al final
console.log(servicios.join(", "));
console.log(servicios.length);
const ultimo = servicios.pop(); //quitar el ultimo
console.log(ultimo, servicios.length);
console.log(servicios.join(", "));
