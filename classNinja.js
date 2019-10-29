class Ninja {
  constructor(name, health = 100, speed = 3, strength = 3){
    this._name = name;
    this._health = health;
    this._speed = speed;
    this._strength = strength;
  }

 sayName(){
   console.log(`hi my name is ${this._name}`);
 }

 showStats() {
   console.log(`name : ${this._name}, health : ${this._health} speed : ${this._speed}, strength : ${this._strength}`);
 }

  drinkSake(){
    this._health += 5;
        console.log(`drinking sake and health is now ${this._health}`);

  }

}

let bobby = new Ninja("bobby");
// bobby.sayName()
bobby.showStats();
bobby.drinkSake();

class sensei extends Ninja {
  constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
    super(name, health, speed, strength)
    this._wisdom = wisdom;
  }

  speakWisdom () {
    super.drinkSake();
    console.log("wise is the sake drinker");
  }
 
}

let mysensai = new sensei("fiip");
mysensai.speakWisdom();
