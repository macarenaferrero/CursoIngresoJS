function mostrar() {
    var nombreAnimal;
    var pesoAnimal;
    var temperaturaAnimal;
    var respuesta;
    var contadorTemp = 0;
    var flag = 0;
    var animalMasPesado;
    var nombreMasPesado;
    var contadoAnimalesBajoCero = 0;
    var promedioAnimales;
    var contadorAnimales = 0;
    var acumuladorPeso = 0;
    var maxAnimalBajoCero;
    var minAnimalBajoCero;


    do {
        nombreAnimal = prompt("Ingrese el nombre del animal.");
        contadorAnimales++;

        pesoAnimal = parseFloat(prompt("Ingrese el peso del animal (1-1000)."));
        while (pesoAnimal < 1 || pesoAnimal > 1000 || isNaN(pesoAnimal)) {
            pesoAnimal = parseFloat(prompt("Número inválido. Reingrese el peso del animal (1-1000)."));
        }
        acumuladorPeso = acumuladorPeso + pesoAnimal;

        temperaturaAnimal = parseInt(prompt("Ingrese temperatura del hábitat (-30 - 30)."));
        while (temperaturaAnimal < -30 || temperaturaAnimal > 30 || isNaN(temperaturaAnimal)) {
            temperaturaAnimal = parseInt(prompt("Incorrecto. Ingrese temperatura del hábitat (-30 - 30)."));
        }
        //PARIDAD________________
        if (temperaturaAnimal % 2 == 0) {
            contadorTemp++;
        }
        //ANIMAL MÁS PESADO________________
        if (flag == 0 || pesoAnimal > animalMasPesado) {
            animalMasPesado = pesoAnimal;
            nombreMasPesado = nombreAnimal;
            
            flag = 1
        }
        //ANIMALES BAJO CERO____________________
        if (temperaturaAnimal < 0) {
            contadoAnimalesBajoCero++;
            // MAXIMOS Y MINIMOS________________________
            
            if ( contadoAnimalesBajoCero == 1 || temperaturaAnimal > maxAnimalBajoCero) {
                maxAnimalBajoCero = temperaturaAnimal;
            }
            if ( contadoAnimalesBajoCero == 1 || temperaturaAnimal < minAnimalBajoCero) {
                minAnimalBajoCero = temperaturaAnimal;

            }

        }
        respuesta = prompt("Desea continuar? De lo contrario ingrese NO.");
    } while (respuesta != "NO");

    promedioAnimales = acumuladorPeso / contadorAnimales;

    document.write("La cantidad de temperaturas pares es de: " + contadorTemp + "</br>")
    document.write("El animal más pesado se llama: " + nombreMasPesado + " y pesa: " + animalMasPesado + "</br>")
    document.write("La cantidad de animales que viven a menos de 0 grados es de: " + contadoAnimalesBajoCero + "</br>")
    document.write("El promedio del peso de todos los animales: " + promedioAnimales + "</br>")
    document.write("El peso máximo de los animales bajo cero es: " + maxAnimalBajoCero + "</br>")
    document.write("El peso mínimo de los animales bajo cero es: " + minAnimalBajoCero + "</br>");


}
