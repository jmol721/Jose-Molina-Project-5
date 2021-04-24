var displayDate = document.getElementById('currentDay');

//Display the date under header
displayDate.textContent = moment().format('dddd, MMMM Do');

