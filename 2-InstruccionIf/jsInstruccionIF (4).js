function mostrar()
{
//tomo la edad  
 var edad

 edad = parseInt(document.getElementById("edad").value);

 if ( edad >=13 && edad <= 17) {

    alert("Usted es un adolescente.")
 }
/* Otra forma de decirlo pordría ser: "Si la edad NO esta fuera el rango es adolescente"
Se escribe = if (! (edad < 13 || edad > 17)) {
}
! = Niego 
*/

}//FIN DE LA FUNCIÓN