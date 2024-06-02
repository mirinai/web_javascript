// web - 데이터 가져오기, 지도확인, 시간초 재기,...
// 동기 프로그래밍 코드 <-> 비동기 프로그래밍 코드
// console.log("1");
// console.log("2");
// setTimeout((v) => {
//   console.log("3");
// }, 1000); //1000ms 뒤에

//1. setTimeout, setInterval
// setTimeout(() => {
//   console.log("hi");
// }, 1000); //1초 뒤에 hi

// setInterval(() => {
//   console.log("hihi");
// }, 1000); //1초마다 실행

// 2024 06 02 15:23:03 -> 타이머 만들기

// const launchdate = new Date("June 2, 2024, 15:23:03");
// const launchdate = new Date("2024 06 02 15:23:03");
// const futuredate = new Date();
// futuredate.setDate(launchdate.getDate());

// console.log(futuredate);

// const h1 = document.createElement("h1");

// h1.innerText = date.toLocaleString();
// document.body.appendChild(h1);

setInterval(() => {
  const date = new Date(); //여러번 만들어짐
  const dateTag = document.querySelector(".date");
  // console.log(dateTag);
  dateTag.innerText = date.toLocaleString();
}, 1000);
