"use strict"
let monto = document.getElementById("monto");
let consultar =document.getElementById("btnConsultar");

consultar.addEventListener("click",()=>{
    
    document.querySelector(".una-cuota").innerHTML +=  monto.value*1;
    document.querySelector(".cada-una").innerHTML = document.querySelector(".una-cuota").textContent.slice(1)/1;
    
    document.querySelector(".dos-cuota").innerHTML += "$"+ monto.value*1.0942;
    document.querySelector(".cada-dos").innerHTML = document.querySelector(".dos-cuota").textContent.slice(1)/2;
    
    document.querySelector(".tres-cuota").innerHTML += "$"+ monto.value*1.1288;
    document.querySelector(".cada-tres").innerHTML = document.querySelector(".tres-cuota").textContent.slice(1)/3;
    
    document.querySelector(".seis-cuota").innerHTML += "$"+ monto.value*1.2384;
    document.querySelector(".cada-seis").innerHTML = document.querySelector(".seis-cuota").textContent.slice(1)/6;
    
    document.querySelector(".doce-cuota").innerHTML += "$"+ monto.value*1.5216;
    document.querySelector(".cada-doce").innerHTML = document.querySelector(".doce-cuota").textContent.slice(1)/12;
    
    document.querySelector(".una-cuota-naranja").innerHTML += "$"+ monto.value*1;
    document.querySelector(".cada-una-naranja").innerHTML = document.querySelector(".una-cuota-naranja").textContent.slice(1)/1;
    
    document.querySelector(".dos-cuota-naranja").innerHTML += "$"+ monto.value*1.0965;
    document.querySelector(".cada-dos-naranja").innerHTML = document.querySelector(".dos-cuota-naranja").textContent.slice(1)/2;
    
    document.querySelector(".zeta-cuota-naranja").innerHTML += "$"+ monto.value*1.057;
    document.querySelector(".cada-zeta-naranja").innerHTML = document.querySelector(".zeta-cuota-naranja").textContent.slice(1)/1;
    
    document.querySelector(".doce-cuota-naranja").innerHTML += "$"+ monto.value*1.3234;
    document.querySelector(".cada-doce-naranja").innerHTML = document.querySelector(".doce-cuota-naranja").textContent.slice(1)/12;
    
})