/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    //Declaro variables
    var cantidad;
    var total;
    var marca;
    var descuentogral;


    //Asigno variables

    cantidad = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;
    descuentogral = (total * 30 / 100);

    //Opero
    total = (cantidad * 35);
    console.log("Ver precio: " + total);
    if (cantidad >= 6) {

        descuento = (total * 50 / 100)
        document.getElementById("precioDescuento").value = descuento;
    }
    else {

        document.getElementById("precioDescuento").value = total
    }// Cerramos ejercicio A

    if (cantidad = 5 && marca == "Argentinaluz") {

        var descuentoarg;

        descuentoarg = (total * 40 / 100);
        document.getElementById("precioDescuento").value = descuentoarg;
    }
    console.log("descuento gral: " + descuentoarg)
        else {
        

        document.getElementById("precioDescuento").value = descuentogral;
    }//Cerramos ejercicio B

    console.log("descuento gral: " + descuentogral)

    //NO PUDE TERMINAR

}
