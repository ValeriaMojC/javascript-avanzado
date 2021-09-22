const nombre = prompt('¿Cual es tu nombre?', 'Valeria Mojica');
const edad = prompt('¿Cual es tu edad?', '22');
console.log(`Hola ${nombre}. Tu edad es: ${edad} años.`);

const saludo = `<h1>Hola ${nombre}.<br /> Tu edad es: ${edad} años.</h1>`; 

document.write(saludo);