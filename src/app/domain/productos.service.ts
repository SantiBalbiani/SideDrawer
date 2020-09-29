import { Injectable } from "@angular/core";
/* import { Producto } from "./producto"; */

@Injectable()
export class ProductosService {
    private productos: Array<{name: String, detail: String, id: String}> = [];

    agregar(product: {name: String, detail: String, id: String}){
        this.productos.push(product);
    }

    buscar(){
        return this.productos;
    }
}