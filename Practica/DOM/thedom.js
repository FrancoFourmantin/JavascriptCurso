console.log('Works');

// Para seleccionar un elemento del DOM utilzamos query selector
const title = document.querySelector('h1');
console.log(title);

// Podemos cambiar el texto de las cosas con las propiedades correctas
title.textContent = `Trabando con text content`;

const box = document.querySelector('.contenedor');
console.log(box.innerHTML);
