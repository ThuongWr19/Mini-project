let todos = JSON.parse(localStorage.getItem("todos")) || [];

function them() {
    const input = document.getElementById("toDoInput").value;
    if (input.trim() === "") return;
    todos.push(input);
    localStorage.setItem("todos", JSON.stringify(todos));
    load();
}

function xoa(index) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    load();
}

function load() {
    const list = document.querySelector("#list tbody");
    list.innerHTML = "";

    todos.forEach((todo, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${todo}</td>
            <td>
                <button onclick="xoa(${index})">Xóa</button>
            </td>
        `;
        list.appendChild(row);
    });

}

load();