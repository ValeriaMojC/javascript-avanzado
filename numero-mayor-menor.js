/* Realizar un programa que lea por teclado dos números, si el primero es 
mayor al segundo informar su suma y diferencia, en caso contrario informar 
el producto y la división del primero respecto al segundo.*/

let num1 = parseInt(prompt('Ingresa el primer numero'));
let num2 =  parseInt(prompt('Ingresa el segundo numero'));

if (num1 > num2) {
    let suma = num1 + num2;
    let diferencia = num1 - num2;
    document.write(`La suma de ${num1} y ${num2} es: ${suma} <br />`);
    document.write(`La diferencia de ${num1} y ${num2} es: ${diferencia}`)
} else if (num2 > num1) {
    let producto = num2 * num1;
    let division = num2 / num1;
    document.write(`El producto de ${num2} y ${num1} es: ${producto} <br />`);
    document.write(`La division de ${num2} y ${num1} es: ${division}`);
} else if (num1 === num2) {
    document.write(`Recuerda!!! Los numeros tienen que ser diferentes`);
}

