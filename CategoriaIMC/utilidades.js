// 3. Escriba una función llamada categoriaIMC que reciba el índice de masa corporal (IMC) de
// una persona y determine su categoría:
// • "Bajo peso" si el IMC es menor a 18.5.
// • "Normal" si el IMC está entre 18.5 y 24.9.
// • "Sobrepeso" si el IMC está entre 25 y 29.9.
// • "Obesidad" si el IMC es 30 o mayor.
// Uso de módulos:
// • Exporta la función categoriaIMC en un archivo utilidades.js.
// • En un archivo main.js, importa la función categoriaIMC y pruébala con diferentes valores
// de IMC.


// early ruturn=> retorno en la condicion que se cumpla => no necesito seguir comparando
export function categoriaIMC(indiceMasaCp){
    if(indiceMasaCp < 18.5) return `Con ${indiceMasaCp}kg, tu peso es BAJO`;
    
    // si lega aqui la condicion anterior fue  false, 
    // indiceMasaCp es mayor que 18.5 entoces slo pongo el otro limite 
    // para no ser redundande en poner indiceMasaCp >= 18.5 ya se sabe 
    // si paso de la primera condicional es mayor o igual  a 18.5 
    if(indiceMasaCp <=24.9) return `Con ${indiceMasaCp}kg, tu peso es NORMAL`;
    
    if(indiceMasaCp <=29.9) return `Con ${indiceMasaCp}kg, tienes SOBREPESO`;
    // todo lo que sea >= 30 es OBESIDAD
    return `tu peso es ${indiceMasaCp}kg, tienes OBESIDAD`;

}