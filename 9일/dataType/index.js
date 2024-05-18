// const 변수이름 = 데이터[기본 + 참조]
// 기본 타입

//1. 숫자타입
// const a = 7; //integer
// const b = 3.14; //float

// //타입 바꾸기

// //2. 문자타입
// const d = "아메리카노";
// const e = "바닐라라떼";
// const f = `민트초콜릿`;

// const g = `내 최애 음료는 : ${e}`;
// console.log(g); //내 최애 음료는 : 바닐라라떼

// //프롬프트를 써서
// //1. 니 MBTI
// //2. 니가 가장 좋아하는 음식?
// //alert으로 니 MBTI는 ~~, 가장 좋아하는 음식은 ~~이군요
// const mbti = window.prompt("니 MBTI");
// const food = window.prompt("니가 가장 좋아하는 음식?");

// window.alert(`니 MBTI는 ${mbti}, 가장 좋아하는 음식은 ${food}이군요`);

// //오늘 날짜?
// //오늘 일정?
// const today_nalcha = prompt("오늘 날짜?");
// const today_iljong = prompt("오늘 일정?");

// alert(`오늘의 날짜는 ${today_nalcha}이고, ${today_iljong}를 하실 예정`);

// //첫번째 수 입력
// //두번째 수 입력
// // 두 수의 합은 ~~(이)다.
// const first_num = window.prompt("첫번째 수 입력");
// const second_num = window.prompt("두번째 수 입력");
// num1 = Number(first_num);
// num2 = Number(second_num);
// const sum = num1 + num2;
// window.alert(`두 수의 합은 ${sum}(이)다.`);

//1. 몇살? =>20
//html에 h1태그로된 2005년이시군요

//2. 정사각형의 한변의 길이 => 10
//html에 있는 정사각형의 넓이는 100이다.

let howOld = prompt("몇살?");
howOld = Number(howOld);
const hae = 2024 - howOld;

const text1 = document.createElement("h1");
text1.style.color = "black";

text1.innerText = `${hae}년이시군요`;

let len_nemo = prompt("정사각형의 한변의 길이");
len_nemo = Number(len_nemo);
const 넓이 = len_nemo * len_nemo;
const text2 = document.createElement("h1");
text2.style.color = "black";
text2.innerText = `정사각형의 넓이는 ${넓이}이다.`;

document.body.appendChild(text1);
document.body.appendChild(text2);
