const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");
const arad = document.querySelector(".dropdown-menu .arad");
const sibiu = document.querySelector(".dropdown-menu .sibiu");

function updateCurrentCity(city) {
  //selectam spatiul de pe ecran afisarii orasului curent si ii adaugam continut
  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

function updateWeather(city) {
  //actualizam orasul din localStorage
  localStorage.setItem("city", city);
  //actualizam orasul afisat pe ecran
  updateCurrentCity(city);
  //reafisam vremea curenta, pt noul oras
  displayCurrentWeather(city);
  displayWeatherForecast(city);
}

//adaugam event listeneri pe butoanele din dropdown
bucharest.addEventListener("click", function () {
  updateWeather("București");
});
timisoara.addEventListener("click", function () {
  updateWeather("Timișoara");
});
oradea.addEventListener("click", function () {
  updateWeather("Oradea");
});
arad.addEventListener("click", function () {
  updateWeather("Arad");
});
sibiu.addEventListener("click", function () {
  updateWeather("Sibiu");
});
