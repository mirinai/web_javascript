const fruits = ["사과", "오렌지", "파인애플", "키위", "망고", "아보카도"];

// 사과 버튼 오렌지 버튼 파인애플 버튼.....을 html에 만들기
// 누르면 @@이 선택되었다. 나옴

// const appleBtn = document.createElement(`button`);
// const orangeBtn = document.createElement(`button`);
// const pineappleBtn = document.createElement(`button`);
// const kiwiBtn = document.createElement("button");
// const mangoBtn = document.createElement(`button`);
// const avocadoBtn = document.createElement(`button`);
// appleBtn.innerText = "사과";
// orangeBtn.innerText = "오렌지";
// pineappleBtn.innerText = "파인애플";
// kiwiBtn.innerText = `${fruits[3]}`;
// mangoBtn.innerText = "망고";
// avocadoBtn.innerText = "아보카도";

// appleBtn.addEventListener("click", function () {
//   console.log(`${appleBtn.innerText}가(이) 선택되었다.`);
// });
// orangeBtn.addEventListener("click", function () {
//   console.log(`${orangeBtn.innerText}가(이) 선택되었다.`);
// });
// pineappleBtn.addEventListener("click", function () {
//   console.log(`${pineappleBtn.innerText}가(이) 선택되었다.`);
// });
// kiwiBtn.addEventListener("click", function () {
//   console.log(`${kiwiBtnn.innerText}가(이) 선택되었다.`);
// });
// mangoBtn.addEventListener("click", function () {
//   console.log(`${mangoBtn.innerText}가(이) 선택되었다.`);
// });
// avocadoBtn.addEventListener("click", function () {
//   console.log(`${avocadoBtn.innerText}가(이) 선택되었다.`);
// });

// document.body.appendChild(appleBtn);
// document.body.appendChild(orangeBtn);
// document.body.appendChild(pineappleBtn);
// document.body.appendChild(kiwiBtn);
// document.body.appendChild(mangoBtn);
// document.body.appendChild(avocadoBtn);

// fruits.forEach((v) => {
//   const btn = document.createElement("button");
//   btn.innerText = v;
//   btn.addEventListener("click", function () {
//     alert(`${v}과일이 클릭됨`);
//   });
//   document.body.appendChild(btn);
// });
// let value = 0;
const coffee = ["아메리카노 3000", "라떼 4000", "바닐라 5000"];
// // const value = 0;
// coffee.forEach((v) => {
//   const btn = document.createElement("button");
//   btn.innerText = v;
//   btn.addEventListener("click", function () {
//     let str = v.split(" ");
//     value += Number(str[1]); 

//     document.querySelector(`.total`).innerText = value;
//   });
//   document.body.appendChild(btn);
// });

coffee.forEach((v) => {
  const btn = document.createElement("button");
  btn.innerText = v;
  btn.addEventListener("click", function () {
    const total = document.querySelector(`.total`);
    const price = Number(v.split(" ")[1]);
    total.innerText = Number(total.innerText) + price;
  });
  document.body.appendChild(btn);
});
