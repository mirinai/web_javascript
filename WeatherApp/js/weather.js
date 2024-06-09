const APIkey = "012bf6a0bf90655706e10c421c8db7b8";
const data = [
  { cityName: "korea", lat: 37.51, lon: 126.72 },
  { cityName: "japan", lat: 33.59, lon: 130.4 },
  { cityName: "china", lat: 36.06, lon: 120.3 },
];

const weatherPhoto = {
  Clear: "/Day08/weather/photo/clear.jpg",
  Clouds: "/Day08/weather/photo/cloudy.jpg",
  Rain: "/Day08/weather/photo/rain.jpg",
};

data.forEach(({ cityName, lat, lon }) => {
  const btn = document.querySelector(`.${cityName}`);
  btn.addEventListener("click", () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
    const weatherAPI = fetch(URL);
    weatherAPI
      .then((value) => value.json())
      .then(({ main, weather }) => ({ main, weather }))
      .then((value) => {
        const mainTag = document.querySelector("main");
        mainTag.style.backgroundImage = `url('${
          weatherPhoto[value.weather[0].main]
        }')`;

        const weatherTag = document.querySelector(".weather__info");
        weatherTag.innerText = `${cityName} is ${value.weather[0].main}`;
        const tempTag = document.querySelector(".temp__info");
        tempTag.innerText = `${cityName}'s temp is ${value.main.temp}`;
      });
  });
});
