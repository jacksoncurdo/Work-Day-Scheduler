var today = moment();

var currentDay = moment().format("dddd, MMMM " + "Do, YYYY " + "-- HH:mm a");
var currentHour = moment().format("HH");

function insertCurrentDay() {
    $("#moment").text(currentDay);