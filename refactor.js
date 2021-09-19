"use strict";
let monto = document.getElementById("monto");
let consultar = document.getElementById("btnConsultar");
//array con los valores para despues pasarlos por child
//TNA

let cuotas = [1,1,1.0942,2,1.1288,3,1.2384,6,1.5216,12,1,1,1.0965,2,1.057,1,1.3234,12];

function dotcomma(n) {
  n = n.replace(".", "");
  n = n.replace(",", ".");
  return n;
}

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

consultar.addEventListener("click", () => {
  let numero = financial(dotcomma(monto.value));

  document.querySelector(".una-cuota").innerHTML += "$" + numero;
  document.querySelector(".cada-una").innerHTML = "$" + financial(numero);

  document.querySelector(".dos-cuota").innerHTML +=
    "$" + financial(numero * 1.0942);
  document.querySelector(".cada-dos").innerHTML =
    "$" + financial((numero * 1.0942) / 2);

  document.querySelector(".tres-cuota").innerHTML +=
    "$" + financial(numero * 1.1288);
  document.querySelector(".cada-tres").innerHTML =
    "$" + financial((numero * 1.1288) / 3);

  document.querySelector(".seis-cuota").innerHTML +=
    "$" + financial(numero * 1.2384);
  document.querySelector(".cada-seis").innerHTML =
    "$" + financial((numero * 1.2384) / 6);

  document.querySelector(".doce-cuota").innerHTML +=
    "$" + financial(numero * 1.5216);
  document.querySelector(".cada-doce").innerHTML =
    "$" + financial((numero * 1.5216) / 12);

  document.querySelector(".una-cuota-naranja").innerHTML +=
    "$" + financial(numero);
  document.querySelector(".cada-una-naranja").innerHTML =
    "$" + financial(numero);

  document.querySelector(".dos-cuota-naranja").innerHTML +=
    "$" + financial(numero * 1.0965);
  document.querySelector(".cada-dos-naranja").innerHTML =
    "$" + financial((numero * 1.0965) / 2);

  document.querySelector(".zeta-cuota-naranja").innerHTML +=
    "$" + financial(numero * 1.057);
  document.querySelector(".cada-zeta-naranja").innerHTML =
    "$" + financial(numero * 1.057);

  document.querySelector(".doce-cuota-naranja").innerHTML +=
    "$" + financial(numero * 1.3234);
  document.querySelector(".cada-doce-naranja").innerHTML =
    "$" + financial((numero * 1.3234) / 12);
});
