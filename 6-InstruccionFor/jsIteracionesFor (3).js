function mostrar() {

    var numero;
    var mayor;
    var menor;

    for (var contador = 0; contador < 5; contador++) {

        numero = parseInt(prompt("Ingrese un numero: "));
        while (isNaN(numero)) {
            numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
        }

        if (contador == 0 || numero > mayor) {
            mayor = numero;
        }
        if (contador == 0 || numero < menor) {
            menor = numero;
        }

    }

    alert("El mayor numero es " + mayor + " y el menor es " + menor);



}