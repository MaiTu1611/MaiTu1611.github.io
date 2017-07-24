var score = 0;// score of game
var speed = 2;// speed of game

var backGround = new Image();
backGround.src = "image/bg.png";
var pauseIcon = new Image();
pauseIcon.src = "image/pauseIcon.png";
var refreshIcon = new Image();
refreshIcon.src = "image/refreshIcon.png";
var boomIcon = new Image();
boomIcon.src = "image/boomIcon.png";
var canvas = $("canvas")[0];
canvas.width = 600;
canvas.height = 600;
context = canvas.getContext("2d");
var monter1Image = new Image();
monter1Image.src = "image/monster1.png";

var monter1Image = new Image();
monter1Image.src = "image/monster1.png";

var monter2Image = new Image();
monter2Image.src = "image/monster2.png";

var monter3Image = new Image();
monter3Image.src = "image/monster3.png";

var monter4Image = new Image();
monter4Image.src = "image/monster4.png";

var monter5Image = new Image();
monter5Image.src = "image/monster5.png";

var monter6Image = new Image();
monter6Image.src = "image/monster6.png";

var monter7Image = new Image();
monter7Image.src = "image/monster7.png";

var monter8Image = new Image();
monter8Image.src = "image/monster8.png";

var request = window.requestAnimationFrames
_reqAnimation = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
/**
 * function init before start game
 */
function startGame() {
    drawHeader();
    drawGame();
    _reqAnimation(startGame);
}
/**
 * Function draw header position
 */
function drawHeader() {
    context.drawImage(backGround, 0, 0, 600, 600);
    context.drawImage(pauseIcon, 440, 20, 40, 40);
    context.drawImage(refreshIcon, 490, 20, 40, 40);
    context.drawImage(boomIcon, 540, 20, 40, 40);
    context.fillStyle = "#17b287";
	context.font = "20px Arial bold";
    context.fillText("SCORE: " + score, 40, 40);
}
/**
 * Function draw game position
 */
function drawGame() {
    if (monter1.isShow) {
    	context.drawImage(monter1Image, monter1.x, monter1.y, 50, 50);
    	monter1.move();
    }
    if (monter2.isShow) {
    	context.drawImage(monter2Image, monter2.x, monter2.y, 50, 50);
    	monter2.move();
	}
	if (monter3.isShow) {
	    context.drawImage(monter3Image, monter3.x, monter3.y, 50, 50);
	    monter3.move();
	}
	if (monter4.isShow) {
	    context.drawImage(monter4Image, monter4.x, monter4.y, 50, 50);
	    monter4.move();
	}
	if (monter5.isShow) {
	    context.drawImage(monter5Image, monter5.x, monter5.y, 50, 50);
	    monter5.move();
	}
	if (monter6.isShow) {
	    context.drawImage(monter6Image, monter6.x, monter6.y, 50, 50);
	    monter6.move();
	}
	if (monter7.isShow) {
	    context.drawImage(monter7Image, monter7.x, monter7.y, 50, 50);
	    monter7.move();
	}
	if (monter8.isShow) {
	    context.drawImage(monter8Image, monter8.x, monter8.y, 50, 50);
	    monter8.move();
	}
}
/**
 * Function show random monter
 */
 function randomMonter() {
 	var number = Math.floor(Math.random()*8);
 	switch (number) {
 		case 1:
 			monter1.isShow = true;
 			break;
 		case 2:
 			monter2.isShow = true;
 			break;
 		case 3:
 			monter3.isShow = true;
 			break;
 		case 4:
 			monter4.isShow = true;
 			break;
 		case 5:
 			monter5.isShow = true;
 			break;
 		case 6:
 			monter6.isShow = true;
 			break;
 		case 7:
 			monter7.isShow = true;
 			break;
 		case 8:
 			monter8.isShow = true;
 			break;
 	}
 }
/**
 * Class Monster
 * @param {number} position beginX monter
 * @param {number} position beginY of monter
 * @param {number} position X of monter
 * @param {number} position Y of monter
 * @param {number} position moveToX of monter
 * @param {number} position moveToY of monter
 * @param {number} position finishX of monter (default X max monter)
 * @param {number} position finishY of monter (default Y max monter)
 * @param {number} position dieX of monter
 * @param {number} position dieY of monter
 * @param {boolean} show or hiden monter
 * @param {boolean} die or not die
 */
function monter(beginX, beginY, x, y, moveToX, moveToY, finishX, finishY, dieX, dieY, isShow, isDie) {
	this.beginX = beginX;
	this.beginY = beginY;
	this.x = x;
	this.y = y;
	this.moveToX = moveToX;
	this.moveToY = moveToY;
	this.finishX = finishX;
	this.finishY = finishY;
	this.dieX = dieX;
	this.dieY = dieY;
	this.isShow = isShow;
	this.isDie = isDie;
}
/**
 * add funtion move give monster
 */
monter.prototype.move = function () {
	// when monter move maximun
	if (this.x == this.moveToX && this.y == this.moveToY) {
		this.x = this.moveToX;
		this.y = this.moveToY;
		this.moveToX = this.beginX;
		this.moveToY = this.beginY;
	}
	// move following X
	if (this.x < this.moveToX) {
		this.x += speed;
	} else {
		this.x -= speed;
	}
	// move following Y
	if (this.y < this.moveToY) {
		this.y += speed;
	} else {
		this.y -= speed;
	}
	// when monster return position begin and revise the original value
	if (this.x == this.beginX && this.y == this.beginY) {
		this.isShow = false;
		this.x = this.beginX;
		this.y = this.beginY;
		this.moveToX = this.finishX;
		this.moveToY = this.finishY;
		randomMonter();
	}
}
var monter1 = new monter(60,  60, 60,  60, 260, 260, 260, 260, 0, 0, true, false);// monter 1 left-top
var monter2 = new monter(290, 60, 290, 60, 290, 260, 290, 260, 0, 0,false, false);// monter 2 center-top
var monter3 = new monter(500, 60, 500, 60, 260, 260, 260, 260, 0, 0, false, false);// monter 3 right-top
var monter4 = new monter(60,  220, 60, 220, 260, 220, 260, 220, 0, 0, false, false);// monter 4 center-left
var monter5 = new monter(500, 220, 500, 220, 260, 220, 260, 220, 0, 0, false, false);// monter 5 center-right 
var monter6 = new monter(60, 500, 60, 500, 260, 260, 260, 260, 0, 0, false, false);// monter 6 left-bottom
var monter7 = new monter(290, 500, 290, 500, 290, 260, 290, 260, 0, 0, false, false);// monter 7 center-bottom
var monter8 = new monter(500, 500, 500, 500, 260, 260, 260, 260, 0, 0,false, false);// monter 1 left-top