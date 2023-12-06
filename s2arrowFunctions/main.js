const addTwoNumbers = (firstNumber, secondNumber) => {
  let result = firstNumber + secondNumber;
  return result;
};
/*let firstAddition = addTwoNumbers(7,15)
let secondAddition = addTwoNumbers(2,6)*/
let firstAddition = addTwoNumbers(7, 15);

//console.log(secondAddition);

/*
    Crear una función que reciba un número y me indique si es par o non
    - Todo número par, devuelve un residuo de 0 al ser dividido entre 2
    - Si el residuo es diferente de 0, entonces el número no es par

    1.- tomar el número a evaluar
    2.- divir el número entre 2
    3.- evaluar el residuo
        - Si el residuo es igual a 0, el número es par
        - Si el residuo es diferente de 0, el número es impar
    4.- entregar la indicación de si el número es par o non
*/

const isOddOrEven = (numberToEvaluate) => {
  return numberToEvaluate % 2 === 0 ? "El número es par" : "El número es impar";
};

let firstEvaluation = isOddOrEven(7);
let secondEvaluation = isOddOrEven(24);
console.log(firstEvaluation);
console.log(secondEvaluation);

//prompt("Ingresa un número");

/*
    Crear una función que reciba un string, cuente la cantidad de caracteres que tiene, y si tiene menos de 10 caracteres, indique que el string es corto, si tiene 10 o más indique que el string es largo
    */

const printLetterByLetter = (str) => {
  let count = str.length;
  for (let i = 0; i < count; i++) {
    console.log(str[i]);
  }

  let message = "este string contiene" + count + "caracteres";
  let message2 = `Estre string tiene ${count} caracteres`;
  let message3 = `Este string es ${
    count < 5 ? "corto" : "largo"
  } y tiene ${count} caracteres`;
  console.log(`este string tiene ${count} caracteres`);
  console.log(message3);
};

printLetterByLetter("Ana");
