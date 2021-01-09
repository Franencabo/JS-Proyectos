// Utilizamos la función setTimeout para darle un retraso temporal concreto a la ejecución de una función 



// console.log("Carga Incial")


// setTimeout(() => {
//      console.log("Hola mundo han pasado 2000 milisegundos")
// }, 2000)

// setTimeout(() => {
//     alert("Apuntate a nuestra Newsletter")
// }, 2000)



const miFuncion = edad => {
    console.log ("Estamos calculando tu edad");

    setTimeout(() => {
    miEdad(edad);
    }, 1000);
}

const miEdad = edad => {
    console.log("Tu edad es de " + edad);
}

miFuncion(22);