import "../styles/style.css";
import { items } from "./items.js";
let parent = document.querySelector(".parent")
let card=document.querySelectorAll(".card");
function swap(){
  let dark=document.querySelector(".allstar");
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
    document.getElementById("JACKET").src = "https://allstar.de/thumbnail/40/07/e1/1669622454/9500H_3_1920x1920.jpg"
    document.getElementById("PANTS").src = "https://allstar.de/thumbnail/05/ea/4e/1669622210/9501H_3_1920x1920.jpg"
    document.getElementById("PLASTRON").src = "https://allstar.de/thumbnail/80/51/ac/1670251982/SPG-H_2_1920x1920.jpg"
    document.getElementById("MASK").src = "https://allstar.de/thumbnail/c5/72/c1/1686043020/AUMD_2_1920x1920.jpg"
    document.getElementById("GLOVE").src ="https://allstar.de/thumbnail/57/51/b0/1651660403/AKH-GS_2_1920x1920.jpg"
    document.getElementById("EPEE").src = "https://allstar.de/thumbnail/42/af/92/1694691605/ED17P_1920x1920.jpg"
    document.getElementById("FOIL").src = "https://allstar.de/thumbnail/ce/6f/9d/1695127859/EF17P_500x500.jpg"
    document.getElementById("WIRE").src = "https://allstar.de/thumbnail/71/8d/6e/1673139054/DK-T_1920x1920.jpg"
  })
  let light=document.querySelector(".uhlmann");
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
  document.getElementById("JACKET").src = "https://uhlmann-fechtsport.com/thumbnail/07/d6/16/1605282350/10008_1920x1920.jpg"
  document.getElementById("PANTS").src = "https://uhlmann-fechtsport.com/thumbnail/19/22/c4/1605282435/10108_1920x1920.jpg"
  document.getElementById("PLASTRON").src = "https://uhlmann-fechtsport.com/thumbnail/7e/a0/8c/1605282728/10203_400x400.jpg"
  document.getElementById("MASK").src = "https://uhlmann-fechtsport.com/thumbnail/8c/17/be/1605296952/10836_1920x1920.jpg"
  document.getElementById("GLOVE").src ="https://uhlmann-fechtsport.com/thumbnail/9f/40/0b/1605296335/10406_1920x1920.jpg"
  document.getElementById("EPEE").src = "https://uhlmann-fechtsport.com/thumbnail/e8/f8/86/1605298697/113067-RH_1920x1920.jpg"
  document.getElementById("FOIL").src = "https://uhlmann-fechtsport.com/thumbnail/9c/28/a8/1605297987/111067-RH_1920x1920.jpg"
  document.getElementById("WIRE").src = "https://uhlmann-fechtsport.com/thumbnail/17/3c/f4/1605299767/12554_1920x1920.jpg"
  })

}
swap()
function populate(){
  items.forEach((el)=> parent.insertAdjacentHTML(
    "beforeend",
    `<div class=card>
    <h2 id="name" class="text">${el.name}</h2>
    <img id="${el.name}" src="${el.image}" class="image">
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
      <img id="image" src="${el.image}" class="image">
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
      <img id="image" src="${el.image}" class="image" >
      <h3 id="price" class="text">$${el.price}</h3>
      </div>`
    ))
  })
  reset.addEventListener("click", function(event){
    document.location.reload()
  })


}
filters()

