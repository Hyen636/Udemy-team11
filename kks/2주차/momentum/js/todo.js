const todo = document.querySelector(".todo");
const todoForm = todo.querySelector(".todo__form");
const todoInput = todoForm.querySelector(".todo__form__input");
const todoList = todo.querySelector(".todo__list");

let todos = [];
const TODO = "todo";

const getLocal = () => {
  const localTodos = localStorage.getItem(TODO);
  if (localTodos) {
    todos = JSON.parse(localTodos);
    todos.forEach((todo) => {
      printTodo(todo.todo, todo.id, todo.check);
    });
  }
};

const setLocal = () => {
  localStorage.setItem(TODO, JSON.stringify(todos));
};

const deleteTodo = (event) => {
  const {
    target: { parentNode },
  } = event;
  parentNode.remove();
  todos = todos.filter((todo) => todo.id !== +parentNode.id);
  setLocal();
};

const checkTodo = (event) => {
  let index;
  const {
    target: { parentNode },
  } = event;
  todos.forEach((todo) => {
    if (todo.id === +parentNode.id) {
      index = todos.indexOf(todo);
    }
  });
  if (todos[index].check) {
    parentNode.children[0].classList.remove("check");
    parentNode.children[1].classList.remove("check--btn");
  } else {
    parentNode.children[0].classList.add("check");
    parentNode.children[1].classList.add("check--btn");
  }
  todos[index].check = !todos[index].check;
  setLocal();
};

const printTodo = (text, id, check) => {
  const todoContainer = document.createElement("li");
  todoContainer.id = id;
  const todoText = document.createElement("span");
  todoText.innerText = text;
  if (check) {
    todoText.classList.add("check");
  }
  const checkBtn = document.createElement("button");
  checkBtn.innerText = "✓";
  if (check) {
    checkBtn.classList.add("check--btn");
  }
  checkBtn.addEventListener("click", checkTodo);
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", deleteTodo);
  todoContainer.appendChild(todoText);
  todoContainer.appendChild(checkBtn);
  todoContainer.appendChild(deleteBtn);
  todoList.appendChild(todoContainer);
};

const onTodo = (event) => {
  event.preventDefault();
  const todoContent = todoInput.value;
  const todoId = Date.now();
  todos.push({ todo: todoContent, id: todoId, check: false });
  setLocal();
  printTodo(todoContent, todoId, false);
  todoInput.value = "";
};

todoForm.addEventListener("submit", onTodo);

getLocal();
