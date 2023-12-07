let dog = {
  name: "Milaneso",
  breed: "Border Collie",
  size: "Big",
  color: "Black",
  age: 3,
  bark: () => {
    console.log("WOOF WOOOOF!!!");
  },
};

dog.bark();

dog.location = "Mexico";
dog.eat = () => {
  console.log("munchi munchi");
};

console.log(dog);

dog.eat();

dog.name = "Solovino";

console.log(dog.name);

console.log(dog.owner);

let fullName = "Israel Salinas Martínez";

let splittedName = fullName.split(" ");

console.log(splittedName);
