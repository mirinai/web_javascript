const a = document.querySelector(".box");
console.log(a); //<div class="box">이건 박스다</div>

// const b = document.getElementsByClassName(".box");

// console.log(b);
/*
length
: 
0
[[Prototype]]
: 
HTMLCollection

*/
a.addEventListener("click", function () {
  console.log("ㅁㄴㅇㄹ");
});

// - 0 +
// 0이하면 마이너스가 안되게 하기

const minusBtn = document.querySelector(".minus-btn");
const num = document.querySelector(".span");
const plusBtn = document.querySelector(".plus-btn");

minusBtn.innerText = "-";
num.innerText = 0;
plusBtn.innerText = "+";

minusBtn.addEventListener("click", function () {
  //   if (Number(num.innerText) <= 0) {
  //     return;
  //   } else {
  //     num.innerText = Number(num.innerText) - 1;
  //   }
  // });
  const numSpan = document.querySelector(".span");
  const number = Number(numSpan.innerText) - 1;
  //   numSpan.innerText = num === -1 ? 0 : number;
  numSpan.innerText = number <= 0 ? 0 : number;
});
plusBtn.addEventListener("click", function () {
  num.innerText = Number(num.innerText) + 1;
});

const xBtn = document.querySelector(".xMark");

const bar = document.querySelector(".bar");
xBtn.style.display = "none";
xBtn.addEventListener("click", function () {
  bar.style.display = "block";
});

bar.addEventListener("click", function () {
  xBtn.style.display = "block";
  bar.style.display = "none";
});
