/*
// 상수는 대문자로
const USER_NAME = "정우";
// alert = 알려줌
// prompt = 입력받음 ->문자형으로 입력받음
const NAME = prompt("이름을 입력하세요.");
//alert("환영합니다. " + NAME + "님");
alert(`안녕하세요. ${NAME}님. 환영합니다.`);
// confirm 확인 받음(확인(true)과 취소(false)버튼)
const isAdult = confirm("당신은 성인 입니까?");
console.log(isAdult);
// ===는 타입까지 비교
*/

/*
const NAME = prompt("이름을 입력하세요.");
const AGE = prompt("나이를 입력하세요.");
const PERSON = [NAME, AGE];
if(Number(PERSON[1])>19) {
  alert(`${PERSON[0]}님 환영합니다.`);
} else if(Number(AGE)==19) {
  alert(`${PERSON[0]}님 수능 잘보세요.`);
} else {
  alert(`${PERSON[0]}님 나이가 ${PERSON[1]}살 이여서 들어갈 수 없습니다`);
}
*/

/*
//함수 선언문
function showError() {
  alert('error');
}

//화살표 함수
let sayHello = () => {
  console.log("error");
};

const sayHello = (name) => {
  const msg = `Hello, ${name}`;
  console.log(msg);
};

const add = (num1, num2) => {
  return num1 + num2;
};
*/

//return문이 한줄일 경우 {}말고 ()로 하면 된다
/*
const add = (num1, num2) => (
  num1 + num2
);
*/

/*
//객체 선언
const superman = {
  name : `clark`,
  age : 33,
}
//객체 접근, 추가, 삭제
//접근
superman.name;
superman.age;
//추가
superman.gender = 'male';
superman['hairColor'] = `black`;
//삭제
delete superman.hairColor;
*/

/*
const superman = {
  name : `clark`,
  age : 30,
}

console.log(superman.name);
console.log(superman[`age`]);
console.log(superman);

superman.hairColor = 'black';
superman['hobby'] = 'football';

console.log(superman);

delete superman.age;
console.log(superman);

delete superman[`hobby`];
console.log(superman);
*/

/*
function makeObject(name, age) {
  return {
    name : name,
    age : age,
    hobby : 'football',
  }
}

const Mike = makeObject("Mike", 30);
console.log(Mike);

console.log('age' in Mike);
console.log('birthday' in Mike);

function isAdult(user) {
  if(!('age' in user) || user.age < 20) {
    return false;
  } else { 
    return true; 
  }
}

const Eric = {
  name : 'Eric',
  age : 30,
}

const Jane = {
  name : 'Jane',
  
}

console.log(isAdult(Eric));
console.log(isAdult(Jane));

for(x in Eric) {
  console.log(x);
  console.log(Eric[x]);
}
*/

/*
let boy = {
  name : 'Mike',
  showName : function () {
    console.log(this.name);
  }
};

let man = boy;
boy = null;

man.showName();
*/

//배열
/*
let day = ['mon', 'tue', 'wed'];

day.push("thu");  //배열 뒤에 추가
day.unshift("sun"); //배열 앞에 추가
console.log(day);

for(let index = 0; index<day.length; index++) {
  console.log(day[index]);
}

for(let i of day){
  console.log(i);
}
*/