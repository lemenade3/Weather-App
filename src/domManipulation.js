async function displayResults(results) {

    let city = document.querySelector('#city')
    let temp = document.querySelector('#temp')
    let weather = document.querySelector('#weather')
    let minMax = document.querySelector('#minMax')
    let humidity = document.querySelector('#humidity')

        city.textContent = results.currentCity;
        temp.textContent = `${results.currentTemp} ºC`;
        weather.textContent = results.currentWeather;
        max.textContent = `${results.currentMax} ºC`;
        min.textContent = `${results.currentMin} ºC`;
        humidity.textContent = `${results.currentHumidity} %`;
        
        for (let i = 0; i < results.forecastObjects.length; i++) {

            let time = document.querySelector(`#dateTime${i}`)
            let temp = document.querySelector(`#temp${i}`)
            let weather = document.querySelector(`#weather${i}`)
            
            time.textContent = results.forecastObjects[i].dateTime //date and time
            temp.textContent = results.forecastObjects[i].temp //time temp
            weather.textContent = results.forecastObjects[i].weather //weather
        }
}

export {displayResults}