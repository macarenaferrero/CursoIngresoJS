/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    //Declaro variables
    
    var divisor;
    var dividendo;

    //Asigno variables
    
    divisor = parseInt(document.getElementById("numeroDivisor").value);
    dividendo = parseInt(document.getElementById("numeroDividendo").value);


    var resultado;
     var mensaje;
 
    resultado = dividendo%divisor;
    

    mensaje = ("El resto es " + resultado + ".");

    alert(mensaje);
}
