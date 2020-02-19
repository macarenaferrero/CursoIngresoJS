function mostrar() {

    var sexo = prompt("ingrese f ó m .");
    sexo = sexo.toLocaleLowerCase();

    while (!(sexo == "f" || sexo == "m")) {
        var sexo = prompt("ingrese f ó m .");
    }
    //Acá ya se que el dato es correcto.

    switch (sexo) {
        case "f":
            sexo = "Femenino";
            break;
        case "m":
            sexo = "Masculino";

            break;
    }
    document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN