Router.configure({
	layoutTemplate: 'mainLayout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading'
});

Router.route('/', {
    onBeforeAction: function(){
        this.render('dashboard');
    },
    waitOn: function(){
        if(!Meteor.userId()){
            Router.go('/login');
        }
        return Meteor.subscribe('rfidData');
    },
    onAfterAction: function(){
        if(this.ready()) {
            SEO.set({
                title: "AWS-IoT Home Security"
            });
        }
    }
});

Router.route('/dashboard', {
    onBeforeAction: function(){
        this.render('dashboard');
    },
    waitOn: function(){
        if(!Meteor.userId()){
            Router.go('/login');
        }
        return Meteor.subscribe('rfidData');
    },
    onAfterAction: function(){
        if(this.ready()) {
            SEO.set({
                title: "AWS-IoT Home Security"
            });
        }
    }
});
Router.route('/datalogging', {
    onBeforeAction: function(){
        this.render('datalogging');
    },
    waitOn: function(){
        if(!Meteor.userId()){
            Router.go('/login');
        }
        return Meteor.subscribe('rfidData');
    },
    onAfterAction: function(){
        if(this.ready()) {
            SEO.set({
                title: "AWS-IoT Home Security"
            });
        }
    }
});

Router.route('/ultrasonic-sensor', {
	onBeforeAction: function(){
		this.render('ultrasonicSensor');
	},
	waitOn: function(){
		if(!Meteor.userId()){
			Router.go('/login');
		}
		return Meteor.subscribe('ultrasonicData');
	},
	onAfterAction: function(){
		if(this.ready()) {
			SEO.set({
				title: "AWS-IoT Home Security"
			});
		}
	}
});

Router.route('/current-sensor', {
	onBeforeAction: function(){
		this.render('currentSensor');
	},
	waitOn: function(){
		if(!Meteor.userId()){
			Router.go('/login');
		}
		return Meteor.subscribe('currentData');
	},
	onAfterAction: function(){
		if(this.ready()) {
			SEO.set({
				title: "AWS-IoT Home Security"
			});
		}
	}
});

Router.route('/vibration-sensor', {
	onBeforeAction: function(){
		this.render('vibrationSensor');
	},
	waitOn: function(){
		if(!Meteor.userId()){
			Router.go('/login');
		}
		return Meteor.subscribe('vibrationData');
	},
	onAfterAction: function(){
		if(this.ready()) {
			SEO.set({
				title: "AWS-IoT Home Security"
			});
		}
	}
});

Router.route('/water-sensor', {
	onBeforeAction: function(){
		this.render('waterSensor');
	},
	waitOn: function(){
		if(!Meteor.userId()){
			Router.go('/login');
		}
		return Meteor.subscribe('waterData');
	},
	onAfterAction: function(){
		if(this.ready()) {
			SEO.set({
				title: "AWS-IoT Home Security"
			});
		}
	}
});

Router.route('/gas-sensor', {
	onBeforeAction: function(){
		this.render('gasSensor');
	},
	waitOn: function(){
		if(!Meteor.userId()){
			Router.go('/login');
		}
		return Meteor.subscribe('gasData');
	},
	onAfterAction: function(){
		if(this.ready()) {
			SEO.set({
				title: "AWS-IoT Home Security"
			});
		}
	}
});

Router.route('/temperature', {
	onBeforeAction: function(){
		this.render('temp');
	},
	waitOn: function(){
		if(!Meteor.userId()){
			Router.go('/login');
		}
		return Meteor.subscribe('tempData');
	},
	onAfterAction: function(){
		if(this.ready()) {
			SEO.set({
				title: "AWS-IoT Home Security"
			});
		}
	}
});

Router.route('/humidity', {
	onBeforeAction: function(){
		this.render('humid');
	},
	waitOn: function(){
		if(!Meteor.userId()){
			Router.go('/login');
		}
		return Meteor.subscribe('humidData');
	},
	onAfterAction: function(){
		if(this.ready()) {
			SEO.set({
				title: "AWS-IoT Home Security"
			});
		}
	}
});

Router.route('/rfid-state', {
	onBeforeAction: function(){
		this.render('rfidState');
	},
	waitOn: function(){
		if(!Meteor.userId()){
			Router.go('/login');
		}
		return Meteor.subscribe('rfidData');
	},
	onAfterAction: function(){
		if(this.ready()) {
			SEO.set({
				title: "AWS-IoT Home Security"
			});
		}
	}
});