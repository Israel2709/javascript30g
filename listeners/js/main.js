console.log("hola koders!");

/*el método getElementById({elementId}) permite seleccionar un elemento de DOM con base en su id,
y devuelve un elemento de DOM*/
let greetingButton = document.getElementById("greeting-button");

console.log(greetingButton);

/*El método getElementsByTagName, selecciona todos los elementos de DOM que compartan el tagname indicado, y los devuelve envueltos en una HTMLCollection*/

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
console.log(paragraphs[0]);

/*El método getElementsByClassName, selecciona todos los elementos de DOM que compartan la clase indicada, y los devuelve como una HTMLCollection*/
let listGroupItems = document.getElementsByClassName("list-group-item");

console.log(listGroupItems);

const changeLiColor = () => {
  for (let i = 0; i < listGroupItems.length; i++) {
    listGroupItems[i].style.color = "peru";
  }
};

let listItem = document.querySelector("#lista-2 .list-group-item");

console.log(listItem);

let listItems = document.querySelectorAll("#lista-2 .list-group-item");

console.log(listItems);

const formatListItems = () => {
  listItems.forEach((element) => {
    element.style.backgroundColor = "peru";
  });
};
