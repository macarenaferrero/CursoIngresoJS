function mostrar() {

	// declarar variables
	var maximo;
	var minimo;
	var flag = 0;
	var numeroIngresado;

	var respuesta = 'si';

	while (respuesta != 'no') {
		numeroIngresado = prompt("Ingrese un número.");
		numeroIngresado = parseInt(numeroIngresado);

		//Validar que es correcto.
		while (isNaN(numeroIngresado)) {
			numeroIngresado = prompt("Lo que ingresaste no es un número, reintente");
			numeroIngresado = parseInt(numeroIngresado);
		}
		//Observar si son máximos o mínimos.
		if (flag == 0) {
			//Entrarias sólo la primera vez
			maximo = numeroIngresado;
			minimo = numeroIngresado;
			flag = 1;
		} else if (numeroIngresado > maximo) {
			maximo = numeroIngresado;

		} else if (numeroIngresado < minimo); {
			minimo = numeroIngresado;
		}
		respuesta = prompt("Desea continuar? Si desea cancelar escriba no");
		document.getElementById("maximo").value = maximo
		document.getElementById("minimo").value = minimo

	}//FIN DEL WHILE




}//FIN DE LA FUNCIÓN