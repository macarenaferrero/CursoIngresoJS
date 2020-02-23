function mostrar() {
	var numeroIngresado;
	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';

	while (respuesta != "no") {
		numeroIngresado = prompt("Ingrese un número.");
		numeroIngresado = parseInt(numeroIngresado);

		//Validar que es correcto.
		while (isNaN(numeroIngresado)) {
			numeroIngresado = prompt("Lo que ingresaste no es un número, reintente");
			numeroIngresado = parseInt(numeroIngresado);
		}
		respuesta = prompt("Desea continuar? Si desea cancelar escriba no");
		contador++
		acumulador = acumulador + numeroIngresado;
		promedio = acumulador / contador
		console.log("Se encuentra acumulando: " + acumulador)
		console.log("El promedio es: " + promedio);

	} //CIERRE WHILE
	
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN
