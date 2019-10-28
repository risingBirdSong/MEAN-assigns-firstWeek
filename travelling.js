let tigger = {
  name: "tigger",
};

let winnieThePooh = {
  name: "Winnie the Pooh",
}

let piglet = {
  name: "piglet",
}

let chrisRobin = {
  name: "Chris Robin",
}

let owl = {
  name: "owl",
}

let bees = {
  name: "bees"
}
let rabbit = {
  name: "rabbit"
}

let kanga = {
  name: "kanga"
}

let eeyore = {
  name: "eeyore"
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
    if (direction != "north" || direction != "west" ||direction != "east" ||direction != "south"  ){
      console.log("please enter a cardinal direction!");
    }
    if (direction == "north") {
      if (this.location.north == null) {
        console.log("that is not a valid direction");
      }
      else {
        this.location = this.location.north;
        console.log(`you have moved north and your new location is ${this.location.name}`);
      }
    }

    if (direction == "south") {
      if (this.location.south == null) {
        console.log("can't go that way!");
      }
      else this.location = this.location.south;
      console.log(`you have moved to the south, and the new location is ${this.location.name}`);
    }
    if (direction == "east") {
      if (this.location.east == null) {
        console.log("we cant go east!");
      }
      else this.location = this.location.east;
      console.log(`you have travelled east and your new location is ${this.location.name}`);
    }

    if (direction == "west") {
      if (this.location.west == null) {
        console.log("west isnt available to us now");
      }
      else {
        this.location = this.location.west
        console.log(`we have travelled west and our location is ${this.location.name}`);
      }
    }
  }
}
player.move("north");
player.move("west");
player.move("besa");
