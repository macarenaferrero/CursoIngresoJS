
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
    var contadordeReservas = 0;
    var maximasPersonas;
    var respuesta;
    var acumuladorDeDias = 0;
    var maximoHuesped;
    var promedio;
    var contadorefete = 0;
    var contadorQR = 0;
    var contadorTarjeta = 0;
    var formaDepPagoMasUtilizada;
    var maximoDias;
    var maximoPersonasMaxDias;

    do {
        nombre = prompt("Ingrese nombre");
        while (!isNaN(nombre)) {
            nombre = prompt("Lo que ingresaste no es un nombre, reintente");
        }
        contadordeReservas++;
        console.log("contador reservas:" + contadordeReservas);

        cantidadDePersonas = prompt("Cantidad de personas");
        cantidadDePersonas = parseInt(cantidadDePersonas);
        while (isNaN(cantidadDePersonas) || cantidadDePersonas < 0) {
            cantidadDePersonas = prompt("Cantidad incorrecta. Reintente.");
            cantidadDePersonas = parseInt(cantidadDePersonas);
            console.log("Cantidad de personas: " + cantidadDePersonas);

        }// Termina Cantidad de personas

        cantidadDeDias = prompt("Ingrese cantidad de días");
        cantidadDeDias=parseInt(cantidadDeDias);
        while (isNaN(cantidadDeDias) || cantidadDeDias < 1) {
            cantidadDeDias = prompt("Lo que ingresaste no es correcto, reintente");
            cantidadDeDias=parseInt(cantidadDeDias);
        } //Termina variable cantidad de Días
        console.log("Cantidad de días: " + cantidadDeDias);

        acumuladorDeDias = parseInt(acumuladorDeDias) + parseInt(cantidadDeDias);
        console.log("Acumulador de días: " + acumuladorDeDias);

        formaDePago = prompt("Forma de pago");
        while (!isNaN(formaDePago) || formaDePago != "efectivo" && formaDePago != "qr" && formaDePago != "tarjeta") {
            formaDePago = prompt("Reingrese una forma de pago aceptable");
        } // Terminado forma de pago
        

        if (contadordeReservas == 1 || cantidadDePersonas > maximasPersonas) {
            maximasPersonas = cantidadDePersonas;
            maximoHuesped = nombre;
            console.log("Máximas personas: " + maximasPersonas)
            console.log("Máximo huesped: " + maximoHuesped)
        }
        if (contadordeReservas == 1 || cantidadDeDias > maximoDias) {
            maximoDias = cantidadDeDias;
            maximoPersonasMaxDias = cantidadDePersonas;

            console.log("Maximas personas: " + maximoDias);
        }
        switch (formaDePago) {
            case "efectivo":
                contadorefete++
                break;
            case "qr":
                contadorQR++
                break;
            default:
                contadorTarjeta++
        }
        if (contadorefete > contadorQR && contadorefete > contadorTarjeta) {
            formaDepPagoMasUtilizada = "efectivo"

        } else {
            if (contadorQR > contadorTarjeta) {
                formaDepPagoMasUtilizada = "qr"
            } else {
                formaDepPagoMasUtilizada = "tarjeta"
            }

        }
        respuesta = prompt("¿Desea continuar? De lo contrario ingrese NO");
    } while (respuesta != "NO");

    promedio = acumuladorDeDias / contadordeReservas
    console.log("Promedio días: " + promedio)

    document.write("El huesped que trajo más personas es: " + maximoHuesped + "</br>" +
        "La cantidad de personas que se quedaron más días es de: " + maximoPersonasMaxDias + "</br>" +
        "La forma de pago más utilizada es de: " + formaDepPagoMasUtilizada + "</br>" +
        "El promedio de cantidad de días por reserva: " + promedio);
}
