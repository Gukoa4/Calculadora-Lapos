"use strict";
//let monto = document.querySelector(".monto");
let iconoCopy = document.querySelector(".far");

/**
 * @description Obtener los montos y cuotas
 * @returns Un objeto con la tarjeta, valor total, cuota y monto de interes
 */
const calculo = (monto, cuotas) => {
  //let calculos = [["visa"],["naranja"]];
  let calculos = [["Visa-Mastercard-Cabal"], ["Naranja"]];

  for (let j = 0; j < cuotas.length; j++) {
    for (let i = 0; i < cuotas[j].length; i++) {
      let cantCuotas = cuotas[j][i][0];
      const interesPorcentual = cuotas[j][i][1];
      const importe = financial(monto * interesPorcentual);
      let cuota;
      if (isNaN(cantCuotas)) {
        cuota = financial(importe);
      } else cuota = financial(importe / cantCuotas);
      const interes = financial(importe - monto);
      calculos[j].push([importe, cuota, interes, cantCuotas]);
    }
  }
  return calculos;
};

function dotcomma(n) {
  n = n.replace(".", "");
  n = n.replace("$", "");
  n = n.replace(",", ".");
  return n;
}

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

function documento(arrayCuotas) {
  // oklet h2Visa = document.createElement("h2");
  //ok let h2Naranja = document.createElement("h2");
  //ok let divVisa = document.createElement("div");
  //ok divVisa.classList.add("visa");
  // let divNaranja = document.createElement("div");
  // okdivNaranja.classList.add("narnaja")
  // oklet bloques = document.createElement("div");
  // let cantidadCuotas = document.createElement("h3");
  // let valorFinal = document.createElement("span");
  // let total = document.createElement("b");
  // let valorCuota = document.createElement("span");
  // let individual =document.createElement("b");
  // let valorInteres = document.createElement("span");
  // let interes = document.createElement("b");
  contenedorTarjetas.innerHTML = "";
  for (let i = 0; i < arrayCuotas.length; i++) {
    //matriz 2 dimensiones, 0 es nombre de la tarjeta
    //tarjeta es un array vector

    //arrayCuotas[i][0]
    contenedorTarjetas.innerHTML += `
    <h2>${arrayCuotas[i][0]}</h2>
    <div class="${arrayCuotas[i][0]}">
    </div>
    </div>
    `;
    for (let j = 1; j < arrayCuotas[i].length; j++) {
      let bloques = document.querySelector("." + arrayCuotas[i][0]);
      bloques.innerHTML += `
        <div class="bloques">
        <h3>${arrayCuotas[i][j][3]} Cuota</h3>
        <h4>Valor final</h4>
        <div class="tooltip">
        <b>$${arrayCuotas[i][j][0]}</b>
          <i class="far fa-copy" onclick="copy(this)" onmouseout="outFunc(this)" aria-hidden="true">
             <span class="tooltiptext" id="myTooltip">Copiar</span>
          </i>
          </div>
        <h4>Valor cuota</h4>
        <div class="tooltip">
        <b>$${arrayCuotas[i][j][1]}</b>
          <i class="far fa-copy" onclick="copy(this)" onmouseout="outFunc(this)" aria-hidden="true">
             <span class="tooltiptext" id="myTooltip">Copiar</span>
          </i>
          </div>
        <h4>Interes</h4>
        <div class="tooltip">
        <b>$${arrayCuotas[i][j][2]}</b>
        <i class="far fa-copy" onclick="copy(this)" onmouseout="outFunc(this)" aria-hidden="true">
        <span class="tooltiptext" id="myTooltip">Copiar</span>
        </i>
        </div>
        `;
    }
  }
}

function calcular() {
  let cuotas = [
    [
      [1, 1],
      [2, 1.0942],
      [3, 1.1288],
      [6, 1.2384],
      [12, 1.5216],
    ],
    [
      [1, 1],
      [2, 1.0965],
      ["Zeta", 1.057],
      [12, 1.3234],
    ],
  ];
  let numero = financial(dotcomma(monto.value));
  if (isNaN(numero)) {
    numero = 0;
  }
  let arrCuotas = calculo(numero, cuotas);
  documento(arrCuotas);
  monto.value = "";
}

const icon = () => {
  // <i class="far fa-copy"></i>
  let copyIcon = document.createElement("i");
  copyIcon.classList.add("far");
  copyIcon.classList.add("fa-copy");
  copyIcon.setAttribute("onclick", "copy(this)");
  return copyIcon;
};

const copy = (obj) => {

  let hermano = obj.previousElementSibling.innerText;
  hermano = hermano.replace("$", "");
  hermano = hermano.replace("+", "");
  navigator.clipboard.writeText(hermano);
  obj.children[0].innerText = "Copiado";
};

function outFunc(obj) {
 obj.children[0].innerText = "Copiar";
}

/*
Copy text
*/
