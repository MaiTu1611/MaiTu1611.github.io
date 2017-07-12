var CHECK_CREATE_BEGIN = true;// Check first initialization or rebuild
var CURRENT_DAY;// The present day is under consideration
var CURRENT_MONTH;// The present month is under consideration
var CURRENT_YEAR;// The present year is under consideration
var TO_DAY;// This day
var TO_MONTH;// This month
var TO_YEAR;// This year

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
/**
 * Function for create new calendar
 */
function calendar() {	
	//show table and create year select
	tableDay.style.display = "block";
	if (CHECK_CREATE_BEGIN) {
	    createSelecteYear();
	    input.value = "";
	    CHECK_CREATE_BEGIN = false;
	}
	// assign value to select tag
	selectMonth.value = CURRENT_MONTH;
	selectYear.value = CURRENT_YEAR;
	//create 2 new Date to get first day and last day of month
	var first = new Date(CURRENT_YEAR, CURRENT_MONTH - 1, 1);
	var last = new Date(CURRENT_YEAR, CURRENT_MONTH, 0);
	// assign value to table
	var temp = 1;
	for (var j = 0; j < 42; j++) {
		table[j].style.backgroundColor = "white";
		if (j < first.getDay() || (j > (first.getDay() + last.getDate()) - 1 )) { //element of table is not day of month
			table[j].innerHTML = "";
		}
		else {
			table[j].style.background = "white";
			table[j].innerHTML = temp;	
			if (temp == TO_DAY && TO_MONTH == CURRENT_MONTH && TO_YEAR == CURRENT_YEAR) {// If it is today, the color will be different
				table[j].style.background = "#00dad7";
			}
			// add event onclick to elements table
			table[j].addEventListener("click", function() {chooseDay(this);});
			temp++;
		}
	}
}
/**
 * Function of event click button next or previous month
 * @param {number} n
 * Will call to function calendar when click button
 */
function buttonClickMonth(n) {
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
/**
 * Function of event click button next or previous year
 * @param {number} n
 * Will call to function calendar when click button
 */
function buttonClickYear(n) {
	CURRENT_YEAR += n;
	calendar();
}
/**
 * Funtion create select year
 * Will call from function calendar when start first
 */
function createSelecteYear() {
	for (var i = 1900; i <= CURRENT_YEAR + 100; i++) {
		var option = document.createElement("option");
		option.value = i;
		option.text = i;
		selectYear.appendChild(option);
	}
}
/**
 * When choose month at the select
 */
function changeMonth() {
	CURRENT_MONTH = selectMonth.value;
	calendar();
}
/**
 * When choose year at the select
 */
function changeYear() {
	CURRENT_YEAR = selectYear.value;
	calendar();
}
/**
 * function for event choose day
 * @param {String} day
 * Call to restartCalendar() when finish
 */
function chooseDay(day) {
	var monthCheck = checkMonth(CURRENT_MONTH);
	var dayCheck = checkDay(day.innerHTML);
	var stringDay =  monthCheck + "-" + dayCheck + "-" + CURRENT_YEAR;
	input.value = stringDay;
	notificationInDisplay(isFormatAndLimit(stringDay));
	restartCalendar();
	CHECK_DATE = true;
}
/**
 * function for check month < 10
 * @param {number} month
 * @return {number} month
 */
function checkMonth(month) {
	if (month < 10) {
		month = "0" + month;
		console.log("checkMonth");
	}
	return month;
}
/**
 * function for check day < 10
 * @param {number} month
 * @return {number} month
 */
function checkDay(day) {
	if (day < 10) {
		day = "0" + day;
	}
	return day;
}
/**
 * Function for restart all (hidden calendar)
 */
function restartCalendar() {
	tableDay.style.display = "none";
}
