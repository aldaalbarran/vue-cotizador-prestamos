const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    // Mientras mayor es la cantidad, menor es el interés
    if (cantidad < 2500) {
        total = cantidad * 1.5;
    } else if (cantidad >= 2500 && cantidad < 5000) {
        total = cantidad * 1.4;
    } else if (cantidad >= 5000 && cantidad < 7500) {
        total = cantidad * 1.3;
    } else  {
        total = cantidad * 1.2;
    }

    // Plazo - Mas plazo, mayor interés
    if (plazo === 6) {
        total *= 1.1;
    } else if (plazo === 12) {
        total *=1.2;
    } else {
        total *= 1.3;
    }

    return total;
};

export {
    calcularTotalPagar
}