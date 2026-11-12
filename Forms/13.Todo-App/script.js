// DOM Elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const todosList = document.getElementById("todos-list");
const itemsLeft = document.getElementById("items-left");
const clearCompletedBtn = document.getElementById("clear-completed");
const emptyState = document.querySelector(".empty-state");
const dateElement = document.getElementById("date");
const filters = document.querySelectorAll(".filter");


let todos = [];
let currentFilter = "all";

addTaskBtn.addEventListener("click", () => {
  addTodo(taskInput.value);
});

taskInput.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter') addTodo(taskInput.value);
});

function addTodo(text) {
  if (text.trim() === "") return;

  const todo = {
    id: Date.now(),
    text,
    completed: false,
  };

  todos.push(todo);

  saveTodos();
  updateItemsCount();
  taskInput.value = "";
}

function saveTodos(){
    localStorage.setItem('todos',JSON.stringify(todos));
    updateItemsCount();
    checkEmptyState();
}

function updateItemsCount(){
    const uncompletedTodos = todos.filter((todo)=>!todo.completed);
    itemsLeft.textContent = `${uncompletedTodos?.length} item${uncompletedTodos?.length !==1 ?'s':''} left`
}

function checkEmptyState(){
    const filteredTodos = filterTodos(currentFilter);
    if(filteredTodos?.length === 0)emptyState.classList.remove('hidden');
    else emptyState.classList.add('hidden');
}

function filterTodos(filter){
    switch(filter){
        case 'active':
            return todos.filter((todo) => !todo.completed);
        case 'completed':
            return todos.filter((todo)=> todo.completed);
        default:
            return todos;        

    }
}













