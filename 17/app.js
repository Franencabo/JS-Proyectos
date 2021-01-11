const coche = {
    marca : "Ferrari",
    color : "Rojo",
    precio : 6000
}
console.log(coche);

// Con el método JSON.stringify podemos convertir un objeto en un dato JSON
const cocheJson = JSON.stringify(coche);
console.log(cocheJson);

const jsonRecibido = '{"marca":"Ferrari","color":"Rojo","precio":6000}';


// Con el método JSON.parse() convertimos los datos JSON en objetos de javascript donde podremos trabajar correctamente
const jsonRecibidoObjeto = JSON.parse(jsonRecibido);
console.log(jsonRecibidoObjeto);