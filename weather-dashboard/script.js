async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = sessionStorage.getItem("weatherApiKey") || prompt("Enter your OpenWeatherMap API key:");
  
  if (!sessionStorage.getItem("weatherApiKey")) {
    sessionStorage.setItem("weatherApiKey", apiKey);
  }

  if (!city) {
    alert("Please enter a city.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const weatherHTML = `
      <h2>Weather in ${data.name}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
    document.getElementById("weatherDisplay").innerHTML = weatherHTML;
  } catch (error) {
    document.getElementById("weatherDisplay").innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}
