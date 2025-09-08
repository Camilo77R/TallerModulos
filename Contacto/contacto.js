// 9. Hacer una aplicación que permita gestionar sus contactos. Para ello debe crear una clase
// Contacto en un archivo llamado contacto.js. La clase debe tener los siguientes atributos:
// a. Identificación
// b. Nombre
// c. Apellido
// d. Correo
// e. Celular

export default class Contacto{
    constructor(identificacion, nombre, apellido, correo, celular){
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.celular = celular;

    }
}