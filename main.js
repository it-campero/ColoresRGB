const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerHTML = rojo;
textoVerde.innerHTML = verde;
textoAzul.innerHTML = azul;

let actualizarColor = (rojo, verde, azul) => {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
};

inputRojo.addEventListener("change", (evt) => {
  rojo = evt.target.value;
  textoRojo.innerHTML = rojo;
  actualizarColor(rojo, verde, azul);
});
inputVerde.addEventListener("change", (evt) => {
  verde = evt.target.value;
  textoVerde.innerHTML = verde;
  actualizarColor(rojo, verde, azul);
});
inputAzul.addEventListener("change", (evt) => {
  azul = evt.target.value;
  textoAzul.innerHTML = azul;
  actualizarColor(rojo, verde, azul);
});
