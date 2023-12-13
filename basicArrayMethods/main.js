let people = [
  ["Israel Salinas Martínez", 34, "israel@kodemia.mx"],
  ["Naomi López Puertos", 25, "naomi@kodemia.mx"],
  ["Charles Silva", 28, "charles@kodemia.mx"],
  ["David Moranchel", 29, "david@kodemia.mx"],
];

/*
    1.- Necesito recibir el nombre completo, edad y correo de una persona, y devolver un objeto que contenga esa información
*/

const createPerson = (name, email, age) => ({
  name,
  age,
  email,
});

/*let person = {}
person.name = 
person.age = 
person.email
return person*/

let person1 = createPerson("israel salinas martinez", 34, "israel@kodemia.mx");
console.log(person1);

/*
    2.- Tomando en cuenta la lista "people", necesito una nueva lista que contenga la información de cada persona pero agrupada en objetos
*/

const createPeopleArray = (dataArray) => {
  let peopleArray = [];
  for (let i = 0; i < dataArray.length; i++) {
    let person = createPerson(...dataArray[i]);
    peopleArray.push(person);
  }
  return peopleArray;
};

let peopleArray1 = createPeopleArray(people);
console.log(peopleArray1);

/*
    3.- Necesito poder ordenar una lista de objetos que representen personas con base en su edad, de forma descendente
*/
/*
const orderByAge = (dataArray) => {
  let peopleArray = createPeopleArray(dataArray);
  let orderedByAge = [...peopleArray].sort((a, b) => b.age - a.age);
  return orderedByAge;
};

let orderedArray = orderByAge(people);

console.log(orderedArray);

let someObject = {
  prop1: "some value",
  prop2: 5,
};

let someOtherObject = someObject;

console.log(someOtherObject);

someObject.prop3 = "foo";

console.log(someObject);
console.log(someOtherObject);

const primitiveFunction = (a, b, c) => {
  let a = a * a;
  let b = b * 2;
  let c = c / 2;
  let resultObject = {};
  resultObject.firstProp = a;
  resultObject.secondProp = b;
  resultObject.thirdProp = c;
  return resultObject;
};

const primitiveFunction = (a, b, c) => {
  let a = a * a;
  let b = b * 2;
  let c = c / 2;
  let resultObject = { firstProp: a, secondProp: b, thirdProp: c };
  return resultObject;
};

const primitiveFunction = (a, b, c) => {
  let a = a * a;
  let b = b * 2;
  let c = c / 2;
  return { firstProp: a, secondProp: b, thirdProp: c };
};

const primitiveFunction = (a, b, c) => {
  return { firstProp: a * a, secondProp: b * 2, thirdProp: c / 2 };
};

const primitiveFunction = (a, b, c) => ({
  firstProp: a * a,
  secondProp: b * 2,
  thirdProp: c / 2,
});

let description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis deserunt praesentium vel accusamus architecto labore asperiores assumenda perspiciatis accusantium fugit modi doloremque molestias corporis dolorum officiis pariatur at nesciunt, adipisci repellat soluta. Vitae itaque quis velit quisquam, eveniet animi magnam veniam doloribus, vero porro fugiat laudantium tenetur officiis voluptas?"

let result = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus animi quasi optio fuga dignissimos provident itaque, deleniti velit ut vitae!..."*/

let dimensions = {
  height: "20cm",
  depth: null,
  width: "20cm",
};

const createDimension = (dimensionName, dimensionSize) => {
  let dimensionLabel = `${dimensionName}: ${dimensionSize}`;
  return dimensionLabel;
};

const printDimension = (dimensions) => {
  let height = dimensions.height;
  let depth = dimensions.depth;
  let width = dimensions.width;

  let heightLabel = height ? createDimension("Altura", height) :;
                    if(height)createDimension("Altura", height)
  let depthLabel = depth ? createDimension("Profundidad", depth) : null;
  let widthLabel = width ? createDimension("Anchura", width) : null;

  console.log(heightLabel);
  console.log(widthLabel);
  console.log(depthLabel);
};

printDimension(dimensions);
