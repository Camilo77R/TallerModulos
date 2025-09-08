import Alcancia from "./alcancia.js";

const alcancia1  = new Alcancia();

const $txtMonedas200 = document.getElementById("txtMonedas200");
const $txtMonedas500 = document.getElementById("txtMonedas500");
const $txtMonedas1000 = document.getElementById("txtMonedas1000");
const $txtTotalAlcancia = document.getElementById("txtTotalAlcancia");
const $btnRomper = document.getElementById("btnRomper");





const  actualizarInterfaz  = ()=>{
    $txtMonedas200.value = alcancia1.moneda200;
    $txtMonedas500.value = alcancia1.moneda500;
    $txtMonedas1000.value = alcancia1.moneda1000;
    $txtTotalAlcancia.value = alcancia1.cantidadTotalAhorrada();
}


document.querySelector("#img200").addEventListener("click",()=>{
    alcancia1.agruegarMoneda200();
    actualizarInterfaz();
})

document.querySelector("#img500").addEventListener("click",()=>{
    alcancia1.agruegarMoneda500();
    actualizarInterfaz();
})

document.querySelector("#img1000").addEventListener("click",()=>{
    alcancia1.agruegarMoneda1000();
    actualizarInterfaz();
})


function inicializarAlcancia(){
    alcancia1.resetearLaAlcancia();
    actualizarInterfaz();
}


$btnRomper.addEventListener("click", inicializarAlcancia);







