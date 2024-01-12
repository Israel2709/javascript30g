/*extraemos el token del local storage*/
let token = localStorage.getItem("token");

/*Si no hay token*/
if (!token) {
  /*regresamos a la pantalla de login*/
  window.open("../index.html", "_self");
}

document.getElementById("log-out").addEventListener("click", () => {
  localStorage.removeItem("token");
  window.open("../index.html", "_self");
});
