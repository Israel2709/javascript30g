/*
    1.- Crear una función que reciba un string, una posición inicial, una posición final, y nos devuelva un nuevo string formado por los caracteres que se encuentren en las posiciones indicadas
    Input = "Regresamos a las sombras", 3, 8
    output = "resam"

    2.- Crear una función que utilice el string "La mejor forma de predecir el futuro es creándolo", y que reemplace todas las letras "e" por alguna otra letra indicada

    input => "d"
    output => "La mdjor forma dd prdddcir dl futuro ds crdándolo"

    3.- Crear una función que reciba un string, un caracter cualquiera, y me indique la cantidad de veces que ese caracter se encuentra en el string
    input => "Merengue", "e"
    output => la letra "e" se usa 3 veces en la palabra "Merengue"
*/

const findCharOcurrences = (originalString, char) => {
  let expression = new RegExp(char, "g"); /*  /e/g    */
  let ocurrencesCount = originalString.match(expression).length;
  return `la letra ${char} usa ${ocurrencesCount} veces en la palabra "${originalString}"`;
};

let firstSearch = findCharOcurrences("Merenge", "n");
console.log(firstSearch);

let secondSearch = findCharOcurrences("Extraordinario", "r");
console.log(secondSearch);

let myRegex = new RegExp("e", "g");

const createNewWord = (originalWord, limit) => {
  let result = "";
  for (let i = 0; i < limit; i++) {
    let char = originalWord[i];
    result += char;
  }
  return result;
};

let firstWord = createNewWord("enésimo", 4);
console.log(firstWord);
