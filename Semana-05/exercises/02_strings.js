/************
* 2- Strings
*************/

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir
    todo el texto en mayúscula (utilizar toUpperCase). */
var stringToTransform = 'trackgenix is powerfull';
var stringUppercase = stringToTransform.toUpperCase();
console.log("excersise 02-a:", stringUppercase);

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
    primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring). */
var intro = 'trackgenix provides advantages and benefits';
var introFirstFive = intro.substring(0, 6);
console.log("excersise 02-b:", introFirstFive);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
    últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring). */
var feature = 'helps businesses to save time';
var featureLastThree = feature.substring(feature.length - 3, feature.length);
console.log("excersise 02-c:", featureLastThree);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera
    letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
        (utilizar substring, toUpperCase, toLowerCase y el operador +). */
var productivity = 'the strict way of working';
var prodUppercase = productivity.substring(0, 1).toUpperCase();
var prodLowercase = productivity.substring(1, productivity.length).toLowerCase();
var finalProductivity = prodUppercase + prodLowercase;
console.log("excersise 02-d:", finalProductivity);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
    Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */
var workTraceability = 'these processes';
var blankTraceability = workTraceability.indexOf(' ', 0);
console.log("excersise 02-e:", blankTraceability);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
    Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de
        ambas palabras en mayúscula y las demás letras en minúscula
            (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */
var longWords = 'functionalities developers';
var positionSecondWord = longWords.indexOf(' ', 0);
var firstLongWordUppercase = longWords.substring(0, 1).toUpperCase();
var secondLongWordUppercase = longWords.substring(positionSecondWord, positionSecondWord+2).toUpperCase();
var firstLongWordLowercase = longWords.substring(1, positionSecondWord).toLowerCase();
var secondLongWordLowercase = longWords.substring(positionSecondWord + 2, positionSecondWord.length).toLowerCase();
var finalLongWords = firstLongWordUppercase + firstLongWordLowercase + secondLongWordUppercase
    + secondLongWordLowercase;
console.log("excersise 02-f:", finalLongWords);