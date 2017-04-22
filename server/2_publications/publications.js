Meteor.publish('ultrasonicData', function(){
	if(this.userId){
		return UltrasonicDB.find({'owner_id': this.userId}, {fields: {'owner_id': false}});
	}
});

Meteor.publish('currentData', function(){
	if(this.userId){
		return CurrentDB.find({'owner_id': this.userId}, {fields: {'owner_id': false}});
	}
});

Meteor.publish('vibrationData', function(){
	if(this.userId){
		return VibrationDB.find({'owner_id': this.userId}, {fields: {'owner_id': false}});
	}
});

Meteor.publish('waterData', function(){
	if(this.userId){
		return WaterDB.find({'owner_id': this.userId}, {fields: {'owner_id': false}});
	}
});

Meteor.publish('gasData', function(){
	if(this.userId){
		return GasDB.find({'owner_id': this.userId}, {fields: {'owner_id': false}});
	}
});

Meteor.publish('tempData', function(){
	if(this.userId){
		return TempDB.find({'owner_id': this.userId}, {fields: {'owner_id': false}});
	}
});

Meteor.publish('humidData', function(){
	if(this.userId){
		return HumidDB.find({'owner_id': this.userId}, {fields: {'owner_id': false}});
	}
});

Meteor.publish('rfidData', function(){
	if(this.userId){
		return RfidDB.find({'owner_id': this.userId}, {fields: {'owner_id': false}});
	}
});