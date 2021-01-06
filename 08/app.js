let arrayObjetos = [
  {
    nombre: "Spider-man",
    edad: 17,
    superpoderes: ["Escalar", "Tela de araña", "Super agilidad"],
    armas: false,
    listaArmas: [],
  },
  {
    nombre: "Hulk",
    edad: 32,
    superpoderes: ["Super fuerza", "Cabreo máximo", "Color verde"],
    armas: false,
    listaArmas: [],
  },
  {
    nombre: "Iron-man",
    edad: 41,
    superpoderes: ["Tecnología", "Inteligencia", "Dinero para investigar"],
    armas: true,
    listaArmas: ["Robots", "Laser", "Misiles"],
  },
];

for (let x = 0; x < arrayObjetos.length; x++) {
  console.log("X = " + x);
  console.log("arrayObjetos.length = " + arrayObjetos.length);
}

//para sacar cada uno de los objetos del array lo hacemos así
for (let x = 0; x < arrayObjetos.length; x++) {
  console.log(arrayObjetos[x]);
}

//podemos anidar un for dentro de otro para ir recorriendo objetos
for (let x = 0; x < arrayObjetos.length; x++) {
  console.log(arrayObjetos[x].nombre);
  if (arrayObjetos[x].armas === true) {
    console.log("Tiene estas armas disponibles: ");
    for (let y = 0; y < arrayObjetos[x].listaArmas.length; y++) {
      console.log(arrayObjetos[x].listaArmas[y]);
    }
  } else {
    console.log("No tiene ningún arma en este momento;");
  }
}

// podemos sacar cada objeto de nuestro array con una función forEach()
// vemos por primera vez la arrow function o función flecha

arrayObjetos.forEach((heroe) => {
  console.log(heroe.nombre);
  if (heroe.armas) {
        console.log("Tiene estas armas disponbles: ")
      heroe.listaArmas.forEach(arma=>{
        console.log(arma);
      })
    
  } else {
    console.log("No tiene armas");
  }
  console.log("##################");
});
