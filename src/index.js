// Imports of required functions and stylesheets

import {loadPage} from './pageLoad'
import {callAPI, changeUnit} from './apiCalls'
import "./style.scss"
import {displayResults, changeDomUnit} from './domManipulation'

// Initial page load

loadPage();

let search = document.querySelector('img');
let input = document.querySelector('input')
let units = document.querySelector('#units')
let city = document.querySelector('#city')

async function returnResults(location) {
    let data = await callAPI(location)
    displayResults(data);
}

search.addEventListener('click', async () => {
    returnResults(input.value)
})

input.addEventListener('keypress', (e) => { // allows enter to submit input
    if (e.key === 'Enter') {
        search.click()
    }
})

units.addEventListener('click', async () => { // This code block changes all units used
    changeUnit()
    changeDomUnit()
    returnResults(city.textContent)

    if (units.textContent === 'ºC') {
        units.textContent = 'ºF'
    }
    if (units.textContent === 'ºF') {
        units.textContent = 'ºC'
    }
})

returnResults('London')