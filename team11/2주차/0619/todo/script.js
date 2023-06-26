const todoForm = document.querySelector(".todo__form");
const todoInput = todoForm.querySelector(".todo__form__input");
const todoSubmit = todoForm.querySelector(".todo__form__submit");
const todoList = document.querySelector(".todo__list");

let todos = [];

const deleteTodo = (event) => {
  const {
    target: { parentNode },
  } = event;
  todos = todos.filter((todo) => {
    return todo.id !== +parentNode.id;
  });
  localStorage.setItem("todos", JSON.stringify(todos));
  parentNode.remove();
};

const printTodo = (content, id) => {
  const newTodo = document.createElement("li");
  const newTodoContent = document.createElement("span");
  const deleteBtn = document.createElement("button");
  newTodoContent.innerText = content;
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", deleteTodo);
  newTodo.id = id;
  newTodo.appendChild(newTodoContent);
  newTodo.appendChild(deleteBtn);
  todoList.appendChild(newTodo);
};

const addTodo = (event) => {
  event.preventDefault();
  const todoContent = todoInput.value;
  const todoId = Date.now();
  printTodo(todoContent, todoId);
  todoInput.value = "";
  todos.push({ content: todoContent, id: todoId });
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getLocal = () => {
  const localDate = JSON.parse(localStorage.getItem("todos"));
  localDate.forEach((todo) => {
    printTodo(todo.content, todo.id);
    todos.push({ content: todo.content, id: todo.id });
  });
};

todoForm.addEventListener("submit", addTodo);
getLocal();
