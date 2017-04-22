if(Meteor.isServer){
	Meteor.methods({
		'inputData': function(topic, msg){
			/*
				Process the topic fetch from MQTT
				e.g: IoTHome/ultrasonic/csAD9jsUDASDDa213
			*/
			var process = topic.slice(topic.indexOf("/") + 1);		// removing "IoTHome"
			topic = process.slice(0, process.indexOf("/"));			// extracting the topic
			var userid = process.slice(process.indexOf("/") + 1);	// extracting the userid


			var mqttTopics = ['ultrasonic', 'current', 'vibration', 'water', 'gas', 'temp', 'humid', 'rfid'];
			var arrayDB = [UltrasonicDB, CurrentDB, VibrationDB, WaterDB, GasDB, TempDB, HumidDB, RfidDB];
			var arrayStore = [];
			msg = parseFloat(msg);


			for(i=0; i<mqttTopics.length; i++){
				if(topic === mqttTopics[i]){
					console.log("i : " + i);
					// this prevent inserting non-numeric or undefined data
					if(!isNaN(msg)){
						arrayDB[i].insert({
							'owner_id': userid,
							'x': (new Date).getTime()/1000,
							'y': parseFloat(msg)
						});
						console.log("date : " + (new Date).getTime()/1000);
                        console.log("user id :" + userid);
                        console.log("Msag :" + parseFloat((msg)));
					}
					else {
						arrayDB[i].insert({
							'owner_id': userid,
							'x': (new Date).getTime()/1000,
							'y': 0
						});
                        console.log("date : " + (new Date).getTime()/1000);
                        console.log("user id :" + userid);
                        console.log("Msag :" + parseFloat((msg)));
					}
				}
			}

		},
		'resetData': function(){
			UltrasonicDB.remove({});
			CurrentDB.remove({});
			VibrationDB.remove({});
			WaterDB.remove({});
			GasDB.remove({});
			TempDB.remove({});
			HumidDB.remove({});
			RfidDB.remove({});
		},
		'printMsg': function(topic, msg){
			console.log('Topic: ' + topic + ", message: " + msg);
		}
	});
}
