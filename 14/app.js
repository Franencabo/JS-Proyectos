//Como su nombre dice, hace un filtro sobre un array
//Se tiene que cumplir una condición que vamos a definir y entonces devolverá todo aquello que pase el filtro

const arrayHeroes = [
  "Iron Man",
  "Thor",
  "Capitán América",
  "Spiderman",
  "Deadpool",
];

const resultHeroesFilter = arrayHeroes.filter((heroe) => {
  return heroe.length < 6;
});
console.log(resultHeroesFilter);

const arrayList = ["Thor", 77, 88, 3, 6.9, true, false, "Deadpool"];

const resulArrayList = arrayList.filter((elemento) => {
  //utilizamos la función typeof() para averiguar que tipo de dato es
  console.log(elemento + " es de tipo " + typeof elemento);
  return typeof elemento === "string";
});
console.log(resulArrayList);
