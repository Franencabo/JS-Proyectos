var objeto = {
    name: "Fran",
    apellidos : "Encabo",
    edad : 25,
    pais: "España"
}

// podemos hacerlo de la siguiente forma
// var nombre = objeto.name;
// var apellidos = objeto.apellidos;
// var edad = objeto.edad;
// var pais = objeto.pais;
console.log(objeto);

//para no tener que sacar cada variable una por una podemos hacer
//lo siguiente
//asignación por destructuring


const { name, apellidos, ...rest} = objeto;
console.log(name);
console.log(apellidos);
console.log(rest);
// si ponemos ... y la palabra que queramos (en este caso rest)
// sacamos el resto de las variables 

// metemos entre las llaves los items con el mismo nombre
// que los items del objeto 