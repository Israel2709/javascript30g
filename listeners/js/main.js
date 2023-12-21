let textModifier = document.getElementById("text-modifier");

let mainHeading = document.getElementById("main-heading");

textModifier.addEventListener("keyup", (event) => {
  let newText = event.target.value;
  mainHeading.innerText = newText;
});

let radios = document.querySelectorAll("input[name='survey']");
console.log(radios);

let surveyResponse = document.getElementById("survey-response");
radios.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    let newValue = event.target.value;
    surveyResponse.innerText = newValue;
  });
});
