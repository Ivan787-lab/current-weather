const $ = require('jquery')
export default function outputWeather(cityName) {
    const requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=${localStorage.getItem("lang")}&units=metric&appid=359455a64010ae0b28935b25c2eb104b`


    $.ajax({
        url: requestUrl,
        type: 'GET',
        success: function (json) {
            console.log(json);

            json.main.temp == undefined ? document.getElementById("main__degrees").parentElement.remove():document.getElementById("main__degrees").innerHTML =  `${Math.round(json.main.temp)} <i class=\"degrees__circle far fa-circle\"></i>`

            json.main.feels_like == undefined ? document.getElementById("feels-like").parentElement.remove():document.getElementById("feels-like").innerHTML = `${Math.round(json.main.feels_like)} м/с`

            json.name == undefined ? document.getElementById("city-name").remove():document.getElementById("city-name").innerHTML = json.name

            json.main.humidity == undefined ? document.getElementById("humidity").parentElement.remove():document.getElementById("humidity").innerHTML = `${json.main.humidity}%`

            json.wind.speed == undefined ? document.getElementById("speed").parentElement.remove():document.getElementById("speed").innerHTML = `${json.wind.speed} м/с`

            json.wind.gust == undefined ? document.getElementById("gust").parentElement.remove():document.getElementById("gust").innerHTML = `${json.wind.gust} м/с`

            json.clouds.all == undefined ? document.getElementById("clouds").parentElement.remove():document.getElementById("clouds").innerHTML = `${json.clouds.all}%`

            json.weather[0].description == undefined ? document.getElementById("description").remove():document.getElementById("description").innerHTML = json.weather[0].description

        },
        error: function (err) {
            console.log("Request failed, error= " + err);
        }
    });
}