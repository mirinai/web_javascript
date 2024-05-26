const arr = [1, 3, 5, 7, 9];
const fruits = [
  "apple",
  "banana",
  "orange",
  "kiwi",
  "tomato",
  "grape",
  "strawberry",
];
// forEach, every, some, map, filter

//map(바꾸기)

const a1 = arr.map((v) => v * 10);
console.log(a1);
const a2 = arr.map((v) => v ** v);
console.log(a2);

// a3 6보다 작으면 10 더하고 아니면 10 곱해주기

const a3 = arr.map((v) => (v < 6 ? v + 10 : v * 10));
console.log(a3);

//even : 2times, odd : 3times
const a4 = arr.map((v, i) => (i % 2 === 0 ? v * 2 : v * 3));
//v : element
// i : index

//알파벳 a가 있으면 대문자로 바꾸고 아니면 단어의 길이로 바꾸기
const a5 = fruits.map((v) => (v.includes("a") ? v.toUpperCase() : v.length));
console.log(a5);

// filter
const b1 = arr.filter((v) => v > 5);
console.log(b1); // 7, 9

// const b2 = arr.filter((v, i) => i % 2 === 0);
const b2 = arr.filter((v, i) => !(i % 2));
console.log(b2);

//과일에서 6글자 이상인 애들만 걸러주고 대문자로 만들기
const b3 = fruits.filter((v) => v.length >= 6).map((v) => v.toUpperCase());
console.log(b3);

//6글자만 걸러주고 모든 요소들이 a나 o를 포함하는지
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];
// const b4 = fruits
//   .filter((v) => v.length === 6)
//   .every((v) => v.includes("a") || v.includes("o"));
const b4 = fruits
  .filter((v) => v.length === 6)
  .every((v) => alphabet.some((x) => v.includes(x)));
console.log(b4);

//String(), Number(), Boolean()

const c = Array(10); //
console.log(c);

const c1 = Array(10).fill(0);

console.log(c1);

const c2 = Array(10)
  .fill(0)
  .map((v, i) => i);

// 1 ~ 100 홀수만
const c3 = Array(101)
  .fill(0)
  .map((v, i) => i)
  .filter((v) => v % 2 === 1);
console.log(c3);

// str -> array

//1. split()
const d = "americano".split("");

//2. Array.from
const d1 = Array.from("americano");

//3.
const d2 = [..."americano"];

const d3 = [..."americano"].filter((v) => v !== "a");
console.log(d3);

// array -> str

const e = ["coffee", "cookie"].join("");
const e1 = ["coffee", "cookie"].toString();

// function toSmallBig(str) {
//     return str
//       .split('')
//       .map((v) => {
//         const charCode = v.charCodeAt();
//         if (charCode >= 65 && charCode <= 90) {
//           // 대문자 -> 소문자
//           return v.toLowerCase();
//         } else if (charCode >= 97 && charCode <= 122) {
//           // 소문자 -> 대문자
//           return v.toUpperCase();
//         } else {
//           // 그 외의 문자
//           return v;
//         }
//       })
//       .join('');
//   }
const change = (word) =>
  [...word]
    .map((v) => (v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
    .join("");
console.log(change("cccCCC"));
console.log(change("abCdEfghIJ"));

// n k result
// 10 3 [3,6,9]
// 15 5 [5,10,15]
// 12 4 [4,8,12]
// function multiples(n, k) {
//   return Array.from({ length: Math.floor(n / k) }, (_, i) => (i + 1) * k);
// }

// Array(10)
//   .fill(0)
//   .map((v, i) => i + 1)
//   .filter((v) => v % 3 === 0);
// Array(15)
//   .fill(0)
//   .map((v, i) => i + 1)
//   .filter((v) => v % 5 === 0);
// Array(12)
//   .fill(0)
//   .map((v, i) => i + 1)
//   .filter((v) => v % 4 === 0);
const makeArr = (n, k) =>
  Array(n)
    .fill(0)
    .map((v, i) => i + 1)
    .filter((v) => v % k === 0);

const arr1 = [1, 2, 3, 4, 5];

arr1.reduce((acc, curr) => {
  console.log(`acc : ${acc}, curr : ${curr}`);
  return acc + curr; // => acc
});
/*
acc : 1, curr : 2
acc : 3, curr : 3
acc : 6, curr : 4
acc : 10, curr : 5
*/
const arr2 = Array(100)
  .fill(0)
  .map((v, i) => i + 1);
const accumulation = arr2.reduce((acc, curr) => acc + curr);
console.log(accumulation);

const fruits1 = ["apple", "banana", "orange", "kiwi", "tomato"];

// const str1 = fruits1.map((v) =>
//   v.includes("a") ||
//   v.includes("e") ||
//   v.includes("i") ||
//   v.includes("o") ||
//   v.includes("u")
//     ? ""
//     : v
// );
const result = fruits1
  .map((v) =>
    [...v].filter((v1) => ![..."aeiou"].some((v2) => v2 === v1)).join("")
  )
  .reduce((acc, cur) => acc + cur);

console.log(result);

//v.includes('a') ||v.includes('e') ||v.includes('i') ||v.includes('o')||v.includes('u')
