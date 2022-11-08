function loadPage() {
    let body = document.querySelector('body')
    let input = document.createElement('input')
    let search = document.createElement('button')
    search.textContent = 'search'

    let currentContainer = document.createElement('div')

    let currentCity = document.createElement('div')
    currentCity.setAttribute('class', 'data')
    let currentTemp = document.createElement('div')
    currentTemp.setAttribute('class', 'data')
    let currentWeather = document.createElement('div')
    currentWeather.setAttribute('class', 'data')
    let currentMax = document.createElement('div')
    currentMax.setAttribute('class', 'data')
    let currentMin = document.createElement('div')
    currentMin.setAttribute('class', 'data')
    let currentHumidity = document.createElement('div')
    currentHumidity.setAttribute('class', 'data')

    currentContainer.append(currentCity, currentTemp, currentWeather, currentMax, currentMin, currentHumidity)

    let forecastContainer = document.createElement('div')

    for (let i = 0; i < 15; i++) {
        let dateTime = document.createElement('div')
        dateTime.setAttribute('class', 'data')
        let temp = document.createElement('div')
        temp.setAttribute('class', 'data')
        let weather = document.createElement('div')
        weather.setAttribute('class', 'data')
        forecastContainer.append(dateTime, temp, weather)
    }

    body.append(input, search, currentContainer, forecastContainer)
}

export {loadPage}
