/*let products = [
  {
    name: "Camisa de Algodón",
    description:
      "Una camisa clásica de algodón, perfecta para cualquier ocasión.",
    price: 39.99,
    discount: 0.1, // Descuento del 10%
    stock: 50,
  },
  {
    name: "Zapatillas Deportivas",
    description:
      "Zapatillas ideales para correr o entrenar, con gran comodidad y estilo.",
    price: 59.99,
    discount: 0.15, // Descuento del 15%
    stock: 40,
  },
  {
    name: "Portátil Ultraligero",
    description:
      "Un portátil potente y ligero, perfecto para el trabajo y el entretenimiento.",
    price: 899.99,
    discount: 0.05, // Descuento del 5%
    stock: 15,
  },
  {
    name: "Set de Herramientas Profesionales",
    description:
      "Un conjunto completo de herramientas de calidad profesional para cualquier proyecto.",
    price: 129.99,
    discount: 0.2, // Descuento del 20%
    stock: 25,
  },
  {
    name: "Cámara DSLR 24MP",
    description:
      "Captura momentos inolvidables con esta cámara DSLR de alta resolución.",
    price: 699.99,
    discount: 0.12, // Descuento del 12%
    stock: 20,
  },
  {
    name: "Silla de Oficina Ergonómica",
    description:
      "Una silla cómoda y ergonómica para largas horas de trabajo o estudio.",
    price: 199.99,
    discount: 0.08, // Descuento del 8%
    stock: 30,
  },
  {
    name: "Libro de Cocina Gourmet",
    description:
      "Descubre recetas exclusivas y técnicas de cocina avanzadas con este libro.",
    price: 49.99,
    discount: 0.25, // Descuento del 25%
    stock: 35,
  },
  {
    name: "Juego de Maletas Viajeras",
    description:
      "Un juego de maletas duraderas y espaciosas para tus aventuras de viaje.",
    price: 159.99,
    discount: 0.18, // Descuento del 18%
    stock: 18,
  },
  {
    name: "Teclado Mecánico para Gaming",
    description:
      "Un teclado diseñado para juegos con interruptores mecánicos y retroiluminación.",
    price: 79.99,
    discount: 0.1, // Descuento del 10%
    stock: 22,
  },
  {
    name: "Paquete de Auriculares Inalámbricos",
    description:
      "Auriculares inalámbricos con calidad de sonido premium para tu música favorita.",
    price: 149.99,
    discount: 0.15, // Descuento del 15%
    stock: 28,
  },
];*/

let todoInput = document.getElementById("todo-input");
let addTodoBtn = document.getElementById("add-todo-btn");
let todoList = document.getElementById("todo-list");
let todoListArray = ["Pasear al perro", "Comer", "Tomar un break"];

addTodoBtn.addEventListener("click", () => {
  let todoText = todoInput.value;
  if (todoText) {
    todoListArray.push(todoText);
    todoInput.value = "";
    printAllTodos(todoListArray);
  }
  console.log(todoListArray);
});

const createTodoItem = (itemText) => {
  let todoItem = document.createElement("li");
  todoItem.classList.add("list-group-item");
  let todoText = document.createTextNode(itemText);
  todoItem.appendChild(todoText);
  return todoItem;
};

const addTodoItem = (itemText) => {
  todoList.appendChild(createTodoItem(itemText));
};

const printAllTodos = (todosArray) => {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  todosArray.forEach((todo) => {
    addTodoItem(todo);
  });
};

printAllTodos(todoListArray);
