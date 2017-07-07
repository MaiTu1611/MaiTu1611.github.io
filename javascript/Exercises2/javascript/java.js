var CHECK_TITLE = 1;
var CURRENT_DAY;
var CURRENT_MONTH;
var CURRENT_YEAR;

var currentDate = new Date();
CURRENT_YEAR = currentDate.getFullYear();
CURRENT_MONTH = currentDate.getMonth();
CURRENT_DAY = currentDate.getDate();

var title = document.getElementById("title");
var tableDay = document.getElementById("day");
var table = document.getElementsByTagName("td");
var selectMonth = document.getElementById("month");
var selectYear = document.getElementById("year");

//var arrayMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function calendar() {
	
	//show table
	tableDay.style.display = "block";
	selectMonth.value = CURRENT_MONTH + 1;
	selectYear.value = CURRENT_YEAR;
	//create 2 new Date to get first day and last day of month
	var first = new Date(CURRENT_YEAR, CURRENT_MONTH, 1);
	var last = new Date(CURRENT_YEAR, CURRENT_MONTH+1, 0);
	console.log(first.getDay());
	console.log(last.getDate());
	console.log(CURRENT_YEAR);
	console.log(CURRENT_MONTH);

	// assign value to table
	var temp = 1;
	for (var j = 0; j < 42; j++) {
		if (j < first.getDay() || (j > (first.getDay() + last.getDate()) - 1 )) { //element of table is not day of month
			table[j].innerHTML = "";
		}
		else {
			table[j].innerHTML = temp;
			temp++;
		}
	}
}

// Function of event click button
function BtnClick(n) {
	CURRENT_MONTH += n;
	if (CURRENT_MONTH < 0) {
		CURRENT_MONTH = 11;
		CURRENT_YEAR -=1;
	}
	if (CURRENT_MONTH > 11) {
		CURRENT_MONTH = 0;
		CURRENT_YEAR += 1;
	}
	calendar();
}