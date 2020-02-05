/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    //Declaro variable nombre

var nombre;
    
    nombre = document.getElementById("elNombre").value;

    //Declaro variable edad

    var edad;

    edad = document.getElementById("laEdad").value;

    //Muestro mensaje por alert

    alert("Usted se llama " + nombre + " y su edad es " + edad + ".");

    /*Tambien podria haber declarado la variable mensaje

    var mensaje

    mensaje = "Usted se llama " + nombre + " y su edad es " + edad + ".");

    alert(mensaje) */
}

