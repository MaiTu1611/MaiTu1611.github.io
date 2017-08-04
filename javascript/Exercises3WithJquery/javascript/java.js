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

var title = $("#title");
var tableDay = $("#day");
var selectMonth = $("#month");
var selectYear = $("#year");
var table = $("td");
var input = $("#inputBirthday");
var notification = $("#notification");

/**
 * Function for create new calendar
 */
function calendar() {	
	//show table and create year select
	tableDay.show();
	if (CHECK_CREATE_BEGIN) {
	    createSelecteYear();
	    input.val("");
	    CHECK_CREATE_BEGIN = false;
	}
	// assign value to select tag
	selectMonth.val(CURRENT_MONTH);
	selectYear.val(CURRENT_YEAR);
	//create 2 new Date to get first day and last day of month
	var first = new Date(CURRENT_YEAR, CURRENT_MONTH - 1, 1);
	var last = new Date(CURRENT_YEAR, CURRENT_MONTH, 0);
	// assign value to table
	var temp = 1;
	for (var j = 0; j < 42; j++) {
		table.eq(j).css("background","white");
		if (j < first.getDay() || (j > (first.getDay() + last.getDate()) - 1 )) { //element of table is not day of month
			table.eq(j).html("");
		}
		else {
			console.log(temp);
			table.eq(j).html(temp);
			if (temp == TO_DAY && TO_MONTH == CURRENT_MONTH && TO_YEAR == CURRENT_YEAR) {// If it is today, the color will be different
				table.eq(j).css("background","#FF5722");
			}
			// add event onclick to elements table
			table.eq(j).click(function() {chooseDay(this);});
			temp++;
		}
	}
}
/**
 * Function of event click input date
 * Will call to function calendar when click button
 */
 input.click(function() {
 	calendar();
 })
 input.change(function() {
 	tableDay.hide();
 })
/**
 * Function of event click button previous month
 * Will call to function calendar when click button
 */
$("#PreviousMonth").click(function() {
	CURRENT_MONTH --;
	if (CURRENT_MONTH < 1) {
		CURRENT_MONTH = 12;
		CURRENT_YEAR--;
	}
	calendar();
});
/**
 * Function of event click button next month
 * Will call to function calendar when click button
 */
$("#NextMonth").click(function() {
	CURRENT_MONTH ++;
	if (CURRENT_MONTH > 12) {
		CURRENT_MONTH = 1;
		CURRENT_YEAR++;
	}
	calendar();
});
/**
 * Function of event click button previous year
 * Will call to function calendar when click button
 */
$("#PreviousYear").click(function() {
	CURRENT_YEAR --;
	calendar();
});
/**
 * Function of event click button next year
 * Will call to function calendar when click button
 */
$("#NextYear").click(function() {
	CURRENT_YEAR ++;
	calendar();
});
/**
 * Funtion create select year
 * Will call from function calendar when start first
 */
function createSelecteYear() {
	for (var i = 1900; i <= CURRENT_YEAR + 100; i++) {
		var option = $("<option></option>");
		option.val(i);
		option.html(i);
		selectYear.append(option);
	}
}
/**
 * When choose month at the select
 */
selectMonth.change(function() {
	CURRENT_MONTH = selectMonth.val();
	calendar();
});
/**
 * When choose year at the select
 */
selectYear.change(function() {
	CURRENT_YEAR = selectYear.val();
	calendar();
});
/**
 * function for event choose day
 * @param {String} day
 * Call to restartCalendar() when finish
 */
function chooseDay(day) {
	var monthCheck = checkMonth(CURRENT_MONTH);
	var dayCheck = checkDay(day.innerHTML);
	console.log(dayCheck);
	var stringDay =  monthCheck + "/" + dayCheck + "/" + CURRENT_YEAR;
	input.val(stringDay);
	//notificationInDisplay(isFormatAndLimit(stringDay));
	restartCalendar();
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
	tableDay.hide();
}