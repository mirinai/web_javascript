//1. 두수를 따로 입력받고 합, 차, 곱을 html에
//h2태그로 3개 각각 나타내기, 폰트색깔은 하늘색
// let num1 = window.prompt("정수입력");
// let num2 = window.prompt("정수입력");
// num1 = Number(num1);
// num2 = Number(num2);
// let sum = num1 + num2;
// let diff = 0;
// if (num1 >= num2) {
//   diff = num1 - num2;
// } else {
//   diff = num2 - num1;
// }
// let prod = num1 * num2;

// const h2tag1 = document.createElement("h2");
// const h2tag2 = document.createElement("h2");
// const h2tag3 = document.createElement("h2");

// h2tag1.style.color = "blue";
// h2tag2.style.color = "blue";
// h2tag3.style.color = "blue";

// h2tag1.innerText = sum;
// h2tag2.innerText = diff;
// h2tag3.innerText = prod;

// document.body.appendChild(h2tag1);
// document.body.appendChild(h2tag2);
// document.body.appendChild(h2tag3);

//const firstNum = prompt("첫번째  수 입력")
// const numfirstNum = Number(prompt("첫번째 수 입력"));
// const numSecondNum = Number(prompt("두번째 수 입력"));

// const sumH2 = document.createElement("h2");
// const diffH2 = document.createElement("h2");
// const multiH2 = document.createElement("h2");

// sumH2.innerText = `합 : ${numfirstNum + numSecondNum}`;
// diffH2.innerText = `합 : ${numfirstNum - numSecondNum}`;
// multiH2.innerText = `합 : ${numfirstNum * numSecondNum}`;

// document.body.appendChild(sumH2);
// document.body.appendChild(diffH2);
// document.body.appendChild(multiH2);
//2. 밑변과 높이를 각각 입력받고, 정삼각형의 넓이를
// html에 div태그로 나타내기, 폰트사이즈는 20px
//폰트색깔은 초록색

// const base = Number(prompt("밑변 입력"));
// const height = Number(prompt("높이 입력"));

// const widthTriangle = document.createElement("div");
// widthTriangle.innerText = `넓이: ${base * height}`;
// document.body.appendChild(widthTriangle);

// - 0 + 형태의 Counter 만들기

const Counter1 = document.createElement("button");
const Counter2 = document.createElement("button");
const Counter3 = document.createElement("button");

let num_c = document.createElement("h3");
let count = 0;
num_c.innerText = count;

Counter1.innerText = "-";
Counter2.innerText = "0";
Counter3.innerText = "+";

Counter1.addEventListener("click", function () {
    count -= 1;
    num_c.innerText = count;
});

Counter2.addEventListener("click", function () {
    count = 0;
    num_c.innerText = count;
});

Counter3.addEventListener("click", function () {
    count += 1;
    num_c.innerText = count;
});

document.body.appendChild(Counter1);
document.body.appendChild(Counter2);
document.body.appendChild(Counter3);
document.body.appendChild(num_c);

