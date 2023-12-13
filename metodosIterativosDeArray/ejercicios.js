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
2.- Necesito mostrar en pantalla los nombres de las ciudades, abreviados
        -si la ciudad tiene una sola palabra, mostramos los primeros 3 caracteres del nombre de la ciudad
            Sidney => Sid
        - si la ciudad tiene más de una palabra, mostramos las iniciales de cada palabra
            ciudad del cabo =>  C.D.C.
3.- usando el array persons, necesito una nueva lista que contenga únicamente los nombres completos de cada persona.
4.- usando el array persons, necesito que los correos de todas las personas sean cambiados a {persona}@kodemia.mx
*/
