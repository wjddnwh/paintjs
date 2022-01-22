//JS에서는 html이 표현하는 Object를 보여준다
//JS에서 html항목들 변경 가능
/*
const title = document.querySelector("div.hello:first-child h1")
console.dir(title);
title.innerText = "Hello";
title.style.color = "Blue";
*/
/*
const title = document.querySelector("div.hello:first-child h1");
function handletitleClick() {
  if(title.style.color === "Red"){
    title.style.color="Blue";
  }
  else if(title.style.color === "Blue"){
    title.style.color="Red";
  }
  else{
    title.style.color="Red";
  }
}
title.addEventListener("click",handletitleClick);
*/
//on붙어 있으면 event
/*
function handletitleClick() {
  h1.innerText = "Mouse Clicked";
}
function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
  h1.style.color = "Red";
}
function handleMouseLeave(){
  h1.innerText = "Mouse is gone!";
  h1.style.color="Blue";
}
function handlewindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handlewindowCopy() {
  alert("copier");
}
function handlewindowOffline(){
  alert("SOS no WIFI");
}
function handlewindowOnline(){
  alert("ALL GOOD!");
}
const h1 = document.querySelector("div.hello:first-child h1");
console.dir(h1);
h1.addEventListener("click",handletitleClick);
//title.onclick = handletitleClick; 같은것
h1.addEventListener("mouseenter",handleMouseEnter);
//title.mouseenter = handleMouseEnter;
h1.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize",handlewindowResize);
window.addEventListener("copy", handlewindowCopy);
window.addEventListener("offline", handlewindowOffline);
window.addEventListener("online", handlewindowOnline);
*/

const h1 = document.querySelector("div.hello:first-child h1");

function handleMouseClick() {
 /*
  const currentColor = h1.style.color;
  let newColor;
 if(currentColor === "blue"){
   newColor = "tomato";
 } else{
   newColor = "blue";
 }
 h1.style.color = newColor;
 */
  /*
  const clickedClass = "clicked";
 if(h1.classList.contains(clickedClass)) {
   h1.classList.remove(clickedClass);
 }
 else{
   h1.classList.add(clickedClass);
 }
 */
 h1.classList.toggle("clicked");
 //toggle은 체크하는것(있으면 제거, 없으면 추가)
}

h1.addEventListener("click", handleMouseClick);