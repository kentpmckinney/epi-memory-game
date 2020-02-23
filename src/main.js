// import { Memory } from './memory.js';
import { Deck } from './memory.js';
import { DeckUI } from './ui.js';
import './style.css';

let deck = new Deck();
let ui = new DeckUI();
let lastSuit = null;
let lastRank = null;
let lastDiv = null;

$(document).ready(function() {

  deck.shuffle();
  let cards = deck.cards;
  cards = cards.splice(0,5);
  cards = cards.concat(cards);
  let html = "";
  for (let card of cards)
    html += ui.createCard(card.suit, card.rank);
  $("#card-container").append(html);

  $(".card").click(function(){

    let thisDiv = $(this).find("div");
    let thisSuit = thisDiv.attr("suit");
    let thisRank = thisDiv.attr("rank");

    if (lastDiv && lastSuit && lastRank) {
      if (lastSuit != thisSuit || lastRank != thisRank) {
        thisDiv.show();
        lastDiv.show();
        window.setInterval(function(){ $(thisDiv).hide(); $(lastDiv).hide(); }, 1000);
      }
      else {
        thisDiv.hide();
        
      }
    }
    else {
      thisDiv.hide();
    }

    lastSuit = thisSuit;
    lastRank = thisRank;
    lastDiv = thisDiv;
    // Get the values of cards being shown
    // Ignore matching pairs of cards
    // If there are two unique cards shown, hide them both
    // If all cards are up congratulate the user
    
    // div.is(":visible") ? div.toggle()
  });

});