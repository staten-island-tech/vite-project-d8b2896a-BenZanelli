import "../styles/style.css";
import { items } from "./items.js";
function swap(){
  let dark=document.querySelector(".dark");
  dark.addEventListener("click", function(){
    document.body.classList.add("darkmd")
    document.body.classList.remove("lightmd")
  })
  let light=document.querySelector(".light");
  light.addEventListener("click", function(){
    document.body.classList.add("lightmd")
    document.body.classList.remove("darkmd")
  })
}
swap()
function populate(){
  let parent = document.querySelector(".parent")
  items.forEach((el)=>el.name.forEach((name)=>parent.insertAdjacentHTML))
}
populate()
