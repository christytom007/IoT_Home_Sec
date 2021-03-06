Template.ultrasonicMonitor.events({
	'click #playRealTime': function(){
		/* Remove and recreate new real-time graph */
		$("#chart_container").remove();
		$("#legend").remove();
		$("#marker").append("<div id='chart_container'><div id='y_axis'></div><div id='realTimeMonitor'></div></div><div id='legend'></div>");

		 e = document.getElementById("realTimeConfigure");
		 timeFrame = e.options[e.selectedIndex].value;

		if(timeFrame === 'all'){
			renderRealTime(UltrasonicDB, true, null, 'Ultrasonic Sensor Data');
		} else {
			renderRealTime(UltrasonicDB, false, timeFrame, 'Ultrasonic Sensor Data');
		}
	}
});