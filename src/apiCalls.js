
async function getWeatherData(value) {
    let city = value
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5f9ff8597ccefcd57f95ed9c70d2de3e&units=metric`

    const response = await fetch(url, {mode: 'cors'});
    const weatherData = await response.json();
    return weatherData;
}

let results = {
    currentCity: 0,
    currentTemp: 0,
    currentWeather: 0,
    currentMax: 0,
    currentMin: 0,
    currentHumidity: 0,
    forecastObjects: []
}

async function storeCurrentCity(weatherData) {
    let data = await weatherData;
    results.currentCity = data.city.name
}

async function storeCurrentTemp(weatherData) {
    let data = await weatherData;
    results.currentTemp = data.list[0].main.temp
} 

async function storeCurrentWeather(weatherData) {
    let data = await weatherData;
    results.currentWeather = data.list[0].weather[0].main
}

async function storeCurrentMax(weatherData) {
    let data = await weatherData;
    results.currentMax = data.list[0].main.temp_max
}

async function storeCurrentMin(weatherData) {
    let data = await weatherData;
    results.currentMin = data.list[0].main.temp_min
}

async function storeCurrentHumidity(weatherData) {
    let data = await weatherData;
    results.currentHumidity = data.list[0].main.humidity
}

async function storeForecast(weatherData) {
    results.forecastObjects = []
    let data = await weatherData
    let dataList = await data.list
    for (let i = 0; i < dataList.length; i++) {
        results.forecastObjects.push({
            dateTime: dataList[i].dt_txt,
            temp: dataList[i].main.temp,
            weather: dataList[i].weather[0].main
        })
    }
}

async function callAPI(value) {
    let weatherData = getWeatherData(value);
    storeCurrentCity(weatherData);
    storeCurrentTemp(weatherData)
    storeCurrentWeather(weatherData)
    storeCurrentMax(weatherData);
    storeCurrentMin(weatherData);
    storeCurrentHumidity(weatherData);
    return await storeForecast(weatherData).then(async () => {
        return results
    })
}

export {callAPI}

/* call api should change values in an object that has values for each of the required
current questions and forecast.

call api should then return that object.

Inside index.js callAPI can then be used as an argument in display results.

display results then takes that object and uses it to populate the divs. */