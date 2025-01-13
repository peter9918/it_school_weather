const API_KEY = "e23fce95ed7615610ee7674a2e5edd41";

//construim linkurile (endpointurile) serverlor de la care vom primi date
function getCurrentWeatherEndpoint(city) {
  //intotdeauna cand folosim un API putem obtine informatii extra prin query params
  //lang=ro => rezultatele vin in limba romana
  //units=metric = unitatile vor fi in grade celsius
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}
