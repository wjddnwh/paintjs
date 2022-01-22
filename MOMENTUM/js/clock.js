const clock = document.querySelector("h2#clock");

/*
function sayHello(){
  console.log("hello");
}
//setInterval(함수, 밀리세컨드) 밀리초마다 함수 실행
setInterval(sayHello, 5000);
*/

/*
function sayHello(){
  console.log("hello");
}
//setTimeout(함수, 밀리세컨드) 밀리초뒤에 함수 실행
setTimeout(sayHello, 5000);
*/

//padStart(길이, 문자) 길이가 안넘어가면 문자를 앞에 추가함
//padEnd(길이, 문자) 길이가 안넘어가면 문자를 뒤에 추가함
function Time(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
Time();
setInterval(Time, 1000);
