var options = {
	dataInput : [1.5, 3.5, 1.5, 3.5, 2.5, 3.5], // data use to draw chart
	itemValue : [ 0, 1, 2, 3, 4], // data default in 0y. Show on Oy
	colorLine : "#00AEEF", // color of line behind column
	colorItemValue : "black", // set color for itemValue
	fontItemValue : "20px Arial" // set font  for itemValue
}

var sinChart = (function () {    
	var myCanvas = $('#canvasChart1')[0];
	myCanvas.width = 600; 
	myCanvas.height = 400;
	var ctx = myCanvas.getContext("2d");
	var maxValue = options.itemValue.length; 
	var y;
	var data = options.dataInput;
	var itemValue = options.itemValue;
	var colorItemValue = options.colorItemValue;
	var fontItemValue = options.fontItemValue;
	var colorLine = options.colorLine;
	var stepSize = 1;
	var columnSpace = 70; // top to line 0y
	var rowSpace = 30; //distance between graph bars 
	var space = 10;
	var xScale;// sale following Ox
	var yScale;// sale following Oy
	var flag = true;
	//  check value input
	for (var i in data) {
		if (data[i] <= 0) {
			flag = false;
		}
	}
		
	privateDrawChart = function(ctx, data, itemValue, colorItemValue, fontItemValue, colorLine) {
		
		/* caculate xScale and ySale */
		yScale = (myCanvas.height - columnSpace - space) / (maxValue); 
		xScale = (myCanvas.width - rowSpace) / (data.length);

		/* Draw value in Oy */
		ctx.beginPath();
		ctx.fillStyle = colorItemValue; //color of value
		ctx.font = fontItemValue;
		var count =  0;
		for (scale = maxValue; scale >= 1; scale = scale - stepSize) {
			y = columnSpace/2 + (yScale * count * stepSize);  
			ctx.fillText(scale, space, y + space - 5);
			count++;
		}
		
		/* Draw line Oy */
		ctx.beginPath();
		var locationOy // exactly location of OY
		locationOy = y = columnSpace/2 + (yScale * count * stepSize);  
		ctx.fillText(scale, space, y + space - 5);
		ctx.moveTo(rowSpace, y); //begin of line
		ctx.lineTo(rowSpace, columnSpace/4 ); 
		ctx.strokeStyle="black";	
		ctx.stroke();
			
		/* Draw line Ox */
		ctx.beginPath();
		y = columnSpace/2 + (yScale * count * stepSize);  
		ctx.fillText(scale, space, y + space - 5);
		ctx.moveTo(rowSpace, y); //begin of line
		ctx.lineTo(myCanvas.width, y); 
		ctx.strokeStyle="black";	
		ctx.stroke();

		/* Draw Chart follow sincos line */
		ctx.beginPath();
		ctx.lineWidth = 5;
		ctx.strokeStyle = colorLine; //color of line	
		ctx.moveTo (xScale * (0+0.7) , locationOy - (yScale * data[0] * stepSize));
		for (i = 0; i < data.length; i++) {
			var maskX = Math.abs(data[i] - data[i+1]) / 4;
			var maskY = Math.abs(data[i] - data[i+1]) / 40;
			if(data[i] < data[i+1]) {
				ctx.bezierCurveTo (xScale * (i+0.7+ maskX) ,locationOy - (yScale * (data[i] + maskY )),
				xScale * (i+1+0.7-maskX),locationOy - (yScale * (data[i+1] - maskY )),
				xScale * (i+1+0.7), locationOy - (yScale * data[i+1] * stepSize));
			}
			else {
				ctx.bezierCurveTo (xScale * (i+0.7+ maskX) ,locationOy - (yScale * (data[i] - maskY )),
				xScale * (i+1+0.7-maskX),locationOy - (yScale * (data[i+1] + maskY )),
				xScale * (i+1+0.7), locationOy - (yScale * data[i+1] * stepSize));	   
			}
		}
		ctx.stroke();	
	}	
		
	function drawChart() {
		if (flag) {
			privateDrawChart(ctx, data, itemValue, colorItemValue, fontItemValue, colorLine);  
		}
		else {
			alert("Data Input Empty");
		}
	}
	
	return {
		draw : drawChart
	}
	
	})();

$(document).ready(function() {
	sinChart.draw();
});
