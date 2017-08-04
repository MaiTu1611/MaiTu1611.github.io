var myData = {
	data1: [10, 102, 87, 105, 100, 123, 100, 90, 87, 91, 93, 88, 13, 15, 120, 46, 200]
}
var options = {
	canvas: canvasChart1,
	data: myData.data1,
	dataDescription: myData,
	descript: discription,
	valueMax: 150,
	color: ["#00ab06", "#4267b1", "#ff1100", "#ff9800", "#189747"],
	nameColumn : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "X", "Y", "Z", "W"]
};
var chart = (function() {
	var canva = options.canvas;
	var ctx = canva.getContext("2d");
	ctx.fillStyle = "#ff9800";
	ctx.font = "20 pt Arial";
	var data = options.data;
	var dataDescription = options.dataDescription;
	var descript = options.descript;
	var valMax = options.valueMax;
	var nameColumn = options.nameColumn;
	var colors = options.color;
	var columnRowSize = 50;// size of frame
	var stepSizeY = 10; //The distance between the horizontal lines
	var margin = 10;// Distance to write letters
	var xScale = (canva.width - columnRowSize) / data.length; // Distance raito between vertical lines
	var yScale = (canva.height - columnRowSize - margin) / valMax; //The distance raito between the horizontal lines
	console.log(xScale + " " + yScale);
	var checkFirstDraw = true;

	/**
	 * Function draw Date plot chart
	 */
	 privateChartDataPlot = function() {
	 	// tranlate and scale line because y scale with yScale
		ctx.translate(xScale, canva.height - (yScale * stepSizeY));//Draw start over from position
		ctx.scale(xScale, -yScale);// Invert the image and plot the scale of the y-axis
	 	ctx.beginPath();
	 	ctx.fillStyle = "#00ab06";	
	 	for (var i = 0; i < data.length; i++) {
	 		ctx.fillRect(i, 0, 0.4, data[i]);
	 	}
	 	checkFirstDraw = false;
	 }

	 /**
	 * Function draw Frame
	 */
	 privateFrame = function() {
	 		ctx.beginPath();
	 		var temp = 1;
	 		ctx.fillStyle = "#ff9800";
	 		for (var scale = 0; scale <= valMax + stepSizeY + 1; scale += stepSizeY) {
	 			//y = columnRowSize + (yScale * temp * stepSizeY);
	 			var distance = (yScale * temp * stepSizeY);
	 			var y = canva.height - distance; // The position y will draw next
	 			ctx.fillText(scale, margin, y);
	 			ctx.moveTo(xScale, y);
	 			ctx.lineTo(canva.width,y);
	 			temp++;
	 		}
	 		for (var i = 0; i < data.length; i++) {
	 			var x =  (i + 1) * xScale;// The position x will draw next
	 			ctx.fillText(nameColumn[i % nameColumn.length], x, canva.height);
	 		}
	 		ctx.strokeStyle = "#ff9800";
	 		ctx.stroke();
	 }

	 /**
	  * Check valueMax and valueMin
	  */
	  privateCheckValue = function() {
	  		if (!checkFirstDraw) {
	 			ctx.scale(1 / xScale, -1 / yScale);// Invert the image and plot the scale of the y-axis
		 		ctx.translate(-xScale, -(canva.height - (yScale * stepSizeY)));//Draw start over from position
		 		checkFirstDraw = true;
	 		}
	 		ctx.clearRect(0, 0, canva.width, canva.height)
;	  		for (var i = 0; i < data.length; i++) {
				if (valMax < data[i]) {
					valMax = parseInt(data[i]);
				}
			}
			stepSizeY = Math.floor(valMax/100) * 10;// change stepSizeY flow data input
			xScale = (canva.width - columnRowSize) / data.length;
			yScale = (canva.height - columnRowSize - margin) / valMax;
			data = options.data;
	 }
	 /**
	  * Function draw description
	  */
	  privateDrawDescription = function() {
	  		var colorIndex = 0;
	  		var tempHTML = ""; // save String HTML to add file html
	  		for(var temp in dataDescription) {
	  			tempHTML += "<div><span style='display:inline-block;width:20px;background-color:" + colors[colorIndex++] + ";'>&nbsp;&nbsp;&nbsp;</span>" + "  " + temp + "</div>"; 
	  		}
	  		descript.innerHTML = tempHTML;
	  }

	 /* Public function */
	 publicDrawChart = function() {
	 	privateCheckValue();
	 	privateFrame();
	 	privateChartDataPlot();
	 	privateDrawDescription();
	 }

	return {
		draw: publicDrawChart
	}
})();

$(document).ready(function() {
	chart.draw();
	$("#insert").click(function() {
		var val = $("#inputValue").val();
		myData.data1.push(parseInt(val));
		chart.draw();
	});
})