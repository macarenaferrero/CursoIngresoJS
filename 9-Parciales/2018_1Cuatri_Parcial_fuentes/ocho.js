function mostrar() {
    var numero;
    var letra;
    var respuesta;
    var contadorPares=0;
    var contadorImpares=0;
    var contadorceros=0;
    var acumuladorPos=0;
    var acumuladorNeg=0;
    var contadorPos=0;
    var maxiNum;
    var maxiLetra;
    var minNum;
    var minLetra;
    var promedioPos;
    var flag =0;

    do {
        numero = parseInt(prompt("Ingrese un número (-100-100)"));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Número no válido. Ingrese un número (-100-100)"));
        }
        letra = prompt("Ingrese una letra");
        while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) {
            letra = prompt("Letra no válida. Ingrese una letra");
        }

        //PARIDAD_________________________

        if (numero % 2 == 0) {
        contadorPares++;
        } else {
        contadorImpares++;
        }

        //POSITIVIDAD ____________________

        if (numero > 0) {

        acumuladorPos = acumuladorPos + numero;
        contadorPos++;

        } 
        else if (numero < 0) {

        acumuladorNeg = acumuladorNeg + numero;

        } else {
        contadorceros++;
        }


        //MAXIMOS Y MINIMOS ________________

        if (flag == 0 || numero > maxiNum  ) {
            maxiNum = numero;
            maxiLetra = letra;
        }
        if (flag == 0 || numero < minNum) {
            minNum = numero;
            minLetra = letra;

            flag = 1;
        }


        respuesta = prompt("Desea continuar? De lo contrario ingrese NO");
    } while (respuesta != "NO");


    if (contadorPos !=0) {
    promedioPos = acumuladorPos/contadorPares;
   
    }

document.write ("La cantidad de números pares es de: " + contadorPares + "</br>" +
"La cantidad de números impares es de: " + contadorImpares + "</br>" +
"La cantidad de ceros es de: " + contadorceros + "</br>" +
"El promedio de los numeros positivos es de: " + promedioPos.toFixed(2) + "</br>" +
"La suma de todos los números negativos es de: " + acumuladorNeg + "</br>" +
"El número maximo es: " + maxiNum + " y la letra es: " + maxiLetra + "</br>" +
"El número minimo es: " + minNum + " y la letra es: " + minLetra + "</br>" );


}
    /*function mostrar() {
        var letra;
        var numero;
        var seguir;
        var contadorPares = 0;
        var contadorImpares = 0;
        var acumuladorPos = 0;
        var acumuladorNeg = 0;
        var contadorPos = 0;
        var contadorCeros = 0;
        var minimo;
        var letraMinimo;
        var maximo;
        var letraMaximo;
        var flag = 0;
        var promedioPos = 0;
    
        do {
    
            letra = prompt("Ingrese una letra: ");
            while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) {
                letra = prompt("Es no es una letra. Ingrese una letra: ");
            }
            numero = parseInt(prompt("Ingrese numero (-100 y 100): "));
            while (numero < -100 || numero > 100 || isNaN(numero)) {
                numero = parseInt(prompt("Numero invalido. Ingrese numero (-100 y 100): "));
            }
            // --------------- paridad --------------------
            if (numero % 2 == 0) {
                // par
                contadorPares++;
            }
            else {
                // impar
                contadorImpares++;
            }
    
            // --------------- Signo ----------------------
            if (numero > 0) {
                //positivos
                acumuladorPos = acumuladorPos + numero;
                contadorPos++;
            }
            else if (numero < 0) {
                // negativos
                acumuladorNeg = acumuladorNeg + numero;
            }
            else {
                // ceros
                contadorCeros++;
            }
    
            // -------------- maximos y minimos-------------------
    
            if (flag == 0 || numero < minimo) {
                minimo = numero;
                letraMinimo = letra;
            }
            if (flag == 0 || numero > maximo) {
                maximo = numero;
                letraMaximo = letra;
                flag = 1;
            }
    
            seguir = prompt("Quiere continuar?: ");
        } while (seguir == 's');
    
        // -------------- calculo de promedio ----------
    
        if (contadorPos != 0) {
            promedioPos = acumuladorPos / contadorPos;
        }
    
        document.write("a) La cantidad de números pares: " + contadorPares + "</br>");
        document.write("b) La cantidad de números impares: " + contadorImpares + "</br>");
        document.write("c) La cantidad de ceros: " + contadorCeros + "</br>");
        document.write("d) El promedio de todos los números positivos ingresados: " + promedioPos.toFixed(2) + "</br>");
        document.write("e) La suma de todos los números negativos: " + acumuladorNeg + "</br>");
        document.write("f) Letra Maximo: " + letraMaximo + " Numero: " + maximo + "</br>");
        document.write("f) Letra Maximo: " + letraMinimo + " Numero: " + minimo + "</br>");
    
    
    }*/

