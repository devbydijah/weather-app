function yourCityWeather() {
  let yourCity = prompt("What city do you live in?");
  let currentTemprature = prompt("What temperature is it?");

  let h1 = document.querySelector("h1");

  if (yourCity && currentTemprature) {
    if (currentTemprature <= 10) {
      h1.innerHTML =
        "🥶<br>Currently " +
        currentTemprature +
        "\u00B0" +
        "C" +
        " in " +
        yourCity;
    } else {
      h1.innerHTML =
        "🌞<br>Currently " +
        currentTemprature +
        "\u00B0" +
        "C" +
        " in " +
        yourCity;
    }
  }
}

let changeCityButton = document.querySelector("button");
changeCityButton.addEventListener("click", yourCityWeather);
