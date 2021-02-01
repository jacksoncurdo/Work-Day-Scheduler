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

function textEleven(){
	var dataToSaveEleven = document.getElementById("inputEleven").value;
	localStorage.setItem("data", dataToSaveEleven);
	localStorage.getItem("data", dataToSaveEleven);
	console.log(dataToSaveEleven);
}
function textTwelve(){
	var dataToSaveTwelve = document.getElementById("inputTwelve").value;
	localStorage.setItem("data", dataToSaveTwelve);
	localStorage.getItem("data", dataToSaveTwelve);
	console.log(dataToSaveTwelve);
}

function textOne(){
	var dataToSaveOne = document.getElementById("inputOne").value;
	localStorage.setItem("data", dataToSaveOne);
	localStorage.getItem("data", dataToSaveOne);
	console.log(dataToSaveOne);
}
function textTwo(){
	var dataToSaveTwo = document.getElementById("inputTwo").value;
	localStorage.setItem("data", dataToSaveTwo);
	localStorage.getItem("data", dataToSaveTwo);
	console.log(dataToSaveTwo);
}