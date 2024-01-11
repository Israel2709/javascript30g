let titleField = document.getElementById("title");
let timeField = document.getElementById("time");
let avTimeField = document.getElementById("available-time");

let availableTime = 0;

avTimeField.addEventListener("keyup", (event) => {
  availableTime = event.target.value;
  console.log(availableTime);
});

let selectedTasks = [];

const saveTask = async (task) => {
  let response = await fetch(
    "https://javascript30js-default-rtdb.firebaseio.com/tasks/.json",
    {
      method: "POST",
      body: JSON.stringify(task),
    }
  );
  let data = await response.json();
  return data;
};

const getAllTasks = async () => {
  let response = await fetch(
    "https://javascript30js-default-rtdb.firebaseio.com/tasks/.json"
  );
  let data = await response.json();
  printAllTasks(data);
};

let saveTaskBtn = document.getElementById("save-task");

saveTaskBtn.addEventListener("click", async () => {
  let title = titleField.value;
  let time = Number(timeField.value);
  let task = { title, time };
  let response = await saveTask(task);
  console.log(response);
  getAllTasks();
});

const createTaskItem = (task) => {
  let { title, time } = task;
  let taskLi = document.createElement("li");
  taskLi.classList.add("list-group-item");

  let taskTitle = document.createElement("span");
  let taskTitleText = document.createTextNode(`${title}: ${time} mins`);

  taskTitle.append(taskTitleText);

  let addTaskButton = document.createElement("button");
  addTaskButton.classList.add("btn", "btn-success");
  let addTaskButtonText = document.createTextNode("+");

  addTaskButton.append(addTaskButtonText);
  addTaskButton.addEventListener("click", () => {
    if (!availableTime) {
      alert("No tienes tiempo para agregar esta tarea");
    } else if (time < availableTime) {
      selectedTasks.push(task);
      console.log(selectedTasks);
      printSelectedTasks(selectedTasks);
      availableTime -= time;
      console.log(availableTime);
      avTimeField.value = availableTime;
    }
  });

  taskLi.append(taskTitle, addTaskButton);

  return taskLi;
};

const printAllTasks = (tasks) => {
  let taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  let tasksArray = Object.keys(tasks).map((key) => ({ ...tasks[key], key }));

  tasksArray.forEach((task) => {
    let taskItem = createTaskItem(task);
    taskList.append(taskItem);
  });
};

const printSelectedTasks = (selectedTasks) => {
  let selectedTasksList = document.getElementById("selected-tasks");
  selectedTasksList.innerHTML = "";
  selectedTasks.forEach((task) => {
    let { title, time } = task;
    let selectedTaskItem = `<li class="list-group-item">
        ${title}: ${time}
    </li>`;
    selectedTasksList.innerHTML =
      selectedTasksList.innerHTML + selectedTaskItem;
  });
};

getAllTasks();
