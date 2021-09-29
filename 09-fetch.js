/*Fetch nos permite hacer peticiones http desde JS */
/*JSON = Javascript object notion */

//Hacer peticion
const peticion = fetch('https://jsonplaceholder.typicode.com/posts').then(resp => resp.json()).then(data => {
    console.log(data);
}).catch(e => {
    //.catch es para enviar que hay un error
    console.log(e);
});

console.log(peticion);