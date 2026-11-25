//reservas.js - ARRANQUE: une el modelo, la vista y el controlador
const modelo = new Reservas(); //instacia del modelo. PArentesis vacio porque el controlador no recibe datos.
const vista = new VistaReservas();
const reservas = new ControladorReservas(modelo, vista); //instancia del controlador. Recibe los dos objetos ya creados

reservas.reservar("Ana Rodriguez", "Familiar", 75000); //metodo del controlador. es la accion del usuario.
reservas.reservar("Luis Mora", "Perfil profesional", 38000);
reservas.reservar("Prueba", "Individual", 0);
reservas.actualizar();
