//Switch es un mecanismo de control para cuando tenemos muchas condicionales en un mismo caso. Se pueden gestionar perfectamente con if y else, pero así es más ordenado

let nombre = "Capitán América";

switch (nombre) {
  case "Hulk":
    console.log("Estamos en el caso 1");
    break;
  case "Iron-man":
    console.log("Estamos en el caso 2");
    break;
  case "Capitán América":
    console.log("Estamos en el caso 3");
    break;
  default:
    console.log("Caso desconocido");
    break;
}
