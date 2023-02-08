let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = days[now.getDay()];
let date = [now.getDate()];
let hours = [now.getHours()];
let minutes = [now.getMinutes()];
let p = document.querySelector("p.sun");
p.innerHTML = `${day} ${date}, ${hours}:${minutes}`;

function showCity(event) {
  event.preventDefault();

  let city = document.querySelector("#city");
  let searchInput = document.querySelector("#search-form");
  if (searchInput.value) {
    city.innerHTML = searchInput.value;
  }
}

let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", showCity);

function showFahrenheit(event) {
  event.preventDefault();
  let numberElement = document.querySelector("#number");
  numberElement.innerHTML = 35;
}
function showCelcius(event) {
  event.preventDefault();
  let numberElement = document.querySelector("#number");
  numberElement.innerHTML = 2;
}
let fahrenheitType = document.querySelector("#fahrenheit");
fahrenheitType.addEventListener("click", showFahrenheit);

let celciusType = document.querySelector("#celcius");
celciusType.addEventListener("click", showCelcius);
