
class Alcancia{

    constructor(){
        this.moneda200 =0;
        this.moneda500 =0;
        this.moneda1000 =0;
    }

    agruegarMoneda200(){
        this.moneda200 ++;
    }

    agruegarMoneda500(){
        this.moneda500 ++;
    }

    agruegarMoneda1000(){
        this.moneda1000 ++;
    }

    cantidadTotalAhorrada(){
        let totalMonto = this.moneda200 * 200 + this.moneda500 * 500 + this.moneda1000 * 1000;

        return totalMonto ;
    }

    resetearLaAlcancia(){
        this.moneda200 =0;
        this.moneda500 =0;
        this.moneda1000 =0;
    }
}
export  default Alcancia;
