const API_KEY = "2fea213c4743173c612a790e294fa5f3";
const lat = 37.48981067893668; // 부평역의 위도
const lon = 126.7240877814542; // 부평역의 경도
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`; // 여기서 API_KEY를 사용

const weatherData = fetch(URL);

weatherData
  .then((v) => v.json())
  .then((v) => v.weather[0].main)
  .then((v) => {
    const weather = document.querySelector(".weather");
    weather.insertAdjacentHTML("beforeend", `<p>부평역 날씨 : ${v}</p>`);
  });
