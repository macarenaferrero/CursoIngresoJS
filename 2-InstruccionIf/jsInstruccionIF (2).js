function mostrar()
{
//tomo la edad  

var edad;

edad = parseInt(document.getElementById("edad").value);

if (edad >= 18) {

    var mensaje;

    mensaje = ("Usted es mayor de edad.");
    alert(mensaje);
}


}//FIN DE LA FUNCIÓN