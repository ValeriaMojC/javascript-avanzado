/*Arreglos. Estructura de Datos*/

/*Declaración de arreglos*/
const arreglo = [];
const arreglo2 = new Array();

let lenguajes = ['JavaScript', 'Java', 'PHP', 'Python', 'C#', 'C++', 'Scala', 'Rust', 'Ruby', 'Cobol'];

/*for (let i = 0; i < lenguajes.length; i++) {
    lenguajes[i];  
}*/
/*.forEach() Nos sirve para recorrer los elementos de un arreglo*/

document.write('<ul>');
lenguajes.forEach(function (lenguaje, index) {
    document.write(`<li>${index}-${lenguaje}</li>`);
});
document.write('</ul>');

/*.map() Crea un arreglo con los resultados*/
let numeros = Array( 2, 3, 4, 27, 19, 12);
let numeros2 = numeros.map(function (numero) {
    return numero * 2;
});

console.log(numeros);
console.log(numeros2);

/*.includes() Determina si un arreglo contiene un valor */
console.log(lenguajes.includes('PHP')); //true
console.log(lenguajes.includes('Go')); //false
console.log(!lenguajes.includes('Go')); //pasaria de false a true

/*.filter() Crea un nuevo arreglo con todos los elementos que cumplan con la condicion */
let filtrados = numeros.filter(function (numero) {
    if (numero > 10) {
        return numero;
    }
});
console.log(filtrados);

//ejemplo de un rango
let arrayV = [];
for (let i = 0; i <= 10; i++) {
    arrayV.push(i); 
}
console.log(arrayV);