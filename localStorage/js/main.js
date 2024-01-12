/**se hace la petición al back, y lo que se recibe es un token como este: */

/*const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";*/

/*podemos guardar ese token en el local storage*/
//localStorage.setItem("token", token);

/*Aquí podemos preguntar si existe una variable en el LS */

/*let userToken = localStorage.getItem("token");

console.log(userToken);

if (userToken) {
  /*el token tiene información?*/
//document.getElementById("login-button").innerText = "Log out";
//}

document.getElementById("login-button").addEventListener("click", () => {
  // aquí va el proceso de validación del formulario

  /*.....*/

  // Cuando el formulario esta correcto, guardamos el token en el local storage

  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  );
  window.open("views/content.html", "_self");
});

/*extraemos el token del local storage*/
let token = localStorage.getItem("token");

if (token) {
  /*si el token existe*/
  /*abrimos la pantalla del contenido*/
  window.open("views/content.html", "_self");
}
