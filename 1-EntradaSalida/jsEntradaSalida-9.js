/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var aumento;

     sueldo = parseFloat(document.getElementById("sueldo").value);
     aumento = (sueldo*110/100);

     document.getElementById("resultado").value = aumento;
    
    //Mejorar con mas variables
	
}
