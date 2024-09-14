import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const letterNumber1 = document.querySelector("#letterNUMBER");
  letterNumber1.innerHTML = generarLetraAleatoria();

  const iconorow1 = document.querySelector("#iconos2");
  const iconorow2 = document.querySelector("#iconos1");

  const iconoAleatorio = generarIconoAleatorio();
  iconorow1.innerHTML = iconoAleatorio;
  iconorow2.innerHTML = iconoAleatorio;
};

function generarLetraAleatoria() {
  const letras = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  const indiceAleatorio = Math.floor(Math.random() * letras.length);
  return letras[indiceAleatorio];
}

function generarIconoAleatorio() {
  const iconos = ["♥", "♦", "♣", "♠"]; // Ejemplo de iconos de cartas
  const indiceAleatorio = Math.floor(Math.random() * iconos.length);
  return iconos[indiceAleatorio];
}

function generarCarta() {
  const palos = ["corazones", "picas", "tréboles", "diamantes"];
  const valores = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const paloAleatorio = Math.floor(Math.random() * palos.length);
  const valorAleatorio = Math.floor(Math.random() * valores.length);

  const carta = {
    palo: palos[paloAleatorio],
    valor: valores[valorAleatorio]
  };

  return carta;
}
