function mostrar() {
    var edad

    edad = parseInt(document.getElementById("edad").value);

    if (edad >= 18) {

        alert("Usted es mayor de edad.");
    }
    else {

        if (edad < 13) {
            alert("Usted es un niñe.")
        }
        else {
            alert("Usted es adolescente.")

        }
    }

}

/* Tambien podria escribir:
if (condicion){

}
else if (condicion) {

}
else (condición){
    
}