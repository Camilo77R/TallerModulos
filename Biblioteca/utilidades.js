// import datosLibros from './libros.json';

// apartir de la versiones mas recientes de node se usa with ya no assert
import datosLibros from './libros.json' with { type: 'json' };

const consultarLibrosPorPalabraClaveTitulo = (palabraClave)=>{
    const librosConLaPalabra = [];
    // normalizo la pabra y el titulo para que concuerde el formato
    // normalizo la palabra para que tenga un formato uniforme 
    const palabraClaveNormalizada = palabraClave.toLowerCase().trim();
    
    for(let libro of datosLibros){
        // los ? solo normaliza si el titulo existe o no es null => chaining
        const tituloNormalizado = libro?.Titulo?.toLowerCase();

        if(tituloNormalizado &&  tituloNormalizado.includes(palabraClaveNormalizada)){
            librosConLaPalabra.push(libro);  
        }
    }
    
    return librosConLaPalabra;
}



const consultarLibrosPaginas = ()=>{
// titulo y numero de paginas de todos los libros
    const librosyPaginas = []

    for(let libro of datosLibros){
        const nuevoObj = {
            "Titulo": libro.Titulo, 
            "Numero Paginas": libro['Número páginas']//cuando hay espacios es las propiedades se usa [] NOOO .
        }
        //  en cada iteracion voy llenado el array
        librosyPaginas.push(nuevoObj)

    }
    return librosyPaginas;
}


export {consultarLibrosPorPalabraClaveTitulo as consultarLibros};
export {consultarLibrosPaginas };

