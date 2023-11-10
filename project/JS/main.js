import "../styles/style.css";
import { items } from "./items.js";

function swap(){
  let dark=document.querySelector(".dark");
  let card=document.querySelectorAll(".card")
  dark.addEventListener("click", function(){
    document.body.classList.add("darkmd")
    document.body.classList.remove("lightmd")
    card.forEach(()=>
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
  })

}
swap()
function populate(){
  let parent = document.querySelector(".parent")
  items.forEach(()=> parent.insertAdjacentHTML(
    "beforeend",
    `<div class=card>
    <h2 class="name">${items.name}</h2>
    <img src="${items.image}">
    <h3 class="price">${items.price}</h3>
    </div>`
  ))
}
populate()
