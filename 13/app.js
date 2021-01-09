// Función que recorre un array y devuelve otro array 

const numeros = [
    1, 5, 9,10, 50, 99, 209
];

const dobles = numeros.map((numero) =>{
    const result = numero * 2;
    return result;
})

console.log(dobles);




//·················································
const arrayClaveValor = [
    { clave: "nombre", valor: "Fran"},
    { clave: "apellidoUno", valor: "Encabo"},
    { clave: "apellidoDos", valor: "Servián"}
]

//queremos que la funcion map devuelva un objeto bien escrito
// de la siguiente forma -----> nombre: Fran, apellidoUno: Encabo,....

const reformatearArray = arrayClaveValor.map((objeto)=>{
    let objNuevo = {};
    objNuevo[objeto.clave] = objeto.valor;
    return objNuevo;
    
})

console.log(arrayClaveValor);
console.log(reformatearArray)
