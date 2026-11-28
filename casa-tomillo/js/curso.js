//curso.js - clase curso
class Curso {
  constructor(nombre, precio, vacantes) {
    this.nombre = nombre;
    this.precio = precio;
    this.vacantes = vacantes;
  }
  inscribir(cantidad) {
    if (cantidad > this.vacantes) {
      return `Solo quedan ${this.vacantes} cupos`;
    } else {
      this.vacantes -= cantidad;
      return `Inscritas ${cantidad}. Quedan ${this.vacantes}`;
    }
  }
  resumen() {
    return `${this.nombre} · ${enColones(this.precio)} · ${this.vacantes}`;
  }
}

const masaMadre = new Curso("Panadería · Masa madre", 95000, 8);
const tartas = new Curso("Repostería · Tartas", 82000, 3);
console.log(masaMadre.resumen());
console.log(masaMadre.inscribir(2));
console.log(tartas.inscribir(5));
console.log(tartas.inscribir(3));
console.log(tartas.resumen());
