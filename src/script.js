const task = document.getElementById("input_task");
let count = 0;
const counter = document.getElementById("counter");
const display = document.querySelector(".task_display");

function add_task() {
  if (task.value === "") {
    alert("Enter a Task!!");
  } else {
    const new_task = document.createElement("li");
    new_task.textContent = task.value;
    display.appendChild(new_task);
  }

  const remove_btn = document.createElement("button");
  remove_btn.textContent = "Mark Completed";
  remove_btn.style.margin = "10px";
  remove_btn.style.border = "dotted";
  remove_btn.style.borderRadius = "10px";
  remove_btn.style.padding = "5px";
  new_task.appendChild(remove_btn);
  remove_btn.id = "remove_btn";
  remove_btn.onclick = remove_task;
  count = count + 1;
  counter.textContent = count;
}

function remove_task() {
  this.parentNode.remove();
  count = count - 1;
  counter.textContent = count;
}
