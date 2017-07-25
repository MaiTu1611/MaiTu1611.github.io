var score = 300;// score of game
var heart = 3;// Times played
var speed = 2;// speed of game
var monterSize = 60;// size monter
var level = 1;// level of game
var countMonter = 0;// count monter show in display
var endGame = false;// check gameover
var isPause = false;// check pause
/* get element canvas */
var canvas = $("canvas")[0];
canvas.width = 600;
canvas.height = 600;
var context = canvas.getContext("2d");
/*=========Image Menu and Background==========*/
var backGround = new Image();
backGround.src = "image/bg.png";
var backGroundGameover = new Image();
backGroundGameover.src = "image/bgGameover.png";
var pauseIcon = new Image();
pauseIcon.src = "image/pauseIcon.png";
var refreshIcon = new Image();
refreshIcon.src = "image/refreshIcon.png";
var boomIcon = new Image();
boomIcon.src = "image/boomIcon.png";
/*==============Image Monter=================*/
// set image to monter1
var monter1Image = new Image();
monter1Image.src = "image/monster1.png";
// set image to monter2
var monter2Image = new Image();
monter2Image.src = "image/monster2.png";
// set image to monter3
var monter3Image = new Image();
monter3Image.src = "image/monster3.png";
// set image to monter4
var monter4Image = new Image();
monter4Image.src = "image/monster4.png";
// set image to monter5
var monter5Image = new Image();
monter5Image.src = "image/monster5.png";
// set image to monter6
var monter6Image = new Image();
monter6Image.src = "image/monster6.png";
// set image to monter7
var monter7Image = new Image();
monter7Image.src = "image/monster7.png";
// set image to monter8
var monter8Image = new Image();
monter8Image.src = "image/monster8.png";

/* Create requestAnimationFrames for browers */
var reqAnimation = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
/* Create cancalAnimationFrames for browers */
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
/**
 * function init before start game
 */
function startGame() {
	console.log(score + " " + heart);
	if (score < 10 || heart < 0) {
		if (score < 0) {
			score = 0;
		}
		gameOver();
		//cancelAnimationFrame(reqAnimation);
		endGame = true;
	} else {
		endGame = false;
		if (isPause == false) {
   			drawHeader();
    		drawGame();
    	}
    	reqAnimation(startGame);
	}
}
/**
 * Function draw header position
 */
function drawHeader() {
	//	clear();
    context.drawImage(backGround, 0, 0, 600, 600);
    context.drawImage(pauseIcon, 440, 20, 40, 40);
    context.drawImage(refreshIcon, 490, 20, 40, 40);
    context.drawImage(boomIcon, 540, 20, 40, 40);
    context.fillStyle = "#17b287";
	context.font = "20px Arial bold";
    context.fillText("SCORE: " + score, 20, 20);
    context.fillText("HEART: " + heart, 20, 50);
}
/**
 * Function draw game position
 */
function drawGame() {
	var temp = 0; // save count monter
	for (var i = 0; i < 8; i++) {
		if (monter[i].isShow) {
			temp ++;
    		context.drawImage(monter[i].ImageMonter, monter[i].x, monter[i].y, monterSize, monterSize);
    		monter[i].move();
		}
	}
	countMonter = temp;

}
/**
 * Function show random monter
 */
 function randomMonter() {
 	var number = Math.floor((Math.random()*8)+1);
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
 		default:
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
function monter(beginX, beginY, x, y, moveToX, moveToY, finishX, finishY, dieX, dieY, isShow, isDie, ImageMonter) {
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
	this.ImageMonter = ImageMonter;
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
	console.log("speed in move method: " + speed);
	//console.log("moveToX: " + this.moveToX + " moveToY: " + this.moveToY);
	// move following X
	if (this.x == this.moveToX) {
			this.x = this.moveToX;
	} else {
		if (this.x > this.moveToX) {
			this.x -= speed;
		} else {
			this.x += speed;
		}
	}
	//console.log("x : " + this.x + " moveToX: " + this.moveToX);
	// move following Y
	if (this.y == this.moveToY) {
		this.y = this.moveToY;
	} else {
		if (this.y > this.moveToY) {
			this.y -= speed;
		} else {
			this.y += speed;
		}
	}
	//console.log("y : " + this.y + " moveToY: " + this.moveToY);
	// when monster return position begin and revise the original value
	if (this.x == this.beginX && this.y == this.beginY) {
		score -= 10 * level;
		this.isShow = false;
		this.x = this.beginX;
		this.y = this.beginY;
		this.moveToX = this.finishX;
		this.moveToY = this.finishY;
		randomMonter();
	}
}
var monter1 = new monter(60,  60,  60,  60,  240, 240, 240, 240, 0, 0, true,  false, monter1Image);// monter 1 left-top
var monter2 = new monter(290, 60,  290, 60,  290, 240, 290, 240, 0, 0, false, false, monter2Image);// monter 2 center-top
var monter3 = new monter(500, 60,  500, 60,  260, 260, 260, 260, 0, 0, false, false, monter3Image);// monter 3 right-top
var monter4 = new monter(60,  280, 60,  280, 240, 280, 240, 280, 0, 0, false, false, monter4Image);// monter 4 center-left
var monter5 = new monter(500, 280, 500, 280, 300, 280, 300, 280, 0, 0, false, false, monter5Image);// monter 5 center-right 
var monter6 = new monter(60,  500, 60,  500, 260, 260, 260, 260, 0, 0, false, false, monter6Image);// monter 6 left-bottom
var monter7 = new monter(290, 500, 290, 500, 290, 260, 290, 260, 0, 0, false, false, monter7Image);// monter 7 center-bottom
var monter8 = new monter(500, 500, 500, 500, 260, 260, 260, 260, 0, 0, false, false, monter8Image);// monter 1 left-top
var monter = [monter1, monter2, monter3, monter4, monter5, monter6, monter7, monter8];
/**
 * Functionc handle event click in canvas
 */
canvas.addEventListener("click",function(e) {
	var mouseX = e.pageX - canvas.offsetLeft;
	var mouseY = e.pageY - canvas.offsetTop;
	//console.log(mouseX + " " + mouseY);
	clickMenu(mouseX, mouseY);
	console.log(isPause);
	if (isPause == false) {
		heart--;
		console.log("HEART : " + heart);
		for (var i = 0; i < 8; i++) {
			clickMonter(mouseX, mouseY, monter[i]);
		}
	}
});
/**
 * Function handle event click monter
 * @param {number} position mouse X
 * @param {number} position mouse Y
 * @param {monter} 
 */
function clickMonter(mouseX, mouseY, monter) {
	if (mouseX > monter.x && mouseX <= monter.x + monterSize && mouseY > monter.y && mouseY <= monter.y + monterSize) {
		heart++;
		score += 10 * level;
		monter.isShow = false;
		monter.dieX = mouseX;
		monter.dieY = mouseY;
		monter.x = monter.beginX;
		monter.y = monter.beginY;
		monter.moveToX = monter.finishX;
		monter.moveToY = monter.finishY;
		/* set again speed and level*/
		var temp = Math.floor(score/100);
		if (level < temp && temp < 3) {
			level = temp;
			speed += 2;
		}
		/* Create new monter when monter current die*/
		for (var i = 0; i < level; i++) {
			randomMonter();
		}
	}
}
/**
 * Function handle event click restart
 * @param {number} position mouse X
 * @param {number} position mouse Y
 */
function clickMenu(mouseX, mouseY) {
	if (endGame) {
		clickRestart(mouseX, mouseY);
	}
	else {
		clickRestart(mouseX, mouseY);
		clickPause(mouseX, mouseY);
		clickBoom(mouseX, mouseY);
	}
}
/**
 * Function handle event click restart
 * @param {number} position mouse X
 * @param {number} position mouse Y
 */
function clickRestart(mouseX, mouseY) {
	if (mouseX > 490 && mouseX <= 540 && mouseY > 20 && mouseY <= 60) {
		for (var i = 0; i < 8; i++) {
			setDefaultMonter(monter[i]);
		}
		isPause = false;
		score = 100;
		heart = 3;
		level = 1;
		monter1.isShow = true;
		startGame();
		//reqAnimation(startGame);
	}
}
/**
 * Function handle event click pause
 * @param {number} position mouse X
 * @param {number} position mouse Y
 */
function clickPause(mouseX, mouseY) {
	console.log("passe");
	console.log(score + " " + heart);
	if (mouseX > 440 && mouseX <= 480 && mouseY > 20 && mouseY <= 60) {
		isPause = !isPause;
		if(isPause == false) {
			heart++;
		}
	}
}
/**
 * Function handle event click boom
 * @param {number} position mouse X
 * @param {number} position mouse Y
 */
function clickBoom(mouseX, mouseY) {
	if (mouseX > 540 && mouseX <= 580 && mouseY > 20 && mouseY <= 60) {

		score = 100;
		heart = 3;
		speed = 2;
		level = 1;
		reqAnimation(startGame);
		randomMonter();
	}
}
/**
 * Function gameover
 */
function gameOver() {
	for (var i = 0; i < 8; i++) {
		monter[i].isShow = false;
	}
	context.drawImage(backGroundGameover, 0, 0, 600, 600);
    context.drawImage(refreshIcon, 490, 20, 40, 40);
	context.fillStyle = "#edd057";
	context.font = "70px Arial bold";
    context.fillText("GAMEOVER", 100, 300);
    context.font = "30px Arial bold";
    context.fillText("SCORE: " + score, 200, 350);
}
/**
 * set default monter
 * @param {monterSD} monter will set default
 */
function setDefaultMonter(monterSetDefault) {
	monterSetDefault.x = monterSetDefault.beginX;
	monterSetDefault.y = monterSetDefault.beginY;
	monterSetDefault.moveToX = monterSetDefault.finishX;
	monterSetDefault.moveToY = monterSetDefault.finishY;
	monterSetDefault.isShow = false;
	speed = 2;
}