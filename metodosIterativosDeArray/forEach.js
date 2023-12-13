let koders = [
  {
    name: "Israel",
    lastname: "Salinas Martínez",
    generation: 1,
  },
  {
    name: "Naomi",
    lastname: "Lopez Puertos",
    generation: 9,
  },
];

/*
    Imprimir los nombres completos de todos los koders
*/

koders.forEach((koder) => {
  let fullname = `${koder.lastname}`;
  console.log(fullname);
});
