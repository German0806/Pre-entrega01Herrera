function calcularPagoMensual(montoPrestamo, tasaInteresAnual, plazoEnMeses) {
    const tasaInteresMensual = tasaInteresAnual / 100 / 12;
    const numerador = montoPrestamo * tasaInteresMensual;
    const denominador = 1 - Math.pow(1 + tasaInteresMensual, -plazoEnMeses);
    return numerador / denominador;
}
//solicita que ingrese un monto de prestamo
function solicitarMonto() {
    let monto;
    do {
        monto = prompt("Ingrese el monto del préstamo:");
        if (isNaN(monto) || monto <= 99999) {
             alert("Por favor, ingrese un monto superior a $100,000.");
        }
    } while (isNaN(monto) || monto <= 99999);
        
    return parseFloat(monto); 
}
//se ingresa un plazo de devolucion
function solicitarPlazo() {
    let plazo;
    do {
        plazo = parseInt(prompt("Ingrese el plazo del préstamo en meses (de 1 a 60):"));
        if (isNaN(plazo) || plazo < 1 || plazo > 60) {
            alert("Por favor, ingrese un plazo válido de 1 a 60 meses.");
        }
    } while (isNaN(plazo) || plazo < 1 || plazo > 60);
        
    return plazo; 
}

function simuladorPrestamo() {      
    let monto = solicitarMonto();
    let tasa = parseFloat(prompt("Ingrese la tasa de interés anual en %:"));
    let plazo = solicitarPlazo();

    let pagoMensual = calcularPagoMensual(monto, tasa, plazo);

    alert("El pago mensual será de: $" + pagoMensual.toFixed(2));
}

simuladorPrestamo();
