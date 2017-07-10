var CHECK_TITLE = true;
var CHECK_CREATE_YEAR = true;
var CHECK_TO_DAY = true;
var CURRENT_DAY = 0;
var CURRENT_MONTH = 0;
var CURRENT_YEAR = 0;

var currentDate = new Date();
TO_DAY = currentDate.getDate();
TO_YEAR = currentDate.getFullYear();
TO_MONTH = currentDate.getMonth() + 1;
CURRENT_YEAR = currentDate.getFullYear();
CURRENT_MONTH = currentDate.getMonth() + 1;
CURRENT_DAY = currentDate.getDate();

var title = document.getElementById("title");
var tableDay = document.getElementById("day");
var table = document.getElementsByTagName("td");
var selectMonth = document.getElementById("month");
var selectYear = document.getElementById("year");
var input = document.getElementsByName("inputDate")[0];
var notification = document.getElementById("notification");

function calendar() {	
	//show table and create year select
	tableDay.style.display = "block";
	if (CHECK_CREATE_YEAR) {
	    CreateSelecteYear();
	    input.value = "";
	    input.style.color = "black";
	    CHECK_CREATE_YEAR = false;
	}
	// assign value to select tag
	selectMonth.value = CURRENT_MONTH;
	selectYear.value = CURRENT_YEAR;
	//create 2 new Date to get first day and last day of month
	var first = new Date(CURRENT_YEAR, CURRENT_MONTH, 1);
	var last = new Date(CURRENT_YEAR, CURRENT_MONTH + 1, 0);
	// assign value to table
	var temp = 1;
	for (var j = 0; j < 42; j++) {
		table[j].style.backgroundColor = "#716f6f";
		if (j < first.getDay() || (j > (first.getDay() + last.getDate()) - 1 )) { //element of table is not day of month
			table[j].innerHTML = "";
		}
		else {
			table[j].style.background = "white";
			table[j].innerHTML = temp;
			if (temp == TO_DAY && TO_MONTH == CURRENT_MONTH && TO_YEAR == CURRENT_YEAR) {
				table[j].style.background = "#00dad7";
			}
			// add event onclick to elements table
			table[j].addEventListener("click", function() {ChooseDay(this);});
			temp++;
		}
	}
}

// Function of event click button next or previous month
function BtnClickMonth(n) {
	CURRENT_MONTH += n;
	if (CURRENT_MONTH < 1) {
		CURRENT_MONTH = 12;
		CURRENT_YEAR--;
	}
	if (CURRENT_MONTH > 12) {
		CURRENT_MONTH = 1;
		CURRENT_YEAR++;
	}
	calendar();
}

// Function of event click button next or previous year
function BtnClickYear(n) {
	CURRENT_YEAR += n;
	calendar();
}

// Funtion create select year
function CreateSelecteYear() {
	for (var i = 1900; i <= CURRENT_YEAR + 100; i++) {
		var option = document.createElement("option");
		option.value = i;
		option.text = i;
		selectYear.appendChild(option);
	}
}

// When choose month at the select
function ChangeMonth() {
	CURRENT_MONTH = selectMonth.value ;// CURRENT_MONTH from 0 to 11 , selectMonth from 1 to 12 , CURRENT_MONTH
	calendar();
}

// When choose year at the select
function ChangeYear() {
	CURRENT_YEAR = selectYear.value;
	calendar();
}

// function for event choose day
function ChooseDay(day) {
	var month = CheckMonth(CURRENT_MONTH);
	var Day =  month + "-" + day.innerHTML + "-" + CURRENT_YEAR;
	document.getElementsByName("inputDate")[0].value = Day;
	Notification(IsFormatAndLimit(Day));
	RestartCalendar();
}

// Function for event 
function CheckMonth(month) {
	if (month < 10) {
		month = "0" + month;
	}
	return month;
}

// Function for event user input
function IsUserInput(day) {
	console.log(day.value);
	Notification(IsFormatAndLimit(day.value));
	RestartCalendar();
}

// Function day in month
function DayOfMonth(month,year) {
	switch (month) {
		case 1, 3, 5, 7, 8, 10, 12:
			return 31;
		case 4, 6, 9, 11:
			return 30;
		case 2: {
			if (TestLeapYear(year)) {
				return 29;
			}
			return 28;
		}
	}
}

// Function test leap year
function TestLeapYear(year) {
	if ((year % 400 == 0) || (year % 4 == 0 && year % 100 !=0)) {
		return true;
	}
	return false;
}

// Function for check data format user input
function IsFormatAndLimit(stringDay) {
	// Check day of user input with RegExp
	var rule = /^(\d{1,2})([\.\-\/\\ ])(\d{1,2})([\.\-\/\\ ])(\d{4})$/;// MM/DD/YYYY
	var checkRegex = new RegExp(rule);
	// begin check data with format
	if (!checkRegex.test(stringDay)) {
		return false;
	}

	// begin check data input in limit
	var dayTest = new Date(stringDay);
	if (dayTest == "Invalid Date") {
		return false;
	}
	return true;
}

// Function for restart all
function RestartCalendar() {
	tableDay.style.display = "none";
}

function Notification(BooleanDay) {
	if (BooleanDay) {
		notification.innerHTML = "Checked";
		notification.style.color = "green";
	}
	else {
		notification.innerHTML = "Fail, please check again!!!";
		notification.style.color = "red";
	}
}