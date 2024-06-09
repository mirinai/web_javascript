const API_KEY = "2fea213c4743173c612a790e294fa5f3";

const data = [
  { cityName: "fukuoka", lat: 33.59, lon: 130.39 },
  { cityName: "okinawa", lat: 26.21, lon: 127.68 },
  { cityName: "sydney", lat: 37.51, lon: 126.72 },
  { cityName: "london", lat: 37.51, lon: 126.72 },
];

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
