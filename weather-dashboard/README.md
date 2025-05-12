# Weather Dashboard

A simple, interactive front-end web app that shows real-time weather data using the OpenWeatherMap API.

## Features

- Enter any city name to view the current weather
- Displays temperature, weather condition, humidity, and wind speed
- Responsive and styled with CSS
- Uses JavaScript to fetch live data
- API key is securely handled (not exposed in code)

---

## How to Use This App

1. Clone or download the repo to your computer.
2. Open `index.html` in a web browser.
3. When prompted, enter your OpenWeatherMap API key.
4. Enter a city name to see live weather details.

---

##  Getting Your API Key

To use this app, you need a free API key from OpenWeatherMap:

1. Go to https://openweathermap.org/api
2. Sign up for an account (it’s free)
3. Once signed in, go to your profile > "API Keys"
4. Copy your default API key

The app will prompt you for the key and store it in session (not saved in code).

---

## Security

- The API key is never saved in the source code.
- It is stored using `sessionStorage` only while the page is open.
- Make sure you **do not share your API key** or publish it to public repos.


---


##  Repository Info

- This app was created for a class assignment.
- All code is written in vanilla HTML, CSS, and JavaScript.
- You may reuse and remix with credit.
