/********
* 5- For
*********/

/* a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript
    para mostrar una alerta utilizando cada una de las palabras. */
alert("excersise 05-a");
var arrExample = ["one", "two", "three", "four", "five"];
for (i=0; i<arrExample.length; i++){
    alert(arrExample[i]);
}

/* b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por
    cada palabra modificada. */
alert("excersise 05-b");
var arrExample = ["one", "two", "three", "four", "five"];
for (i=0; i<arrExample.length; i++){
    alert(arrExample[i].substring(0, 1).toUpperCase() +
        arrExample[i].substring(1, arrExample[i].length).toLowerCase());
}

/* c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo
    con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una
        única alerta con la cadena completa. */
var sentence = ' ';
for(i=0; i<arrExample.length; i++){
    sentence += arrExample[i] + ' ';
}
alert("excersise 05-c: " + sentence);

/* d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
    es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el
        número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log). */
arrEmpty = [];
for(i=0; i<10; i++){
    arrEmpty.push(i);
}
console.log("excersise 05-d: " + arrEmpty);