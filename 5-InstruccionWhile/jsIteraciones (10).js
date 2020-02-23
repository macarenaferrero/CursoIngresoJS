function mostrar() {

	var contador = 0;
	//declarar contadores y variables 
	//Debemos declarar que son cero
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var numeroIngresado;
	var cantidadNegativos = 0;
	var cantidadPositivos = 0;
	var cantidadCeros = 0;
	var cantidadNumeroPares = 0;
	var promedioNegativos;
	var diferenciaNegativosPositivos;
	var promedioPositivos;
	var respuesta = "si";

	while (respuesta != 'no') {
		numeroIngresado = prompt("Ingrese un número.");
		numeroIngresado = parseInt(numeroIngresado);

		//Validar que es correcto.
		while (isNaN(numeroIngresado)) {
			numeroIngresado = prompt("Lo que ingresaste no es un número, reintente");
			numeroIngresado = parseInt(numeroIngresado);
		}
		if (numeroIngresado > 0) {
			//Es positivo
			acumuladorPositivos = acumuladorPositivos + numeroIngresado;
			cantidadPositivos++;
			var resto = numeroIngresado % 2;
			if (resto == 0) {
				//es un numero par
				cantidadNumeroPares++;
			}
		} else if (numeroIngresado < 0) {
			acumuladorNegativos = acumuladorNegativos + numeroIngresado;
			cantidadNegativos++;

		} else {
			cantidadCeros++
		}
		respuesta = prompt("Desea continuar? Si desea cancelar escriba no");

	}//terminamos el bucle
	
	promedioNegativos = acumuladorNegativos / cantidadNegativos;
	promedioPositivos = acumuladorPositivos / cantidadPositivos
	diferenciaNegativosPositivos = promedioPositivos - promedioNegativos

		document.write("El total de números positivos es de : " +acumuladorPositivos + "<Br>" + 
		"El total de los numeros negativos es de " + acumuladorNegativos + "<Br>" +
		"La cantidad de positivos ingresados es de: " + cantidadPositivos + "<Br>" +
		"La cantidad de los negativos ingresados es de: " + cantidadNegativos + "<Br>" +
		"La cantidad de los ceros ingresados es de: " + cantidadCeros + "<Br>" +
		"La cantidad de números pares ingresados es de: " + cantidadNumeroPares +  "<Br>" +
		"El promedio de los negativos es de: " +  promedioNegativos + "<Br>" +
		"El promedio de los positivos es de: " +  promedioPositivos + "<Br>" +
		"La diferencia entre positivos y negativos es de: " + diferenciaNegativosPositivos);

	}//FIN DE LA FUNCIÓN