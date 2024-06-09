const API_KEY = "2fea213c4743173c612a790e294fa5f3";

const data = [
  { cityName: "bupyeong", lat: 37.51, lon: 126.72 },
  { cityName: "fukuoka", lat: 37.51, lon: 126.72 },
  { cityName: "okinawa", lat: 37.51, lon: 126.72 },
  { cityName: "warshawa", lat: 37.51, lon: 126.72 },
  { cityName: "sydney", lat: 37.51, lon: 126.72 },
];

data.forEach(({ cityName, lat, lon }) => {
  const btn = document.querySelector(`.${cityName}`);
  btn.addEventListener("click", function () {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const weatherAPI = fetch(URL);
    weatherAPI
      .then((value) => value.json())
      .then((value) => value.weather[0].main)
      .then((value) => {
        const weather = document.querySelector(`.weather`);
        weather.innerText = `${cityName} 현재 날씨 : ${value}`;
      });
  });
});

// weatherData
//   .then((v) => v.json())
//   .then((v) => v.weather[0].main)
//   .then((v) => {
//     const weather = document.querySelector(".weather");
//     weather.innerText = `부평역 날씨 : ${v}`;
//   });

// for (let i = 1; i <= 5; i++) {
//   const btn = document.querySelector(`.btn${i}`);
//   weatherFunc(btn)
// }

// const weatherFunc = (btn) => {

// };
