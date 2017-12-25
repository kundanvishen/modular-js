/**
 * Simple Javascript Publish and Subscribe Pattern Example
 */

var events = {
	events: {},
	on: function (eventName, fn) {
		this.events[eventName] = this.events[eventName] || [];
		this.events[eventName].push(fn);
	},
	off: function(eventName, fn) {
		if(this.events[eventName]) {
			for (var i = 0; i < this.events[eventName].length; i++) {
				if(this.events[eventName][i] === fn) {
					this.events[eventName].splice(i, 1);
					break;
				}
			};
		}
	},
	emit: function(eventName, fn){
		if(this.events[eventName]) {
			this.events[eventName].foreach(function(fn){
				fn(data);
			});
		}
	}
}