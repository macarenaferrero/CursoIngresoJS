function mostrar() {
    var contador = 0;
    var numero;
    var mayor;
    var menor;

    while (contador < 5) {

        numero = parseInt(prompt("Ingrese un numero: "));
        while (isNaN(numero)) {
            numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
        }

        if( contador == 0 || numero > mayor){
            mayor = numero;
        }
        if( contador == 0 || numero < menor){
            mayor = numero;
        }

        contador++;
    }

    alert("El mayor numero es " + mayor + " y el menor es " + menor);



}