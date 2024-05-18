//js가 html을 만들기 위한 곳

//h1 태그 만들기
// const h1tag = document.createElement("h1");
// h1tag.innerText = "javascript";
// document.body.appendChild(h1tag);

//버튼을 만들고, 안의 내용은 클릭! body에 나타내기

// const button = document.createElement("button");
// button.style.backgroundColor = "skyblue";
// button.style.padding = "10px";
// button.style.fontSize = "20px";
// button.innerText = "클릭";
// document.body.appendChild(button);

// const worldClass = prompt("world class");
// console.log(worldClass);

// prompt로 배경색깔을 물어보고 헥사코드,
// ex) red, #ffefed
// div -> width:100px, height:100px, background : red
// const backColor = prompt("BG써");
// const div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = backColor;
// document.body.appendChild(div);

// 폰트 색깔 물어보고 버튼 안에 들어갈 내용 물어보고 버튼을 html에 보여주기
// const fontC = window.prompt("폰트색깔");
// const button_contents = window.prompt("버튼 안에 들어갈 내용");
// const button = document.createElement("button");

// button.style.color = fontC;
// button.style.padding = "10px";
// button.innerText = button_contents;
// document.body.appendChild(button);

//높이, 너비 물어보기 100px, 배경색 물어보기, 안에들어갈 내용 물어보기
//div 태그로 위의 내용을 생각해 나타내기
const ht = window.prompt("높이 넣기(px까지)");
const wh = window.prompt("너비 넣기(px까지)");
const BG = window.prompt("배경색");
const texts = prompt("안에 들어갈 내용");
const div = document.createElement("div");
div.style.height = ht;
div.style.width = wh;
div.style.backgroundColor = BG;
div.innerText = texts;
document.body.appendChild(div);
