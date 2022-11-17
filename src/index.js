import {loadPage} from './pageLoad'
import {callAPI, changeUnit} from './apiCalls'
import "./style.scss"
import {displayResults, changeDomUnit} from './domManipulation'

loadPage();

let search = document.querySelector('img');
let input = document.querySelector('input')
let form = document.querySelector('form')
let units = document.querySelector('#units')
let city = document.querySelector('#city')

async function returnResults(location) {
    let data = await callAPI(location)
    displayResults(data);
}

search.addEventListener('click', async () => {
    returnResults(input.value)
})

form.addEventListener('submit', async () => {
    returnResults(input.value)
})

units.addEventListener('click', async () => {
    changeUnit()
    changeDomUnit()
    returnResults(city.textContent)

    if (units.textContent === 'ºC') {
        units.textContent = 'ºF'
    }
    if (units.textContent === 'ºF') {
        units.textContent = 'ºC'
    }
    // upon clicking button a function should be called from within api
    // function should change a units varaible to imperial if metric and to metric if imperial
    // input.value should be stored in separate variable to allow button click to call return results again
    // button text content will be managed within index
    // units variable will be stored directly within template string literal
    // will be set to C as default
    // units will need to be changed within domManipulation using variable and template string literal
})

returnResults('London')

// should be individual functions for each of the required varaiables, each one
// is called when the search button is clicked
// Search button will after calling all the async functions and returning the data, call the
// display results function.



/* get figures for each of main areas including location, temp, weather, humidty and min/max's
write a for loop that loops through each item in the 'list' array, excluding 0 and 
writes the temp, time, date, weather and chance of precipitation. */