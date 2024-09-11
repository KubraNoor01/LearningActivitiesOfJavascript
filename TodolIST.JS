let taskArr = []; 
function ToDoList() {
    let newTask = document.querySelector("input");

  
    if (newTask.value.trim() === "") {
        alert("Please type something before adding to the list.");
        return; 
    }


    let li = document.createElement("li");
    let ul = document.querySelector(".ul");
    ul.appendChild(li);


    li.innerText = newTask.value;


    taskArr.push(li);

  
    newTask.value = "";
  
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.style.marginLeft = "10px";
    li.appendChild(editBtn);
    li.style.padding="10px"
   

 
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.style.marginLeft = "10px";
    li.appendChild(removeBtn);
     removeBtn.style.marginTop="10px";

    editBtn.addEventListener("click", function() {
        let updatedTask = prompt("Update the task:", li.innerText);
        if (updatedTask !== null && updatedTask.trim() !== "") {
            li.innerText = updatedTask;
       
            li.appendChild(editBtn);
            li.appendChild(removeBtn);
        }
    });

   
    removeBtn.addEventListener("click", function() {
        ul.removeChild(li); 
        let index = taskArr.indexOf(li); 
        if (index > -1) {
            taskArr.splice(index, 1); 
        }
    });
}
