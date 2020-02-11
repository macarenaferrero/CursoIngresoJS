function mostrar()
{
var edad
var estadocivil

edad = parseInt(document.getElementById("edad").value);

estadocivil = document.getElementById("estadoCivil").value;

if( edad < 18 && estadocivil != "Soltero") {

    alert("Es muy pequeño para NO ser soltero");

}
	
// if (! (edad < 13 || edad > 17)) { (OTRA FORMA)

}//FIN DE LA FUNCIÓN