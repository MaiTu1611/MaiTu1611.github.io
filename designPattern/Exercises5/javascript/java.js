var myData = [80, 20];
var myDataTitle = ["ĐÃ ĐẠT", "CHƯA ĐẠT",];
var options = {
	canvas: canvasChart1,
	data: myData,
	dataTitle: myDataTitle,
	color3D: ["#00ccff", "#0033cc", "#ff0000", "#a00505"],
};

var chart = (function() {
	var canva = options.canvas;
	canva.width = 600;
	canva.height = 300;
	var ctx = canva.getContext("2d");
	var data = options.data;
	var dataTitle = options.dataTitle;
	var colors3D = options.color3D;
	var radius = Math.min(canva.width/2, canva.height/2);
	var centerX =  canva.width/2;
	var centerY = canva.height;
	var xScale = 1;
	var yScale = 0.4;
	var space = 15;
	var totalVal = 0;
	var colorIndex = 0;
	var angleSuccess = 0;
	var flag = true;
	//  check value input
	for (var i in data) {
		if (data[i] <= 0) {
			flag = false;
		}
	}

	function draw3DPieChart() {
		for (var temp in data)
 		{
 			var val = data[temp];
 			totalVal += val;
 		}
 		angleSuccess = 2 * Math.PI * data[0] /totalVal;
 		for(i = 100; i > 0; i--) {
	 			privateDrawChart(0, 0, 0, angleSuccess); // call function to draw % success
				privateDrawChart(space, 2, angleSuccess, -0.01); // call function to draw % fail
		}
	}

	/**
	 * Function draw % success or % fail
	 */
	privateDrawChart = function(spaceFail, colorIndex, angleStart, angleEnd) {
			ctx.save(); // save default state
			ctx.scale(xScale, yScale); // scale canvas make circle to eclipse
			ctx.beginPath(); // begin draw
			ctx.arc(centerX + spaceFail, centerY - spaceFail + i, radius, angleStart, angleEnd); //0, 2 * Math.PI * success); // draw circle
			ctx.lineTo(centerX + spaceFail, centerY - spaceFail + i); // distance between 2 block
			ctx.restore(); // Restore original state
			if (i==1) {
				ctx.fillStyle = colors3D[colorIndex]; // top of chart
			}
			else {
				ctx.fillStyle = colors3D[colorIndex + 1];
			}
			ctx.fill();
	}

	 /**
	  * Function draw description
	  */
	  privateDrawDescription = function() {
	  		var angleStart = 0;
	  		for (var temp in data) {
	  			var width = 70;
				var val = data[temp];
				var percent = val/totalVal;
				var angleEnd = Math.PI * 2 * percent;
				width = percent < 0.5 ? 100 : -100;
		  		var currentX = canva.width / 3 + (radius / 2) * Math.cos(angleStart + angleEnd / 2) + 100;
				var currentY = canva.height / 3 + (radius / 2) * Math.sin(angleStart + angleEnd / 2) * yScale + 20;
				privateDrawLine(currentX, currentY, currentX + width, currentY - 70, width, "blue");
				ctx.fillStyle = "#000";
				ctx.font = "15px Arial";
				width = percent < 0.5 ? 50 : -100;
				ctx.fillText(Math.round(percent * 100) + "% " + dataTitle[temp], currentX + width*2, currentY - 73);
				angleStart += angleEnd;
			}
	  }

	 /**
	  * Function draw line to comment percent
	  */
	 privateDrawLine = function(firstX, firstY, secondX, secondY, width, color) {
		ctx.strokeStyle = color;
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.moveTo(firstX, firstY);
		ctx.lineTo (secondX ,secondY);
		ctx.lineTo (secondX + width, secondY);
		ctx.stroke();
	}

	 /* Public function */
	 publicDrawChart = function() {
	 	if (flag) {
	 		draw3DPieChart();
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
})