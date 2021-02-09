import "regenerator-runtime/runtime";

import calcularColorBarra from "./Utils/calcularColorBarra";
import calcularValorBarra from "./Utils/calcularValorBarra";

document.addEventListener("DOMContentLoaded", function (event) {
  calcularDatosBarra();
});

const calcularDatosBarra = () => {
  let valorMaximo = 200;
  let porcentaje = prompt("Ingresa el porcentaje, por favor.");
  let colorBarra = calcularColorBarra(Number(porcentaje));
  let valorBarra = calcularValorBarra(valorMaximo, Number(porcentaje));
 
  let campo = document.getElementById("resultado");
  campo.textContent = `La barra tiene una longtud de ${valorBarra}px y es de color ${colorBarra}`;
};
