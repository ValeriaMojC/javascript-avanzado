/*Escribir una calculadora para calcular la edad, 
el usuario ingresa su año de nacimiento y el programa 
le da la edad*/

//let fecha = 1998;
let fecha = parseInt(prompt('¿En que año naciste?', '1998'));
function calcularEdad(fecha) {
    let fechaActual = 2021;
    let edad = fechaActual-fecha;

    document.write(`Naciste en ${fecha} asi que tienes ${edad} años.`)
}
calcularEdad(fecha);