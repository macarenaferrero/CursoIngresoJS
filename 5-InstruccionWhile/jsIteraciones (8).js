function mostrar() {

	var contador = 0;
	var acumuladorPositivos = 0;
	var multiplicadorNegativos = 1;

	var respuesta = 'si';

	while (respuesta != "no") {
		numeroIngresado = prompt("Ingrese un número.");
		numeroIngresado = parseInt(numeroIngresado);

		//Validar que es correcto.
		while (isNaN(numeroIngresado)) {
			numeroIngresado = prompt("Lo que ingresaste no es un número, reintente");
			numeroIngresado = parseInt(numeroIngresado);

		} if (numeroIngresado >= 0) {
			//Es positivo
			acumuladorPositivos = acumuladorPositivos + numeroIngresado;
			console.log("Se va sumando: " + acumuladorPositivos)

		} else {
			//Es negativo
			multiplicadorNegativos = multiplicadorNegativos * numeroIngresado;
		}

		respuesta = prompt("Desea continuar? Si desea cancelar escriba no");
		
		console.log("La multiplicación es: " + multiplicadorNegativos);

	} //CIERRE WHILE



	document.getElementById('suma').value = acumuladorPositivos;
	document.getElementById('producto').value = multiplicadorNegativos;

}//FIN DE LA FUNCIÓN

