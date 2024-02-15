const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("Please write your task .")
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#10006";
        li.appendChild(span);
        saveData();
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
   if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
   } else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
   }
   saveData();
})
 
function saveData(){
    localStorage.setItem("task", listContainer.innerHTML)
}
listContainer.innerHTML = localStorage.getItem("task");

