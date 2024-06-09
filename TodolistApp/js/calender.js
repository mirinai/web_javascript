// .ymd 클래스를 가진 요소를 선택합니다.
const ymd = document.querySelector(".ymd");

// 현재 날짜와 시간을 로컬 문자열로 변환한 후 공백을 기준으로 분리하여 year, month, date에 할당합니다.
const [year, month, date] = new Date().toLocaleString().split(" ");
ymd.innerText = `${year} ${month} ${date}`; // year, month, date를 .ymd 요소에 텍스트로 설정합니다.

// 1초마다 현재 시간을 업데이트하는 함수입니다.
setInterval(() => {
  // 현재 날짜와 시간을 로컬 문자열로 변환한 후 공백을 기준으로 분리한 배열을 역순으로 뒤집어 첫 번째 요소를 time에 할당합니다.
  const [time] = new Date().toLocaleString().split(" ").reverse(); //거꾸로 리스트에 넣으면서 리스트 선언
  const timeTag = document.querySelector(".time"); // .time 클래스를 가진 요소를 선택합니다.
  timeTag.innerText = time; // time을 .time 요소에 텍스트로 설정합니다.
}, 1000);

// 요일을 숫자에서 한글로 번역하는 객체입니다.
const translation = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일",
};

// 현재 요일을 숫자로 가져와 translation 객체를 사용해 한글로 변환합니다.
const day = translation[new Date().getDay()];
const dayTag = document.querySelector(".day"); // .day 클래스를 가진 요소를 선택합니다.
dayTag.innerText = day; // 변환된 요일을 .day 요소에 텍스트로 설정합니다.
/*
현재 날짜 및 시간 초기화: new Date().toLocaleString()을 사용하여 현재 날짜와 시간을 로컬 문자열 형식으로 가져옵니다. 이 문자열을 split(" ")으로 공백 기준으로 분리하여 연도, 월, 날짜를 year, month, date 변수에 할당하고 이를 .ymd 요소에 표시합니다.

1초마다 현재 시간 업데이트: setInterval을 사용하여 1초마다 현재 시간을 갱신합니다. new Date().toLocaleString()을 사용해 현재 시간을 로컬 문자열 형식으로 가져온 후, 공백 기준으로 분리된 배열을 reverse()로 뒤집어 첫 번째 요소(시간 부분)를 time 변수에 할당하고 이를 .time 요소에 표시합니다.

요일 번역: 현재 요일을 숫자로 가져와 translation 객체를 사용해 한글 요일로 변환합니다. 변환된 요일을 .day 요소에 표시합니다.


*/
