const task = document.getElementById("input_task");





function add_task(){
    const new_task = document.createElement("h1");   
    new_task.textContent = task.value;
    const display = document.querySelector(".task_display");
    display.appendChild(new_task);


    

}

function remove_task(){

}