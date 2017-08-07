var myData = {
	"Xuất sắc": 10,
	"Tốt": 20,
	"Trung Bình": 10,
	"Kém": 60
};

var options = {
	canvas: canvasChart1,
	descript: discription,
	data: myData,
	color: ["#4267b1","#ff1100", "#ff9800","#189747"],
	radiusMiniCircle: 0.5
};

var chart = (function() {
	var canva = options.canvas;
	canva.width = 300;
	canva.height = 300;
	var ctx = canva.getContext("2d");
	var data = options.data;
	var colors = options.color;
	var descript = options.descript;
	var radiusMiniCircle = options.radiusMiniCircle;
	var radiusCircle = Math.min(canva.width/2, canva.height/2);
	var flag = true;
	//  check value input
	for (var i in data) {
		if (data[i] <= 0) {
			flag = false;
		}
	}
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

			/* DrawCircle */
			drawPieSlice(
				ctx,
				canva.width/2,
				canva.height/2,
				radiusCircle,
				angleStart,
				angleStart + angleEnd,
				colors[colorIndex]
			);

			/* DrawPercent */
			var currentX = canva.width / 2 + (radiusCircle / 2) * Math.cos(angleStart + angleEnd / 2);
			var currentY = canva.height / 2 + (radiusCircle / 2) * Math.sin(angleStart + angleEnd / 2);

			if (radiusMiniCircle) { // if mini circle exist 
				var temp = radiusCircle * radiusMiniCircle / 2;
				currentX = canva.width / 2 + (temp + radiusCircle / 2) * Math.cos(angleStart + angleEnd / 2);
				currentY = canva.height / 2 + (temp + radiusCircle / 2) * Math.sin(angleStart + angleEnd / 2);
			}

			ctx.fillStyle = "#000";
			ctx.font = "20px Arial";
			ctx.fillText(val + "%", currentX - 15, currentY + 4);
			angleStart += angleEnd;
			colorIndex++;
		}
	}

	/**
	 * Function to draw circle mini in center chart1
	 */
	 privateMiniCircle = function() {
	 	 drawPieSlice(
	 	 	ctx,
			canva.width/2,
			canva.height/2,
			radiusMiniCircle * radiusCircle,
			0,
			Math.PI * 2,
			"#fff"
			);
	 }

	 /**
	  * Function draw description
	  */
	  privateDrawDescription = function() {
	  		var colorIndex = 0;
	  		var tempHTML = ""; // save String HTML to add file html
	  		for(var temp in data) {
	  			tempHTML += "<div><span style='display:inline-block;width:20px;background-color:" + colors[colorIndex++] + ";'>&nbsp;&nbsp;&nbsp;</span>" + "  " + temp + "</div>"; 
	  		}
	  		descript.innerHTML = tempHTML;
	  }

	 /* Public function */
	 publicDrawChart = function() {
	 	if (flag) {
		 	privateChart1();
		 	privateMiniCircle();
		 	privateDrawDescription();
		} else {
			alert("Input Fail");
		}
	 }

	return {
		draw: publicDrawChart
	}
})();
$(document).ready(function() {
	chart.draw();
});	