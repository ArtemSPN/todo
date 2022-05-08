const btn_add = document.querySelector('.btn_add');
const name_it = document.getElementById('name_it');
const status_column = document.querySelector('.left_column');
const name_column = document.querySelector('.right_column');

let task_status = [];
let task_name = [];


btn_add.addEventListener('click', new_item);


function new_item(){
    let new_item_name = name_it.value;
    if(new_item_name != ''){
        var element_status = document.createElement("div");
        var element_name = document.createElement("div");
        task_status.push(element_status);
        task_name.push(new_item_name);
        element_status.classList.add('status_item');
        element_name.classList.add('name_item');
        element_status.innerHTML = "New";
        element_name.innerHTML = new_item_name;
        status_column.append(element_status);
        name_column.append(element_name);
        console.log(task_name);
        name_it.value = "";
        element_status.addEventListener("click", complite);
    }
}

function complite(){
    this.innerHTML = "completed";
    this.classList.add('status_item_complite');
}