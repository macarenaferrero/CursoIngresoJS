function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var respuesta;
    var contadorTemp=0;
    var flag=0;
    var maxPeso;
    var maxMarca;
    var minPeso;
    var promedioPeso;
    var acumuladorPeso=0;
    var contadorPeso=0;
    var contadortempmenoracero=0;

    do {
        marca = prompt("Ingrese marca del producto.");
        peso = parseFloat(prompt("Ingrese peso del producto. (1 -100)"));
        while ( isNaN(peso) || peso < 1 || peso > 100 ) {
            peso = parseFloat(prompt("Carácter inválido, reintente."));
        }
        acumuladorPeso = acumuladorPeso + peso;
        contadorPeso++

        temperatura = prompt("Ingrese temperatura de almacenamiento.");
        while (isNaN(temperatura) || temperatura > 30 || temperatura < -30) {
            temperatura = parseInt(prompt("Temperatura incorrecta, reintente (-30 a 30)"));

        } // TERMINO DE INGRESAR DATOS

        //PARIDAD

        if (temperatura % 2 == 0) {
            contadorTemp++;
        }

        if (flag == 0 || peso > maxPeso) {
            maxPeso = peso;
            maxMarca = marca
        }
        if (flag == 0 || peso < minPeso) {
            minPeso = peso;

            flag = 1;
        }

        if (temperatura < 0) {
            contadortempmenoracero++;
        }

        respuesta = prompt("Desea continuar? De lo contrario ingrese NO")
    } while (respuesta != "NO");

    promedioPeso = acumuladorPeso/contadorPeso;

    document.write("La cantidad de temperaturas pares es de; " + contadorTemp + "</br>" +
    "La marca del producto más pesado es: " + maxMarca + "</br>" +
    "La cantidad de productos que se conservan a menos de 0 grados es: " + contadortempmenoracero + "</br>" +
    "El promedio de peso de todos los productos es de: " + promedioPeso  + "</br>" +
    "El peso máximo es de: " + maxPeso + ". El peso minimo es de: " + minPeso);
}
