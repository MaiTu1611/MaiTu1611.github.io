$("documnent").ready(function() {
/*
 * Function handle event click button submit
 * If true, form would request to server
 */
$("#submit").click(function () {
	var checkUser =validateUser();
	var checkPassword =validatePassword();
	var checkEmail =validateEmail();
	var checkDate =validateDate();
	var error = $("#errorsubmit");
	console.log(checkUser + checkPassword + checkEmail + checkDate);
	if (checkUser && checkPassword && checkEmail && checkDate) {
		var url = "";
		var data = "";
		error.load(url, data, function(response, status) {
			error.html(status);
		});
	}
})
/* 
 * Function check validate user name
 * return true or false
 */
 function validateUser() {
 	var username = $("#inputUser").val();//get value at input username
 	var error = $("#erroruser");
 	if (username.length < 8) {
 		error.html("Username lenght min 8 letter");
 		return false;
 	}
 	if (username.length > 50) {
 		error.html("Username lenght max 50 letter");
 		return false;
 	}
 	if (isSpecialCharacterRegExp(username)) {
 		error.html("Password contains `~!#$%^&*()+=[{]}'<,>?/\";:");
 		return false;
 	}
 	error.html("Checked");
 	return true;
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
/* 
 * Function check validate password
 * return true or false
 */
 function validatePassword() {
 	var password = $("#inputPassword").val();//get value at input username
 	var error = $("#errorpassword");
 	if (password.length < 8) {
 		error.html("Username lenght min 8 letter");
 		return false;
 	}
 	if (password.length > 50) {
 		error.html("Username lenght max 50 letter");
 		return false;
 	}
 	if (isSpecialCharacterRegExp(password)) {
 		error.html("Password contains `~!#$%^&*()+=[{]}'<,>?/\";:");
 		return false;
 	}
 	error.html("Checked");
 	return true;
 }
/**
 * Function for check email by regex
 * @return {boolean} true if stringDay correct else return false
 */
function validateEmail() {
	var stringDay = $("#inputEmail").val();
	var error = $("#erroremail");
	// Check day of user input with RegExp
	var rule = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
	var checkRegex = new RegExp(rule);
	// begin check data with format
	if (!checkRegex.test(stringDay)) {
		error.html("Please check again!!!");
		return false;
	}
	error.html("Checked");
	return true;
}
/*
 * Function check date by regex and Date()
 * return true if correct
 */
 function validateDate() {
 	var stringDay = $("#inputBirthday").val();//get value at input date
 	var error = $("#notification");
 	// Check day of user input with RegExp
	var rule = /^(\d{1,2})([\.\-\/\\ ])(\d{1,2})([\.\-\/\\ ])(\d{4})$/;// MM/DD/YYYY
	var checkRegex = new RegExp(rule);
	console.log(stringDay);
	var dayTest = new Date(stringDay);
	console.log(dayTest);
	// begin check data with format
	if (!checkRegex.test(stringDay) || dayTest == "Invalid Date") {
		error.html("Please check format again (MM/DD/YYYY)!!!");
		return false;
	}
	error.html("Checked MM/DD/YYYY");
	return true;
 }
});