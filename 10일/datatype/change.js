// div : w 100 h 100 bg : 마음대로
// -, + div가 유동적으로 넓이/높이가 바뀌도록 하는 프로그램 만들기

const div1 = document.createElement("div");
let pixel = 100;

div1.style.width = `${pixel}px`;
div1.style.height = `${pixel}px`;
div1.style.backgroundColor = "skyblue";

const minusBtn = document.createElement("button");
const plusBtn = document.createElement("button");
minusBtn.innerText = "minus";
plusBtn.innerText = "plus";
minusBtn.addEventListener("click", function () {
  pixel -= 10;
  div1.style.width = `${pixel}px`;
  //div1.style.width = parseInt(div1.style.width)-10+"px"
  div1.style.height = `${pixel}px`;
  //div1.style.height = parseInt(div1.style.height)-10+"px"
});
plusBtn.addEventListener("click", function () {
  pixel += 10;
  //div1.style.width = parseInt(div1.style.width)+10+"px"
  //div1.style.height = parseInt(div1.style.height)+10+"px"
  div1.style.width = `${pixel}px`;
  div1.style.height = `${pixel}px`;
});

document.body.appendChild(minusBtn);
document.body.appendChild(plusBtn);
document.body.appendChild(div1);
