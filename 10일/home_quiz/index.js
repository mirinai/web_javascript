// const americanoClass = document.querySelector(".americano");
// const latteClass = document.querySelector(".latte");
// const vanillaClass = document.querySelector(".vanilla");

// const totalClass = document.querySelector(".total-pay");
// totalClass.innerText = 0;
// const buyBtn = document.querySelector(".re-button");

// const ameBtn = document.querySelector(".ame-buy");
// const latBtn = document.querySelector(".lat-buy");
// const vanBtn = document.querySelector(".van-buy");

// //upper h2

// americanoClass.innerText = "아메리카노 가격 : 3000 ";
// latteClass.innerText = "라떼 가격 : 3500 ";
// vanillaClass.innerText = "바닐라 가격 : 4000 ";

// ameBtn.addEventListener("click", function () {
//   const num = parseInt(americanoClass.innerText.replace(/[^0-9]/g, ""));
//   totalClass.innerText = "총 합계 : " + num + "원";
// });
// latteBtn.addEventListener("click", function () {
//   const num = parseInt(latteClass.innerText.replace(/[^0-9]/g, ""));
//   totalClass.innerText = "총 합계 : " + num + "원";
// });

// vanillaBtn.addEventListener("click", function () {
//   const num = parseInt(vanillaClass.innerText.replace(/[^0-9]/g, ""));
//   totalClass.innerText = "총 합계 : " + num + "원";
// });

const americanoClass = document.querySelector(".americano");
const latteClass = document.querySelector(".latte");
const vanillaClass = document.querySelector(".vanilla");

const totalClass = document.querySelector(".total-pay");
totalClass.innerText = "총 합계 : 0원";
const buyBtn = document.querySelector(".re-button");

const ameBtn = document.querySelector(".ame-buy");
const latBtn = document.querySelector(".lat-buy");
const vanBtn = document.querySelector(".van-buy");

// 초기 텍스트 설정
americanoClass.innerText = "아메리카노 가격 : 3000원";
latteClass.innerText = "라떼 가격 : 3500원";
vanillaClass.innerText = "바닐라 가격 : 4000원";

// 숫자만 추출하는 함수
function extractNumber(text) {
  const match = text.match(/\d+/); //0~9까지 이어진 수만 빼오기
  return match ? parseInt(match[0], 10) : 0;
}

// 총 합계 업데이트 함수
function updateTotal(amount) {
  const currentTotal = extractNumber(totalClass.innerText);
  const newTotal = currentTotal + amount;
  totalClass.innerText = "총 합계 : " + newTotal + "원";
}

// 각 버튼 클릭 시 가격 합산하여 표시
ameBtn.addEventListener("click", function () {
  const num = extractNumber(americanoClass.innerText);
  updateTotal(num);
});

latBtn.addEventListener("click", function () {
  const num = extractNumber(latteClass.innerText);
  updateTotal(num);
});

vanBtn.addEventListener("click", function () {
  const num = extractNumber(vanillaClass.innerText);
  updateTotal(num);
});

// 다시사기 버튼 클릭 시 총 합계 초기화
buyBtn.addEventListener("click", function () {
  totalClass.innerText = "총 합계 : 0원";
});
