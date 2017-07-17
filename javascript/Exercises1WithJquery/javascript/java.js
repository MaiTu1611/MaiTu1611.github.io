var IMAGE_CURRENT = 0;//defaule image current is image0
var TIME_AUTO_SLIDE = 3000;//4s
var TIME_OUT;// Variable contains auto slice
var CHECK_MOUSE = true;// check mouseover and mouseout at mini image

var image = $(".slide");
var image_mini = $(".slide_mini");

// Contructer, auto run when website open
showImage();

/* Function for event click button previous
 */
$("#pre").click(function() {
	IMAGE_CURRENT--;
	console.log(IMAGE_CURRENT);
	if(IMAGE_CURRENT < 0) {
		IMAGE_CURRENT = image.length - 1;
	}
	showImage();
});
/* Function for event click button next
 */
$("#next").click(function() {
	nextImage();
});
/* Function handle next image and auto slice
 */
function nextImage() {
	IMAGE_CURRENT++;
	if(IMAGE_CURRENT > image.length - 1){
		IMAGE_CURRENT = 0;
	}
	showImage();
}
/* Function for event click mini image
 */
$(".slide_mini").click(function () {
	IMAGE_CURRENT = image_mini.index(this);
	console.log(IMAGE_CURRENT);
	showImage();
});
/* Function for event hover mini image
 */
$(".slide_mini").mouseenter(function () {
	CHECK_MOUSE = false;
	blurImage(image_mini.index(this));
});
$(".slide_mini").mouseleave(function () {
	CHECK_MOUSE = true;
	blurImage(IMAGE_CURRENT);
});
/* Function for show image for events
 */
function showImage() {
	// loop to all image hidden and dim all mini image
	for (var i = 0; i < image.length; i++) {
		$(".slide").eq(i).hide();
		if (CHECK_MOUSE) {
			blurImage(i);
		}
	}
	// then show image current
	image.eq(IMAGE_CURRENT).show();
	if (CHECK_MOUSE) {
		blurImage(IMAGE_CURRENT);
	}
	resetTimeout();
}
/* 
 * Function to blur image
 * param {number} numberOfImage is sequence number of the image
 */
 function blurImage(numberOfImage) {
 	image_mini.css("opacity","0.5");// blur all mini image
 	image_mini.eq(numberOfImage).css("opacity","1");
 }
/* Function for event reset timeout to auto slice
 */
function resetTimeout() {
	clearTimeout(TIME_OUT);
	TIME_OUT = setTimeout(function() {nextImage();},TIME_AUTO_SLIDE);
}