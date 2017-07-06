var CHECK1 = true;
var CHECK2 = true;
var CHECK3 = true;
/*
    Function check id, then show or hidden content id
*/
function click1(id) {
	if (id == 1) {
		if (CHECK1) {
				document.getElementById("content-1").style.display = "none"; // hidden content
				document.getElementById("content-11").style.background = "url(image/top-movie-trailers-arrows.gif) 0 -20px no-repeat";// change icon on title
		}
		else {
				document.getElementById("content-1").style.display = "block";// show content
				document.getElementById("content-11").style.background = "url(image/top-movie-trailers-arrows.gif) 0 0px no-repeat";// change icon on title
		}
		CHECK1 = !CHECK1;
	}
	if (id == 2) {
		if (CHECK2) {
				document.getElementById("content-2").style.display = "none";
				document.getElementById("content-22").style.background = "url(image/top-movie-trailers-arrows.gif) 0 -20px no-repeat";
		}
		else {
				document.getElementById("content-2").style.display = "block";
				document.getElementById("content-22").style.background = "url(image/top-movie-trailers-arrows.gif) 0 0px no-repeat";
		}
		CHECK2 = !CHECK2;
	}
	if (id == 3) {
		if (CHECK3) {
				document.getElementById("content-3").style.display = "none";
				document.getElementById("content-33").style.background = "url(image/top-movie-trailers-arrows.gif) 0 -20px no-repeat";
		}
		else {
				document.getElementById("content-3").style.display = "block";
				document.getElementById("content-33").style.background = "url(image/top-movie-trailers-arrows.gif) 0 0px no-repeat";
		}
		CHECK3 = !CHECK3;
	}
}


