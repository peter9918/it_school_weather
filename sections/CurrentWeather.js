//declararea functiei pt afisarea vremii curente
//apelul se face in alte fisiere
function displayCurrentWeather(city) {
  //generam link-ul serverului, pe baza orasului
  const currentWeatherEndpoint = getCurrentWeatherEndpoint(city);
  console.log(city, 'current')

  fetch(currentWeatherEndpoint)
    .then((response) => response.json())
    .then((data) => {
      //extragem proprietatile care ne intereseaza
      const { name, dt, main, weather, wind } = data;

      const day = getDayOfTheWeek(dt);
      const hours = getHour(dt);

      const temperature = Math.round(main.temp);
      const realFeel = Math.round(main.feels_like);
      // atentie ! weather este un array, cu un singur element.
      const weatherDescription = weather[0].description;
      //getWeatherIcon si windToKmPerHour sunt functii create de noi, in utils/weather.
      const weatherIcon = getWeatherIcon(weather[0].icon);
      const windSpeed = Math.round(windToKmPerHour(wind.speed));
      // afisam pe ecran informatiile extrase din API

      let currentWeatherContainer = document.querySelector(".current-weather");
      currentWeatherContainer.innerHTML = `
     <div class="px-3">
    <div class="fs-2 mb-2"><strong>${name}</strong></div>
    <div class="fs-4"><strong>${day}</strong>, ${hours}</div>
      <div class="d-flex align-items-center justify-content-center">
    <strong class="fs-1">${temperature}°C</strong>
    <img src="${weatherIcon}" />
      </div>
     </div> 
     <div class="px-3">
     <p> Real feel:<strong>${realFeel}°C</strong></p>
     <p class="text-capitalize">${weatherDescription}</p>
     <p> Vânt:<strong>${windSpeed} km/h</strong></p>
     </div>
     `;
    });
}
