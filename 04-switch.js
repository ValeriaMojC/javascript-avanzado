/* Swicth
    Estructura de control de flujo, nos ayuda a tomar decisiones
    mediante la evaluación de una condición
    (Tipo if) */

/*const edad = parseInt(prompt('Ingresa tu edad'));
let mensaje = '';*/

/*if (edad === 18) {
    mensaje = 'Acaba de cumplir la mayoria de edad';
}*/

/*switch (edad) {
    case 18:
        mensaje = 'Acaba de cumplir la mayoria de edad';
        break;
    case 25:
        mensaje = 'Ya eres un adulto';
        break;
    case 70:
        mensaje = 'ya eres de la tercera edad';
        break;
    default:
        mensaje = 'Fuera del rango de edad';
        break;
}

document.write(`<p  style="color: blueviolet;">${mensaje}</p>`);*/

const nombre = prompt('Ingresa tu nombre');
let mensaje = '';

switch (nombre.toLowerCase()) {
    case 'valeria':
        mensaje = 'Eres administrador';
        break;
    case 'juan':
        mensaje = 'Eres usuario';
        break;
    default:
        mensaje = 'No tienes permisos para usar el sistema'
        break;
}

document.write(`<p  style="color: blueviolet;">${nombre}, ${mensaje}</p>`);