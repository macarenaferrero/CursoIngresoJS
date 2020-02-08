/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ 
    //Declaro variables
var largo;
var ancho;
var perimetro;
var mensaje;

    //Asigno variables

    largo = document.getElementById("Largo").value;
    largo = parseInt(largo);

    ancho = document.getElementById("Ancho").value;
    ancho = parseInt(ancho);

    perimetro = (largo*2 + ancho*2)*3;
    mensaje = ("Debe comprar " + perimetro + " metros de alambre.");

    //Muestro resultado

    alert(mensaje);

}
function Circulo () 
{
	//Declaro variables
var radio;
var perimetro;
var mensaje;

    //Asigno variables

    radio = document.getElementById("Radio").value;
    radio = parseFloat(radio)

    perimetro = (2*radio*3*3.141592654);
    mensaje = ("Debe comprar " + perimetro + " metros de alambre.");

    //Muestro resultado
    
    alert(mensaje);
}
function Materiales () 
{
	
}