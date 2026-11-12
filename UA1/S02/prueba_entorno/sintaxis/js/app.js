// app.js - error de sintaxis (falta de comillas)
console.log("Inicio del programa");
console.log("Hola, mundo");
console.log("Fin del programa");

// error semantica (calcula otra cosa)
console.log("Promedio de 8 y 9:");
console.log(8 + 9 / 2); //primero divide y luego suma 9/2 = 4.5 + 8 = 12.5
console.log((8 + 9) / 2); //primero suma 8 + 9 y luego la division 17 / 2 = 8.5
