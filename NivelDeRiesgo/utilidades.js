// 4. Escriba una función llamada nivelRiesgo que reciba dos parámetros: la edad de una persona
// y un valor booleano (true o false) que indique si la persona tiene enfermedades previas. La
// función debe retornar:
// • "Alto riesgo" si la persona tiene más de 60 años o tiene enfermedades previas.
// • "Riesgo moderado" si la persona tiene entre 40 y 60 años y tiene enfermedades previas.
// • "Bajo riesgo" en cualquier otro caso.
// Uso de módulos:
// • Exporta la función nivelRiesgo en un archivo utilidades.js.
// • En un archivo main.js, importa la función nivelRiesgo y pruébala con diferentes
// combinaciones de edad y enfermedades.
const nivelRiesgo = (edadPersona, padeceAlgo) => {
    // Interpretación LITERAL (problemática)
    // if (edadPersona > 60 || padeceAlgo) return "RIESGO ALTO";
    // el problemas es que cualquiera que sea true es alto riesgo y no es logico 
    

    //si ya tiene mas de 60 es alto Riesgo  si o si
    if (edadPersona > 60) return "RIESGO ALTO";
    
    // si esta en el rango y padece de algo es riesgo moderado 
    if (edadPersona >= 40 && edadPersona <= 60 && padeceAlgo) return "RIESGO MODERADO";
    
    // las enfermedads tempranas suelen ser mas graves
    if (padeceAlgo) return "RIESGO ALTO";
    
    // Todo lo demás: bajo riesgo
    return "RIESGO BAJO";
};

export {nivelRiesgo as calcularNivelRiesgo}