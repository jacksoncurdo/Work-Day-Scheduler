var today = moment();

var currentDay = moment().format("dddd, MMMM " + "Do, YYYY " + "-- HH:mm a");
var currentHour = moment().format("HH");

function insertCurrentDay() {
    $("#moment").text(currentDay);
};

insertCurrentDay();

function textNine(){
	var dataToSaveNine = document.getElementById("inputNine").value;	
	localStorage.setItem("data", dataToSaveNine);  
	localStorage.getItem("data", dataToSaveNine);
	console.log(dataToSaveNine)}

function textTen(){
	var dataToSaveTen = document.getElementById("inputTen").value;
	localStorage.setItem("data", dataToSaveTen);
	localStorage.getItem("data", dataToSaveTen);
	console.log(dataToSaveTen);
}