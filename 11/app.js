// Una funcion de tipo flecha es una funcion anonima que se guarda dentro de una constante
// Son mucho más ligeras, ya que no tienen .this .super ese tipo de propiedades.....

const miNombre = () => {
    return "Fran";
}
console.log(miNombre);

let nombre = miNombre();
console.log(nombre);


//Podemos pasar dentro de los parentesis los parametros y argumentos que queramos 

const myName = (name, surname) => {
    return `Me llamo ${name} ${surname}`;
}
console.log(myName);

let user = myName("Francisco", "Encabo Servián");
console.log(user);


// Arrow function para sumar
const sumaFn = (numeroUno, numeroDos) => {
    let result = numeroUno + numeroDos;
    return result;
}

let resultSuma = sumaFn(5,9);
console.log(resultSuma);







