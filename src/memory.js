export class Memory {
  constructor() {
    
  }
}

export class Deck {
  constructor() {
    this.cards = [];
    this.createDeck();
  }

  createDeck() {
    let Card = function (suit, rank) { this.suit = suit; this.rank = rank; };
    ['clubs','diamonds','hearts','spades'].
      forEach(suit => ["A","2","3","4","5","6","7","8","9","10","J","Q","K"].
        forEach(rank => this.cards.push(new Card(suit,rank))));
  }

  shuffle() {
    let pileA = [];
    let pileB = [];
    this.cards.forEach(card =>
        (Math.floor(Math.random() * 2)) ? pileA.push(card) : pileB.push(card)
    );
    pileA.forEach(card => 
        pileB.splice((Math.floor(Math.random() * pileB.length-1)),0,card)
    );
    this.cards = pileB;
  }
}


