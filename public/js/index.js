const weatherForm = document.querySelector("form");
const locationMessage = document.querySelector("#location");
const forecast = document.querySelector("#forecast");
const error = document.querySelector("#errorMessage");
const input = document.querySelector("input");
input.value = "";

const getWeather = (address) => {
  fetch(`http://localhost:3000/weather?address=${address}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        error.textContent = data.error;
      } else {
        locationMessage.textContent = data.location;
        forecast.textContent = data.forecast;
      }
    });
  });
};

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  locationMessage.textContent = "Loading...";
  forecast.textContent = "";
  error.textContent = "";

  if (!input.value) return console.log("Please provide a location");
  getWeather(input.value);
});
