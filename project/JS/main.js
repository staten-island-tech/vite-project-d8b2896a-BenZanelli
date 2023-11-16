import "../styles/style.css";
import { items } from "./items.js";
let parent = document.querySelector(".parent")
let card=document.querySelectorAll(".card");
function swap(){
  let dark=document.querySelector(".dark");
  let texts=document.querySelectorAll(".text")
  dark.addEventListener("click", function(){
    document.body.classList.add("darkmd")
    document.body.classList.remove("lightmd")
    card.forEach(()=>
      document.body.classList.add("darkmd"),
      document.body.classList.remove("lightmd")
    )
    texts.forEach(()=>
      document.body.classList.add("darkmd"),
      document.body.classList.remove("lightmd")
    )

  })
  let light=document.querySelector(".light");
  light.addEventListener("click", function(){
    document.body.classList.add("lightmd")
    document.body.classList.remove("darkmd")
    card.forEach(()=>
      document.body.classList.add("darkmd"),
      document.body.classList.remove("lightmd")
    )
    texts.forEach(()=>
    document.body.classList.add("lightmd"),
    document.body.classList.remove("darkmd")
  )

  })

}
swap()
function populate(){
  items.forEach((el)=> parent.insertAdjacentHTML(
    "beforeend",
    `<div class=card>
    <h2 id="name" class="text">${el.name}</h2>
    <img src="${el.image}" class="image">
    <h3 id="price" class="text">$${el.price}</h3>
    </div>`
  ))
}
populate()

function filters(){
  let uni= document.querySelector(".uniform")
  let remove= document.querySelector(".remove")
  let reset= document.querySelector(".reset")
  let name = document.querySelectorAll("#name") 
  let weapon = document.querySelector(".weapon")
  uni.addEventListener("click", function(){
    name.forEach((el)=>el.parentElement.remove())
    items
    .filter((el)=>el.type.includes("uniform"))
    .forEach((el)=>parent.insertAdjacentHTML(
      "beforeend",
      `<div class=card>
      <h2 id="name" class="text">${el.name}</h2>
      <img src="${el.image}" class="image">
      <h3 id="price" class="text">$${el.price}</h3>
      </div>`
    ))
  })
  remove.addEventListener("click", function(){
    name.forEach((el)=>el.parentElement.remove())
  })
  weapon.addEventListener("click", function(){
    name.forEach((el)=>el.parentElement.remove())
    items
    .filter((el)=>el.type.includes("weapon"))
    .forEach((el)=>parent.insertAdjacentHTML(
      "beforeend",
      `<div class=card>
      <h2 id="name" class="text">${el.name}</h2>
      <img src="${el.image}" class="image">
      <h3 id="price" class="text">$${el.price}</h3>
      </div>`
    ))
  })
/*   reset.addEventListener("click", function(event){
    event.preventDefault();
    items.forEach((el)=> parent.insertAdjacentHTML(
      "beforeend",
      `<div class=card>
      <h2 id="name" class="text">${el.name}</h2>
      <img src="${el.image}" class="image">
      <h3 id="price" class="text">$${el.price}</h3>
      </div>`
  ))}) */

}
filters()