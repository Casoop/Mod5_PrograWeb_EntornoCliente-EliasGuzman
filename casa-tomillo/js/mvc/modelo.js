// modelo.js - MODELO: inscripciones de un grupo (máximo 8 personas)
class Inscripcion {
  constructor(nombre, personas) {
    this.nombre = nombre;
    this.personas = personas;
  }
}
class Grupo {
  constructor(taller) {
    this.taller = taller;
    this.lista = [];
  }
  ocupados() {
    let suma = 0;
    this.lista.forEach((x) => {
      suma += x.personas;
    });
    return suma;
  }
  agregar(inscripcion) {
    if (this.ocupados() + inscripcion.personas > 8) {
      // regla
      return false;
    }
    this.lista.push(inscripcion);
    return true;
  }
}
