import "../styles/style.css";
import { items } from "./items.js";

function swap(){
  let dark=document.querySelector(".dark");
  let card=document.querySelectorAll(".card");
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
  let parent = document.querySelector(".parent")
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
  let uni = document.querySelector(".uniform");
  let parent = document.querySelector(".parent")
  uni.addEventListener("click", function(){
    let name= document.querySelector("#name") 
    name.forEach((el)=> el.parentElement.remove)
  })
  
}
filters()