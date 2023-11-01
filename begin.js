

const bton = document.querySelector(".addbtn");
const input = document.querySelector("input");
const innertodo = document.querySelector(".inner_todo");
const error = document.querySelector(".error");
const todoContainer = document.querySelector(".todoCont");
const yt = document.querySelector(".yt");

let title = "";
// add by add button
function btnreveal() {
  if(title==""){

    error.classList.add('errorshown')
    return
 }
 else{
    error.classList.remove('errorshown')
 }
  yt.classList.add('ytshown')
  let html = `
  <div class="todo-item">
      <li class="inner_todo">${title}</li>
      <div class="tickboxes">
        <i class="fa fa-thin fa-check" ></i>
        <i class="fa fa-thin fa-x"></i>
        <i class="fa fa-duotone fa-trash"></i>
      </div>
    </div> `;
  todoContainer.insertAdjacentHTML("beforeend", html);
  title = "";
  input.value = "";
}

bton.addEventListener("click", btnreveal);

//add by pressing enter
function press_enter(e) {
  if(title==""){
        
    error.classList.add('errorshown')
    return
 }
 else{
    error.classList.remove('errorshown')
 }
 
if (e.key === "Enter") {
    yt.classList.add('ytshown')
  let html = `
  <div class="todo-item">
  <li class="inner_todo">${title}</li>
  <div class="tickboxes">
    <i class="fa fa-thin fa-check" ></i>
    <i class="fa fa-thin fa-x" ></i>
    <i class="fa fa-duotone fa-trash"></i>
    </div>
  </div> `;
 todoContainer.insertAdjacentHTML("beforeend", html);
 title = "";
 input.value = "";
}
}
input.addEventListener("keyup", press_enter);
//input show
function showInput() {
    title = input.value;
  }
  input.addEventListener("input", showInput);

// remove by trash icon
function findParentEl(elem,className){
  while(elem){
    if(elem.matches(className)){
      return elem.parentElement;
    }
    elem=elem.parentElement;
  }
  return null;
}
todoContainer.addEventListener("click", function (e) {
  // console.log(event.target)
 
    const todoItem = findParentEl(e.target,".fa-trash")
    // console.log(todoItem)
    if (todoItem) {
      todoItem.parentElement.remove();
  }
    if(!document.getElementsByClassName("todo-item").length){
        yt.classList.remove('ytshown')
    }
    
});
//strike through by check click

todoContainer.addEventListener("click", function (e) {

 
    const todoItem = findParentEl(e.target,".fa-check")
  
    if (todoItem) {
      todoItem.parentElement.classList.add("strikethrough");
    }
    
  
});

//remove strike through by cross

todoContainer.addEventListener("click", function (event) {

 
    const todoItem = findParentEl(event.target,".fa-x")
    // console.log(todoItem)
    
    if (todoItem) {
      todoItem.parentElement.classList.remove("strikethrough");
      
    }
    
  
});
