// const colorBtn = document.querySelector(".color");
// const sizeBtn = document.querySelector(".size");
// const borderRadiusBtn = document.querySelector(".borderRadius");

// for (let i=1;i<=5;i++){
//     colorBtn.querySelector(`.color${i}`).addEventListener("click",function(){
//         const e = document.querySelector(`.color${i}`)
//         e.remove(".color1")
//         e.remove(".color2")
//         e.remove(".color3")
//         e.remove(".color4")
//         e.remove(".color5")
//         e.add(".")
// }
const colorList = ["red", "orange", "yellow", "green", "blue"];
const sizeList = ["small", "medium", "large", "x-large", "xx-large"];
const radiusList = [
  "borderRadiusZero",
  "borderRadiusTen",
  "borderRadiusTwenty",
];
colorList.forEach((v) => {
  const btn = document.createElement(`button`);
  btn.innerText = v;
  btn.addEventListener("click", function () {
    const box = document.querySelector(".box");
    colorList.forEach((v1) => {
      box.classList.remove(v1);
    });
    box.classList.add(v);
  });
  //document.body.appendChild(btn);
  const colorBox = document.querySelector(".color");
  colorBox.appendChild(btn);
});
/* const colorBox = document.querySelector(".color"); colorBox.appendChild(btn);를 사용하면 버튼이 특정 컨테이너 (.color)에 추가됩니다. 이 경우, CSS 스타일링이나 컨테이너의 레이아웃 방식에 따라 줄바꿈이 발생할 수 있습니다.

document.body.appendChild(btn);
이 경우, 버튼들이 body 요소의 직계 자식으로 추가되며, 기본적으로 인라인 블록 요소로 취급되어 한 줄에 나란히 배치됩니다.

특정 컨테이너에 추가

const colorBox = document.querySelector(".color");
colorBox.appendChild(btn);
이 경우, 버튼들이 .color 컨테이너에 추가됩니다. 컨테이너의 CSS 스타일링에 따라 줄 바꿈이 발생할 수 있습니다.

*/
sizeList.forEach((v) => {
  const btn = document.createElement(`button`);
  btn.innerText = v;
  btn.addEventListener("click", function () {
    const box = document.querySelector(".box");
    sizeList.forEach((v1) => {
      box.classList.remove(v1);
    });
    box.classList.add(v);
  });
  //document.body.appendChild(btn);
  const sizeBox = document.querySelector(".size");
  sizeBox.appendChild(btn);
});
radiusList.forEach((v) => {
  const btn = document.createElement(`button`);
  btn.innerText = v;
  btn.addEventListener("click", function () {
    const box = document.querySelector(".box");
    radiusList.forEach((v1) => {
      box.classList.remove(v1);
    });
    box.classList.add(v);
  });
  //document.body.appendChild(btn);
  const radiusBox = document.querySelector(".radius");
  radiusBox.appendChild(btn);
});
