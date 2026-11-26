//modelo.js - MODELO: Los datos de las reservas y sus reglas
class Reserva {
  //clase con su nombre
  constructor(cliente, servicio, precio) {
    //constructor con sus métodos y parametros
    this.cliente = cliente; //This el objeto se esta creando .cliente Propiedad del objeto
    this.servicio = servicio; //= cliente el parametro. copia del dato del objeto
    this.precio = precio;
  }
}
class Reservas {
  //segunda clase del modelo. Representa el conjunto de todas las reservas en plural.
  constructor() {
    this.lista = []; //todas las reservas. Propiedad vector empieza vacia y guarda objetos de reserva
  }
  agregar(reserva) {
    //Metodo con parametro. En una clase, se escriben sin la palabra funtion
    if (reserva.precio <= 0) {
      //regla de negocio. reserva.precio es Propiedad de otro objeto. reserva es el objeto Reserva que llego como argumento
      return false; //no se guarda
    }
    this.lista.push(reserva); //push sobre propiedad. Guarda la reserva en la lista de este objeto
    return true;
  }
  ingresos() {
    let suma = 0;
    this.lista.forEach((r) => {
      //forEach con callback. r es cada reserva; se suma su precio
      suma += r.precio;
    });
    return suma;
  }
}
