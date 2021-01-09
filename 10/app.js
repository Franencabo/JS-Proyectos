// Función simple
function holaMundo(){
    console.log("Hola Mundo!");
}

holaMundo();

//Función con parámetros

function holaPersona(nombre, apellidos){
    console.log(`Hola ${nombre} ${apellidos}`);

}
holaPersona("Agustin", "Navarro");


//Función de cálculo
function sumaDosNumeros(numUno, numDos){
    let total = numUno + numDos
    console.log(`La suma de ${numUno} + ${numDos} es de ${total}`)

}

sumaDosNumeros(4, 6);

// Tabla de multiplicar
function tablaMultiplicar(numero){
    let maxNum = 11;
    console.log('Tabla del ' + numero);
    for(let x = 0; x < maxNum; x++){
        let total = numero * x;
        console.log(`${numero} x ${x} = ${total} `)
    }
}

tablaMultiplicar(2);

//Función para calcular la edad pasándole el año de nacimiento
function cualEsMiEdad(anioNacimiento){
    let date = new Date();
    let anioActual = date.getFullYear();
    let edad = anioActual - anioNacimiento
    console.log(`Tienes ${edad} años.`);
}
cualEsMiEdad(1980);

//Funcion con retorno 
function menosUno(numero){
    return numero - 1;
}
let result = menosUno(10);
console.log(result);

//Función que pide un objeto
function miFunctionObjeto(objeto){
    let date = new Date();
    let aniActual = date.getFullYear();
    objeto.aniActual = aniActual;
    return objeto;
}

let miObjeto = {
    nombre : "Francisco",
    apellidos : "Encabo Servián"
};

miobjeto = miFunctionObjeto(miObjeto);
console.log(miObjeto);