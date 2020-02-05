/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var numeroUno;
var numeroDos;

numeroUno = parseInt(document.getElementById("numeroUno").value);

numeroDos = parseInt(document.getElementById("numeroDos").value);


alert((numeroUno + numeroDos));

/*Tambien podria haber declarado variable numeroDosparseado

var numeroUnoParseado;
var numeroDosParseado;

numeroUnoParseado = parseInt(numeroUno);
numeroDosParseado = parseInt(numeroDos);

también puedo declarar la variable resultado

var resultado;

resultado = numeroUnoParseado + numeroDosParseado;

alert(resultado);
*/
}
