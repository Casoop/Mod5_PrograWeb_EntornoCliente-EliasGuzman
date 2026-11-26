//controlador.js - CONTROLADOR: recibe la accion y coordina
class ControladorReservas {
  constructor(modelo, vista) {
    //recibe los objetos.
    this.modelo = modelo; //guarda las dos partes en una propiedad
    this.vista = vista;
  }
  reservar(cliente, servicio, precio) {
    const nueva = new Reserva(cliente, servicio, precio); //crea una instacia y usa 1 clase modelo
    if (!this.modelo.agregar(nueva)) {
      //! no logico invierte el boleano
      this.vista.error(`Precio invalido para ${cliente}`);
    }
  }
  actualizar() {
    //usa las dos partes. toma los datos del modelo y se los entraga a la vista
    this.vista.mostrar(this.modelo.lista);
    this.vista.mostrarIngresos(this.modelo.ingresos());
  }
}
