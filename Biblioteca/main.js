import { consultarLibros, consultarLibrosPaginas } from "./utilidades.js";

// consultaremos los libros que en su titulo constinen una palabra en cualquier lugar

// DESCOMENTAR LOS CASOS !!


// console.log(consultarLibros("amor"));
// console.log(consultarLibros("dolor"));// si no hay es []
// console.log(consultarLibros("eL")); // el toma la palabra de cualquir lado del titulo incluso dentro de una palabra si esta "el" trae ese libro


console.log(consultarLibrosPaginas())//trae todo los libros con titulo y n paginas