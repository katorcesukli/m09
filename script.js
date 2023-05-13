let person = {
	name: 'Rian',
	greet: function(){
		console.log(this.name + 'Estrellado');
	} //anonymous functions cause no name
}
//console.log(person)
//person.greet()

person.walk = function(){
	console.log(this.name + ' is walking around');
}
person.walk()
//methods are useful for creating reusable functionns
//that perform tasks related to objects

let trainer = {
	name: 'Rian',
	age: 22,
	friends: {
		f1:'ash',
		f2:'brock'
	},
	pokemon: ['oshawott','snivy'],
	trainertalk: function(){
		console.log('The name is ' + this.name + ', oshawott! I choose you!');
	} 
};

console.log(trainer)
trainer.trainertalk()
/*
using object literals to create multiple kinds of pokemon 
*/
let myPokemon = {
	name: "oshawott",
	level: 5,
	health: 20,
	attack: 20,
	tackle: function(){
		console.log("Tackled something");
		console.log("Opponent took damage");
		this.health = health - 5;
		console.log("Opponent health is now " + this.health);
	},
	faint: function(){
		console.log("Pokemon fainted");
	}
}
console.log(myPokemon)

//created an object constructor
function Pokemon(name, level, health, attack){
	//properties
	this.name = name;
	this.level = level;
	this.health = 10 + health;
	this.attack = attack;

	//methods
	this.tackle = function(target){
		console.log(this.name + ' tackled ' + target.name);
		console.log("Tackled opponent and did " + this.attack + " damage");
		console.log("Opponent took damage");
		//this.health = health - 20;
		console.log("Opponent health is now " +(this.health - this.attack));

	};
	this.faint = function(){
		console.log(this.name + ' fainted');
	}

}
// new instances of pokemonobject with their unique properties

let snivy = new Pokemon('snivy', 10, 20, 20)
let tepig = new Pokemon('tepig', 10, 20, 20)
let oshawott = new Pokemon('oshawott', 10, 20, 30)
oshawott.tackle(tepig);
//tepig.faint(oshawott);

if(this.health > 0){
		oshawott.tackle(tepig);	
		}
		else{
			tepig.faint(oshawott);
		}
		/*
switch(true){
	case(this.health >= 0):
	oshawott.tackle(tepig);
	break;
	default:
	tepig.faint(oshawott);
	break;
}
*/