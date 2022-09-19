/***********
* 3- Arrays
************/

/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("excersise 03-a:", months[5], months[11]);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */
console.log("excersise 03-b:", months.sort());

/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push). */
months.unshift('Months:');
months.push('Final');
console.log("excersise 03-c:", months);

/* d. Quitar un elemento del principio y del final del array (utilizar shift y pop). */
months.shift();
months.pop();
console.log("excersise 03-d:", months);

/* e. Invertir el orden del array (utilizar reverse). */
console.log("excersise 03-e:", months.reverse());

/* f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join). */
console.log("excersise 03-f:", months.join(' - '));

/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */
var monthsCopy = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("excersise 03-g:", monthsCopy.slice(4, -1));