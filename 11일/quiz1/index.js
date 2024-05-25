// const teduri = document.createElement("button");

// teduri.innerText = "테두리 직각";

// const area = document.createElement("button");
// area.innerText = "늘리기";
// const color = document.createElement("button");
// color.innerText = "빨간색";

// teduri.addEventListener("click", () => {
//   if (teduri.innerText === "테두리 직각") {
//     const element = document.querySelector(".borderRadiusZero");
//     element.remove("borderRadiusZero");
//     element.addEventListener("borderRadiusTen");
//     teduri.innerText = "테두리 몰?루";
//   } else {
//     const element = document.querySelector(".borderRadiusTen");
//     element.remove("borderRadiusTen");
//     element.addEventListener("borderRadiusZero");
//     teduri.innerText = "테두리 직각";
//   }
// });
// area.addEventListener("click", function () {
//   if (area.innerText === "늘리기") {
//     const element = document.querySelector(".medium");
//     element.remove("medium");
//     element.add("large");
//     area.innerText = "줄이기";
//   } else {
//     const element = document.querySelector(".large");
//     element.remove("large");
//     element.add("medium");
//     area.innerText = "늘리기";
//   }
// });

// color.addEventListener("click", function () {
//   if (color.innerText === "빨간색") {
//     const element = document.querySelector(".red");
//     element.remove("red");
//     element.add("blue");
//     area.innerText = "파란색";
//   } else {
//     const element = document.querySelector(".blue");
//     element.remove("blue");
//     element.add("red");
//     area.innerText = "빨간색";
//   }
// });

// document.body.appendChild(teduri);
// document.body.appendChild(area);
// document.body.appendChild(color);
const box = document.querySelector(".box");
const colorBtn = document.querySelector(`.color`);
const sizeBtn = document.querySelector(`.size`);
const radiusBtn = document.querySelector(`.radius`);

colorBtn.addEventListener("click", function () {
  colorBtn.innerText = colorBtn.innerText === "파란색" ? "빨간색" : "파란색";
  box.classList.toggle("red");
  box.classList.toggle("blue");
});
sizeBtn.addEventListener("click", function () {
  sizeBtn.innerText = sizeBtn.innerText === "늘리기" ? "줄이기" : "늘리기";
  box.classList.toggle("medium");
  box.classList.toggle("large");
});
radiusBtn.addEventListener("click", function () {
  radiusBtn.innerText = radiusBtn.innerText === "둥글게" ? "직각" : "둥글게";
  box.classList.toggle("borderRadiusZero");
  box.classList.toggle("borderRadiusTen");
});
