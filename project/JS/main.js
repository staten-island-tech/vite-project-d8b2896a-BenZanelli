import "../styles/style.css";
import { items } from "./items.js";
import { DOMselectors } from "./dom";
function swap(){ 
DOMselectors.dark.addEventListener("click", function(){
    document.body.classList.add("darkmd")
    document.body.classList.remove("lightmd")
  })
 DOMselectors.light.addEventListener("click", function(){
    document.body.classList.add("lightmd")
    document.body.classList.remove("darkmd")
  })
}
//accepts an array and pushes content onto HMTL
function populate(arr){
  arr.forEach((el)=> DOMselectors.parent.insertAdjacentHTML(
    "beforeend",
    `<div class='card'>
    <h2 id="name" class="name">${el.name}</h2>
    <img id="${el.name}" src="${el.image}" class="image">
    <h3 id="price" class="name">$${el.price}</h3>
    </div>`
  ))
  }
function filters(){
    //for each button we add click event handler
    DOMselectors.buttons.forEach((btn)=> btn.addEventListener("click", function(){
      //get button text to be used later
      let category = btn.textContent.toLowerCase()
      //create new array by filtering items by category (the button clicked)
      let newArr = items.filter((el)=>el.type.includes(category))
      //remove all old cards
      DOMselectors.parent.innerHTML = ""
      //passing in new filtered array to put cards on screen
      populate(newArr)
    }))
}
populate(items)
swap()
filters()
