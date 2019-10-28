
var tigger = {
    name: "tigger"
};
var winnieThePooh = {
    name: "Winnie the Pooh"
};
var piglet = {
    name: "piglet"
};
var chrisRobin = {
    name: "Chris Robin"
};
var owl = {
    name: "owl"
};
var bees = {
    name: "bees"
};
var rabbit = {
    name: "rabbit"
};
var kanga = {
    name: "kanga"
};
var eeyore = {
    name: "eeyore"
};

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
