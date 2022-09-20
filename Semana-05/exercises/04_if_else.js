/************
* 4- If Else
*************/

/* a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual
    que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”. */
console.log("excersise 04-a:");
var randomNum = Math.random();
console.log("The random number between 0 and 1 is:", randomNum);
if(randomNum >= 0.5){
    console.log("Greater than 0,5");
}else{
    console.log("Lower than 0,5");
}

/* b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
    “Bebe” si la edad es menor a 2 años;
    “Niño” si la edad es entre 2 y 12 años;
    “Adolescente” entre 13 y 19 años;
    “Joven” entre 20 y 30 años;
    “Adulto” entre 31 y 60 años;
    “Adulto mayor” entre 61 y 75 años;
    “Anciano” si es mayor a 75 años. */
console.log("excersise 04-b:");
var age = parseInt(Math.random()*100);
console.log("Age:", age);
if (age < 2) {
    console.log("Bebe");
} else if(age > 1 && age < 13){
    console.log("Niño");
}else if(age > 12 && age < 20){
    console.log("Adolescente");
}else if(age > 19 && age < 31){
    console.log("Joven");
}else if(age > 30 && age < 61){
    console.log("Adulto");
}else if(age > 60 && age < 76){
    console.log("Adulto mayor");
}else{
    console.log("Anciano");
}