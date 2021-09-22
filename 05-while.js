/*Ciclo while
Nos permite repetir bloques de código mientras una 
condición sea verdadera*/

/*let num1 = parseInt(prompt('Ingresa un número'));

//NaN not a number
while (isNaN(num1)) {
    num1 = parseInt(prompt('Ingresa un número VALIDO'));
}*/

/*let num1 = parseInt(prompt('Ingresa un número'));
const num_secreto = 23;
let intentos = 1;

while (num1 !== num_secreto) {
    console.log("No adivinaste el numero secreto");
    console.log(`Intento: ${intentos}`);
    intentos++;
    num1 = parseInt(prompt('Ingresa un número'));
}

console.log('Felicidades! Encontraste el numero secreto!');*/

let num1 = parseInt(prompt('Ingresa un número'));

do {
    document.write(`<p  style="color: blueviolet;">El numero introducido es: ${num1}</p>`);
    num1 = parseInt(prompt('Ingresa un número'));
} while (num1 > 5);
