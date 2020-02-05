/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()

{	
    //Declaro variables
    var numeroUno;
    var numeroDos;
    var resultado;
    var mensaje;

    //Asignacion de variables
    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);
    resultado = numeroUno + numeroDos;
    mensaje = ("La suma es " + resultado + ".");

    //muestro resultado en mensaje

    alert(mensaje);
    
	
}

function restar()
{
    //Declaro variables
    var numeroUno;
    var numeroDos;
    var resultado;
    var mensaje;

    //Asignacion de variables
    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);
    resultado = numeroUno - numeroDos;
    mensaje = ("La resta es " + resultado + ".");

    //Muestro resultado en mensaje
    
    alert(mensaje);
	
}

function multiplicar()
{ 
    //Declaro variables
    var numeroUno;
    var numeroDos;
    var resultado;
    var mensaje;

    //Asignacion de variables
    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);
    resultado = numeroUno*numeroDos;
    mensaje = ("La multiplicación es " + resultado + ".");

    //Muestro resultado en mensaje
    
    alert(mensaje);
	
}

function dividir()
{
	//Declaro variables
    var numeroUno;
    var numeroDos;
    var resultado;
    var mensaje;

    //Asignacion de variables
    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);
    resultado = numeroUno/numeroDos;
    mensaje = ("La división es " + resultado + ".");

    //Muestro resultado en mensaje
    
    alert(mensaje);
}

