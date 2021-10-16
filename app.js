window.onload = function cambiatexto() {
  //write your code here
  var TextoExcusa = "--";
  var parrafo = document
    .getElementById("excuse")
    .addEventListener("click", AccionInnerHTML, false);

  return TextoExcusa;
};

function AccionInnerHTML() {
  var texto = "";
  var who = ["The dog ", "My grandma ", "His turtle ", "My bird "];
  var action = ["ate ", "peed ", "crushed ", "broke "];
  var what = ["my homework ", "the keys ", "the report ", "the car "];
  var when = [
    "before the class ",
    "right on time ",
    "when I finished ",
    "during my lunch ",
    "while I was praying "
  ];

  var indiceTexto = [0, 0, 0, 0];
  //document.getElementById("depuracion").innerHTML = indiceTexto[1];
  for (let i = 0; i < indiceTexto.length; i++) {
    indiceTexto[i] = Math.random() * 3;
  } // rellenamos con indices aleatorios

  //document.getElementById("depuracion").innerHTML = indiceTexto[2];
  for (let i = 0; i < indiceTexto.length; i++) {
    indiceTexto[i] = Math.round(indiceTexto[i]);
  }

  // ya tenemos un numero aleatorio entero entre 0 y 3
  // indiceTexto = [2, 3, 1, 0] p ej

  // document.getElementById("depuracion").innerHTML = indiceTexto[2];
  for (let i = 0; i < 4; i++) {
    if (i == 0) {
      var excusa1 = who[indiceTexto[i]];
    } else if (i == 1) {
      var excusa2 = action[indiceTexto[i]];
    } else if (i == 2) {
      var excusa3 = what[indiceTexto[i]];
    } else {
      var excusa4 = when[indiceTexto[i]];
    }
  } // aqui ya tendriamos relleno con excusas, sólo faltaría montar la excusa
  //document.getElementById("depuracion").innerHTML = console.log(excusa2);
  texto = texto.concat(excusa1, " ", excusa2, " ", excusa3, " ", excusa4);
  document.getElementById("excuse").innerHTML = texto;
}
