//var == let 비슷하다
//var는 선언하기 전에 사용할 수 있다(호이스팅 방법)
//var는 선언 및 초기화가 같이 일어남
//let은 선언 단계 초기화 단계가 나누어짐
//let은 사용 잘 안함
//const는 선언 초기화 할당이 모두 같이 일어남

//생성자 함수 -> 첫글자는 대문자로
//객체지향의 클래스와 비슷
/*
function User(name, age) {
  this.name = name;
  this.age = age; 
  this.sayName = function() {
    console.log(this.name);
  }
}

let user1 = new User('Mike', 30);
let user2 = new User('Jane', 22);
let user3 = new User('Tom', 17);

user1.sayName();
*/

/*
//ex)생성자 함수
function Item(title, price){
  this.title = title; 
  this.price = price;
  this.showPrcie = function() {
    console.log(this.price);
  }
}

const item1 = new Item('인형', 3000);
const item2 = new Item('가방', 4000);
const item3 = new Item('지갑', 9000);

console.log(item1, item2, item3);

item3.showPrcie();
*/

//Object.assign(); 객체 복제
//Object.keys(); 객체안의 원소(키)를 배열로 반환
//Object.values(); 객체의 원소(키)의 할당값을 배열로 반환
//Object.entries(); 키/할당값 배열로 반환
//Object.fromEntries(); 배열을 객체로 바꿔줌

/*
let n = "name";
let a = "age";
const user = {
  [n] : "Mike",
  [a] : 30,
  [1 + 4]: 5,
};

console.log(user);

function makeObj(key, val){
  return {
    [key] : val,
  };
}

const obj = makeObj("나이", 33);
console.log(obj);
*/

/*
//ex)Object.assign(); 객체 복제
const user = {
  name : "Mike", 
  age : 30,
};

const user2 = Object.assign({}, user);
user2.name = "Tom";

console.log(user);
console.log(user2);
*/

/*
//ex)Object.keys(); & Object.values(); & Object.entries();
const user = {
  name : "Mike",
  age : 30,
};
//ex)Object.fromEntries();
const arr = [
  ['mon', '월'],
  ['tue', '화'],
]

const keys = Object.keys(user); //객체 안 원소(키) 배열로 반환
const val = Object.values(user); //객체의 원소(키)의 할당값을 배열로 반환
const result = Object.entries(user); //키/할당값 배열로 반환
console.log(keys);
console.log(val);
console.log(result);

const arrayToObject = Object.fromEntries(arr); //배열을 객체로 바꿔줌
console.log(arrayToObject);
*/

/*
//Symbol('키') 은 유일한 식별자(유일성 보장)
const id = Symbol('id');
const myId = Symbol('id');
//변수.description을 통해 키값 얻을 수 있다.
console.log(id.description);
//property key : 심볼형
const user = {
  name : 'Mike', 
  age : 30, 
  [id] : 'myid',
}

console.log(id == myId, id === myId); //다르다
console.log(user);

//Symbol.for('키');
//하나의 심볼만 보장 받음
//없으면 만들고, 있으면 가져옴
//키를 통해 같은 심볼 공유
const id1 = Symbol.for('id');
const id2 = Symbol.for('id');

console.log(id1 == id2, id1 === id2); //같다

//Symbol.keyFor(변수)을 통해 키값 얻을수 있음
console.log(Symbol.keyFor(id1));

//Symbol과 Symbol.for은 다르다
*/

/*
//ex)
const user = {
  name : 'Mike', 
  age : 30, 
};

//기존의 코드 건들지 않고 코드 추가
const showName = Symbol('Show name');
user[showName] = function() {
  console.log(this.name);
};
user[showName]();

for(let key in user){
  console.log(`His ${key} is ${user[key]}.`);
}
*/

//10진수 -> 2진수/16진수
let num = 10;

num.toString(); //디폴트값 = 10진수
num.toString(2); //2진수로

let num2 = 255;
num.toString(16); //16진수로

//Math.ceil() 올림 & Math.floor() 내림 & Math.round() 반올림
let num3 = 3.4
Math.ceil(num3);
Math.floor(num3);
Math.round(num3);

//변수이름.toFixed(n) 소수점 n번째 까지 출력 -> 문자열로 반환
let userRate = 30.1234;
userRate.toFixed(2); //30.12
userRate.toFixed(0); //30
