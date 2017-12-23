/*
var people = (function(){
	var name = 'Default';
	function sayName(){
		console.log(name);
	};
	return {
		sayName: sayName
	};
})();
*/

var people = (function(){
	var people = ['John', 'Will'];

	// cache DOM
	var $el = $('#peopleModule');
	var $button = this.$el.find('button');
	var $input = this.$el.find('input');
	var $ul = this.$el.find('ul');
	var template = this.$el.find('#people-template').html();

	// bind Events
	button.on('click', addPerson);
	$ul.delegate('i.del', 'click', deletePerson);

	// method is private and not revealed outside
	_render();

	function _render(){
		$ul.html(Mustache.render(template, {people: people}));
	};

	function addPerson(value){
		var name = (typeof value === "string") ? value : $input.val();
		people.push(name);
		_render();
		$input.val('');
	};

	function deletePerson(event){
		var i;
		if(typeof event === "number") {
			i = event;
		} else {  
			var $remove = $(event.target).closest('li');
			i = $ul.find('li').indexOf($remove);
		}
		people.slice(i, 1);
		_render();
	};

	return {
		addPerson: addPerson,
		deletePerson: deletePerson
	};
})();