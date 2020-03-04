
function mostrar()
/*Bienvenidos.
Se pide la carga de datos de un contenedor  de alimento canino con un máximo de carga de 1000kg, cargar hasta que
el cliente quiera o se llene el contenedor.
se pide:
-marca
-kilos por bolsa
-cantidad de bolsa
-importe por bolsa

que marca tiene más kilos en el contenedor?
que marca tiene más bolsas de alimento en el contenedor
que marca tiene el mayor importe por bolsa de alimento
el importe y la marca de la bolsa de alimento menos pesada.				
Mostrar todo con document.write
*/

{
    var marcaAlimento;
    var kilosxBolsa;
    var cantidadDeBolsas;
    var importeBolsa;
    var respuesta;
    var kilosTotales;
    var acumuladorKilos=0;
    var kilosTotalesxMarca;
    var marcaConMasKilos;
    var maxBolsas;
    var maxBolsasxMarca;
    var flag=0;
    var maxImporte;
    var maxImporteMarca;
    var minImportexBolsa;
    var minPesoxMarca;

    do {
        marcaAlimento = prompt("Ingrese marca del alimento.");
        console.log("Marca alimento: " + marcaAlimento);

        var kilosxBolsa = parseInt(prompt("Ingrese kilos por bolsa"));
        while (isNaN(kilosxBolsa) || kilosxBolsa < 0 || kilosxBolsa > 1000 ) {
            kilosxBolsa = parseInt(prompt("Incorrecto. Reingrese los kilos por bolsa"));
        }
        console.log("Kilos por bolsa: " + kilosxBolsa);
        

        cantidadDeBolsas = parseInt(prompt("Ingrese cantidad de bolsas."));
        while (isNaN(cantidadDeBolsas) || cantidadDeBolsas < 0) {
            cantidadDeBolsas = parseInt(prompt("Monto incorrecto. Reingrese cantidad de bolsas."));
        }
        kilosTotales = kilosxBolsa*cantidadDeBolsas;
        acumuladorKilos = acumuladorKilos+kilosTotales;

        console.log("Cantidad de bolsas: " + cantidadDeBolsas);
        console.log("Kilos en el container: " + acumuladorKilos);
        
        importeBolsa = parseFloat(prompt("Ingrese importe por bolsa."));
        while (isNaN(importeBolsa)  || cantidadDeBolsas < 0) {
            importeBolsa = parseFloat(prompt("Importe incorrecto. Reingrese importe por bolsa."));
        }
        
        console.log("Importe de bolsa: " + importeBolsa);

        if (flag == 0 || kilosTotales > kilosTotalesxMarca) {
            kilosTotalesxMarca = kilosTotales;
            marcaConMasKilos = marcaAlimento;
        }
        if (flag == 0 || cantidadDeBolsas > maxBolsas) {
            maxBolsas = cantidadDeBolsas;
            maxBolsasxMarca = marcaAlimento;
        }
        if (flag == 0 || importeBolsa > maxImporte) {
            maxImporte = importeBolsa;
            maxImporteMarca = marcaAlimento;
        }
        if (flag == 0 || importeBolsa < minImportexBolsa) {
            minImportexBolsa = importeBolsa;
            minPesoxMarca = marcaAlimento;

            flag = 1
        }
        
        respuesta = prompt("Desea continuar? De lo contrario ingrese NO")
    } while (respuesta != "NO"  && acumuladorKilos <= 1000);

    document.write("La marca que tiene más kilos en el contenedor es: " + marcaConMasKilos + "</br>");
    document.write("La marca que tiene más bolsas de alimento en el contenedor es: " + maxBolsasxMarca + "</br>");
    document.write("La marca que tiene el mayor importe por bolsa es: " + maxImporteMarca + "</br>");
    document.write("La marca de la bolsa menos pesada es: " + minPesoxMarca + " y su importe es: " + minImportexBolsa + "</br>");
}
