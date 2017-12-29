/**
 * Classical Inheritance Examples
 */

function inherits(ctor, superCtor) {
	ctor.super_ = superCtor;
	ctor.prototype = Object.create(superCtor.prototype, {
		constructor: {
			value: ctor,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});
};

//  Creating a Class, a Constructor, Capitalised Name
var Person = function (name) {
	this.name = name;
};

Person.prototype.sayName = function(){
	console.log(this.name);
}
 
// Creating Instances
var john = new Person("John");
var bobby = new Person("Bobby");

john.sayName();
bobby.sayName();

// Creating another Constructor.
var Musician = function(name, instrument){
	Musician.super_.call(this, name);
	this.instrument = instrument;
};

inherits(Musician, Person);

Musician.prototype.getInstrument = function(){
	console.log(this.instrument);
}

var julia = new Musician('Julia', 'Violin');
julia.sayName();
julia.getInstrument();