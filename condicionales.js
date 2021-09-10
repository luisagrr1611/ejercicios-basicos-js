/*var edad = prompt('¿Cual es tu edad?');

if( edad >= 18){
    //console.log('Eres mayor de edad');
    document.write('Eres mayor de edad');
} else {
    //console.log('Eres menor de edad');
    document.write('Eres menor de edad');
} */

/* Preguntarle al usuario su edad por pront. Despues hacer una condicional if con 
las siguientes situaciones, si el usuario es mayor o igual de 18 y menor o igual 
de 29 años mostrar mensaje: Felicidades has sido aceptado en el bootcamp de generation,
en caso contrario mostrar mensaje: No cumples con los requisitos del programa. */

var edad = prompt('¿Cual es tu edad?');

if( edad >= 18 && edad <=29){
    alert('Felicidades has sido aceptado en el bootcamp de Generation.'); 
} else {
    alert('Lo sentimos, no cumples con los requisitos del programa.'); 
}


    
