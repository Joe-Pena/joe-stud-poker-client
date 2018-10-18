import React from 'react';
import './BottomButton.css';
import {decks} from 'cards';
import {connect} from 'react-redux';
import {dealHand, dealPressed} from '../actions/hands.actions';
import {evaluateHand} from 'poker-ranking';

export function dealButton(props) {
  const deck = new decks.StandardDeck();
  deck.shuffleAll();

  const options = {
    aceCanBeLow: true,
    wildCards:[],
    cardsToEvaluate: 5,
    dontAllow:[],
  }

  const dealBtn = () => {
    if(props.dealBtn === true) {
      return 'Redeal';
    }else {
    return "Deal";
    }
  }

//DEAL BUTTON SHOULD CHANGE TO REDEAL
//HAVE THE OPTION HOLD CERTAIN CARDS
//ONCE REDEAL IS PRRESSED, THEN EVALUATE HAND, INCREASE HAND COUNTER ON STATE, AWARD CHIPS.

  return(
    <div>
      <button className="button" onClick={() => {
        props.dispatch(dealPressed());
        dealBtn();
        const fiveCards = deck.draw(5);
        const handArray = fiveCards.map(card => `${card.rank.shortName}${card.suit.name[0].toUpperCase()}`);
        props.dispatch(dealHand(handArray));
        console.log(evaluateHand(handArray, options));
        deck.shuffleAll();
      }}>{dealBtn()}</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  dealBtn: state.dealButton,
})

export default connect(mapStateToProps)(dealButton);