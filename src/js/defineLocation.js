import outputWeather from './outputWeather';
const $ = require('jquery')

export default (function defineLocation() {
    var requestUrl = "https://pro.ip-api.com/json?key=rEBFT7d9CCndroL";
    $.ajax({
        url: requestUrl,
        type: 'GET',
        success: function (json) {
            if (json.country == 'Russia') {
                localStorage.setItem("lang", "ru")
            }
            else {
                localStorage.setItem("lang", "en")  
            } // здесь все сохраняется в LS для того чтобы формировать API запрос для нужной страны и языка
            
            outputWeather(json.city) // вот тут сразу вызывая функцию, ведь больше доступа к параметру json нету. Поскольку функция defineLocation сразу вызывается, мне ее достаточно просто импортировать
        },
        error: function (err) {
            console.log("Request failed, error= " + err);
        }
    });
})()

/*
    Небольшое разъяснение что здесь произошло.
    Я вызвал функцию outputWeather именно здесь потому что по какой-то причине я не могу возвращать локацию пользователя вне блока success поэтому я ее вызвал здесь чтобы дать ей аргумент json.city. А так как defineLocation функция вызываемая сразу, то мне достаточно импортировать ее в main.js
*/