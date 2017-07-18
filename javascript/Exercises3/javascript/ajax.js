var CHECK_USERNAME;// check user input format true or false
var CHECK_PASSWORD;// check password input format true or false 
var CHECK_EMAIL;// check mail input format true or false
var CHECK_DATE;// check date input format true or false

var colorError = "red";// notification's color error
var colorChecked = "green";// notification's color exactly

/**
 * Function for event click submitame
 * Send user information to server and response from server
 * Now haven't server, then not response
 */
 function clickSubmit() {
 	var user = document.getElementsByName("username")[0];
	var password = document.getElementsByName("password")[0];
	var email = document.getElementsByName("email")[0];
	var date = document.getElementsByName("inputDate")[0];
	//check again
	isInputUserName(user.value);// check user name agian before submit
	isInputPassword(password.value);// check password agian before submit
	isInputEmail(email.value);// check email agian before submit
	isUserInput(date.value);// check date agian before submit
 	var errorUserName = document.getElementById("erroruser");
 	var errorPassword = document.getElementById("errorpassword");
 	console.log(user.value);
 	console.log(CHECK_USERNAME +" "+ CHECK_PASSWORD + " " + CHECK_EMAIL + " " + CHECK_DATE);
 	if (CHECK_USERNAME && CHECK_PASSWORD && CHECK_EMAIL && CHECK_DATE) {
 		var xhttp;
 		if (window.XMLHttpRequest) {
 			xhttp = new XMLHttpRequest();
 		}
 		else {
 			xhttp = new ActiveXObject("Microsoft.XMLHTTP");
 		}
 		xhttp.onreadystatechange = function() {
 			if (this.readyState == 4 && this.status == 200) {
 				errorUserName.innerHTML = this.responseText;
 			}
 			else {
 				errorUserName.innerHTML = "NOT CHECKED";
 			}
 		}
 		xhttp.open("GET", "hello?q=" + user.value, true);
 		xhttp.send();
 	}
 }
/**
 * Function for event username input
 * @param {string} name
 * return true (checked) or false (inputUser Fail)
 */
function isInputUserName(name) {
	var errorUserName = document.getElementById("erroruser");
	console.log(name.length);
	if (name.length < 8) {
		errorUserName.innerHTML = "Username lenght min 8 letter";
		errorUserName.style.color = colorError;
		return CHECK_USERNAME = false;
	}
	if (name.length > 50) {
		errorUserName.innerHTML = "Username lenght max 50 letter";
		errorUserName.style.color = colorError;
		return CHECK_USERNAME = false;
	}
	if (isSpecialCharacterRegExp(name)) {
		errorUserName.innerHTML = "Username contains `~!#$%^&*()+=[{]}'<,>?/\";:";
		errorUserName.style.color = colorError;
		return CHECK_USERNAME = false;
	}
	if (name.length >= 8 && name.length < 50) {
		errorUserName.innerHTML = "Checked";
		errorUserName.style.color = colorChecked;
		return CHECK_USERNAME = true;
	}
}
/**
 * Function for event password input
 * @param {string} name
 * return true (checked) or false (inputPassword Fail)
 */
function isInputPassword(name) {
	var errorPassword = document.getElementById("errorpassword");
	console.log(name.length);
	if (name.length < 8) {
		errorPassword.innerHTML = "Password lenght min 8 letter";
		errorPassword.style.color = colorError;
		return CHECK_PASSWORD = false;
	}
	if (name.length > 50) {
		errorPassword.innerHTML = "Password lenght max 50 letter";
		errorPassword.style.color = colorError;
		return CHECK_PASSWORD = false;
	}
	if (isSpecialCharacterRegExp(name)) {
		errorPassword.innerHTML = "Password contains `~!#$%^&*()+=[{]}'<,>?/\";:";
		errorPassword.style.color = colorError;
		return CHECK_PASSWORD = false;
	}
	if (name.length >= 8 && name.length < 50) {
		errorPassword.innerHTML = "Checked";
		errorPassword.style.color = colorChecked;
		CHECK_PASSWORD = true;
		console.log(CHECK_PASSWORD);
		return CHECK_PASSWORD;

	}

}
/**
 * Function for event email input
 * @param {string} name
 * return true (checked) or false (inputEmail Fail)
 */
function isInputEmail(name) {
	var errorEmail = document.getElementById("erroremail");
	console.log(name.length);
	if (isSpecialCharacterRegExp(name) || (!isEmailRegExp(name))) {
		errorEmail.innerHTML = "Fail, please check again!!!";
		errorEmail.style.color = colorError;
		return CHECK_EMAIL = false;
	}
	if (isEmailRegExp(name)) {
		errorEmail.innerHTML = "Checked";
		errorEmail.style.color = colorChecked;
		return CHECK_EMAIL = true;
	}
}
/**
 * Function for check special character by regex `~!#$%^&*()+=[{]}\'<,>?/";:
 * @param {String} stringDay is format
 * @return {boolean} true if stringDay correct else return false
 */
function isSpecialCharacterRegExp(stringDay) {
	// Check day of user input with RegExp
	var rule = /\`|\~|\!|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\>|\?|\/|\"|\;|\:|\s/g;
	var checkRegex = new RegExp(rule);
	// begin check data with format
	if (!checkRegex.test(stringDay)) {
		return false;
	}
	return true;
}
/**
 * Function for check email by regex
 * @param {String} stringDay is format
 * @return {boolean} true if stringDay correct else return false
 */
function isEmailRegExp(stringDay) {
	// Check day of user input with RegExp
	var rule = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
	var checkRegex = new RegExp(rule);
	// begin check data with format
	if (!checkRegex.test(stringDay)) {
		return false;
	}
	return true;
}
/**
 * Function for event user input
 * @param {number} day
 * Call to restartCalendar() when finish
 */
function isUserInput(day) {
	if (isFormatAndLimit(day)) {
		notificationInDisplay(true);
		restartCalendar();
		return CHECK_DATE = true;
	}
	notificationInDisplay(false);
	restartCalendar();
	return CHECK_DATE = false;
}
/**
 * Function for notification in display
 * @param {boolean} isDay
 * if false, notificaion will change
 */
function notificationInDisplay(isDay) {
	notification.innerHTML = "Checked (MM/DD/YYYY)";
	notification.style.color = "green";
	if (!isDay) {
		notification.innerHTML = "Fail, please check again (MM/DD/YYYY)!!!";
		notification.style.color = "red";
	}
}
/**
 * Function for check data format user input
 * @param {String} stringDay is format shortDate
 * @return {boolean} true if stringDay correct else return false
 */
function isFormatAndLimit(stringDay) {
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
/**
 * Function check day max in month
 * @param {number} month
 * @param {number} year
 * @return {number} day max
 */
function dayOfMonth(month,year) {
	switch (month) {
		case 1, 3, 5, 7, 8, 10, 12:
			return 31;
		case 4, 6, 9, 11:
			return 30;
		case 2: {
			if (testLeapYear(year)) {
				return 29;
			}
			return 28;
		}
	}
}
/**
 * Function test leap year
 * @param {number} year
 * @return {boolean} true or false
 */
function testLeapYear(year) {
	if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
		return true;
	}
	return false;
}