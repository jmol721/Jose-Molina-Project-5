var displayDate = document.getElementById('currentDay');
var times = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

//Display the date under header
displayDate.textContent = moment().format('dddd, MMMM Do');

//Add text to box
var createEvent = function() {
    $("textarea").val();
    console.log(createEvent);
};

//button functionality and storing values to local storage
$(".saveBtn").on("click", function(event) {
    console.log('ID: ', event.target.id);
    console.log('Input value: ', $(this).siblings("textarea")[0].value);

    // var hour = $(this).siblings(".hour")[0].textContent;  // 9
    var hourKey = event.target.id; // span id
    var description = $(this).siblings("textarea")[0].value;  // whatever you text
    localStorage.setItem(hourKey, description);
});

//load tasks on refresh
var loadEvents = function() {
    // var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM" ];
    for (var i = 0; i < times.length; i++) {
        var inputId = times[i] + "-input";   // {time}-input
        if (localStorage.getItem(times[i]) !== null) {
        console.log(localStorage.getItem(times[i]));
        document.getElementById(inputId).value = localStorage.getItem(times[i]);
        };

        //color change
        var currentHour = moment().hour();
        console.log(currentHour);
        if (currentHour === parseInt(times[i])) {
            document.getElementById(inputId).classList.remove("past");
            document.getElementById(inputId).classList.remove("future");
        }
        else if (currentHour > parseInt(times[i])) {
            document.getElementById(inputId).classList.remove("present");
            document.getElementById(inputId).classList.remove("future");
        } 
        else {
        document.getElementById(inputId).classList.remove("past");
        document.getElementById(inputId).classList.remove("present");
        }
    }

    console.log(currentHour);
    return console.log(currentHour);
}

loadEvents();


//color change function
// var currentHour = moment().hour();
// console.log(currentHour);


// document.getElementById(times[i]).setClass(".present")