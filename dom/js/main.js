let myButton = document.getElementById("my-button");

myButton.addEventListener("click", (event) => {
  alert("hola koders!");
});

let user = {};

let nameField = document.getElementById("user-name");
nameField.addEventListener("keyup", (event) => {
  //console.log(event);
  //console.log(event.target);
  //console.log(event.target.value); /*esto tiene lo que se escribió en el input*/
  user.name = event.target.value;
  console.log(user);
});

let lastnameField = document.getElementById("user-lastname");
lastnameField.addEventListener("keyup", (event) => {
  user.lastname = event.target.value;
  console.log(user);
});

let saveUser = document.getElementById("save-user");

saveUser.addEventListener("click", () => {
  alert(`El usuario ${JSON.stringify(user)} se guardó con éxito!`);
});

/*
{
  nombre:
}
*/

let mainHeading = document.getElementById("main-heading");

console.log(mainHeading.innerText);
