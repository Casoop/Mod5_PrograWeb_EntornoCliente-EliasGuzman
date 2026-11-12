Error #1A: El recurso de “http://127.0.0.1:5500/UA1/S03/horario/js/horario.js” se bloqueó debido a la falta de coincidencia del tipo MIME (“text/html”) (X-Content-Type-Options: nosniff).

Error #1B: Hubo un fallo al cargar el <script> con fuente “http://127.0.0.1:5500/UA1/S03/horario/js/horario.js”.

Correción #1: el nombre del archivo enlazado desde head era distinto, se cambio horarios.js por horario.js

Error #2: Uncaught SyntaxError: "" string literal contains an unescaped line break

Correción #2: faltaba la presencia de comillas al final del mensaje, se añadieron comillas tras m.

Error #3: Uncaught ReferenceError: Console is not defined <anonymous> http://127.0.0.1:5500/UA1/S03/horario/js/horario.js:4

Correción #3: se digito console.log con una c mayuscula, se cambio por la version correcta/normal

| #   | Mensaje de la consola                                                                                             | Archivo:línea | Corrección                                                                                   |
| --- | ----------------------------------------------------------------------------------------------------------------- | ------------- | -------------------------------------------------------------------------------------------- |
| 1   | Hubo un fallo al cargar el <script> con fuente “http://127.0.0.1:5500/UA1/S03/horario/js/horario.js”.             | horarios.js   | el nombre del archivo enlazado desde head era distinto, se cambio horarios.js por horario.js |
| 2   | Uncaught SyntaxError: "" string literal contains an unescaped line break                                          | Línea: 3      | faltaba la presencia de comillas al final del mensaje, se añadieron comillas tras m.         |
| 3   | Uncaught ReferenceError: Console is not defined <anonymous> http://127.0.0.1:5500/UA1/S03/horario/js/horario.js:4 | Línea: 5      | se digito console.log con una c mayuscula, se cambio por la version correcta/normal          |
