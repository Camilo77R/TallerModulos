import { calcularNivelRiesgo } from "./utilidades.js";

console.log(calcularNivelRiesgo(47,true));//padece algo y esta en una edad en el tango de moderado riesgo
console.log(calcularNivelRiesgo(47,false));//tiene mas de 40 pero no padece nada esta ok por que la condicion de true del && no entra a esa condicional de moderado
console.log(calcularNivelRiesgo(65,false));//es alto riesgo  por tener mas de 60 asi no padezca nada
console.log(calcularNivelRiesgo(66,true));// el hecho de tener 60 ya lo hace ato riesgo 
console.log(calcularNivelRiesgo(23,true)); //padece algo antes de los 40 riesgo alto 
console.log(calcularNivelRiesgo(23,false));//es joven y no padece nada => el riesgo es bajo