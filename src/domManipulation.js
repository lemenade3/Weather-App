async function displayResults(results) {
    // this function should fill container fields with information from data variables
        console.log(results.currentCity);
        console.log(results.currentTemp);
        console.log(results.currentWeather);
        console.log(results.currentMax);
        console.log(results.currentMin);
        console.log(results.currentHumidity);
        
        for (let i = 0; i < results.forecastObjects.length; i++) {
                console.log(results.forecastObjects[i].dateTime) //date and time
                console.log(results.forecastObjects[i].temp) //time temp
                console.log(results.forecastObjects[i].weather) //weather
        }
}

export {displayResults}