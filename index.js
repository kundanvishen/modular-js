/**
 * Some Rules for Modular Javascript:
 *  - Self Contained Modules
 *  	- Everything to do in my modules is in my modules.
 * 		- No Global Variables
 * 		- If a module manages more than one thing, it should split up.
 * 	- Seperation of concerns
 *  - DRY code: (Don't repeat yourself)
 *  - efficient DOM Usage
 *  - No Memory Leaks
 */

//  Object Literal
var myModule = {
	name: 'Defualt',
	age: 24,
	sayName: function(){
		console.log(this.name);
	},
	setName: function(newName){
		this.name = newName;
	}
};
myModule.setName('John');
myModule.sayName();