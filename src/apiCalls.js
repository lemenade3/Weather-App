
async function getWeatherData(value) {
    let city = value
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5f9ff8597ccefcd57f95ed9c70d2de3e&units=metric`

    const response = await fetch(url, {mode: 'cors'});
    const weatherData = await response.json();
    return weatherData;
}

let currentCity;
let currentTemp;
let currentWeather;
let currentMax;
let currentMin;
let currentHumidity;
const forecastObjects = [];

async function storeCurrentCity(weatherData) {
    let data = await weatherData;
    currentCity = data.city.name
}

async function storeCurrentTemp(weatherData) {
    let data = await weatherData;
    currentTemp = data.list[0].main.temp
}

async function storeCurrentWeather(weatherData) {
    let data = await weatherData;
    currentWeather = data.list[0].weather[0].main
}

async function storeCurrentMax(weatherData) {
    let data = await weatherData;
    currentMax = data.list[0].main.temp_max
}

async function storeCurrentMin(weatherData) {
    let data = await weatherData;
    currentMin = data.list[0].main.temp_min
}

async function storeCurrentHumidity(weatherData) {
    let data = await weatherData;
    currentHumidity = data.list[0].main.humidity
}

async function storeForecast(weatherData) {
    let data = await weatherData
    let dataList = await data.list
    for (let i = 0; i < dataList.length; i++) {
        forecastObjects.push({
            dateTime: dataList[i].dt_txt,
            temp: dataList[i].main.temp,
            weather: dataList[i].weather[0].main
        })
    }
}

async function displayResults(weatherData) {
    // this function should fill container fields with information from data variables
    await weatherData.then(async () => {
        console.log(currentCity);
        console.log(currentTemp);
        console.log(currentWeather);
        console.log(currentMax);
        console.log(currentMin);
        console.log(currentHumidity);
        
        for (let i = 0; i < forecastObjects.length; i++) {
                console.log(forecastObjects[i].dateTime) //date and time
                console.log(forecastObjects[i].temp) //time temp
                console.log(forecastObjects[i].weather) //weather
        }
    })
}

async function callAPI(value) {
    let weatherData = getWeatherData(value);
    storeCurrentCity(weatherData);
    storeCurrentTemp(weatherData)
    storeCurrentWeather(weatherData)
    storeCurrentMax(weatherData);
    storeCurrentMin(weatherData);
    storeCurrentHumidity(weatherData);
    await storeForecast(weatherData).then(async () => {
        displayResults(weatherData)
    })
}

export {callAPI}