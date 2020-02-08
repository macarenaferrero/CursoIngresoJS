/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   
    //Declaro variables
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;
    var mensaje;

    //Asigno variables

    precioUno = document.getElementById("PrecioUno").value;
    precioUno = parseInt(precioUno);
    precioDos = document.getElementById("PrecioDos").value;
    precioDos = parseInt(precioDos);
    precioTres = document.getElementById("PrecioTres").value;
    precioTres = parseInt(precioTres);

    suma = (precioUno + precioDos + precioTres);

    mensaje = ("La suma de los tres elementos es " + suma + ".");

    //Muestro suma 

    alert (mensaje);

}
function Promedio () 
{
	 //Declaro variables
     var precioUno;
     var precioDos;
     var precioTres;
     var promedio;
     var mensaje;
 
     //Asigno variables
 
     precioUno = document.getElementById("PrecioUno").value;
    precioUno = parseInt(precioUno);
    precioDos = document.getElementById("PrecioDos").value;
    precioDos = parseInt(precioDos);
    precioTres = document.getElementById("PrecioTres").value;
    precioTres = parseInt(precioTres);
 
     promedio = (precioUno + precioDos + precioTres)/3;
 
     mensaje = ("El promedio de los tres elementos es " + promedio + ".");
 
     //Muestro promedio
 
     alert (mensaje);
}
function PrecioFinal () 
{
	 //Declaro variables
     var precioUno;
     var precioDos;
     var precioTres;
     var preciofinal;
     var mensaje;
 
     //Asigno variables
 
    precioUno = document.getElementById("PrecioUno").value;
    precioUno = parseInt(precioUno);
    precioDos = document.getElementById("PrecioDos").value;
    precioDos = parseInt(precioDos);
    precioTres = document.getElementById("PrecioTres").value;
    precioTres = parseInt(precioTres);
 
     preciofinal = (precioUno + precioDos + precioTres)*121/100;
 
     mensaje = ("El precio final de los tres elementos es " + preciofinal + ".");
 
     //Muestro precio final
 
     alert (mensaje);
}