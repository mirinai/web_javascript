// 변수(variable) : 데이터를 기억하는 공간, 이름
// const 변수이름 = 데이터[기억 한번만]
// let 이름 = 데이터[여러번 기억함]
// const ca =100;
// ca=200; (x)
//var 이름 = 데이터 [절대 쓰지말기]

//let b = 100;
// b = 200;(o)
const a = 1;
const b = "사이다";

//변수이름 문법
// 1. 예약어[키워드] 안됨!
//ex) const const x!
// 2. 변수에서 특수문자 안됨(_빼고)
// 3. 띄어쓰기 안됨 const mintChoco
// 4. 숫자로 시작안됨 : ex) const 1a(x), a1(o)
// 5. 변수이름 겹치면 안됨

//변수 이름 국룰
// 1. 의미있는 단어쓰기
// ex) const a(x), const button(x), white_button(o)
// 2. 두 단어 더할때 낙타표기법, 뱀표기법 쓰기
// - 낙타 : milkCoffee
// - 뱀 : milk_coffee
// 3. 소문자로 시작하기
// 컴퓨터 : 연산[CPU] + 기억(RAM)
// 사람 : 연산[뇌] + 기억[뇌]

//유저에게 내용과 색깔을 두가지 입력받고
//HTML에 h1~h3태그 각각 3개 만들기

const contents = window.prompt("들어갈 내용");
const colors = window.prompt("색깔");
// const htag=[]
// for(let i=0;i<3;i++)
// {
//     htag[i] = document.createElement(`h{}`)
// }
// const h1tag = document.createElement("h1tag");
// h1tag.innerText = contents;
// h1tag.style.color = colors;
// h1tag.style.width = "100px";
// h1tag.style.height = "100px";

// contents = window.prompt("들어갈 내용");
// colors = window.prompt("색깔");
// const h2tag = document.createElement("h2tag");
// h2tag.innerText = contents;
// h2tag.style.color = colors;

// contents = window.prompt("들어갈 내용");
// colors = window.prompt("색깔");
// const h3tag = document.createElement("h3tag");
// h3tag.innerText = contents;
// h3tag.style.color = colors;

const h1tag = document.createElement("h1");
const h2tag = document.createElement("h2");
const h3tag = document.createElement("h3");

h1tag.style.color = colors;
h2tag.style.color = colors;
h3tag.style.color = colors;

h1tag.innerText = contents;
h2tag.innerText = contents;
h3tag.innerText = contents;

document.body.appendChild(h1tag);
document.body.appendChild(h2tag);
document.body.appendChild(h3tag);

//유저에게 만들고 싶은 태그 물어보고
//원하는 안의 내용도 물어보고
//원하는 폰트색깔 만들고,
//html에 넣기
const tag = prompt("input tag");
const text1 = prompt("input text");
const color1 = prompt("input font color");

const madeTag = document.createElement(tag);
madeTag.style.color = color1;
madeTag.innerText = text1;
document.body.appendChild(madeTag);
