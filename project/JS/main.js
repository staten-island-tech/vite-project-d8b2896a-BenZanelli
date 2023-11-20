import "../styles/style.css";
import { items } from "./items.js";
let parent = document.querySelector(".parent")
let card=document.querySelectorAll(".card");
function swap(){
  let dark=document.querySelector(".allstar");
  dark.addEventListener("click", function(){
    document.body.classList.add("darkmd")
    document.body.classList.remove("lightmd")
  })
  let light=document.querySelector(".uhlmann");
  light.addEventListener("click", function(){
    document.body.classList.add("lightmd")
    document.body.classList.remove("darkmd")
  })

}

function populate(){
  items.forEach((el)=> parent.insertAdjacentHTML(
    "beforeend",
    `<div class=card>
    <h2 id="name" class="name">${el.name}</h2>
    <img id="${el.name}" src="${el.image}" class="image">
    <h3 id="price" class="name">$${el.price}</h3>
    </div>`
  ))
}
function filters(){
  let uni= document.querySelector(".uniform")
  let remove= document.querySelector(".remove")
  let reset= document.querySelector(".reset")
  let name = document.querySelectorAll(".name") 
  let weapon = document.querySelector(".weapon")
  uni.addEventListener("click", function(){
    name = document.querySelectorAll(".name") 
    name.forEach((el)=>el.parentElement.remove())
    items
    .filter((el)=>el.type.includes("uniform"))
    .forEach((el)=>parent.insertAdjacentHTML(
      "beforeend",
      `<div class=card>
      <h2 id="name" class="name">${el.name}</h2>
      <img id="${el.name}" src="${el.image}" class="image">
      <h3 id="price" class="price">$${el.price}</h3>
      </div>`
    ))
  })
  remove.addEventListener("click", function(){
    name = document.querySelectorAll(".name") 
    name.forEach((el)=>el.parentElement.remove())
  })
  weapon.addEventListener("click", function(){
    name = document.querySelectorAll(".name") 
    name.forEach((el)=>el.parentElement.remove())
    items
    .filter((el)=>el.type.includes("weapon"))
    .forEach((el)=>parent.insertAdjacentHTML(
      "beforeend",
      `<div class=card>
      <h2 id="name" class="name">${el.name}</h2>
      <img id="${el.name}" src="${el.image}" class="image" >
      <h3 id="price" class="price">$${el.price}</h3>
      </div>`
    ))
  })
  reset.addEventListener("click", function(event){
    name = document.querySelectorAll(".name") 
    name.forEach((el)=>el.parentElement.remove())
    items.forEach((el)=> parent.insertAdjacentHTML(
      "beforeend",
      `<div class=card>
      <h2 id="name" class="name">${el.name}</h2>
      <img id="${el.name}" src="${el.image}" class="image">
      <h3 id="price" class="name">$${el.price}</h3>
      </div>`
    ))
  })

}
populate()
filters()
swap()