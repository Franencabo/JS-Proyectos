// Esta función sirve para reemplazar tanto una variable completa como parte de ella

var texto = "Mi coche es rojo";
console.log(texto);

// replace() necesita de dos argumentos, primero lo que queremos cambiar, segundo el nuevo contenido por el que queremos reemplazarlo
var textoCorregido = texto.replace("rojo", "azul");
console.log(textoCorregido);



var numero = 6.7;
console.log(numero + " Euros");
//Así por ejemplo en Europa da lugar a error con los puntos y las comas
//pero va a dar un error por que la funcion replace solo funciona con strings

// var numeroComa = numero.replace(".", ",");
// console.log(numeroComa);


// con lo cual tenemos que transformarlo todo a string 

var numeroComa = numero.toString();
numeroComa = numeroComa.replace(".", ",");
console.log(numeroComa);
console.log(typeof numeroComa);

//habrá que volver a cambiarlo a tipo number para permitir operaciones de nuevo con este dato
