var check1 = true;
var check2 = true;
var check3 = true;
function click1(id) {
	if(id == 1) {
		if(check1) {
				document.getElementById("content-1").style.display = "none";
				document.getElementById("content-11").style.background = "url(image/top-movie-trailers-arrows.gif) 0 -20px no-repeat";
		}
		else {
				document.getElementById("content-1").style.display = "block";
				document.getElementById("content-11").style.background = "url(image/top-movie-trailers-arrows.gif) 0 0px no-repeat";
			}
		check1 = !check1;
	}
	if(id == 2) {
		if(check2) {
				document.getElementById("content-2").style.display = "none";
				document.getElementById("content-22").style.background = "url(image/top-movie-trailers-arrows.gif) 0 -20px no-repeat";
		}
		else {
				document.getElementById("content-2").style.display = "block";
				document.getElementById("content-22").style.background = "url(image/top-movie-trailers-arrows.gif) 0 0px no-repeat";
			}
		check2 = !check2;
	}
	if(id == 3) {
		if(check3) {
				document.getElementById("content-3").style.display = "none";
				document.getElementById("content-33").style.background = "url(image/top-movie-trailers-arrows.gif) 0 -20px no-repeat";
		}
		else {
				document.getElementById("content-3").style.display = "block";
				document.getElementById("content-33").style.background = "url(image/top-movie-trailers-arrows.gif) 0 0px no-repeat";
			}
		check3 = !check3;
	}
}


