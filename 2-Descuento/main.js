import { FnDeDescuento } from "./utilidades.js";

import { calculateDiscount } from "./utilidades.js";    
console.log(FnDeDescuento(1200));//20 de descuento serin 960 pesos a pagar
console.log(FnDeDescuento(756));//10 seria 680.5  pesos aprox
console.log(FnDeDescuento(499));//devuele el mismo precio
console.log(FnDeDescuento("sdkdks")); //precio incorrecto o un cero creo por default

console.log("::::::::::v2::::::::::::");
console.log(calculateDiscount(1200));
console.log(calculateDiscount(756));
console.log(calculateDiscount(499));