/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/

function mostrar() {
    var nombre;
    var cantidadDePersonas;
    var cantidadDeDias;
    var formaDePago;
    var contadordeReservas;
    var maximasPersonas;
    var respuesta;
    var acumuladorDeDias;
    var maximoHuesped;
    var promedio;
    var contadorefete = 0;
    var contadorQR = 0;
    var contadorTarjeta = 0;
    var formaDepPagoMasUtilizada;

    respuesta = "s"
    contadordeReservas++

    while (respuesta == "s");
    {

        nombre = prompt("Ingrese nombre");
        while (!isNaN(nombre)) {
            nombre = prompt("Lo que ingresaste no es un nombre, reintente");
        }
        cantidadDePersonas = prompt("Cantidad de personas");
        parseInt(cantidadDePersonas);
        while (isNaN(cantidadDePersonas) || cantidadDePersonas > 1) {
            cantidadDePersonas = prompt("Cantidad incorrecta. Reintente.");
            parseInt(cantidadDePersonas);

        }// Termina Cantidad de personas

        cantidadDeDias = prompt("Ingrese cantidad de días");
        parseInt(cantidadDeDias);
        while (isNaN(cantidadDeDias) || cantidadDeDias < 1) {
            cantidadDeDias = prompt("Lo que ingresaste no es correcto, reintente");
            parseInt(cantidadDeDias);
        } //Termina variable cantidad de Días

        formaDePago = prompt("Forma de pago");
        while (!isNaN(formaDePago) || formaDePago != "efectivo" && formaDePago != "qr" && formaDePago != "tarjeta") {
            formaDePago = prompt("Reingrese una forma de pago aceptable");
        } // Terminado forma de pago

        acumuladorDeDias = acumuladorDeDias + cantidadDeDias;

        if (contadordeReservas == 1 || cantidadDePersonas > maximasPersonas) {
            maximasPersonas = cantidadDePersonas;
            maximoHuesped = nombre;
        }
        if (contadordeReservas == 1 || cantidadDeDias > maximasPersonas) {
            maximasPersonas = cantidadDeDias;

        }
        switch (formaDePago) {
            case "efectivo":
                contadorefete++
                break;
            case "qr":
                contadorQR++
            default:
            contadorTarjeta++
                break;
        }
        if (contadorefete>contadorQR && contadorefete>contadorTarjeta) {
            formaDepPagoMasUtilizada="efectivo"
            
        }else {
            if (contadorQR>contadorTarjeta) {
                formaDepPagoMasUtilizada="qr"
            }
        }else {
            formaDepPagoMasUtilizada= "tarjeta"
        }
    }
    respuesta = prompt("Desea continuar")
    promedio = contadordeReservas / acumuladorDeDias


}

}// Fin ejercicio
