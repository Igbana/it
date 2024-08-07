let todo_list_container = document.getElementById('todo-list');
let todo_label = document.getElementById("todo-label")
let backend = document.getElementById("backend")
let id = 0;
let hidden = true;

// Objects
let todo_list = new Object(); //Object constructor
let todo_item = {}; //Object literal


function showBackend(){
    if (Object.keys(todo_list).length === 0) {
        alert("Please add a todo item");
    } else {
        hidden = !hidden;
        backend.style.display = hidden ? "none" : "block";
    }
}

function addTodo() {
    // New object for the new todo item
    todo_item = {[id]: todo_label.value}; 

    // Adding todo item to the todo list
    todo_list[id] = todo_label.value;

    // Construct html to be loaded on the UI
    populateUi();
    id += 1;
}

function populateUi(){
    // HTMLs to be dynamically created
    let newHtml = "";
    let newBackend = "";

    // loop over everything in the object and add as a div
    for (let todo in todo_list) {
        newHtml += `<div class="todo-item">${todo_list[todo]}</div>`;
    }
    todo_list_container.innerHTML = newHtml;
    
    // clear the input box
    todo_label.value = "";

    // string formatting for the "backend" html
    newBackend = `
        <h3>Backend</h3>
        <b>New Item: </b>
        <br>${JSON.stringify(todo_item)} 
        <br><br>
        <b>Todo List</b>
        <br>${JSON.stringify(todo_list).replaceAll(",", ", <br>")}
    `.replaceAll('{', '{<br>').replaceAll('}', '<br>}');
    backend.innerHTML = newBackend;
}