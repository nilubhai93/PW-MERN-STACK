function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || { "todoList": [] };
    console.log(todos);
    return todos;
}


function addTodoToLocalStorage(todoText) {
    const todos = loadTodos();
    todos.todoList.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
}



function appendTodoInHtml(todoText){
    const todoList = document.getElementById("taskList");
    const todo = document.createElement("li");
    todo.textContent = todoText;
    todoList.appendChild(todo)
}



document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todoInput");
    const submitButton = document.getElementById("addTodo");
    submitButton.addEventListener("click", (event) => {
        const todoText = todoInput.value;
        if (todoText == '') {
            alert("please write something for the todo")
        } else {
            addTodoToLocalStorage(todoText);
        }
    });
 
    todoInput.addEventListener("change", (event) => {
        const todoText = event.target.value;
        event.target.value = todoText.trim();
        console.log(event.target.value)
    });


    const todos=loadTodos();

    todos.todolist.forEach(todo=>{
        const newTodoItem= document.createElement("li");
        newTodoItem.textContent= todo;
        todoList.appendChild(newTodoItem);  
    })
})

