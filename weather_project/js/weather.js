const API_KEY = "2fea213c4743173c612a790e294fa5f3";

const data = [
  { cityName: "korea", lat: 37.51, lon: 130.39 },
  { cityName: "japan", lat: 26.21, lon: 127.68 },
];

const weatherPhoto = {
  Clear: "../photo/오두막.jpg",
  Clouds: "./photo/cloud.webp",
  Rain: "./photo/rain.jpg",
};

data.forEach(({ cityName, lat, lon }) => {
  const btn = document.querySelector(`.${cityName}`);
  btn.addEventListener("click", function () {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const weatherAPI = fetch(URL);
    weatherAPI
      .then((value) => value.json())
      .then(({ main, weather }) => ({ main, weather }))
      .then((value) => {
        const mainTag = document.querySelector("main");
        mainTag.style.backgroundImage = `url(${
          weatherPhoto[value.weather[0].main]
        })`;
        const weatherTag = document.querySelector(".weather_info");
        weatherTag.innerText = `${cityName}' temp is ${value.weather[0].main}`;
        const tempTag = document.querySelector(".temp_info");
        tempTag.innerText = `${cityName}' temp is ${value.main.temp}`;
        // console.log(value);
        // const weather = document.querySelector(`.weather`);
        // weather.innerText = `${cityName} 현재 날씨 : ${value}`;
      });
  });
});
