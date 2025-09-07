// 6. Escribe una función llamada esElegibleParaPrestamo que reciba dos parámetros: el salario
// mensual de una persona y su puntaje de crédito. La función debe retornar:
// • "Elegible para préstamo" si el salario es mayor a 3000000 y el puntaje de crédito es mayor
// a 650.
// • "No elegible para préstamo" en cualquier otro caso.

export const esElegibleParaPrestamo = (salarioMensual, puntajeCrediticio)=>{
    return salarioMensual > 3000000 && puntajeCrediticio > 650 ? "Elegible para prestamo": "No elegible para prestamo";

}

