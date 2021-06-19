window.onload = function () {
    /*Micro desafío
    Van a crear un array con distintos valores movimientos bancarios
    valores positivos (Depositos) y valores negativos (Retiros)
    HTML ustedes deben mostrar 
    1.- Todas las operaciones bancarias
    2.- El total de Depostivos mas la cantidad
    3.- El total de los Retiros mas la cantidad
    4.- Saldo Actual*/
    let movimientosBancarios = [2000.50, 1000.20, -500.00, 1500.00, -200.00, -100.00, 750.00, -2000.00, 2780.00, -150.05, 12000.10];
    let depositos = 0;
    let retiros = 0;
    let contDepositos = 0;
    let contRetiros = 0;
    let saldo = 0;
    document.write("<h1>" + "Mi Resumen de Operaciones Bancarias" + "</h1>");

    document.write('<ol>');
    for (let i = 0; i < movimientosBancarios.length; i++) {
        document.write(`<li> $ ${movimientosBancarios[i]} </li>`);
        if (movimientosBancarios[i] > 0) {
            depositos = depositos + movimientosBancarios[i];
            //contDepositos= contDepositos + 1;
            contDepositos++;
        } else {
            retiros = retiros + movimientosBancarios[i];
            contRetiros++;
        }
    }
    document.write('</ol>');
    document.write("<h2>" + "Cantidad de Depositos: " + contDepositos + "</h2>");
    document.write("<h2>" + "Monto total de Depositos: " + "$" + depositos + "</h2>");
    document.write("<h2>" + "Cantidad de Retiros: " + contRetiros + "</h2>");
    document.write("<h2>" + "Monto total de Retiros: " + "$" + retiros + "</h2>");
    saldo = depositos + retiros;
    document.write("<h2>" + "Saldo Actual: " + "$" + saldo + "</h2>")
    document.write("<hr>");
    document.write(`<h2> Trabajando con funciones </h2>`);
    //Funciones  = Métodos  - Clases - Módulos - Procedimientos - Procedures 
    //Funciones declarativas - Declaradas
    function sumar(valor1, valor2) {
        return valor1 + valor2;
    }
    //Invocar a la función y le paso los valores o argumentos
    let resultadoSuma = sumar(10, 5);
    let resultadoSuma1 = sumar(10, 115);
    let resultadoSuma2 = sumar(10, 225);
    document.write(`<h2> La sumatoria es: ${resultadoSuma} <h2>`);
    document.write(`<h2> La sumatoria es: ${resultadoSuma1} <h2>`);
    document.write(`<h2> La sumatoria es: ${resultadoSuma2} <h2>`);

    //Funciones expresadas
    let restar = function (valor1, valor2) {
        //Micro desafío: Validar que el valor 1 sea mayor al valor 2
        if (valor1 > valor2) {
            return valor1 - valor2;
        }
    }

    let resultadoRestar = restar(5, 20);
    if (resultadoRestar != undefined) {
        document.write(`<h2> La resta de los valores es: ${resultadoRestar} </h2>`)
    } else {
        document.write(`<h2> La resta de los valores es: No pude efectuar la operación </h2>`);
        //alert('No pude efectuar la Resta')
        Swal.fire(
            'Quiero que sepas',
            'No puedo efectuar la resta',
            'success'
        )

    }
    //Nueva versión de JavaScript - 2015 - ECMA - 6 
    //Arrow Function
    let multiplicar = (valor1, valor2) => {
        if (valor1 != 0 && valor2 != 0) {
            return valor1 * valor2;
        }
    }

    let resultadoMultiplicacion = multiplicar(10, 0);
    if (resultadoMultiplicacion != undefined) {
        document.write(`<h2> El resultado de la multiplicación es: ${resultadoMultiplicacion} </h2>`);
    } else {
        //alert("No puedo efectuar la Multiplicación");
        Swal.fire(
            'Quiero que sepas',
            'No puedo efectuar la multiplicación',
            'success'
        )
    }


}








