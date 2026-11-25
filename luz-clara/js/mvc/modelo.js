//modelo.js - MODELO: Los datos de las reservas y sus reglas
class Reserva {
  constructor(cliente, servicio, precio) {
    this.cliente = cliente;
    this.servicio = servicio;
    this.precio = precio;
  }
}
class Reservas {
  constructor() {
    this.lista = []; //todas las reservas
  }
  agregar(Reserva) {
    if (reserva.precio <= 0) {
      //regla de negocio
      return false; //no se guarda
    }
    this.lista.push(reserva);
    return true;
  }
  ingresos() {
    let suma = 0;
    this.lista.forEach((r) => {
      suma += r.precio;
    });
    return suma;
  }
}
