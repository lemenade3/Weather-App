// Imports icons for Weather

import {returnIcon} from './iconSelector'

// responsible for changing units shown in DOM

let unit = 'C'

function changeDomUnit() {
    if (unit === 'C') {
        unit = 'F'
    } else if (unit === 'F') {
        unit = 'C'
    }
}

async function displayResults(results) {

    let city = document.querySelector('#city')
    let temp = document.querySelector('#temp')
    let weather = document.querySelector('#weather')
    let weatherIcon = document.querySelector('#weatherIcon')
    let min = document.querySelector('#min')
    let max = document.querySelector('#max')
    let humidity = document.querySelector('#humidity')

    city.textContent = results.currentCity;
    temp.textContent = `${results.currentTemp} º${unit}`;
    weather.textContent = results.currentWeather;
    weatherIcon.src = returnIcon(results.currentWeatherIcon);
    max.textContent = `${results.currentMax} º${unit}`;
    min.textContent = `${results.currentMin} º${unit}`;
    humidity.textContent = `${results.currentHumidity} %`;
        
    for (let i = 0; i < results.forecastObjects.length; i++) {

        let icon = document.querySelector(`#icon${i}`)
        let time = document.querySelector(`#dateTime${i}`)
        let temp = document.querySelector(`#temp${i}`)
        let weather = document.querySelector(`#weather${i}`)
        let date = document.querySelector(`#date${i}`)

        let dateTime = new Date(results.forecastObjects[i].dateTime * 1000)
            
        icon.src = returnIcon(results.forecastObjects[i].icon)
        time.textContent = dateTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) //date and time
        temp.textContent = `${results.forecastObjects[i].temp} º${unit}` //time temp
        weather.textContent = results.forecastObjects[i].weather //weather
        date.textContent = dateTime.toLocaleDateString();
    }
}

export {displayResults, changeDomUnit}