import { data } from "./data.js";

//1. timeZone이 europe인 데이터 가운데에서
// -> phone, fullName, ipAdress
// const privateInfo = data.map((innerArray) => {
//   innerArray.forEach((v) => {});
// });
const one = data
  .filter(({ timeZone }) => timeZone.includes("Europe"))
  .map(({ phone, fullName, ipAddress }) => ({ phone, fullName, ipAddress }));

console.log(one);
//2. id가 짝수인 데이터 가운데에서
// timeZone[대륙]이랑 phone[-빼고] money[$빼고]를 가져오기
const even_id = data.filter(({ id }) => id % 2 === 0);
const two = even_id.map(({ timeZone, phone, money }) => {
  return {
    timeZone: timeZone.split("/")[0],
    phone: phone.replaceAll("-", ""),
    money: money.replace("$", ""),
  };
});
console.log(two);

//3. America of Asia 데이터 가운데에서
// ipAddress[.을 지우고] fullName 앞이름[First name] creditCardType을 creditcard로 바꾸고 가져오기

const three = data
  .filter(
    ({ timeZone }) => timeZone.includes("America") || timeZone.includes("Amsia")
  )
  .map(({ ipAddress, fullName, creditCardType: creditcard }) => {
    return {
      ipAddress: ipAddress.replaceAll(".", ""),
      fullName: fullName.split(" ")[0],
      creditcard,
    };
  });
console.log(three);
//4. 달러가 25000~50000사이 데이터와 timeZone이 africa인 데이터 가운데에서
//timeZone[수도만 가져오기] fullName 뒤이름[Family name]가져오기

const four = data
  .filter(({ money, timeZone }) => {
    const numberMoney = Number(money.replace("$", ""));
    const isValidMoney = 25000 <= numberMoney && numberMoney <= 50000;
    const isValidTimeZone = timeZone.includes("Africa");
    return isValidMoney && isValidTimeZone;
  })
  .map(({ timeZone, fullName }) => ({
    timeZone: timeZone.split("/")[1],
    fullName: fullName.split(" ")[1],
  }));
console.log(four);

//5. ipAddress [180,101,53,217] 뒷자리 세개의 수의 합이 15이하인 것들의 데이터가운데에서
// timeZone, fullName, money가져오기
const five = data
  .filter(({ ipAddress }) => {
    const ipArr = [...ipAddress];
    const lastIndex = ipArr.findLastIndex((v) => v === ".");
    const sum = ipArr
      .slice(lastIndex + 1, ipArr.length)
      .map((v) => Number(v))
      .reduce((a, c) => a + c);
    return sum > 15;
  })
  .map(({ timeZone, fullName, money }) => ({ timeZone, fullName, money }));

console.log(five);
