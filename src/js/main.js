import '../css/style.css'
import '../css/style.scss'
import defineDate from './defineDate'
import defineLocation from './defineLocation'
import outputWeather from './outputWeather'
// так как импортированные функции вызываются в самом файле, здесь их достаточно просто импортировать


setTimeout(() => {
    outputWeather(document.getElementById("location").innerText)
}, 200 ); // так как я использовал стороннюю библиотеку для определения местоположения по ip, она работа медленнее чем формировалась ссылка для отправки запроса к API погоды, поэтому я сделал вызов функции через 200 мс после начала жизненного цикла приложения, так как window.onload тоже иногда выдавал ошибку