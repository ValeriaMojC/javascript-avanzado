/*Mostrar todos los numeros impares que hay entre dos números introducidos por el usuario*/

let numeroInicio = parseInt(prompt("Digita el primer numero"));
let numeroFin = parseInt(prompt("Digita el segundo numero"));


let arrayN = [];
let arrayImpar = [];

for (let i = numeroInicio; i <= numeroFin; i++) {
    arrayN.push(i);
}

for (let i = 0; i < arrayN.length; i++) {
    if (arrayN[i] % 2 !== 0) {
        arrayImpar.push(arrayN[i]);
    }
    
}


document.write(`Los numero impares son: ${arrayImpar}`);
console.log(arrayImpar);
//console.log(arrayN);

/*
const numero1 = parseInt(prompt("Ingresa numero 1: "));
const numero2 = parseInt(prompt("Ingresa numero 2: "));

if(numero1 < numero2){
    for (let i = numero1; i <= numero2 ; i++) {
        if( i % 2 != 0)
        document.write(`Los numeros impares son: ${i} <br> `);
    }
}else if(numero1 > numero2){
    for (let i = numero2; i <= numero1 ; i++) {
        if( i % 2 != 0)
        document.write(`Los numeros impares son: ${i} <br> `);
    }
}else if (numero1 % 2 != 0){
    document.write(`Los numeros ingresados son iguales y son impar: ${numero1}`);
}else{
    document.write(`Los numeros ingresados no son impar`);
}*/
