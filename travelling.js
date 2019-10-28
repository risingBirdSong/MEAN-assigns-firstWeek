let tigger = {
  name: "tigger",
  greet: function() {
    console.log(`hi my name is ${this.name}`);
  }
};

let winnieThePooh = {
  name: "Winnie the Pooh",
  greet: function() {
    console.log(`hi my name is ${this.name}`);
  }
}

let piglet = {
  name: "piglet",
  greet: function() {
    console.log(`hi my name is ${this.name}`);
  }
}



let chrisRobin = {
  name: "Chris Robin",
  greet: function() {
    console.log(`hi my name is ${this.name}`);
  }
}

let owl = {
  name: "owl",
  greet: function() {
    console.log(`hi my name is ${this.name}`);
  }
}

let bees = {
  name: "bees",
  greet: function() {
    console.log(`hi my name is ${this.name}`);
  }
}
let rabbit = {
  name: "rabbit",
  greet: function() {
    console.log(`hi my name is ${this.name}`);
  }
}

let kanga = {
  name: "kanga",
  greet: function() {
    console.log(`hi my name is ${this.name}`);
  }
}

let eeyore = {
  name: "eeyore",
  greet: function() {
    console.log(`hi my name is ${this.name}`);
  }
}






tigger.north = winnieThePooh;

winnieThePooh.south = tigger;
winnieThePooh.west = piglet;
winnieThePooh.east = bees;
winnieThePooh.north = chrisRobin;

piglet.east = winnieThePooh;
piglet.north = owl;

bees.west = winnieThePooh;
bees.north = bees;

owl.south = piglet;
owl.east = chrisRobin;

rabbit.south = bees;
rabbit.west = chrisRobin;

chrisRobin.south = winnieThePooh;
chrisRobin.west = owl;
chrisRobin.east = rabbit;
chrisRobin.north = kanga;

kanga.south = chrisRobin;
kanga.north = eeyore;

let allCharacs = [eeyore, winnieThePooh, piglet, chrisRobin, owl, bees, rabbit, kanga, eeyore];
let mission = allCharacs[Math.floor(Math.random() * allCharacs.length)];


let player = {
  possibleMoves: ["north", "south", "east", "west"],
  location: tigger,
  honey: false,
  theMission: mission,
  sayMission: function() {
    console.log(`first, go to the bees to get the honey, then go and drop it off at ${this.theMission}.name!`);
  },

  checkHoney: function() {
    if (this.location == bees) {
      this.honey = true;
      console.log(`youve got the honey, now go to ${this.theMission}.name!`)
    }
  },

  checkVictory: function() {
    if (this.honey == true && this.location == this.theMission) {
      console.log("victory has been attained!");
    }
  },

  move: function(direction) {
    if (!this.possibleMoves.includes(direction)) {
      console.log("cardinal direction please!");
    }

    if (direction == "north") {
      if (this.location.north == null) {
        console.log("that is not a valid direction");
      }
      else {
        this.location = this.location.north;
        console.log(`you have moved north and your new location is ${this.location.name}`);
        this.location.greet();
        this.checkHoney();
        this.checkVictory();
      }
    }

    if (direction == "south") {
      if (this.location.south == null) {
        console.log("can't go that way!");
      }
      else this.location = this.location.south;
      console.log(`you have moved to the south, and the new location is ${this.location.name}`);
      this.location.greet();
      this.checkHoney();
      this.checkVictory();

    }
    if (direction == "east") {
      if (this.location.east == null) {
        console.log("we cant go east!");
      }
      else this.location = this.location.east;
      console.log(`you have travelled east and your new location is ${this.location.name}`);
      this.location.greet();
      this.checkHoney();
      this.checkVictory();
    }

    if (direction == "west") {
      if (this.location.west == null) {
        console.log("west isnt available to us now");
      }
      else {
        this.location = this.location.west
        console.log(`we have travelled west and our location is ${this.location.name}`);
        this.location.greet();
        this.checkHoney();
        this.checkVictory();

      }
    }
  }
}
// player.move("west");
player.sayMission();
