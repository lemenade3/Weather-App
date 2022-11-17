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
    currentCity.setAttribute('id', 'city')

    let currentTemp = document.createElement('div')
    currentTemp.setAttribute('id', 'temp')

    left.append(currentWeather, currentCity, currentTemp)

    let right = document.createElement('div')
    right.setAttribute('id', 'right')
    
    let extraData = document.createElement('div')
    extraData.setAttribute('id', 'extraData')

    let dataTitles = document.createElement('div')
    dataTitles.setAttribute('id', 'dataTitles')

    let maxTitle = document.createElement('div')
    maxTitle.setAttribute('id', 'maxTitle')
    maxTitle.textContent = 'Max'

    let minTitle = document.createElement('div')
    minTitle.setAttribute('id', 'minTitle')
    minTitle.textContent = 'Min'

    let humidityTitle = document.createElement('div')
    humidityTitle.setAttribute('id', 'humidityTitle')
    humidityTitle.textContent = 'Humidity'

    dataTitles.append(minTitle, maxTitle, humidityTitle)

    let dataValues = document.createElement('div')
    dataValues.setAttribute('id', 'dataValues')

    let currentWeatherIcon = new Image()
    currentWeatherIcon.setAttribute('id', 'weatherIcon')

    let currentMax = document.createElement('div')
    currentMax.setAttribute('id', 'max')

    let currentMin = document.createElement('div')
    currentMin.setAttribute('id', 'min')

    let currentHumidity = document.createElement('div')
    currentHumidity.setAttribute('id', 'humidity')

    dataValues.append(currentMin, currentMax, currentHumidity)

    extraData.append(dataTitles, dataValues)

    right.append(currentWeatherIcon, extraData)
    main.append(left, right)

    let bottom = document.createElement('div')
    bottom.setAttribute('id', 'bottom')

    let forecastContainer = document.createElement('div')
    forecastContainer.setAttribute('id', 'forecastContainer')

    for (let i = 0; i < 15; i++) {
        let timeContainer = document.createElement('div')
        timeContainer.setAttribute('class', 'time')
        let icon = new Image()
        icon.setAttribute('id', `icon${i}`)
        let dateTime = document.createElement('div')
        dateTime.setAttribute('class', 'data')
        dateTime.setAttribute('id', `dateTime${i}`)
        let temp = document.createElement('div')
        temp.setAttribute('class', 'data')
        temp.setAttribute('id', `temp${i}`)
        let weather = document.createElement('div')
        weather.setAttribute('class', 'data')
        weather.setAttribute('id', `weather${i}`)
        let date = document.createElement('div')
        date.setAttribute('class', 'data')
        date.setAttribute('id', `date${i}`)
        timeContainer.append(dateTime, icon, weather, temp, date)
        forecastContainer.append(timeContainer)
    }

    let masthead = document.createElement('div')
    masthead.setAttribute('id', 'masthead')
    masthead.textContent = 'Copyright Oliver Browning 2022'

    let units = document.createElement('div')
    units.setAttribute('id', 'units')
    units.textContent = 'placeholder'

    bottom.append(forecastContainer, masthead, units)


    body.append(top, main, bottom)
}

export {loadPage}
