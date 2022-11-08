function loadPage() {
    let body = document.querySelector('body')
    let input = document.createElement('input')
    let search = document.createElement('button')
    search.textContent = 'search'

    let currentContainer = document.createElement('div')

    let currentCity = document.createElement('div')
    currentCity.setAttribute('class', 'data')
    currentCity.setAttribute('id', 'city')

    let currentTemp = document.createElement('div')
    currentTemp.setAttribute('class', 'data')
    currentTemp.setAttribute('id', 'temp')

    let currentWeather = document.createElement('div')
    currentWeather.setAttribute('class', 'data')
    currentWeather.setAttribute('id', 'weather')

    let currentMax = document.createElement('div')
    currentMax.setAttribute('class', 'data')
    currentMax.setAttribute('id', 'max')

    let currentMin = document.createElement('div')
    currentMin.setAttribute('class', 'data')
    currentMin.setAttribute('id', 'min')

    let currentHumidity = document.createElement('div')
    currentHumidity.setAttribute('class', 'data')
    currentHumidity.setAttribute('id', 'humidity')

    currentContainer.append(currentCity, currentTemp, currentWeather, currentMax, currentMin, currentHumidity)

    let forecastContainer = document.createElement('div')

    for (let i = 0; i < 15; i++) {
        let dateTime = document.createElement('div')
        dateTime.setAttribute('class', 'data')
        dateTime.setAttribute('id', `dateTime${i}`)
        let temp = document.createElement('div')
        temp.setAttribute('class', 'data')
        temp.setAttribute('id', `temp${i}`)
        let weather = document.createElement('div')
        weather.setAttribute('class', 'data')
        weather.setAttribute('id', `weather${i}`)
        forecastContainer.append(dateTime, temp, weather)
    }

    body.append(input, search, currentContainer, forecastContainer)
}

export {loadPage}
