import { Deck, Memory } from './memory.js';
import { DeckUI } from './ui.js';
import './style.css';

let deck = new Deck();
let ui = new DeckUI();
let memory = new Memory();

$(document).ready(function() {

  // Shuffle the deck
  deck.shuffle();

  // Get five random cards and duplicate them once so that there are ten pairs
  let cards = deck.cards;
  cards = cards.splice(0,5);
  cards = cards.concat(cards);

  // Add cards to the user interface
  let html = "";
  for (let card of cards)
    html += ui.createCard(card.suit, card.rank);
  $("#card-container").append(html);

  // Respond to clicking on a card
  $(".card").click(function(){

    // Get the current and previous card
    memory.setCurrentCard($(this).find("div"), $(this).find("div").attr("suit"), $(this).find("div").attr("rank"));
    let currentCard = memory.getCurrentCard();
    let previousCard = memory.getPreviousCard();
    //let cardCount = memory.getCardCount();

    // Set the current card face up
    memory.setFaceUp(currentCard);
    //cardCount++; // Set the current card face up

    if (previousCard != null) {
      if (previousCard.suit === currentCard.suit && previousCard.suit === currentCard.suit) {
        // Both cards match, leave face up
      }
      else {
        // Both cards are different, turn face down
        memory.setFaceDown(currentCard); memory.setFaceDown(previousCard);
        //window.setInterval( () => { memory.setFaceDown(currentCard); memory.setFaceDown(previousCard); }, 1000);
        //cardCount -= 2;
      }
      memory.clearPreviousCard()
    }
    else {
      memory.setPreviousCard(currentCard.div, currentCard.suit, currentCard.rank);
    }

    // If all cards are up congratulate the user
    //if (cardCount === 10) {
    //  alert('congrats!');
    //}
    //memory.setCardCount(cardCount);
  });

});