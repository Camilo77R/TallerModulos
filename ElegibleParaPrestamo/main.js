import { esElegibleParaPrestamo } from "./utilidades.js";

console.log(esElegibleParaPrestamo(3500000, 772));// cumples los minimos para ser aceptado 
console.log(esElegibleParaPrestamo(3500000, 120));//cumple en salario pero no es puntos AND=> true + false = false
console.log(esElegibleParaPrestamo(2100000, 892));//cumple con los puntos pero no con el salirio => FALSE
console.log(esElegibleParaPrestamo(1500000, 20));// no cuple con ninguna => FALSE