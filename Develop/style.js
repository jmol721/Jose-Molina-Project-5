var displayDate = document.getElementById('currentDay');

//Display the date under header
displayDate.textContent = moment().format('dddd, MMMM Do');

//Add text to box
var createEvent = function() {
    $("form-control").val();
    console.log(createEvent);
};

//button functionality and storing values to local storage
$(".saveBtn").on("click", function(event) {
    console.log(event.target.id);
    console.log($(this).siblings(".form-control")[0].value);

    var hour = $(this).siblings(".hour")[0].textContent;  // 9AM
    var description = $(this).siblings(".form-control")[0].value;  // whatevere you text
    localStorage.setItem(hour, description);
});

//load tasks on refresh
var loadEvents = function() {
    // $(this).siblings(".hour")[0].textContent = localStorage.getItem()
    // 9am
    var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM" ];
    for (var i = 0; i < times.length; i++) {
        if (localStorage.getItem(times[i]) !== null) {
        console.log(localStorage.getItem(times[i]));
        document.getElementById(times[i]).value = localStorage.getItem(times[i]);
        };
    }

}

loadEvents();

// var eventEl = function() {
// document.createElement('span');
// eventEl.setAttribute("class", "description");
// eventEl.textContent = localStorage.getItem(hour, description);
// console.log(eventEl);

// document.getElementById("input-group").appendChild(eventEl);
// }