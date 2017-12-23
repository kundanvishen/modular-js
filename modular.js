/**
 * An IIFE
 */
(function(){
	var people = {
		people: ['John', 'Will', 'Laura'],
		init: function(){
			this.cacheDom();
			this.bindEvents();
			this.render();
		},
		cacheDom: function(){
			this.$el = $('#peopleModule');
			this.$button = this.$el.find('button');
			this.$input = this.$el.find('input');
			this.$ul = this.$el.find('ul');
			this.template = this.$el.find('#people-template').html();
		},
		bindEvents: function(){
			this.$button.on('click', addPerson); 
		},
		render: function(){
			var data = {
				people: this.people,
			};
			this.$ul.html(Mustache.render(this.template, data));
		},
		addPerson: function(){
			this.people.push(this.$input.val());
		},
	};

	people.init();
})();