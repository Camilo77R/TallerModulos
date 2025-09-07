// 5. Escriba una función llamada esBisiesto que reciba un año y determine si es bisiesto. Un año
// es bisiesto si:
// • Es divisible por 4, pero no es divisible por 100, a menos que también sea divisible por 400.
// La función debe retornar:
// • "Es bisiesto" si el año es bisiesto.
// • "No es bisiesto" si el año no lo es.

// un año bisiesto tiene 366 dias  en lugar de 365 => febrero pasa de 28 a 29 dias 
// cada 4 años se agraga un dia mas => los años anteriores al bisiesto acumularon al año 0.25 , 0.50,0.75 y al cuarto año seria 1 dia que es el que se agrega para que todo funcione bien
function esBisiesto(anio){

        // PRIMERO EALUO LAS EXCEPCIONES (de lo especifico a lo general)       

    // si es diisble por 400 siempre sera bisiesto por que anula la regla principal de ser divisible por 4 
    if(anio % 400 === 0 ) return "Es Bisiesto";

    // si no es divisible por 400 entoces puede lo sea por 100??
    if(anio % 100 === 0 ) return "No es Bisiesto";


    // no cumple las anteriosres excepciones, si cumple esta si es Bisiesto
    if(anio % 4 === 0 ) return "Es Bisiesto";

    // no cumplee ninguna de la condiciones
    return "No es bisiesto"
}

export {esBisiesto};

