const moment = require('moment')

export default (function defineDate() {
    document.getElementById("name-of-day").innerHTML = moment().locale(localStorage.getItem("lang")).format('dddd');
    document.getElementById("number-of-day").innerHTML = moment().locale(localStorage.getItem("lang")).format("Do");
    document.getElementById("name-of-month").innerHTML = moment().locale(localStorage.getItem("lang")).format("MMMM")
    document.getElementById("time").innerHTML = moment().format('LTS');
    setInterval(() => {
        document.getElementById("time").innerHTML = moment().format('LTS');
    }, 1000);

    if (parseInt(moment().format("HH")) >= 23 || parseInt(moment().format("HH")) <= 5) {
        document.querySelector("main").style.backgroundImage = "linear-gradient(to top right,rgb(7, 7, 186),rgb(16, 16, 188),rgb(25, 25, 190),rgb(34, 34, 192),rgb(43, 43, 194),rgb(52, 52, 196),rgb(61, 61, 197),rgb(70, 70, 199),rgb(79, 79, 201),rgb(88, 88, 203),rgb(97, 97, 205),rgb(106, 106, 207))"
    }
    else if (parseInt(moment().format("HH")) >= 5 && parseInt(moment().format("HH")) <= 11) {
        document.querySelector("main").style.backgroundImage = "linear-gradient(to top right,rgb(7, 171, 186),rgb(27, 173, 180),rgb(47, 175, 174),rgb(67, 177, 168),rgb(87, 179, 162),rgb(107, 181, 156),rgb(127, 183, 150),rgb(147, 185, 144),rgb(167, 187, 138),rgb(187, 189, 132),rgb(207, 191, 126),rgb(227, 193, 120))"
    }
    
})()

