let suits = ["Hearts", "Clubs", "Diamonds", "Spades"]
let cardValues = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];
console.log(cardValues.length);

class Card {
  constructor(suit, stringValue, numberValue) {
    this.suit = suit;
    this.stringValue = stringValue;
    this.numberValue = numberValue;
  }
  show() {
    console.log(`suit : ${this.suit}, stringVal : ${this.stringValue}, num : ${this.numberValue}`);
  }
}

let someCard = new Card("ace", "two", 2);
someCard.show()

class Deck {
  constructor() {
    this.deckOcards = [];
    for (let s of suits) {
      for (let i = 0; i < 13; i++) {
        let newCard = new Card(s, cardValues[i], i + 1)
        this.deckOcards.push(newCard);
      }
    }
  }

  shuffle() {
    let newShuffledDeck = [];
    let theLength = this.deckOcards.length;
    for (let i = 0; i < theLength; i++) {
      let theCard = this.deckOcards.splice(Math.floor(Math.random() * this.deckOcards.length), 1)[0];
      newShuffledDeck.push(theCard);
    }
    this.deckOcards = newShuffledDeck;
  }

  reset() {
    this.deckOcards = [];
    for (let s of suits) {
      for (let i = 0; i < 13; i++) {
        let newCard = new Card(s, cardValues[i], i + 1)
        this.deckOcards.push(newCard);
      }
    }
  }

  deal(){
    let theCard =  this.deckOcards.splice(this.deckOcards[0], 1)[0];
    console.log(theCard);
    console.log(this.deckOcards.length);
    return theCard;
  }

}

class Player {

  constructor(name, deck){
    this.name = name;
    this.hand = [];
    this.currentDeck = deck;
  }

  getAHand(howMany){
    for(let i = 0; i <= howMany; i ++){
      let theCard = this.currentDeck.deal();
      this.hand.push(this.currentDeck.deal()) 
    }
      console.log('the length after done getting hand',this.hand.length);
  }

  drawACard(){
    console.log("-------------------------------------------------------------------------");
    let theCard = this.currentDeck.deal();
    this.hand.push(theCard);
    console.log('hand length after draw',this.hand.length);
  }

  discard(){
    this.hand.pop();
    console.log('hand length after discard',this.hand.length);
  }

}

let mydeck = new Deck();
// console.log(mydeck.deckOcards);
mydeck.shuffle();
// console.log(mydeck.deckOcards);

let cardBro = new Player("sherk", mydeck);
cardBro.getAHand(7);
cardBro.drawACard();
cardBro.drawACard();
cardBro.drawACard();
cardBro.discard();
cardBro.discard();
cardBro.discard();

