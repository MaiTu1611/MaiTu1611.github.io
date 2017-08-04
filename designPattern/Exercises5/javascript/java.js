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
	color3D: ["#0055ff","#d03227", "#ffc107","#1a7b1e"],
	radiusMiniCircle: 0.5
};

var chart = (function() {
	var canva = options.canvas;
	var ctx = canva.getContext("2d");
	var data = options.data;
	var colors = options.color;
	var colors3D = options.color3D;
	var descript = options.descript;
	var radiusMiniCircle = options.radiusMiniCircle;
	var radiusCircle = Math.min(canva.width/12, canva.height/12);
	var newCenterCircle = 0;

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
		ctx.ellipse(centerX, centerY, radius * 3.5, radius, 0, angleStart, angleEnd);
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
		for (var i = 40; i > 0; i--) {
			var colorIndex3D = 0;
			var angleStart = -Math.PI/2;
			for (var temp in data) {
				var val = data[temp];
				var angleEnd = Math.PI*2*val/totalVal;
				/* DrawCircle */
				drawPieSlice(
					ctx,
					canva.width/2,
					canva.height/2 + i,
					radiusCircle,
					angleStart,
					angleStart + angleEnd,
					colors3D[colorIndex3D]
				);
				angleStart += angleEnd;
				colorIndex3D++;
			}
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
			var currentX = canva.width / 2 + (radiusCircle / 2) * Math.cos(angleStart + angleEnd / 2) * 3.5;
			var currentY = canva.height / 2 + (radiusCircle / 2) * Math.sin(angleStart + angleEnd / 2) * 1.5;
			ctx.fillStyle = "#fff";
			ctx.font = "10pt Arial";
			ctx.fillText(val + "%", currentX, currentY + 4);

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
	 	privateChart1();
	 	// privateMiniCircle();
	 	privateDrawDescription();
	 }

	return {
		draw: publicDrawChart
	}
})();
	chart.draw();