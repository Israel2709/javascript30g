/*
  1.- Activar el formulario para poder agregar usuarios ( solo se pide el nombre completo)
*/

let usersList = [
  "Israel Sanabria",
  "David Bustamante",
  "David Moranchel",
  "Charles Silva",
  "Naomi Lopez",
  "Brenda Carrillo",
];

let nameInput = document.getElementById("user-fullname");
let saveUserButton = document.getElementById("save-user");
let usersListWrapper = document.getElementById("users-list-wrapper");
let sortingButton = document.getElementById("sorting-button");
let filterInput = document.getElementById("filter");

saveUserButton.addEventListener("click", () => {
  let userName = nameInput.value;
  if (userName) {
    usersList.push(userName);
    printAllNames(usersList);
    nameInput.value = "";
  }
  console.log(usersList);
});

const createUserItem = (userName, userIndex) => {
  let userItem = document.createElement("li");
  userItem.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  let nameSpan = document.createElement("span");
  let nameSpanText = document.createTextNode(userName);

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger");
  let buttonText = document.createTextNode("X");
  deleteButton.addEventListener("click", () => {
    usersList.splice(userIndex, 1);
    printAllNames(usersList);
  });

  deleteButton.appendChild(buttonText);
  nameSpan.appendChild(nameSpanText);

  userItem.append(nameSpan, deleteButton);
  return userItem;
};

const printAllNames = (namesList) => {
  while (usersListWrapper.firstChild) {
    usersListWrapper.removeChild(usersListWrapper.firstChild);
  }
  namesList.forEach((name, index) => {
    let userItem = createUserItem(name, index);
    usersListWrapper.append(userItem);
  });
};

sortingButton.addEventListener("click", () => {
  console.log("sorting");
  usersList.sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "case" })
  );
  console.log(usersList);
  printAllNames(usersList);
});

filterInput.addEventListener("keyup", (event) => {
  let value = event.target.value.toLowerCase();
  let result = usersList.filter((user) => user.toLowerCase().includes(value));
  console.log(result);
  printAllNames(result);
});

printAllNames(usersList);

/*
  2.- Activar el botón "eliminar". Este botón debe eliminar al usuario al que corresponde
  3.- Activar el botón "ordenar por nombre". Este botón debe ordenar de forma alfabéticamente ascendente la lista de usuarios
  4.- Activar el filtro por nombre: Debe filtrar la lista de usuarios conforme se escribe algo en el input
  */
