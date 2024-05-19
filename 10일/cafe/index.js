//아메리카노 2500 : - 0 +
//라떼 3000 : - 0 +
//바닐라 3500 : - 0 +
//총액 : 0

// const minus_btn = document.createElement("button");
// minus_btn.innerText = "-";
// const plus_btn = document.createElement("button");
// plus_btn.innerText = "+";
// let count = 0;

// let num = document.createElement("span");
// const ame = `아메리카노: `;
// const lat = `라떼: `;
// const van = `바닐라: `;
// const sum = `총액: `;

// const price1 = document.createElement("span");
// price1.innerText = 2500;
// const price2 = document.createElement("span");
// price1.innerText = 3000;
// const price3 = document.createElement("span");
// price1.innerText = 3500;
// const price_sum = document.createElement("span");
// price_sum = price1 + price2 + price3 + num;

// ame = ame + price1;
// lat += price2;
// van += price3;
// sum += price_sum;

// num = count;

// minus_btn.addEventListener("click", function () {
//   count -= 100;
//   num = count;
// });
// plus_btn.addEventListener("click", function () {
//   count += 100;
//   num = count;
// });

const americanoSpan = document.createElement("span");
const latteSpan = document.createElement("span");
const vanllaSpan = document.createElement("span");
const totalSpan = document.createElement("span");
americanoSpan.innerText = "아메리카노 2500";
latteSpan.innerText = "라떼 2500";
vanllaSpan.innerText = "바닐라 2500";
totalSpan.innerText = 0;
const americanoMinusBtn = document.createElement("button");
const americanoTotal = document.createElement("span");
const americanoPlusBtn = document.createElement("button");

americanoMinusBtn.innerText = "-";
americanoTotal.innerText = "0";
americanoPlusBtn.innerText = "+";

americanoMinusBtn.addEventListener("click", function () {
  americanoTotal.innerText = Number(americanoTotal.innerText) - 1;
  totalSpan.innerText = Number(totalSpan.innerText) - 2500;
});
americanoPlusBtn.addEventListener("click", function () {
  americanoTotal.innerText = Number(americanoTotal.innerText) + 1;
  totalSpan.innerText = Number(totalSpan.innerText) + 2500;
});

document.body.appendChild(americanoSpan);
document.body.appendChild(americanoMinusBtn);
document.body.appendChild(americanoTotal);
document.body.appendChild(americanoPlusBtn);

document.body.appendChild(totalSpan);
