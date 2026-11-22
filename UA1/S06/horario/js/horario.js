// horario.js - ¿Abre ese día?
try {
  const dia = prompt("¿Que día es?");
  const limpio = dia.trim().toLocaleLowerCase(); //recorta los espacios sobrantes y pasa el texto a minusculas

  switch (limpio) {
    case "domingo":
    case "lunes":
      console.log("El lunes está cerrado");
      break;
    default:
      console.log(`El ${limpio} abre de 10:00 a. m. a 7:00 p. m.`);
      break;
  }
} catch {
  console.warn("No se indicó un día.");
} finally {
  console.log("Casa Tomillo · Barrio Amón");
}
