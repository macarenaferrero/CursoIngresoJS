function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	var random

	random = parseInt(Math.random() * 11);

	if (random >= 9) {
		alert("Excelente.")
	}
	else {

		if (random < 4) {
			alert("Vamos, la próxima se puede.")
		}
		else {
			alert("Aprobó.")
		}
	}
	
}