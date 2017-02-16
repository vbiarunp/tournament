$( document ).ready(function() {
	var container = $(".mainContainer");

	var data = [{
		'list1': [{
			'team1': 'Team A',
			'team2': 'Team B'
		}],
		'list2': [{
			'team1': 'Team C',
			'team2': 'Team D'
		}],
		'list3': [{
			'team1': 'Team E',
			'team2': 'Team F'
		}],
		'list4': [{
			'team1': 'Team G',
			'team2': 'Team H'
		}],
		'list5': [{
			'team1': 'Team A',
			'team2': 'Team B'
		}],
		'list6': [{
			'team1': 'Team C',
			'team2': 'Team D'
		}]
	
	}]

	var svgContainer = d3.select('.mainContainer').append('svg').attr('class', 'chartContainer').attr('width', container.width()).attr('height', container.height());

	var transitX = 10,
		transitY = 0,
		number = 0;

	for(var i in data[0]){
		var parentContainer = svgContainer.append('g').attr("width", "15%").attr("height", "50px").attr("x", transitX).attr("y", transitY);
		
		parentContainer.append('rect').attr("width", "15%").attr("height", "25px").attr("x", 0).attr("y", transitY).style("fill","#4f5056").style("fill","#4f5056").style("stroke", "white").style("stroke-width", "1");
		parentContainer.append('text').attr("x", 15).attr("y", transitY+20).attr("class", "teamtext").text(data[0][i][0].team1);
		parentContainer.append('rect').attr("width", "15%").attr("height", "25px").attr("x", 0).attr("y", transitY+25).style("fill","#4f5056").style("fill","#4f5056").style("stroke", "white").style("stroke-width", "1");
		parentContainer.append('text').attr("x", 15).attr("y", transitY+40).attr("class", "teamtext").text(data[0][i][0].team2);
		
		parentContainer.append('rect').attr("width", "3%").attr("height", "25px").attr("x", '12%').attr("y", transitY).style("fill","#ff7324");
		parentContainer.append('rect').attr("width", "3%").attr("height", "25px").attr("x", '12%').attr("y", transitY+25).style("fill","#64656d");
		number+=1;
		parentContainer.append('text').attr("x", "13%").attr("y", transitY+20).attr("class", "teamNumber").text(number);
		number+=1;
		parentContainer.append('text').attr("x", "13%").attr("y", transitY+40).attr("class", "teamNumber").text(number);
		
		transitY+=95;
	}

	transitX+=350;
	transitY = 50;
	for(var i=0;i<Object.keys(data[0]).length/2;i++){
				var parentContainer = svgContainer.append('g').attr("width", "15%").attr("height", "50px").attr("x", transitX).attr("y", transitY);

		parentContainer.append('rect').attr("width", "15%").attr("height", "25px").attr("x", transitX).attr("y", transitY).style("fill","#4f5056").style("fill","#4f5056").style("stroke", "white").style("stroke-width", "1");
		// parentContainer.append('text').attr("x", 0).attr("y", transitY+20).text(data[0][i][0].team1);
		parentContainer.append('rect').attr("width", "15%").attr("height", "25px").attr("x", transitX).attr("y", transitY+25).style("fill","#4f5056").style("fill","#4f5056").style("stroke", "white").style("stroke-width", "1");
		// parentContainer.append('text').attr("x", 0).attr("y", transitY+40).text(data[0][i][0].team2);
				transitY+=190;
	}

	transitX+=350;
	transitY = 140;
	for(var i=0;i<Object.keys(data[0]).length/4;i++){
				var parentContainer = svgContainer.append('g').attr("width", "15%").attr("height", "50px").attr("x", transitX).attr("y", transitY);

		parentContainer.append('rect').attr("width", "15%").attr("height", "25px").attr("x", transitX).attr("y", transitY).style("fill","#4f5056").style("fill","#4f5056").style("stroke", "white").style("stroke-width", "1");
		// parentContainer.append('text').attr("x", 0).attr("y", transitY+20).text(data[0][i][0].team1);
		parentContainer.append('rect').attr("width", "15%").attr("height", "25px").attr("x", transitX).attr("y", transitY+25).style("fill","#4f5056").style("fill","#4f5056").style("stroke", "white").style("stroke-width", "1");
		// parentContainer.append('text').attr("x", 0).attr("y", transitY+40).text(data[0][i][0].team2);
				transitY+=200;
	}

		transitX+=300;
	transitY = 250;
				var parentContainer = svgContainer.append('g').attr("width", "15%").attr("height", "50px").attr("x", transitX).attr("y", transitY);

		parentContainer.append('rect').attr("width", "15%").attr("height", "25px").attr("x", transitX).attr("y", transitY).style("fill","#4f5056").style("stroke", "white").style("stroke-width", "1");
		// parentContainer.append('text').attr("x", 0).attr("y", transitY+20).text(data[0][i][0].team1);
		parentContainer.append('rect').attr("width", "15%").attr("height", "25px").attr("x", transitX).attr("y", transitY+25).style("fill","#4f5056").style("fill","#4f5056").style("stroke", "white").style("stroke-width", "1");
		// parentContainer.append('text').attr("x", 0).attr("y", transitY+40).text(data[0][i][0].team2);
				transitY+=70;
	
		// container.find('svg:rect').

});


