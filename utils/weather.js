//primim o valoare reprenztand m/s si returnam km/h
function windToKmPerHour(meterPerSec) {
  return (meterPerSec * 3600) / 1000;
}

// pe baza iconitei, generam link-ul acesteia.
function getWeatherIcon(iconCode) {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
