document.addEventListener('DOMContentLoaded', () => {
  let inputValue = document.getElementById("todo-input");
  let buttonClick = document.getElementById("add-task-btn");
  let taskList = document.getElementById("todo-list");

  let taskArray = JSON.parse(localStorage.getItem('task')) || [];
  
  taskArray.forEach(task => renderTask(task));

  buttonClick.addEventListener('click', () => {
    let taskValue = inputValue.value.trim(); // this is grabbing the text
    if (taskValue === "") return;
    // console.log(task);
    const newTask = {
      id: Date.now(),
      text: taskValue,
      completed: false
    }
    taskArray.push(newTask);
    inputValue.value = ""; // after storing the task, it clears the input
    storeTheTask();
    renderTask(newTask); // without this, DOM won't reload and won't show.
    // console.log(taskArray);
  })
  
  // as soon as the page loads, I want to read from my local storage and then display the task.
  function renderTask(task) {
    const li = document.createElement("li");
    // li.setAttribute("data-id", task.id);

    li.innerHTML = `
    <span>${task.text}</span>
    <button> delete </button>
    `;
    
    li.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') return; // button is targeted here.
      task.completed = !task.completed; // this will only convert the current values inside it.
      li.classList.toggle("completed"); // we have to give the pre-defined "completed" key of the object, to apply toggle behaviour.
      storeTheTask();
      // console.log(task.completed);
    })
    li.querySelector("button").addEventListener('click', (e) => {
      // prevents the further propagation of the event.
      e.stopPropagation();
      // id is the only unique thing. so we are filtering our array and keeping only those elements inside it, whose id is not equal to the selected delete one.
      taskArray = taskArray.filter(t1 => t1.id !== task.id);
      console.log(taskArray);
      li.remove();
      storeTheTask();
      // console.log("you clicked the button");
    })
    taskList.appendChild(li);
    // console.log(li);
  }

  function storeTheTask() {
    localStorage.setItem('task', JSON.stringify(taskArray));
    // console.log(localStorage.getItem());
  }
})

// Event bubbling — this is what happens when you add an event listener to a parent element, and the user clicks the child element.