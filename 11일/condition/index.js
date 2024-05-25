// condition[조건]

// const a = Number(prompt("숫자입력 : "));
// if (a > 0) {
//   alert("0보다 큼");
// } else if (a === 0) {
//   alert("0임");
// } else {
//   alert("0보다 작음");
// }

// prompt로 영어점수를 입력받고

//90점 이상은 'a'
//80점 이상은 'b'
//70점 이상은 'c'
//60점 이상능 'd'
// 그 밖에는 '나락'

// const en_score = Number(window.prompt("점수넣기"));

// if (en_score >= 90) {
//   alert("a");
// } else if (en_score >= 80) {
//   alert("b");
// } else if (en_score >= 70) {
//   alert("c");
// } else if (en_score >= 60) {
//   alert("d");
// } else {
//   alert("나락");
// }

//유저에게 비밀번호 설정을 물어보고

//1. 비밀번호 길이가 8글자 이상이고 //비밀번호가 짧음
//2. 특수문자 !,#,$가 하나 들어가야하고 //특수문자!#$가 없음
//3. I로 시작하고 T로 끝나야 하고 //I와 T를 시작과 끝에 넣어야 함
//위의 조건을 모두 통과하면 비밀번호 설정끝
// alert(
//   "비밀번호 길이가 8글자 이상\n특수문자 !,#,$가 하나 들어가야하고\nI로 시작하고 T로 끝나야 한다"
// );
// const password = window.prompt("set the password");

// if (password.length < 8) {
//   alert("비밀번호가 짧음");
// } else {
//   if (
//     password.includes("!") ||
//     password.includes("#") ||
//     password.includes("$")
//   ) {
//     if (password.startsWith("I") && password.endsWith("T")) {
//       prompt("비밀번호 설정끝");
//     } else {
//       alert("I와 T를 시작과 끝에 넣어야 함");
//     }
//   } else {
//     alert("특수문자!#$가 없음");
//   }
// }

const password = prompt("비밀번호 입력");
const isLenOver8 = password.length >= 8;
// const hasSpecialChar =
//   password.includes("!") || password.includes("#") || password.includes("$");
const hasSpecialChar = ["!", "#", "$"].some((v) => {
  return password.includes(v);
});
const isValidIT = password.startsWith("I") && password.endsWith("T");

if (!isLenOver8) {
  alert("비밀번호가 짧음");
} else if (!hasSpecialChar) {
  alert("특수문자!#$가 없음");
} else if (!isValidIT) {
  alert("I와 T를 시작과 끝에 넣어야 함");
} else {
  alert("비밀번호 설정끝");
}

const special = ["!", "#", "$"];
special.some((v) => {
  return v == "#"; //true
  //retrun v == '%' //false
});

special.every(() => {
  return v == "!"; //false
});
special.every(() => {
  return v !== "@"; //true
});

const num = [1, 2, 3, 4, 5];

num.some((v) => {
  return v > 4; // true
});
num.some((v) => {
  return v % 2 === 1; // true
});
num.every((v) => {
  return v < 6; // true
});
