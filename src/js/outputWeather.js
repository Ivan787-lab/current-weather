const $ = require('jquery')
export default function outputWeather(cityName) {
    const requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=${localStorage.getItem("lang")}&units=metric&appid=359455a64010ae0b28935b25c2eb104b`

    
    $.ajax({
        url: requestUrl,
        type: 'GET',
        success: function (json) {
            console.log(json);
            document.getElementById("main__degrees").innerHTML = `${json.main.temp} <i class=\"degrees__circle far fa-circle\"></i>`


        },
        error: function (err) {
            console.log("Request failed, error= " + err);
        }
    });
}