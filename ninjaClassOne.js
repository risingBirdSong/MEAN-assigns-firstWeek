function Ninja(name, health = 100){
  var speed = 3;
  var strength = 4;
  this.name = name;
  this.health = health;

  this.sayStrength = function(){
    return strength;
  }

  this.saySpeed = function(){
    return speed;  
  }

}


Ninja.prototype.sayName = function(){
  console.log(`hi my name is ${this.name}`);
}

Ninja.prototype.showStats = function(){
  console.log(`my name is ${this.name} , my speed is ${this.saySpeed()} ,my strength is : ${this.sayStrength()} , my health is ${this.health},`);
}

Ninja.prototype.drinkSake = function (){
  this.health += 10;
  console.log(`mmm sake, that was good, my health is ${this.health}`);
}

Ninja.prototype.punch = function(ninjaToBePunched){
  ninjaToBePunched.health -= 5;
  console.log(`${ninjaToBePunched.name} has been punched by ${this.name}, and their health is ${ninjaToBePunched.health}`);
}

Ninja.prototype.kick = function(ninjaToBeKicked){
  console.log(this.sayStrength())
  ninjaToBeKicked.health -= (this.sayStrength() * 15);
  console.log(`${ninjaToBeKicked.name} has been kicked for ${this.sayStrength() * 15} and their health is ${ninjaToBeKicked.health}`);
}

// drinkSake() - This should add +10 Health to the Ninja
//showStats() - This should show the Ninja's name, strength, speed, and health.

let myNinja = new Ninja("greg");
let punchingBag = new Ninja("horace");

myNinja.sayName();
myNinja.showStats();
myNinja.drinkSake();

myNinja.punch(punchingBag);
myNinja.punch(punchingBag);
myNinja.punch(punchingBag);
myNinja.kick(punchingBag);




