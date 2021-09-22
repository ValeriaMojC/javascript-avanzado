let num = parseInt(prompt('Ingresa un numero'));

if (num % 2 == 0){
    console.log(`El numero ${num} es par`);
    document.write(`El numero ${num} es par`);
} else {
    console.log(`El numero ${num} es impar`);
    document.write(`El numero ${num} es impar`);
}