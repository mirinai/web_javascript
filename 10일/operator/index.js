//Operator[연산자]
//산술 연산자
//할당 연산자[=, +=, -=, *=, **=, /=, %=]
const a = 3;
let b = 4;
b = b + 1;
//b+=1
b = b - 4;
//b-=4

//비교 연산자[==]
// >, < , <=, >=, ==
//=== : 타입까지 같음

const c1 = 5 > 3; //true
const c2 = 5 == 4; //false
const c3 = 5 != 4; //true

const c4 = 5 === "5"; //false
const c5 = 5 == "5"; //true

//논리 연산자
// &&[and] ||[or] ![not]
// && : 모두 true일때 true
// || : 하나라도 true일때 true
const d1 = 5 > 0 && 3 > 0 && 0 == "0"; //true
const d2 = 5 > 0 && 3 > 0 && 0 === "0"; //false
const d3 = 5 > 0 || 3 > 0 || 0 === "0"; //true

const d4 = !true; //false
const d5 = !"happy"; //false
const d6 = !!"happy"; //true //암묵적 타입 캐스팅

//삼항 연산자
// 조건 ? true일때 : false일때
const height = Number(prompt("키 몇임"));
const isOver140 = height >= 140 ? "탈 수 있음" : "못 탐";

//es6 이후 연산자
// 1. typeof
console.log(typeof true); // boolean
console.log(typeof isOver140); // string

// 2. Nullish ??
const h = prompt("아무거나 입력");
console.log(h ?? "아무것도 입력안함");
console.log("아메리카노" ?? "남은 것 없음");
console.log(null ?? "남은 것 없음");
console.log(undefined ?? "남은 것 없음");

//단축평가[short-circuit]

true || "dog"; //true
false || "dog"; //"dog"
true && "dog"; //"dog"
false && "dog"; //false

const userName = prompt("이름 입력 :") || "Guest";
console.log(`이름: ${userName}`);
