function mostrar() {

	var numero = parseInt(prompt("ingrese un número entre 0 y 9."));

	while (numero < 0 || numero > 9 || isNaN(numero)) {
		numero = parseInt(prompt("Error. Reingrese número."));
	}
	document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN

/* while(!(numero>=0 && numero <=9));
ESTA OPCION NO NECESITA "isNaN"
*]/