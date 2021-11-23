let weather = {
  apiKey: "86296f2ec0b9ce69883449dd897f8071",
  getWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      this.apiKey
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => this.showWeather(data));
  },
  showWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.getElementById("city").innerText = "Weather in " + name;
    document.getElementById("icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.getElementById("description").innerText = description;
    document.getElementById("temp").innerText = temp + "°F";
    document.getElementById("humidity").innerText = "Humidity: " + humidity + "%";
    document.getElementById("wind").innerText = "Wind speed: " + speed + " km/h";
  },
  search: function () {
    this.getWeather(document.getElementById("search-bar").value);
  },
};

document.getElementById("searchButton").addEventListener("click", function () {
  weather.search();
});

document.getElementById("search-bar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
});

weather.getWeather("");