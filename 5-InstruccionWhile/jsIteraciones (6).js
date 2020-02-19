function mostrar() {
	var numeroIngresado;
	var contador = 0;
	var acumulador = 0;
	var promedio;

	do {
		numeroIngresado = parseInt(prompt("Ingrese un número."));
		while (isNaN(numeroIngresado)) {
			numeroIngresado = prompt("Lo que ingresaste no es un número, reintente");
			numeroIngresado = parseInt(numeroIngresado);
		}
		//Ya sabemos que contamos con un número.
		contador++;
		acumulador = acumulador + numeroIngresado;
		console.log("El contador es: " + contador);
		console.log("Se encuentra acumulando: " + acumulador)
	} while (contador < 5);


	// Ya con los 5 datos ingresados

	promedio = (acumulador / 5);



	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN