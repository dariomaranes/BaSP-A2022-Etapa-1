/**************
* 6- Funciones
***************/

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la
    función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */
var num1;
var num2;
var result;
function sum(num1, num2) {
    result = num1 + num2;
    return result;
}
console.log("excersise 06-a:", sum(2, 18));

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
    de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el
        valor NaN como resultado. */
function sum(num1, num2) {
    if(typeof num1 != "number" || typeof num2 != "number"){
        alert("One of the entered parameters has an error!");
        return NaN;
    }else{
        result = num1 + num2;
        return result;
    }
}
console.log("excersise 06-b:", sum(3, 40));

/* c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero. */
var numberToValidate;
function validateInteger(numberToValidate){
    return Number.isInteger(numberToValidate);
}
console.log("excersise 06-c:", validateInteger('8756456456'));

/* d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean
    enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado). */
function sum(num1, num2) {
    if(typeof num1 != "number" || typeof num2 != "number"){
        alert("One of the entered parameters has an error!");
        return NaN;
    }else if(validateInteger(num1) && validateInteger(num2)){
        result = num1 + num2;
        return result;
    }else{
        alert('Error! You entered decimal numbers!');
        if(!validateInteger(num1) && !validateInteger(num2)){
            alert("Numbers " + num1 + " and " + num2 + " are decimals. They will be rounded to integers.")
            return([Math.floor(num1), Math.floor(num2)]);
        }else if (!validateInteger(num1) && validateInteger(num2)){
            alert("Number " + num1 + " is decimal. It will be rounded to integer.")
            return(Math.floor(num1));
        }else{
            alert("Number " + num2 + " is decimal. It will be rounded to integer.")
            return(Math.floor(num2));
        }
    }
}
console.log("excersise 06-d:", sum(52.65, 40));

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma
    probando que todo siga funcionando igual. */
function finalValidate(num1, num2){
    if(typeof num1 != "number" || typeof num2 != "number"){
        alert("One of the entered parameters has an error");
        return NaN;
    }else if(validateInteger(num1) && validateInteger(num2)){
        result = num1 + num2;
        return result;
    }else{
        alert('Error! You entered decimal numbers!');
        if(!validateInteger(num1) && !validateInteger(num2)){
            alert("Numbers " + num1 + " and " + num2 + " are decimals. They will be rounded to integers.")
            return([Math.floor(num1), Math.floor(num2)]);
        }else if (!validateInteger(num1) && validateInteger(num2)){
            alert("Number " + num1 + " is decimal. It will be rounded to integer.")
            return(Math.floor(num1));
        }else{
            alert("Number " + num2 + " is decimal. It will be rounded to integer.")
            return(Math.floor(num2));
        }
    }
}
function sum(num1, num2){
    return finalValidate(num1, num2);
}
console.log("excersise 06-e:", sum(30.33, 41.44));