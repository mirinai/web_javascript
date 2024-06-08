// 비동기
//Array, Object, Element, Date

//Promise : 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과값을 나타냄
// Promise에서는 상태가 3가지 : 기다림[pending],[Fulfilled], 실패[Rejectied]

// Array(10)
// const a = document.createElement("h1")

// const a = new Promise((success, fail) => {
//   success("topoki");
// });
// const a = new Promise((success, fail) => {
//   setTimeout(() => {
//     success("topoki");
//   }, 3000);
// });
// console.log(a);

// const a = new Promise((success, fail) => {
//   //백엔드의 데이터를 가져오는 코드
//   setTimeout(() => {
//     success("탕후루");
//   }, 3000);
// });
// // const b = new Promise((success, fail) => {
// //   fail("사탕");
// // });
// // console.log(a);
// // console.log(b);
// console.log(a); //<pending>
// a.then((v) => console.log(v)); //탕후루

// const b = new Promise((success, fail) => {
//   setTimeout(() => {
//     success({ name: "americano", price: "3000" });
//   }, 1000);
// });
// b.then(({ name }) => {
//   const nm = name.toUpperCase(); //name을 대문자로 만들고 되돌리기
//   return nm;
// }).then(({ price }) => {
//   //   console.log(v); // price를 두배해서 되돌리기
//   const pr = price * 2;
//   return pr;
// });
// //콘솔로그 찍기
// console.log(b);
// b.then((v) => console.log(b));
const b = new Promise((success, fail) => {
  setTimeout(() => {
    success({ name: "americano", price: "3000" });
  }, 1000);
});

// b.then(({ name, price }) => {
//   const nm = name.toUpperCase(); // name을 대문자로 만들기
//   const pr = price * 2; // price를 두 배로 만들기
//   return { nm, pr };
// }).then(({ nm, pr }) => {
//   console.log(`Name: ${nm}, Price: ${pr}`); // Name과 Price 출력
// });

b.then((v) => {
  v.name = v.name.toUpperCase();
  v.price = v.price * 2;
  return v;
}).then((v) => console.log(v));

// 콘솔로그 찍기
// console.log(b); //{<pending>}
// b.then((v) => console.log(v)); // Promise가 Fulfilled 상태로 변경되었을 때의 값을 출력
