const moment = require('moment')

export default (function defineDate() {
    document.getElementById("name-of-day").innerHTML = moment().format('dddd');   
    document.getElementById("number-of-day").innerHTML = moment().format("Do");
    document.getElementById("name-of-month").innerHTML = moment().format("MMMM")
})()