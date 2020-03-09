function mostrar()
{
var altura;
var sexo;
var contador=0;
var acumuladorAlturas=0;
var flag=0;
var alturaMasBaja;
var sexoMasBaja;
var contadorMujeresAltas=0;

for (contador = 0; contador < 5; contador++) {
    
    altura = parseFloat(prompt("Ingrese altura en cm (0 - 250)"));
    while (altura < 0 || altura > 250 || isNaN(altura)) {
        altura = parseFloat(prompt("Altura incorrecta. Reingrese altura en cm (0 - 250)"));
        
    }
    acumuladorAlturas = acumuladorAlturas + altura;

    sexo = prompt("Ingrese sexo (f - m)");
    while (sexo != 'f' && sexo != 'm') {
        sexo = prompt("Sexo invalido. Ingrese sexo (f - m): ");
        
    }
    if (flag==0 || altura < alturaMasBaja ) {
        alturaMasBaja = altura;
        sexoMasBaja = sexo;

        flag=1
    }
    if (altura > 190 && sexo == "f") {
        contadorMujeresAltas++
    }
}

    promedio = acumuladorAlturas/5


    document.write("El promedio de las alturas es de: " + promedio + "</br>");
    document.write("La altura más baja es: " + alturaMasBaja + " y el sexo de esa persona es: " + sexoMasBaja + "</br>");
    document.write("La cantidad de mujeres que su altura supera los 190 centimetros: " + contadorMujeresAltas + "</br>");
}
