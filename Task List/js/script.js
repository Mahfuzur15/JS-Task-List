
let form = document.querySelector('#task_form');
let tasklist = document.querySelector('ul');

let clearbtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskinput = document.querySelector('#new_task');


// Define event listeners 
form.addEventListener('submit', addTask);
tasklist.addEventListener('click', removetask);
clearbtn.addEventListener('click', cleartask);

// Define functions 
// Add Task
function addTask(e) {
    if(taskinput.value === ""){
        alert('Add a task!');
    } else {
        // Create li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskinput.value + " "));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link);
      
        tasklist.appendChild(li);
        taskinput.value = '';
    }
    e.preventDefault();
}


// Remove Task 
function removetask(e) {
    if (e.target.hasAttribute('href')) {
        if (confirm("Are You sure ?")) {
            let ele = e.target.parentElement;
            ele.remove;
        }
    }
}


// Clear task
function cleartask(e) {
    tasklist.innerHTML = '';
}



