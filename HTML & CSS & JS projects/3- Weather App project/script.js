const apikey = "325bef11804965e987f40a9a93bb5d08";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

let searchInput = document.getElementById("search-input");
let searchBtn = document.getElementById("search-btn");

async function checkWeather(city) {
  const response = await fetch(apiUrl + `&q=${city}&appid=${apikey}`);
  let data = await response.json();

  console.log(data);

  if (response.status == 404) {
    let inner = `
      <p class="not-valid">This city's name is not valid</p>
    `;
    document.querySelector(".container").innerHTML = inner;
  } else {
    let inner = `
    <div class="temperature">
      <img src="images/${data.weather[0].main}.png" alt="The weather image">
      <p>${data.main.temp}°C</p>
      <h2>${data.name}, ${data.sys.country}</h2>
    </div>

    <div class="content">
      <div class="humidity">
        <img src="images/Humidity.png" alt="The humidity image">
        <div class="col">
          <p>${data.main.humidity}%</p>
          <h4>Humidity</h4>
        </div>
      </div>

      <div class="wind-speed">
        <img src="images/Wind.png" alt="The wind speed image">
        <div class="col">
          <p>${data.wind.speed} Km/h</p>
          <h4>Wind Speed</h4>
        </div>
      </div>
    </div>
  `;
    document.querySelector(".container").innerHTML = inner;
  }
}

searchBtn.addEventListener("click", () => {
  let citySearch = searchInput.value;

  checkWeather(citySearch);
  searchInput.value = "";
});
