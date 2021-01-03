// let ventilador = {
//     altura : "100cm",
//     color: "Negro",
//     potencia: "100w"
// };

// console.log(ventilador);

// para controlar las variables dentro del objeto vamos a trabajar
// con la notación por puntos y corchetes

//solo tenemos que poner un punto después del nombre del objeto y el mismo IDE nos mostrará las variables incluidas en el objeto

// console.log(ventilador.altura);
// console.log("El ventilador es de color: " + ventilador.color);


//cuando queremos sacar valores que hemos elegido nosotros solemos utilizar la notación por puntos, pero cuando lo hacemos con información que ha elegido el usuario de nuestra página web elegimos la notación con corchetes

// console.log(ventilador["altura"]); 
// ya que dentro de los corchetes vamos a llevar otra variable, según las necesidades del usuario de forma dinámica. 




//Objetos dentro de otros objetos
let ventilador = {
    altura : "100cm",
    color: "Negro",
    potencia: "100w",
    helices:{
        tamano: "10cm",
        material: "Plástico",
        color: "Blancas"
    }
};

console.log(ventilador); // se van a mostrar las propiedades alfabéticamente para que cuando haya muchísimas seamos capaces de acceder mejor a ella

//para acceder a las propiedades del nuevo objeto hélice colocamos igualmente otro punto y así sucesivamente
console.log(ventilador.helices.color);


//podemos asignar nuevos valores a cada propiedad si queremos o también añadir nuevas propiedades
ventilador.color ="Blanco";
ventilador.precio=59;
console.log(ventilador);