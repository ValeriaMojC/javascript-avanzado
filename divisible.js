/*Mostrar todos los numero divisores de un número introducido.*/
let numero = parseInt(prompt('ingresa un numero'));
let arrayN = [];
let contador = 0;

/*for (let i = 0; i <= numero; i++) {
    if (numero % i == 0) {
        arrayN.push(i);
    }
}

document.write(`El numero ${numero} es divisible entre: ${arrayN}`);
console.log(arrayN); */


/*while(contador <= numero ) {
    if (numero % contador == 0) {
        arrayN.push(contador);
    }
    contador++;
}
document.write(`El numero ${numero} es divisible entre: ${arrayN}`);
console.log(arrayN);*/

do {
    if (numero % contador == 0) {
        arrayN.push(contador);
    }
    contador++;
} while (contador <= numero );

document.write(`El numero ${numero} es divisible entre: ${arrayN}`);
console.log(arrayN);