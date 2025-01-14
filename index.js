const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");
const scrollButton = document.getElementById('scroll-up-container');

//daca nu avem oras salvat in localStorage, salvam by default Bucuresti
if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

//actualizam orasul afisat pe ecran
currentCityTag.innerHTML = currentCity;

displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);
console.log(currentCity, 'index')

document.querySelector(".year").innerHTML += new Date().getFullYear();

// scroll to top button functionality
document.addEventListener('scroll', () => {
  const halfViewportHeight = window.innerHeight / 2;

  if (window.scrollY > halfViewportHeight) {
      scrollButton.style.display = 'block'; 
  } else {
      scrollButton.style.display = 'none'; 
  }
});

scrollButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})
