var myVinyls = {
	"Xuất sắc": 10,
	"Tốt": 20,
	"Trung Bình": 10,
	"Kém": 60
};

var options = {
	canvas: canvasChart1,
	descript: discription,
	data: myVinyls,
	color: ["#4267b1","#ff1100", "#ff9800","#189747"]
};

var chart = (function() {
	var canva = options.canvas;
	var ctx = canva.getContext("2d");
	var data = options.data;
	var colors = options.color;
	var descript = options.descript;

	/**
	 * Funtion to draw Arc shape
	 * @param {canvas} ctx
	 * @param {number} centerX of circle in x-axis
	 * @param {number} centerY of circle in y-axis
	 * @param {number} radius of cirle 
	 * @param {number} angleStart
	 * @param {number} angleEnd
	 * @param {color} color of arc shape
	 */
	drawPieSlice = function(ctx, centerX, centerY, radius, angleStart, angleEnd, color) {
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.moveTo(centerX, centerY);
		ctx.arc(centerX, centerY, radius, angleStart, angleEnd);
		ctx.closePath();
		ctx.fill();
	}
	drawPercent = function(centerX, centerY, String) {
		ctx.fillStyle = "#000";
		ctx.font = "30px Arial";
		ctx.fillText(String + "%", centerX + 25, centerY + 25);
	}

	/**
	 * Function to set info end call drawPieSlice
	 */
	 privateChart1 = function() {
		var totalVal = 0;
		var colorIndex = 0;
		for (var temp in data) {
			var val = data[temp];
			totalVal += val;
		}
		var angleStart = -Math.PI/2;
		for (var temp in data) {
			var val = data[temp];
			var angleEnd = Math.PI*2*val/totalVal;
			drawPieSlice(
				ctx,
				canva.width/2,
				canva.height/2,
				Math.min(canva.width/2, canva.height/2),
				angleStart,
				angleStart + angleEnd,
				colors[colorIndex]
			);
			console.log(Math.abs((angleEnd * canva.width - 150)%(canva.width)));
			angleStart += angleEnd;
			colorIndex++;
		}
	}
	/**
	 * Function draw percent 
	 */
	 privateDrawPercent = function() {
	 	
	 }
	return {
		draw: privateChart1
	}
})();
	chart.draw();