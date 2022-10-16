let body = document.querySelector('body')
let search = document.createElement('input');
let btn = document.createElement('button')
btn.textContent = 'search'
body.append(search, btn);

btn.addEventListener('click', () => {
    getWeatherData();
})


async function getWeatherData() {
    let city = search.value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f9ff8597ccefcd57f95ed9c70d2de3e`

    const response = await fetch(url, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData.main.temp);
    console.log(weatherData.weather[0].main)
}

