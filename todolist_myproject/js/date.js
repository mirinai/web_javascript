const date = new Date();

const date_tag = document.querySelector(".date");

// 날짜를 문자열로 바꾸기
const dateString = date.toString(); // EX) Sun Jun 09 2024 14:08:10 GMT+0900 (한국 표준시)
const date_list = dateString.split(" ");

const year = date_list[3];
const month = date_list[1];
const day = date_list[2];

date_tag.innerText = String(day) + " " + String(month) + " " + String(year);

const time = new Date();

function updateTime() {
  const liveTime = new Date();
  const time = document.querySelector(".time");

  // 시간을 2자리로 맞추기 위해 padStart를 사용
  const hours = String(liveTime.getHours()).padStart(2, "0");
  const minutes = String(liveTime.getMinutes()).padStart(2, "0");
  const seconds = String(liveTime.getSeconds()).padStart(2, "0");

  time.innerHTML = hours + ":" + minutes + ":" + seconds;
}
setInterval(updateTime, 100);
