var slide = (function() {

	var imageCurrent = 0;//defaule image current is image0
	var timeAutoSlice = 2000;//4s
	var timeOut;// Variable contains auto slice
	var checkMouse = true;// check mouseover and mouseout at mini image
	var speedSlice = 500;

	// get Element from html
	var image = $(".slide");
	var imageMini = $(".slide_mini");
	var sliceWidth = $("#window").width();
	var container = $(".container");

	/**
	 * Function handle next image and auto slice
	 */
	 function privateNext() {
	 	imageCurrent++;
	 	if (imageCurrent > image.length - 1) {
	 		imageCurrent = 0;
	 		container.animate({left: "+=" + (sliceWidth * image.length - sliceWidth)}, speedSlice);
	 	} else {
	 		container.animate({left: "-=" + sliceWidth}, speedSlice);
	 	}
	 }

	 /**
	  * Function handle previous image and auto slice
	  */
	 function privatePrevious() {
	 	imageCurrent--;
	 	if (imageCurrent < 0) {
	 		imageCurrent = image.length - 1;
	 		container.animate({left: "-=" + (sliceWidth * image.length - sliceWidth)}, speedSlice);
	 	} else {
	 		container.animate({left: "+=" + sliceWidth}, speedSlice);
	 	}
	 }

	/**
	 * Funtion handle event click miniImage
	 */
	 function privateClickMiniImage(index) {
	 	console.log("index = " + index);
	 	container.animate({left: "+=" + (sliceWidth * (imageCurrent - index))}, speedSlice);// index 1->4 but imageCurrent 0->3 so + 1
	 	imageCurrent = index;
	 }

	/**
	 * Function to blur image
	 * param {number} numberOfImage is sequence number of the image
	 */
	 function blurMiniImage() {
	 	imageMini.css("opacity","0.5");// blur all mini image
	 	imageMini.eq(imageCurrent).css("opacity","1");
	 }

	/**
	 * Function to blur image
	 * param {number} numberOfImage is sequence number of the image
	 */
	 function blurImage() {
	 	image.css("opacity","0");// blur all mini image
	 	image.eq(imageCurrent).css("opacity","1");
	 }

	/**
	 * Function for event reset timeout to auto slice
	 */
	function resetTimeout() {
		clearTimeout(timeOut);
		timeOut = setTimeout(function() {publicNext();}, timeAutoSlice);
	}

	/* Public method next and previous */
	function publicNext() {
		privateNext();
		blurMiniImage();
		blurImage();
		resetTimeout();
	}

	function publicPrevious() {
		privatePrevious();
		blurMiniImage();
		blurImage();
		resetTimeout();
	}
	
	function publicClickMiniImage(index) {
		privateClickMiniImage(index);
		blurMiniImage();
		blurImage();
		resetTimeout();
	}

	/* Return */
	return {
		next: publicNext,
		pre: publicPrevious,
		clickMiniImage: publicClickMiniImage
	};

})();

$(document).ready(function() {
	slide.next();
	$("#pre").click(function() {
		slide.pre();
	});
	$("#next").click(function() {
		slide.next();
	});
	$(".slide_mini").click(function () {
		console.log($(".slide_mini").index(this));
		slide.clickMiniImage($(".slide_mini").index(this));
	});
});