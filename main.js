document.getElementById('addTodo').addEventListener('click', add);
document.getElementById('input').addEventListener('keypress', function(event) { 
    if (event.key === 'Enter') { 
        add();
        document.getElementById('input').value = '';
    }
});

function remove(event) {
    let li = event.target.parentElement;
    li.remove();

    if(document.getElementById("list").children.length === 0) {
        document.getElementById("empty").style.display = "block";
    }
}

document.getElementById("date").innerHTML = new Date().toDateString();

function add() {
    
    let input = document.getElementById('input');
    let errorOutput = document.getElementById('error');
    if(input.value.trim() === "" || input.value === null) {
        errorOutput.innerHTML = "Please enter a todo item.";
        return;
    }
    errorOutput.innerHTML = "";
    let li = document.createElement('li');
    li.textContent = input.value.trim();
    let btn = document.createElement('button');
    btn.textContent = "Remove";
    btn.addEventListener('click', remove);
    li.appendChild(btn);
    document.getElementById('list').appendChild(li);

    input.value = '';
    if(document.getElementById("list").children.length !== 0) {
        console.log(document.getElementById("list").children.length)
        document.getElementById("empty").style.display = "none";
    }
};