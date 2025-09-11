import Contacto from "./contacto.js";

// taraig todos los elementos del htm que necesito 

const $fomulario = document.querySelector("#frm-container");
const $txtId = document.querySelector("#txt-identificacion");
const $txtNombre = document.querySelector("#txt-nombre");
const $txtApellido = document.querySelector("#txt-apellido");
const $txtCorreo = document.querySelector("#txt-correo");
const $txtCelular = document.querySelector("#txt-celular");

const $btnAgregar = document.querySelector("#btn-agregar");
const $btnConsultar = document.querySelector("#btn-consultar");
const $btnActualizar = document.querySelector("#btn-actualizar");
const $btnEliminar = document.querySelector("#btn-eliminar");

const $tBody = document.querySelector("#tbody");


// instacio la el objeto de Notyf para las alertas
const notyf = new Notyf({
    duration: 4000,
    position: { x: 'right', y: 'top' }
});


// debo almacenar esos objetos en un array 
const misContactos = [];



// agregar contacto a la agenda se debe mostrar  en la tabla inferior

function agregarContacto(e){
    e.preventDefault();//prevengo que el button se comporte como subit gracias al event
    console.log("El botón fue seleccionado correctamente.");
    // instancio un objeto => le paso como valor a los params lo que tenga en cada campo perteneciente
    // si el id ya esta no se puede agregar a otro con ese mismo id
    
    const idRepetida = verificarIdRepetido();
    if(idRepetida !== true ){
        const miContacto = new Contacto($txtId.value, $txtNombre.value, $txtApellido.value, $txtCorreo.value, $txtCelular.value);
        misContactos.push(miContacto);
        notyf.success('✅ Contacto agregado correctamente');

        mostrarEnTabla();

    }else{
        notyf.error('❌ ID repetida, cámbiala!');
    }
}

function verificarIdRepetido(){
    let estaRepetida =  misContactos.some(c => c.identificacion === $txtId.value);
    console.log(estaRepetida);
    if(estaRepetida === true ) return true;//si existe el id  es true pero NO PUEDO Agregar
    else return estaRepetida;//Es lo mismo que decir returna false
}

$btnAgregar.addEventListener("click", agregarContacto);


function mostrarEnTabla(){
    // ipi l tabla antes para poder hacer una nueva fila y o se dupliquen 
    $tBody.innerHTML = "";
    // recorro lo que hay en el array de ob y pego donde deba los datos
    misContactos.forEach((contactoSolo)=>{

        
        // se debe poner el += para que se agregue otra fila sino se sbreecribe la misma
        $tBody.innerHTML += `<tr> 
            <td>${contactoSolo.identificacion} </td>
            <td>${contactoSolo.nombre} </td>
            <td>${contactoSolo.apellido} </td>
            <td>${contactoSolo.correo} </td>
            <td>${contactoSolo.celular} </td>
        </tr>`
    });

}