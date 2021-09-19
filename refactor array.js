"use strict";
let monto = document.querySelector(".monto");
let iconoCopy = document.querySelector (".far")

/**
 * @description Obtener los montos y cuotas
 * @returns Un objeto con el valor total, cuota y monto de interes
 */
const calculo = (monto, cuotas) => {
  let calculos = [];
  for (let i = 0; i < cuotas.length; i++) {
    let cantCuotas = cuotas[i][0];
    const interesPorcentual = cuotas[i][1];
    const importe = financial(monto * interesPorcentual);
    if (isNaN(cantCuotas)) {
      cantCuotas = 1;
    }
    const cuota = financial(importe / cantCuotas);
    const interes = financial(importe - monto);
    calculos.push([importe, cuota, interes]);
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

monto.addEventListener("input", (evt) => {
  evt.preventDefault();
  let cuotas = [
    [1, 1],
    [2, 1.0942],
    [3, 1.1288],
    [6, 1.2384],
    [12, 1.5216],
    [1, 1],
    [2, 1.0965],
    ["zeta", 1.057],
    [12, 1.3234],
  ];
  let numero = financial(dotcomma(monto.value));
  if (isNaN(numero)) {
    numero = 0;
  }
  let arrCuotas = calculo(numero, cuotas);
  const arra = document.querySelectorAll(".cuota");
  let j = 0;
  for (let i = 0; i < arra.length; i += 6, j++) {
    arra[i].innerHTML = `Valor final <br>`;
    arra[i + 1].innerHTML = `$${arrCuotas[j][0]} `;
    arra[i + 1].appendChild(icon()) ;
    arra[i + 1].style.fontWeight = "500";

    arra[i + 2].innerHTML = "<br> Valor cuota";
    arra[i + 3].innerHTML = "$" + arrCuotas[j][1];
    arra[i + 3].style.fontWeight = "500";

    arra[i + 4].innerHTML = "<br>Interes";
    arra[i + 5].innerHTML = "+ $" + arrCuotas[j][2];
    arra[i + 5].appendChild(icon()) ;
    arra[i + 5].style.fontWeight = "500";
  }
});

const icon = ()=>{
  // <i class="far fa-copy"></i>
  let copyIcon = document.createElement("i");
  copyIcon.classList.add("far");
  copyIcon.classList.add("fa-copy");
  copyIcon.setAttribute("onclick","copy(this)")
  return copyIcon;
}

const copy =(obj)=>{
  
  let hermano = obj.previousSibling.data;
  console.log(hermano);
  hermano = hermano.replace("$", "");
  hermano = hermano.replace("+", "");
  console.log(hermano);
  navigator.clipboard.writeText(hermano);
}
