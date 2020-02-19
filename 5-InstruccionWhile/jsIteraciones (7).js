function mostrar() {
	var numeroIngresado;
	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';

	while (respuesta == "si") {
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

	}
	//Ya se que tengo numeros.
	respuesta = prompt("Desea continuar : ingrese si");
	contador++
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN

//TERMINAR