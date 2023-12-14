let cities = [
  { ciudad: "Nueva York", pais: "Estados Unidos" },
  { ciudad: "Los Ángeles", pais: "Estados Unidos" },
  { ciudad: "Toronto", pais: "Canadá" },
  { ciudad: "Buenos Aires", pais: "Argentina" },
  { ciudad: "Sídney", pais: "Australia" },
  { ciudad: "Ciudad de México", pais: "México" },
  { ciudad: "Río de Janeiro", pais: "Brasil" },
  { ciudad: "Santiago", pais: "Chile" },
  { ciudad: "Lima", pais: "Perú" },
  { ciudad: "São Paulo", pais: "Brasil" },
  { ciudad: "Bogotá", pais: "Colombia" },
  { ciudad: "Miami", pais: "Estados Unidos" },
  { ciudad: "Ciudad de Panamá", pais: "Panamá" },
  { ciudad: "Madrid", pais: "España" },
  { ciudad: "París", pais: "Francia" },
  { ciudad: "Londres", pais: "Reino Unido" },
  { ciudad: "Tokio", pais: "Japón" },
  { ciudad: "Sídney", pais: "Australia" },
  { ciudad: "El Cairo", pais: "Egipto" },
  { ciudad: "Ciudad del Cabo", pais: "Sudáfrica" },
];

let persons = [
  {
    nombre: "Juan",
    apellidos: "García Pérez",
    edad: 30,
    correo: "juan.garcia@example.com",
  },
  {
    nombre: "María",
    apellidos: "Martínez López",
    edad: 25,
    correo: "maria.martinez@example.com",
  },
  {
    nombre: "Carlos",
    apellidos: "Rodríguez Gómez",
    edad: 28,
    correo: "carlos.rodriguez@example.com",
  },
  {
    nombre: "Ana",
    apellidos: "Hernández Ruiz",
    edad: 35,
    correo: "ana.hernandez@example.com",
  },
  {
    nombre: "Javier",
    apellidos: "Díaz Fernández",
    edad: 22,
    correo: "javier.diaz@example.com",
  },
];

/*
1.- Necesitamos imprimir en consola un texto por cada elemento del array, con la siguiente estructura:
     `La ciudad {ciudad} se encuentra en {pais}`
     */
const printAllCities = (dataArray) => {
  dataArray.forEach((city) => {
    let { ciudad, pais } = city;
    let label = `La ciudad ${ciudad} se encuentra en ${pais}`;
    console.log(label);
  });
};

let test1 = printAllCities(cities);
/*
2.- Necesito mostrar en pantalla los nombres de las ciudades, abreviados
        -si la ciudad tiene una sola palabra, mostramos los primeros 3 caracteres del nombre de la ciudad
            Sidney => Sid
        - si la ciudad tiene más de una palabra, mostramos las iniciales de cada palabra
            ciudad del cabo =>  C.D.C.
*/
//{ ciudad: "Nueva York", pais: "Estados Unidos" },

const getAbbreviations = (dataArray) => {
  dataArray.forEach((city) => {
    let { ciudad } = city;
    let ciudadArray = ciudad.split(" ");
    if (ciudadArray.length > 1) {
      let intials = "";
      ciudadArray.forEach((word) => {
        let intial = word.charAt(0);

        intials += `${intial.toUpperCase()}. `;
      });
      console.log(intials);
    } else {
      let incialesCiudad = ciudad.substring(0, 3);
      console.log(incialesCiudad);
    }
  });
};

getAbbreviations(cities);

/*
3.- usando el array persons, necesito una nueva lista que contenga únicamente los nombres completos de cada persona.
*/

/*
const getOnlyNamesForEach = (dataArray) => {
  let result = [];
  dataArray.forEach(({ nombre, apellidos }) => {
    let fullName = `${nombre} ${apellidos}`;
    result.push(fullName);
  });
  return result;
};*/

/*const getOnlyNamesMap = (dataArray) => {
  let result = dataArray.map((person) => {
    let { nombre, apellidos } = person;
    return `${nombre} ${apellidos}`;
  });
  return result;
};*/

/* destructurando en argumentos: */

/*const getOnlyNamesMap = (dataArray) => {
  let result = dataArray.map(({ nombre, apellidos }) => {
    return `${nombre} ${apellidos}`;
  });
  return result;
};*/

/*aplicando return implícito*/
/*const getOnlyNamesMap = (dataArray) => {
  let result = dataArray.map(({ nombre, apellidos }) => `${nombre} ${apellidos}`)
  return result;
};*/

/*volviendo a aplicar return implícito*/

const getOnlyNamesMap = (dataArray) =>
  dataArray.map(({ nombre, apellidos }) => `${nombre} ${apellidos}`);

/*
4.- usando el array persons, necesito que los correos de todas las personas sean cambiados a {persona}@kodemia.mx
*/

const updateEmails = (dataArray) =>
  dataArray.map((person) => ({
    ...person,
    correo: person.correo.replace("example.com", "kodemia.mx"),
  }));

const updateEmails = (dataArray) =>
  dataArray.map((person) => ({
    ...person,
    correo: person.correo.replace("@example.com", "@kodemia.mx"),
  }));

let testUpdateEmails = updateEmails(persons);
console.log(testUpdateEmails);
