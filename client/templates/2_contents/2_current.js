Template.currentMonitor.events({
	'click #playRealTime': function(){
		/* Remove and recreate new real-time graph */
		$("#chart_container").remove();
		$("#legend").remove();
		$("#marker").append("<div id='chart_container'><div id='y_axis'></div><div id='realTimeMonitor'></div></div><div id='legend'></div>");

		 e = document.getElementById("realTimeConfigure");
		timeFrame = e.options[e.selectedIndex].value;

		if(timeFrame === 'all'){
			renderRealTime(CurrentDB, true, null, 'Current Sensor Data');
		} else {
			renderRealTime(CurrentDB, false, timeFrame, 'Current Sensor Data');
		}
	}
});