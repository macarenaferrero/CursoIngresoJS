/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
    //Declaro variables

    var temperatura;
    var conversionF;

    //Asigno variables

    temperatura = parseFloat(document.getElementById("Temperatura").value);
    conversionF = ((temperatura - 32) * 5/9);

    alert(temperatura + " Fahrenheit son " + conversionF + " centígrados.");
}

function CentigradosFahrenheit() {
    
    //Declaro variables

    var temperatura;
    var conversionC;

    //Asigno variables

temperatura = parseFloat(document.getElementById("Temperatura").value);
conversionC = ((temperatura *5/9) + 32);

alert(temperatura + " centígrados son " + conversionC + " Fahrenheit.")

}