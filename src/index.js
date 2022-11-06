import {callAPI} from './apiCalls'

let body = document.querySelector('body')
let search = document.createElement('input');
let btn = document.createElement('button')
btn.textContent = 'search'
body.append(search, btn);

btn.addEventListener('click', () => {
    callAPI(search.value)
})

// should be individual functions for each of the required varaiables, each one
// is called when the search button is clicked
// Search button will after calling all the async functions and returning the data, call the
// display results function.



/* get figures for each of main areas including location, temp, weather, humidty and min/max's
write a for loop that loops through each item in the 'list' array, excluding 0 and 
writes the temp, time, date, weather and chance of precipitation. */