/* Arrays */

// Un array es una lista de elementos

let numeros = [1, 8, 4, 9, 34, 67, 109];
console.log(numeros);

// Puede contener elementos de diferentes tipos de datos

let arrayMezclado = [99, "Iron Man", 4.77, true, false];
console.log(arrayMezclado);

let miArray = [];
console.log(miArray);

//con la función pull podemos añadir elementos en la posición final de un Array
miArray.push("Texto añadido con la función pull");
console.log(miArray);

// podemos añadir tantos elementos como queramos
miArray.push(33, true, "Más añadidos");
console.log(miArray);

// con la propiedad lenght podemos saber el tamaño exacto de nuestro array
console.log("Mi Array tiene un tamaño de " + miArray.length + " elemntos");

//para acceder a un elemento en concreto llamamos a la posición en la que se encuentra
console.log("El tercer elemento es: " + miArray[2]);

//con la función pop eliminamos el último elemento del array
miArray.pop();
console.log(miArray);

//para eliminar el primer elemnto utilizamos shift
miArray.shift();
console.log(miArray);

// para buscar un elmento en el array, si está escrito mal no lo encontrará y dará un valor de -1

console.log(miArray.indexOf(33));

// colocando esto en una variable podemos localizar el elemento y sacarlo por consola
let indexArray = miArray.indexOf(33);
console.log(miArray[indexArray]);

// para hacer un clón de nuestro array
let copiaArray = miArray.slice();
copiaArray.push("Añadido en la copia");
console.log(copiaArray);

//Arrays de Objetos
let arrayObjetos = [
  {
    nombre: "Spider-man",
    edad: 17,
    superpoderes: ["Escalar", "Tela de araña", "Super agilidad"],
    armas: false,
    listaArmas:[]
  },
  {
    nombre: "Hulk",
    edad: 32,
    superpoderes: ["Super fuerza", "Cabreo máximo", "Color verde"],
    armas: false,
    listaArmas:[]
  },
  {
    nombre: "Iron-man",
    edad: 41,
    superpoderes: ["Tecnología", "Inteligencia", "Dinero para investigar"],
    armas: true,
    listaArmas:["Robots", "Laser", "Misiles"]
  },
];
console.log(arrayObjetos);

//para acceder a un objeto en concreto utilzamos la notación por corchetes
console.log(arrayObjetos[1]);
// para acceder a un dato en concreto de cada objeto utilizamos la notación por puntos
console.log(arrayObjetos[1].nombre);

// Ejercicio: Busca si en tu array de objetos se encuentra Iron Man, y si es asi, que te muestre las armas que tiene o no

if(arrayObjetos[2].nombre === "Iron-man"){
    console.log("Está dentro");
} else {
    console.log("No es éste");
}
