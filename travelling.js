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


let player = {
  location: tigger,
  move: function(direction) {
    if (direction != "north" || direction != "west" || direction != "east" || direction != "south") {
      console.log("please enter a cardinal direction!");
    }
    if (direction == "north") {
      if (this.location.north == null) {
        console.log("that is not a valid direction");
      }
      else {
        this.location = this.location.north;
        console.log(`you have moved north and your new location is ${this.location.name}`);
        this.location.greet();
      }
    }

    if (direction == "south") {
      if (this.location.south == null) {
        console.log("can't go that way!");
      }
      else this.location = this.location.south;
      console.log(`you have moved to the south, and the new location is ${this.location.name}`);
      this.location.greet();

    }
    if (direction == "east") {
      if (this.location.east == null) {
        console.log("we cant go east!");
      }
      else this.location = this.location.east;
      console.log(`you have travelled east and your new location is ${this.location.name}`);
      this.location.greet();

    }

    if (direction == "west") {
      if (this.location.west == null) {
        console.log("west isnt available to us now");
      }
      else {
        this.location = this.location.west
        console.log(`we have travelled west and our location is ${this.location.name}`);
        this.location.greet();

      }
    }
  }
}
player.move("north");
player.move("west");

