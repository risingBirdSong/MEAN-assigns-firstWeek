function Ninja(name, health = 100){
  var speed = 3;
  var strength = 3;
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

// drinkSake() - This should add +10 Health to the Ninja
//showStats() - This should show the Ninja's name, strength, speed, and health.

let myNinja = new Ninja("greg");
myNinja.sayName();
myNinja.showStats();
myNinja.drinkSake();



