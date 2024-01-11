/*construye un objeto del tipo searchParams, que contiene todos los parámetros que pasamos en la url*/
const urlParams = new URLSearchParams(window.location.search);

console.log(urlParams);

/*extraemos un parámetro específico y lo guardamos en una variable*/
const charId = urlParams.get("charId");

console.log(charId);

const getCharById = async (charId) => {
  let response = await fetch(
    `https://rickandmortyapi.com/api/character/${charId}`
  );
  let data = await response.json();
  let { image, name, status, species, gender, origin } = data;

  document.getElementById("char-img").setAttribute("src", image);
  document.getElementById("char-name").innerText = name;
  document.getElementById("char-species").innerText = species;
  document.getElementById("char-gender").innerText = gender;
  document.getElementById("char-status").innerText = status;
  document.getElementById("char-origin").innerText = origin.name;
  console.log(data);
};

getCharById(charId);
