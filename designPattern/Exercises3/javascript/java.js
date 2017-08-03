var myData = [10, 102, 87, 105, 100, 123, 100, 90, 87, 91, 93, 88, -10 , 13, 15, 120, 46, 200];
var options = {
	canvas: canvasChart1,
	descript: discription,
	data: myData,
	valueMax: 150,
	valueMin: -50,
	color: ["#4267b1","#ff1100", "#ff9800","#189747"],
	month : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
};
var chart = (function() {
	var canva = options.canvas;
	var ctx = canva.getContext("2d");
	ctx.fillStyle = "#ff9800";
	ctx.font = "20 pt Verdana";
	var data = options.data;
	var colors = options.color;
	var descript = options.descript;
	var valMax = options.valueMax;
	var valMin = options.valueMin;
	var month = options.month;
	var columnRowSize = 50;// size of frame
	var stepSizeY = 10; //The distance between the horizontal lines
	var margin = 10;// Distance to write letters
	var xScale = (canva.width - columnRowSize) / data.length; // Distance raito between vertical lines
	var yScale = (canva.height - columnRowSize - margin) / (valMax - valMin); //The distance raito between the horizontal lines
	console.log(xScale + " " + yScale);
	var checkFirstDraw = true;

	/**
	 * Function draw Date plot chart
	 */
	 privateChartDataPlot = function() {

	 	// tranlate and scale line because y scale with yScale
		ctx.translate(xScale, canva.height + (valMin * yScale));//Draw start over from position
		ctx.scale(1, -1 * yScale);// Invert the image and plot the scale of the y-axis
	 	ctx.beginPath();
	 	ctx.moveTo(0, data[0]);
	 	for (var i = 1; i < data.length; i++) {
	 		ctx.lineTo(i * xScale, data[i]);
	 	}
	 	ctx.strokeStyle = "#00ab06";
	 	ctx.stroke();
	 	checkFirstDraw = false;
	 }

	 /**
	 * Function draw Frame
	 */
	 privateFrame = function() {
	 		ctx.beginPath();
	 		/* Draw line vertical : x ramains the same and only y change*/
	 		for (var i = 0; i < data.length; i++) {
	 			var x =  (i + 1) * xScale;// The position x will draw next
	 			console.log("x= " + x + " xScale= " + xScale);
	 			ctx.fillText(month[i % 12], x, columnRowSize - margin);
	 			ctx.moveTo(x, columnRowSize);
	 			ctx.lineTo(x, canva.height - margin);
	 		}
	 		/* Draw line horizontal : x change and only y remain the same*/
	 		var temp = 0;
	 		console.log(valMax + " " + valMin);
	 		for (var scale = valMax; scale > valMin; scale -= stepSizeY) {
	 			var y = columnRowSize + (yScale * temp * stepSizeY);// The position y will draw next
	 			ctx.fillText(scale, margin, y + margin);
	 			ctx.moveTo(xScale, y);
	 			ctx.lineTo(canva.width,y);
	 			temp++;
	 		}
	 		ctx.strokeStyle = "#ff9800";
	 		ctx.stroke();
	 }
	 /**
	  * Check valueMax and valueMin
	  */
	  privateCheckValue = function() {
	  		if (!checkFirstDraw) {
	 			ctx.scale(1, -1 / yScale);// Invert the image and plot the scale of the y-axis
		 		ctx.translate(-xScale, -(canva.height + (valMin * yScale)));//Draw start over from position
		 		checkFirstDraw = true;
	 		}
	 		ctx.clearRect(0, 0, canva.width, canva.height)
;	  	for (var i = 0; i < data.length; i++) {
			if (valMax < data[i]) {
				valMax = data[i];
			}
			if (valMin > data[i]) {
				valMin = data[i];
			}
		}
		xScale = (canva.width - columnRowSize) / data.length;
		yScale = (canva.height - columnRowSize - margin) / (valMax - valMin);
		data = myData;
		console.log(data);
		console.log(valMin + " " + valMax);
	 }
	 /* Public function */
	 publicDrawChart = function() {
	 	privateCheckValue();
	 	privateFrame();
	 	privateChartDataPlot();
	 }

	return {
		draw: publicDrawChart
	}
})();

$(document).ready(function() {
	chart.draw();
	$("#insert").click(function() {
		var val = $("#inputValue").val();
		console.log(val);
		console.log(Number.isInteger(val));
		// if (Number.isInteger(parseInt(val))) {
			myData.push(val);
		// }
		chart.draw();
	});
})