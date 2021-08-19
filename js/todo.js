const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() { 
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) { 
    const li = event.target.parentElement;
    
    li.remove();
}

function paintToDo(newTodo) { 
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li); 
}

function handleToDoSubmit(event) { 
     event.preventDefault();
     const newTodo = toDoInput.value;
     toDoInput.value="";
     const newToDoObj = { 
         text: newTodo,
         id: Date.now(),
     }
     toDos.push(newToDoObj);
     paintToDo(newToDoObj);
     saveToDos();
     

}



toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null)  { 
     const parseToDos = JSON.parse(savedToDos);
     toDos = parseToDos;
     parseToDos.forEach(paintToDo);
}

