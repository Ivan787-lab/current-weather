import '../css/style.css'
import '../css/style.scss'
import defineDate from './defineDate'
import defineLocation from './defineLocation'
// так как импортированные функции вызываются в самом файле, здесь их достаточно просто импортировать
// я здесь не импортировал функцию outputWeather потому что она уже импортирована в defineLocation и так как defineLocation немедленно вызываемая функция, там же и вызывалась
