import SearchIcon from './search.svg'

function loadPage() {

    let body = document.querySelector('body')

    // Creates top div

    let top = document.createElement('div')
    top.setAttribute('id', 'top')

    let form = document.createElement('form')

    let input = document.createElement('input')
    const search = new Image();
    search.src = SearchIcon

    form.append(input, search)

    top.append(form)

    // creates main div

    let main = document.createElement('div')
    main.setAttribute('id', 'main')

    let left = document.createElement('div')
    left.setAttribute('id', 'left')

    let currentWeather = document.createElement('div')
    currentWeather.setAttribute('id', 'weather')

    let currentCity = document.createElement('div')
    currentCity.setAttribute('class', 'data')
    currentCity.setAttribute('id', 'city')

    let currentTemp = document.createElement('div')
    currentTemp.setAttribute('class', 'data')
    currentTemp.setAttribute('id', 'temp')

    left.append(currentWeather, currentCity, currentTemp)

    let right = document.createElement('div')
    right.setAttribute('id', 'right')

    let currentMax = document.createElement('div')
    currentMax.setAttribute('class', 'data')
    currentMax.setAttribute('id', 'max')

    let currentMin = document.createElement('div')
    currentMin.setAttribute('class', 'data')
    currentMin.setAttribute('id', 'min')

    let currentHumidity = document.createElement('div')
    currentHumidity.setAttribute('class', 'data')
    currentHumidity.setAttribute('id', 'humidity')

    let currentChanceOfRain = document.createElement('div')
    currentChanceOfRain.setAttribute('class', 'data')
    currentChanceOfRain.setAttribute('id', 'chanceOfRain')

    right.append(currentMax, currentMin, currentHumidity, currentChanceOfRain)
    main.append(left, right)

    let bottom = document.createElement('div')
    bottom.setAttribute('id', 'bottom')

    let forecastContainer = document.createElement('div')
    forecastContainer.setAttribute('id', 'forecastContainer')

    for (let i = 0; i < 15; i++) {
        let timeContainer = document.createElement('div')
        let dateTime = document.createElement('div')
        dateTime.setAttribute('class', 'data')
        dateTime.setAttribute('id', `dateTime${i}`)
        let temp = document.createElement('div')
        temp.setAttribute('class', 'data')
        temp.setAttribute('id', `temp${i}`)
        let weather = document.createElement('div')
        weather.setAttribute('class', 'data')
        weather.setAttribute('id', `weather${i}`)
        timeContainer.append(dateTime, temp, weather)
        forecastContainer.append(timeContainer)
    }

    let masthead = document.createElement('div')
    masthead.setAttribute('id', 'masthead')
    masthead.textContent = 'Created by OJB 2022'

    let units = document.createElement('div')
    units.setAttribute('id', 'units')
    units.textContent = 'placeholder'

    bottom.append(forecastContainer, masthead, units)


    body.append(top, main, bottom)
}

export {loadPage}
