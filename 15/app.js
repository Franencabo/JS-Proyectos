var numero = 15;
console.log(numero);
console.log(typeof numero);


//Así podemos pasar un número a string
var numeroToString = numero.toString();
console.log(numeroToString);
console.log(typeof numeroToString);


if(typeof numero === "number"){
    var numeroToString = numero.toString();
    console.log("La variable NUMERO se ha convertido a tipo  STRING")
} else {
    console.log("La variable NUMERO ya era de tipo STRING")
}




//En el siguiente caso vemos como si intentamos sumar dos valores en los que uno es de tipo string lo que ocurre es que se concatenan dando un resultado de 2010
var numeroUno = "20";
var numeroDos = 10;

var total = numeroUno + numeroDos;
console.log(total);


// para eso debemos convertir el string a numero con la función parseint

numeroUno = parseInt(numeroUno);
var total = numeroUno + numeroDos;
console.log(total);