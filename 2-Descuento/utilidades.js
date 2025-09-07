// 2. Escribir una función llamada calcularDescuento que reciba el precio de un producto y calcule
// el descuento aplicable de acuerdo a la siguiente lógica:
// • Si el precio es mayor a 1000, el descuento es del 20%.
// • Si el precio es entre 500 y 1000, el descuento es del 10%.
// • Si el precio es menor a 500, no se aplica descuento.
// La función debe retornar el precio final después de aplicar el descuento.
// Uso de módulos:
// • Exporta la función calcularDescuento en un archivo utilidades.js.
// • En un archivo main.js, importa la función calcularDescuento y pruébala con diferentes
// precios.

function calcularDescuento(price){
    let discount = 0;
    let finalPrice = 0;
    if(price > 1000 ){
        discount = (price * 0.2);
        finalPrice = price - discount;
    }else if (price >= 500 && price < 1000){
        discount = (price * 0.1); //saco el descuento del precio de la compra
        finalPrice = price - discount;//resto es descuento al precio sin descuento para obtener lo que debo pagar
    }else if(price < 500)return price;
    // else{ //Si ponen letras
    //     console.log("EROR! precio digitado 'INCORRECTO'");
    // }

    return finalPrice;
}




// si el 100 es todo => le enfoco en el descueto y lo que tengo que pagar a lo ultimo lo calculo o
//  pago el 80 por que el 20 me regalan(no lo cuento) ...
function calcularDescuentoOptimizada(price){
    if(price > 1000) return price * 0.8;//pienso en cuanto me resta pagar si o esta el 20 pues sera => 80 lo que resta pagar 
    if(price >= 500) return price * 0.9 ; // no me enfoco en el descuento si no en de ese 100% cuanto debo pagar si ya no cuento al descuento(Cuanto queda para pagar)
    return price; // sin descuento esto es un 100% de precio
}

export {calcularDescuento as FnDeDescuento};

export{calcularDescuentoOptimizada as calculateDiscount};

