/***************************
* 1- Variables y Operadores
****************************/

/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de
    ambos números en una 3er variable. */
var n1 = 10;
var n2 = 20;
var add = n1 + n2;
console.log("excersise 01-a:", add);

/* b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. */
var st1 = 'Trackgenix';
var st2 = 'Software';
var strResult = st1 + ' ' + st2;
console.log("excersise 01-b:", strResult);

/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
    guardando el resultado de la suma en una 3er variable (utilizar length).*/
var stringOne = 'Trackgenix software provides';
var stringTwo = 'businesses with a number of advantages and benefits.';
var stringLength = stringOne.length + stringTwo.length;
console.log("excersise 01-c:", stringLength);