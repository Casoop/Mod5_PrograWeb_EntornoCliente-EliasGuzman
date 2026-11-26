//grupos.js - ciclo: While & redondeo
//definición de variables
let cupos = 8;
let numRonda = 1;

while (cupos > 0) {
  let inscritos = Math.min(3, cupos); //math.min busca el menor en cada ronda, si el menor es 3 restara 3, sin embargo al tambien tener cupos si cupos llega a ser menor a 3, la resta se realizaria con la cantida restante de cupos
  //nota: inscritos tiene que estar en el bucle porque si estuviera arriva no se actualizaria en cada vuelta

  cupos -= inscritos;

  console.log(`Ronda ${numRonda}: ${inscritos} personas · quedan ${cupos} `);

  numRonda++;
}
console.log("Taller lleno");
