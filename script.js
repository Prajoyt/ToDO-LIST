const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const btn = document.getElementById('btn');

//console.log(inputBox,listContainer,btn);


btn.addEventListener('click', addTask);

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!!")
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //to add cross icon
        let span = document.createElement('span');
        span.innerHTML = '\u00d7' //unicodes (w3school)
        li.appendChild(span);

    }
    inputBox.value = ''; //so that the value in input box become empty
    saveData()
}



listContainer.addEventListener('click',removeTask);


function removeTask(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}

//storage of daata
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}


//to display the stored data
 function showData(){
 listContainer.innerHTML=localStorage.getItem('data');
 }
 showData();
