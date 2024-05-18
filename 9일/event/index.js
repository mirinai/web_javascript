//click, keyboard, mousemove, ....
// ==> Event

const button = document.createElement("button");
button.innerText = "버튼";

// 이벤트 추가
button.addEventListener("click", function () {
  window.alert("clicked");
});

document.body.appendChild(button);

// div태그 - width:100px, height:100px, bg:red
//      - 클릭을 하면, bg:blue

const div = document.createElement("div");
div.innerText = "div";
div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = "red";
document.body.appendChild(div);
div.addEventListener("click", () => {
  div.style.backgroundColor = "blue";
});
div.addEventListener("mouseover", function () {
  div.style.backgroundColor = "yellow";
});
div.addEventListener("mouseleave", function () {
  div.style.backgroundColor = "red";
});

// button 태그 만들고, '파란상자'
// event 클릭을 하면, html에 div w:100,h:100,bg:blue 생김

const buttonTag = document.createElement("button");
buttonTag.innerText = "파란상자";
buttonTag.addEventListener("click", function () {
  const div = document.createElement("div");

  div.style.backgroundColor = "blue";
  div.style.width = "100px";
  div.style.height = "100px";
  document.body.appendChild(div);
});
document.body.appendChild(buttonTag);

// 버튼을 세가지 만들고 각각 이름은 아래 사이트 색깔이름 넣기
// div : 100px 100px bg:black
// 클릭을 하면, 위의 div태그의 bg가 클릭한 이름의 색깔로 바꾸기

// btn1.addEventListener("click", () => {
//   const div = document.createElement("div");
//   div.style.width = "100px";
//   div.style.height = "100px";
//   div.style.backgroundColor = "#C3FF93";
//   document.body.appendChild(div);
// });
// document.body.appendChild(btn1);
// btn2.addEventListener("click", () => {
//   const div = document.createElement("div");
//   div.style.width = "100px";
//   div.style.height = "100px";
//   div.style.backgroundColor = "#FFDB5C";
//   document.body.appendChild(div);
// });
// document.body.appendChild(btn2);
// btn3.addEventListener("click", () => {
//   const div = document.createElement("div");
//   div.style.width = "100px";
//   div.style.height = "100px";
//   div.style.backgroundColor = "#FFAF61";
//   document.body.appendChild(div);
// });
// document.body.appendChild(btn3);
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
// div 생성
const div2 = document.createElement("div");

// 버튼 텍스트 설정
btn1.innerText = "C3FF93";
btn2.innerText = "FFDB5C";
btn3.innerText = "FFAF61";

// div 스타일 설정
div2.style.width = "100px";
div2.style.height = "100px";
div2.style.backgroundColor = "black";
div2.style.marginTop = "10px";

// 버튼 클릭 이벤트 리스너 추가
btn1.addEventListener("click", () => {
  div2.style.backgroundColor = "#C3FF93";
});

btn2.addEventListener("click", () => {
  div2.style.backgroundColor = "#FFDB5C";
});

btn3.addEventListener("click", () => {
  div2.style.backgroundColor = "#FFAF61";
});

// 버튼과 div를 문서의 본문에 추가
document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);
document.body.appendChild(div2);

// div => w:100, h:100 border : 1px solid black bg:white
// button => 내용 : 색깔추가
// button's event => prompt로 물어봄 색깔 핵사코드 입력

// button[#123123]을 가진 색깔이 나타남 div의 bg가 바뀜

const div3 = document.createElement("div");
div3.style.width = "100px";
div3.style.height = "100px";
div3.style.border = "1px solid black";
div3.style.backgroundColor = "white";

const btn4 = document.createElement("button");
btn4.innerText = "#C3FF93";
btn4.addEventListener("click", function () {
  div3.style.backgroundColor = "#C3FF93";
});

const btn5 = document.createElement("button");
btn5.innerText = "#FFDB5C";
btn5.addEventListener("click", function () {
  div3.style.backgroundColor = "#FFDB5C";
});

const btn6 = document.createElement("button");
btn6.innerText = "#FFAF61";
btn6.addEventListener("click", function () {
  div3.style.backgroundColor = "#FFAF61";
});

// const userColor = window.prompt("헥사코드 입력 (ex : #111111)");
// const btnUser = document.createElement("button");
// btnUser.innerText = "색깔추가";
// btnUser.addEventListener("click", function () {
//   div3.style.backgroundColor = userColor;
// });
const addBtn = document.createElement("button");
addBtn.innerText = "색깔추가";
addBtn.addEventListener("click", function () {
  const hex = prompt("헥사코드 입력");
  const btn = document.createElement("button");
  btn.innerText = hex;
  btn.addEventListener("click", () => {
    div3.style.backgroundColor = hex;
  });
  document.body.appendChild(btn);
});

document.body.appendChild(addBtn);

document.body.appendChild(btn4);
document.body.appendChild(btn5);
document.body.appendChild(btn6);
// // document.body.appendChild(btnUser);
document.body.appendChild(div3);
