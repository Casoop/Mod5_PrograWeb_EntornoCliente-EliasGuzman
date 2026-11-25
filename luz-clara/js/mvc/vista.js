//vista.js - VISTA: Muesta los datos (por ahora en consola)
class VistaReservas {
  //la clase de la vista. no tiene constructor porque no necesita guardar datos propios. JS le pone uno vacio.
  mostrar(lista) {
    lista.forEach((r, i) => {
      //i es la posicion (r, i) dos parametros del callback
      //i:for Each entraga el elemento (r) y su posicion (i) que empieza en cero
      console.log(`${i + 1}. ${r.cliente}. ${r.servicio}`); //r.cliente . r.servicio son propiedades de cada reserva. lala vista solo lee datos, no los cambia.
    });
  }
  mostrarIngresos(monto) {
    console.log(`Ingresos: ¢${monto.toLocaleString("es-CR")}`);
  }
  error(texto) {
    console.error(texto); //mensaje en rojo
  }
}
