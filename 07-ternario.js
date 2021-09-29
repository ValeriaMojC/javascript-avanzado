/*Operador ternario 
Es una estructura de flujo (if abreviado)*/
const edad = 23;

if (edad >= 18) {
    console.log(`Eres mayor de edad`);
}else {
    console.log(`Aun eres menor de edad`);
}

const mensaje = edad > 18 ? 'Eres mayor de edad' : 'Aun eres menor de edad'
document.write(`<p>${mensaje}</p>`);