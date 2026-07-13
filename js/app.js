// querySelector

// Selecciona el primer elemento h2 que esté dentro de una clase llamada .header__texto
const heading = document.querySelector('.header__texto h2'); // Retorna 0 o 1 Elementos

// Modifica el contenido de texto del elemento seleccionado
heading.textContent = 'Nuevo Texto'; 

// Muestra el elemento HTML modificado en la consola
console.log(heading);


// // querySelectorAll

// Selecciona TODOS los elementos de tipo enlace (a) que estén dentro de la clase .navegacion
const enlaces = document.querySelectorAll('.navegacion a');

// Modifica el texto únicamente del primer enlace encontrado (posición 0)
enlaces[0].textContent = 'Nuevo Texto para Enlace';

// Añade una clase CSS nueva al primer enlace
enlaces[0].classList.add('nueva-classe');

// Elimina una clase CSS existente del primer enlace
enlaces[0].classList.remove('navegacion__enlace');


// // getElementById
