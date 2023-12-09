let originalString = "Cuanto más hacemos, más podemos hacer";
let secondOriginalString =
  "La única diferencia entre el éxito y el fracaso es la capacidad de actuar.";

/*
1.- necesito obtener el mismo string (originalString) pero con todas las letras en mayúscula
*/

const transformToUppercase = (stringToTransform) => {
  return stringToTransform.toUpperCase();
};

/* con return implícito*/
// const transformToUppercase = (stringToTransform) => stringToTransform.toUpperCase()

let firstTransform = transformToUppercase("koders");
let secondTransform = transformToUppercase(originalString);

console.log(firstTransform);
console.log(secondTransform);

/*
2.- necesito un nuevo string que contenga las palabras del string original que estén en una posición non
    - más más hacer
*/

/*
3.- necesito saber cuántas palabras cortas hay en el string y cuántas palabras largas
    las palabras cortas tienen menos de 5 caracteres, el resto son palabras largas
*/

const countShortAndLong = (testString) => {
  let short = 0;
  let long = 0;
  let wordsArray = testString.split(" ");
  for (let i = 0; i < wordsArray.length; i++) {
    let wordLength = wordsArray[i].length;
    if (wordLength < 5) {
      short++;
    } else {
      long++;
    }
  }
  return `Tenemos ${short} palabras cortas y ${long} palabras largas`;
};

let testCount1 = countShortAndLong(secondOriginalString);

console.log(testCount1);
/*
4.- necesito un string igual al string original, pero con las vocales en mayúsculas
    -Cuanto más hacemos, más podemos hacer
    -CUAntO mÁs hAcEmOs, mÁs pOdEmOs hAcEr
*/

//Necesitamos recibir un string de mas de una palabra, y devolver un nuevo string con las palabras en orden invertido

//House dice que todos mienten
//mienten todos que dice House

//Nunca es Lupus
//Lupus es Nunca

const reversePhrase = (phrase) => {
  let wordsArray = phrase.split(" ");
  let revertedWords = wordsArray.reverse();
  let revertedPhrase = revertedWords.join(" ");
  return revertedPhrase;
};

const reversePhrase2 = (phrase) => phrase.split(" ").reverse().join(" ");

let someArray = ["a", "B", "c"];

let fragment = someArray.slice(0, 2);

console.log(fragment);
console.log(someArray);

let myArray = ["Banana", "Orange", "Apple", "Mango"];
let otherArray = [17, 12, 1, 5, 9, 8];
let personsArray = [
  {
    name: "Ikki",
    age: 3,
  },
  {
    name: "Abi",
    age: 4,
  },
];

console.log(myArray.sort());
console.log(otherArray.sort());
console.log(otherArray.sort((a, b) => a - b));
console.log(personsArray.sort());

let thirdArray = ["ñoño", "oso", "nada", "ñame"];
console.log(thirdArray.sort());

function ordenarParesYNones(arr) {
  arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 !== 0) {
      return -1; // Si a es par y b es impar, a va antes que b
    } else if (a % 2 !== 0 && b % 2 === 0) {
      return 1; // Si a es impar y b es par, b va antes que a
    } else {
      return a - b; // En caso contrario, ordenar numéricamente
    }
  });
  return arr;
}
