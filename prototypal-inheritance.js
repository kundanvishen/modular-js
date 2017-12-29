/**
 * Prototypal Inheritance Examples
 */

var human = {
	species: 'Human',
	saySpecies: function () {
		console.log(this.species);
	},
	sayName: function(){
		console.log(this.name);
	}
};

var musician = Object.create(human);
musician.playInstrument = function(){
	console.log("Plays... " + this.instrument );
};

var will = Object.create(musician);
will.name = "Will";
will.instrument = "Violin";

will.saySpecies();
will.sayName();
will.playInstrument();

