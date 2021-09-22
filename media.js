/*Solcitar número al usuario, mostrar la suma y la media de los números introducidos
hasta introducir un número negativo y ahi mostrar el resultado
*/

// let numero = parseInt(prompt('Ingresa un numero'));
let arrayNumeros = [];
let suma = 0;
let numero;


while (numero !== -2) {
    numero = parseInt(prompt('Ingresa un numero'));
    if (numero != -2) {
        arrayNumeros.push(numero);
    }
}

for (let i = 0; i < arrayNumeros.length; i++) {
    suma = suma + arrayNumeros[i];    
}


console.log(arrayNumeros);
console.log(suma);

