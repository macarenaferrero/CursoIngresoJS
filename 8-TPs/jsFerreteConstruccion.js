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
    largo = parseFloat(largo);

    ancho = document.getElementById("Ancho").value;
    ancho = parseFloat(ancho);

    perimetro = (largo*2 + ancho*2)*3;
    mensaje = ("Debe comprar " + perimetro + " metros de alambre.");

    //Muestro resultado

    alert(mensaje);

    console.log("mensaje: " + alert);

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

    perimetro = (2*radio*Math.PI*3);
    mensaje = ("Debe comprar " + perimetro + " metros de alambre.");

    //Muestro resultado
    
    alert(mensaje);

    console.log("Circulo: " + perimetro);
}
function Materiales () 
{
	    //Declaro variables
var largo;
var ancho;
var m2;
var compracal;
var compracemento;

    //Asigno variables

    largo = document.getElementById("Largo").value;
    largo = parseFloat(largo);

    ancho = document.getElementById("Ancho").value;
    ancho = parseFloat(ancho);

    //Evaluo cantidad de materiales
    m2 = (largo*ancho);
    compracal = (m2*3);
    compracemento = (m2*2);

    alert("Usted debe comprar " + compracal + " bolsas de cal y " + compracemento + " bolsas de cemento.");

    console.log("compra final: " + compracemento);
}

