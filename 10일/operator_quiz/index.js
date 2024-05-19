//프롬프트에 아무것도 넣지 않으면 아무것도 입력 안함이라고 출력해야함
// 1.영어점수를 입력받고 60점이상이면 합격이고 아니면 불합격

const englishScore = prompt("영어점수 입력");
const ienglishScore = parseInt(englishScore);

const check = ienglishScore >= 60 ? "합격" : "불합격";

console.log(check);

// 2. 정수를 입력받고, 양수인지 음수인지 알려주기
const num = prompt("정수입력");
const isNum = Number(num) >= 0 ? "plus" : "minus";
console.log(isNum);

// 3. 두 정수를 입력 받고, 큰 수를 출력하기
const [num1, num2] = prompt("두 정수 입력(띄어쓰기)").split(" ").map(Number);
const 큰수 = num1 >= num2 ? num1 : num2;
console.log("더 큰수는 : " + 큰수);
/*
const [num1, num2] = prompt("두 정수 입력(띄어쓰기)").split(" ").map(num => parseInt(num, 10));
const 큰수 = num1 >= num2 ? num1 : num2;
console.log(큰수);

parseInt는 기본적으로 10진수로 인식함
*/
// 4. 정수를 입력 받고, 절대값으로 바꾸기
const inum3 = Number(prompt("정수 입력하기"));
const isPlus = inum3 >= 0 ? inum3 : -inum3;
console.log("절대값 :" + isPlus);

// 5. 정수를 입력 받고, 홀수인지 짝수인지 알려주기
const inum4 = Number(prompt("정수입력"));
const isEven = inum4 % 2 === 0 ? "even" : "odd";
console.log(`${inum4}은 ${isEven}`);
