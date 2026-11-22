// agenda.js - Mensaje según el día (final de index.html)
const dia = "sábado"; //Pruebe otros días
switch (dia) {
  case "sábado":
    console.log("Sábado: foto impresa de regalo");
    break;
  case "domingo":
    console.log("Domingo: el estudio esta cerrado");
    break;
  default:
    console.log(`El ${dia} abre de 9 a.m. a 6 p.m.`);
}
