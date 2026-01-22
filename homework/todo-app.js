let todos = [];
let nextId = 1;

function addTodo(title) {
  // add a new todo with id, title, completed=false
  todos.push({ id: nextId, title, completed: false });
  nextId++;
}

function getTodos() {
  // return all todos
  return todos;
}

function completeTodo(id = 1) {
  for(let i=0; i<todos.length; i++) {
    if(todos[i].id === id){
      todos[i].completed = true;
      return ;
    }
  }
}

function deleteTodo(id = 1) {
  // remove todo by id
  if (todos.includes(id)) {
    todos.splice(0, 1);
  } else {    
    return "Todo not found";
  }
}

function resetTodos() {
  // clear all todos and reset id
  todos = [];
  nextId = 1;
}

console.log(addTodo("Task"));
console.log(getTodos());
console.log(addTodo("Task 2"));
console.log(getTodos());
console.log(completeTodo(2));
console.log(getTodos());