console.log("Esto es un archivo oeprador de JS");

let numero1 = 10;
let numero2 = 40;

let suma2 = numero1 + numero2;

console.log(`La suma: ${numero1 + numero2}`);

console.log(`La resta: ${numero1 - numero2}`);

console.log(`La multiplicacion: ${numero1 * numero2}`);


let edad = 18;

// quiero mostrar un mensaje si la persona es mayor de edad y otro si la persona es menor de edad

if(edad >= 18) {
    console.log("Es mayor de edad");
}
else {
    console.log("Es menor de edad");
}

const dia = "juernes";

switch (dia) {
    case "Lunes": 
    console.log("Hoy es Lunes");
    break;
    case "Martes": 
    console.log("Hoy es Martes");
    break;
    case "Miercoles": 
    console.log("Hoy es Miercoles");
    break;
    case "Jueves": 
    console.log("Hoy es Jueves");
    break;
    case "Viernes": 
    console.log("Hoy es Viernes");
    break;
    case "Sabado": 
    console.log("Hoy es Sabado");
    break;
    case "Domingo": 
    console.log("Hoy es Domingo");
    break;
    default: 
    console.log("Dia invalido");
    break;
}
// for loop o ciclo for
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// while loop
let n = 0;
while ( n < 3) {
    n++
console.log(`El valor de n es: ${n}`);
}

// DECLARACION DE FUNCIONES

function fnSaludar() {
    return `Hola como estas: nombredepersona`;
}

let nombre = prompt("Ingresa tu nombre")

console.log(fnSaludar());