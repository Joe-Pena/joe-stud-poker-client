import React from 'react';
import { decks } from 'cards'; 
import {evaluateHand} from 'poker-ranking';
import {connect} from 'react-redux';
import './Hand.css';

export function hand(props) {
  const options = {
    aceCanBeLow: true,
    wildCards:[],
    cardsToEvaluate: 5,
    dontAllow:[],
  }

  const deck = new decks.StandardDeck();
  deck.shuffleAll();

  //Draw 5 cards from deck
  const fiveCards = deck.draw(5);

  //Convert 5 card hand into an array of 2-3 character string representing the card. i.e "9S" for 9 of Spades
  const handArray = fiveCards.map(card => `${card.rank.shortName}${card.suit.name[0].toUpperCase()}`);

  return (
    <div>
      <h1>{console.log(handArray)}</h1>
      <h1>{console.log(evaluateHand(handArray, options))}</h1>
    </div>
  )
}

const mapStateToProps = (state) => ({
  firstHand: state.currentHand,
})

export default connect(mapStateToProps)(hand);
//EVALUATE HANDS CHEAT SHEET, RETURNS FROM EVALUATEHANDS(hand);
  // royalflush
  // 5ofakind
  // straightflush
  // 4ofakind
  // fullhouse
  // flush
  // straight
  // 3ofakind
  // 2pair
  // pair (minpair if minpair option specified and pair meets or exceeds this)
  // nothing