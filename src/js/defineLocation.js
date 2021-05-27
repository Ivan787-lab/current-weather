const $ = require('jquery')

export default (function defineLocation() {
    var requestUrl = "http://ip-api.com/json";
    $.ajax({
        url: requestUrl,
        type: 'GET',
        success: function (json) {
            if (json.country == 'Russia') {
                localStorage.setItem("lang", "ru")
            }
            else {
                localStorage.setItem("lang", "en")  
            }
            document.getElementById("location").innerHTML = json.city
        },
        error: function (err) {
            console.log("Request failed, error= " + err);
        }
    });
})()

