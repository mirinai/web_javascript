import { data } from "./data.js";

//1. id가 홀수이면서 성별이 여자인 데이터에서
//language, date_time[월], user_name 가져오기
const data1 = data
  .filter(({ id, gender }) => !(id % 2) && gender === "Female")
  .map(({ language, date_time, user_name }) => {
    const month = date_time.split("/")[0];
    return {
      language: language,
      date_time: month,
      user_name: user_name,
    };
  });
console.log(data1);
//2. user_name이 알파벳 k 또는 z가 들어있고 성별이 남자인 데이터에서
// date_time[해], user_name, user_name의 length 가져오기

const data2 = data
  .filter(
    ({ user_name, gender }) =>
      (user_name.includes("k") || user_name.includes("z")) && gender === "Male"
  )
  .map(({ date_time, user_name }) => {
    const year = date_time.split("/")[2];
    const user_name_length = user_name.length;
    return {
      date_time: year,
      user_name,
      user_name_length,
    };
  });
console.log(data2);
