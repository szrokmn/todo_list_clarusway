const addBtn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");

addBtn.addEventListener("click", () => {
    if (todoInput.ariaValueMax.trim() === "") {
        alert("Please enter new todo");
    }else{
        const newTodo = {
            id: new Date().getTime(),
            completed:false,
            text:todoInput.value
        }
        createListElement(newTodo);
    }
});
const createListElement = (newTodo) => {
    const li = document.createElement("li");
    //li.id = newTodo.id;
    li.setAttribute("id", newTodo.id);
    const okIcon = document.createElement("i");
    okIcon.setAttribute("class", "fas fa-check");
    li.appendChild(okIcon);
    console.log(li);
    todoUl.appendChild(li);
};