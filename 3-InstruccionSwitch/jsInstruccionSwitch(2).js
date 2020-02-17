function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño) {
    case "Enero":
    case "Febrero" :
    case "Marzo" :
    case "Abril" :
    case "Mayo" :
    case "Junio":
        alert("Falta para el invierno");
        break;

}//FIN DE LA FUNCIÓN venano
switch (mesDelAño) {
    case "Julio":
    case "Agosto" :
        alert("Abrigate que hace frío");
        break;
}

switch (mesDelAño) {
case "Septiembre":
case "Octubre":
case "Noviembre":
case "Diciembre":
    alert("Ya pasamos el frio, ahora calor!");
    break;
}
/*Tambien existe el "default"
default:
    alert("Ya pasamos el frío");
    NO NECESITA BREAK */
}