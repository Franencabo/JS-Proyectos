// String, Number, Float, Boolean, Array, Object, Function

var name = "Agustin";

// puedo cambiarla por el tipo que me apetezca sin que afecte
name = 55;
// name = 109.7;
// name = {};

console.log(name);

console.log('La variable name es de tipo: ' + typeof name);
// Siempre devuelve que es un string, porque puede mutar tantas
// veces como quiera, pero  al ser un lenguaje no tipado
// no importa en que la queramos convertir



//--------------------------------------------------------------
// 3 formas de declarar

var marcaCoche = 'Seat';
let precioCoche = 16000;

console.log(marcaCoche);
console.log(precioCoche);

function miFunction(){
    var marcaCoche = "BMW";

    if(marcaCoche= 'BMW'){
        var precio = 90;
        let size = 1000;
        // let solo se ejecuta dentro del contexto, 
        // cuando ya se ha ejecutado no puede salir de él
        // por eso abajo pondrá que no está definida y dará
        // error el console.log
        console.log(size);
    }

    console.log(marcaCoche);
    console.log(precio);
   
    // var se está dejando de utilzar, ya que
    // let pesa menos y se destruye cuando finaliza el contexto
}

miFunction();



const urlApi = "http://google.es/api";

// urlApi = "hola";
// si queremos modificarlo nos va a dar un
// error de asignación

console.log(urlApi);

// las ponenmos siempre en mayúsculas