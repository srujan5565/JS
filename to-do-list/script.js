let task_count = 0;

document.getElementById("add-btn").addEventListener("click", function () {
    const task = document.getElementById("task-input").value.trim();
    if (task === "") {
        alert("Enter a task");
        return;
    }

    task_count++;

    const taskList = document.getElementsByClassName("tasks")[0];

    // Create list item
    const li = document.createElement("li");
    li.innerText = task;

    // Create remove button
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.style.marginLeft = "10px";

    // Add click event to remove button
    removeBtn.addEventListener("click", function () {
        taskList.removeChild(liContainer); // removes a specific child node from a parent.
    });

    // Container to hold both li and button together
    const liContainer = document.createElement("div");
    liContainer.appendChild(li); //appendChild() is used to add a node (like a <div>, <li>, or <p>) as the last child of a parent node.
    liContainer.appendChild(removeBtn);

    taskList.appendChild(liContainer);

    // Clear input after adding
    document.getElementById("task-input").value = "";
});
