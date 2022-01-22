//변수 선언 방법(const,let,var)
//const는 변경 불가(값 보호)
const a = 5;
const b = 2;

//let&var은 변경 가능
//let사용 선호
let myNmae = "JW";//낙타모양(변수 이름)
let ax = 5;

var x = 2;
var y = 4;

myName = "JungWoo"; //update

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("My name is " + myNmae);

//boolean(True=1/False=0)
const z = null;
const amIFat = true;
const amISlim = false;
console.log(amIFat);
console.log(amISlim);

//null 말그대로 값이 null
//undefined 값이 없다(정의 안됨)
let something;
console.log(something);//->undefined

//배열(array)
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon,tue,wed,thu,fri,sat,sun];
console.log(daysOfWeek);
console.log(daysOfWeek[5]);
//원소 추가
daysOfWeek.push("holiday");
console.log(daysOfWeek);
//ex
const toBuy = ["potato","tomato","pizza"];
toBuy.push("kimbab");
console.log(toBuy);

//object(구조체==class)
// const playerNmae = "JW";
// const playrPoints = 121212;
// const playerHandsome = true;
// const playerFat = "little bit";

const player = {
  name : "JW",
  points: 1212,
  handsome: true,
  fat: "little bit",
};
console.log(player);
console.log(player.name);
console.log(player["name"]);
player.lastName = "Cho";//구조체 밖에서 추가 가능
console.log(player);

//funcion(함수)
function printHello(longListName){
  for(i=0;i<longListName.length;i++){
    console.log("Hello my name is "+longListName[i]);
  }
}

const listName = ["nico","nicolas","JW","JungWoo"];

printHello(listName);
console.log("\n");//줄바꿈
listName.push("Nomad");

printHello(listName);

//계산기 만들기
function plus(firstNumber, secondNumber){
  console.log(firstNumber + secondNumber);
}
function divide(firstNumber, secondNumber){
  console.log(firstNumber/secondNumber);
}
function multiply(firstNumber, secondNumber){
  console.log(firstNumber*secondNumber);
}
plus(60,8);
divide(98,20);
multiply(5,4);

const player2 = {
  name: "nico",
  sayHello: function(otherPersonName){
    console.log("hello"+otherPersonName);
  },
};
console.log(player2.name);
player2.sayHello("lynn");

//const 항상, let 변하는 변수만, var 절대 사용하지 말것
const calculator = {
  Add: function(a,b){
    console.log(a+b);
    return a+b;
  },
  Minus: function(a,b){
    console.log(a-b);
    return a-b;
  },
  Mul: function(a,b){
    console.log(a*b);
    return a*b;
  },
  Div: function(a,b){
    console.log(a/b);
    return a/b;
  },
  Power: function(a,b){
    console.log(a**b);
    return a**b;
  },
};
const result = [calculator.Add(2,3),calculator.Minus(2,3),
  calculator.Div(2,3),calculator.Mul(2,3),calculator.Power(2,3)];
 console.log(result); 

 const Myage = 96;
 function calculateKrAge(ageOfForeigner){
   ageOfForeigner = ageOfForeigner + 2;
   return ageOfForeigner;
 }

 const krAge = calculateKrAge(Myage);
 console.log(krAge);

 const age = prompt("How old are you?");
 console.log(typeof age);
 if(age == 100){
    console.log("wow");
 }