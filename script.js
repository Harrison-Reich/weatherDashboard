// daily weather variable
let weather = {
  apiKey: "86296f2ec0b9ce69883449dd897f8071",
  getWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=" +
      this.apiKey
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => this.showWeather(data));
  },
  // displaying weather data and setting parameters
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
    document.getElementById("wind").innerText = "Wind speed: " + speed + " mph";
  },
  search: function () {
    this.getWeather(document.getElementById("search-bar").value);
  },
};
weekly weather variable
let weeklyForcast = {
  apiKey: "db7b41c9a7b9d12ad92577b7245ce042",
  getWeekly: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + this.apiKey
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => this.showWeekly(data));
  },
// displaying weekly weather variable and setting parameters
  showWeekly: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.getElementById("city").innerText = "Weather in " + name;
    document.getElementById("icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.getElementById("description").innerText = description;
    document.getElementById("temp").innerText = temp + "°F";
    document.getElementById("humidity").innerText = "Humidity: " + humidity + "%";
    document.getElementById("wind").innerText = "Wind speed: " + speed + " mph";
  },
  search: function () {
    this.getWeekly(document.getElementById("search-bar").value);
  },
};

// calling function on click
document.getElementById("searchButton").addEventListener("click", function () {
  weather.search();
});
document.getElementById("searchButton").addEventListener("click", function () {
  weeklyForcast.search();
});

// set current page weather
weather.getWeather("Costa Mesa");
weeklyForcast.getWeekly("Costa Mesa");
