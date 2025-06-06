function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        ${taskInput.value}
        <span class="delete" onclick="this.parentElement.remove()">🗑️</span>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
}