/*Funciones de flecha */

function suma(num1, num2) {
    return num1 + num2;
}

/*En las funciones de flecha no se puede llamar antes de la inicialización */
const suma1 = (num1, num2) => {
    return num1 + num2;
}

document.write(`<p>${suma(10,2)} ${suma1(12,4)}</p>`)