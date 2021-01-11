// function Animal(){
//     this.tipo = "Perro";
//     this.nombre = "Nala";
//     this.edad= 3;
// }


// gato = {
//     nombre: "Micky",
//     edad: 5
// }


// var nala = new Animal();
// console.log(nala);
// console.log(gato);



function Animal(tipo, nombre, edad){
    this.tipo = tipo;
    this.nombre = nombre;
    this.edad= edad;
}

var nala = new Animal('Perro','Nala',3);
var lau = new Animal('Pez', 'Lau', 2);

//para añadir nuevos parametros solo tenemos que utilzar la notación por puntos
nala.color= "Marrón";
console.log(nala);
console.log(lau);