import {loadPage} from './pageLoad'
import {callAPI} from './apiCalls'
import "./style.scss"
import {displayResults} from './domManipulation'

loadPage();

let search = document.querySelector('img');
let input = document.querySelector('input')

async function returnResults(location) {
    let data = await callAPI(location)
    displayResults(data);
}

search.addEventListener('click', async () => {
    returnResults(input.value)
})

returnResults('London')

// should be individual functions for each of the required varaiables, each one
// is called when the search button is clicked
// Search button will after calling all the async functions and returning the data, call the
// display results function.



/* get figures for each of main areas including location, temp, weather, humidty and min/max's
write a for loop that loops through each item in the 'list' array, excluding 0 and 
writes the temp, time, date, weather and chance of precipitation. */