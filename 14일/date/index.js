// const a = String(adf)
// const b = Number(1234)
const a = new Date(); //date type
//콘솔로그 - 2024 06 02 현재시간
console.log(
  a.getFullYear() +
    " " +
    a.getMonth() +
    " " +
    a.getDay() +
    " " +
    a.getHours() +
    " " +
    a.getMinutes() +
    " " +
    a.getSeconds()
);
// console.log(a.getFullYear);

const test = new Date();
test.getDate();
console.log(`${a.getFullYear()}`);
console.log(`${a.toLocaleString()}`);
