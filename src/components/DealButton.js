import React from 'react';
import './BottomButton.css';
import {decks} from 'cards';
import {connect} from 'react-redux';
import {dealHand, dealPressed, holdCard, reDrawCard, stakeOnTable, evalHand, dudHand, handValue, inPlay, firstHand, secondHand, standby, newHand} from '../actions/hands.actions';
import {evaluateHand} from 'poker-ranking';

function dealButton(props) {
  const deck = new decks.StandardDeck();
  deck.shuffleAll();
  
  const options = {
    aceCanBeLow: true,
    wildCards:[],
    cardsToEvaluate: 5,
    dontAllow:[],
  }

  if(!props.dealButton && !props.standby) {
  //DEAL BUTTON SHOULD CHANGE TO REDEAL
  //HAVE THE OPTION HOLD CERTAIN CARDS
  //ONCE REDEAL IS PRRESSED, THEN EVALUATE HAND, INCREASE HAND COUNTER ON STATE, AWARD CHIPS.

    return(
      <div>
        <button className="button" onClick={() => {
          if(props.chips === 0 || props.chips - props.stake < 0) {
            return alert('You can\' afford it');
          }
          props.dispatch(dealPressed());
          props.dispatch(stakeOnTable(props.stake));
          props.dispatch(inPlay());
          props.dispatch(firstHand());
          const fiveCardsNonHold = deck.draw(5);
          const fiveCards = fiveCardsNonHold.map(card => ({
            rank: card.rank.shortName,
            suit: card.suit.name[0].toUpperCase(),
            held: false,
          }));
          props.dispatch(dealHand(fiveCards));
        }}>Deal</button>
      </div>
    )
  } else if (props.dealButton && !props.standby){ // TODO LOOP THROUGH CARDS AND RENDER CORRESPONDING BUTTON BASED ON THE HELD PROPERTY
    return(
      <div>
        <div>
          {
            props.currentHand.map((card, index) => {
              if(!card.held) {
                return <button key={index} onClick={() => props.dispatch(holdCard(index))}>Draw</button>
              } else {
                return <button key={index} onClick={() => props.dispatch(reDrawCard(index))}>Hold</button>
              }
            })
          }
        </div>
        <div>
          <button className="button" onClick={() => {
            props.dispatch(firstHand());
            props.dispatch(dealPressed());
            props.dispatch(secondHand());
            //REMOVE CARDS THAT HAVE HELD: FALSE
            // const remainingCards = props.currentHand.filter(card => card.held);
            let counter = 0;
            const remainingCards = props.currentHand.map(card => {
             if(!card.held) {
               counter++
               return undefined;
             } else {
               return card;
             }
            }); //[undefined, undefined, undefined, card, undefined]
            // const amountToAdd = 5 - remainingCards.length;
            //DRAW THE SAME AMOUNT OF CARDS THAT WERE DISCARDED
            const newCards = deck.draw(counter);
            //MAKE NEW HAND WITH NEW CARDS
            const newSet = newCards.map(card => ({
              rank: card.rank.shortName,
              suit: card.suit.name[0].toUpperCase(),
              held: false,
            }));
            let cardsToReplace = -1;
            const newHandOfCards = remainingCards.map((card, index) => {
              if(card === undefined){
                cardsToReplace++
                return newSet[cardsToReplace];
              } else {
                return card;
              }
            })
            props.dispatch(newHand(newHandOfCards));
            //EVALUATE HANDS AND EDIT THE USER HAND COUNTER ASWELL AS SEND IN THE WINNINGS
            const handArray = newHandOfCards.map(card => `${card.rank}${card.suit}`);
            switch(evaluateHand(handArray, options)) {
              case 'royalflush':
                props.dispatch(evalHand('royalFlush'));
                props.dispatch(handValue(props.stake * 500));
              break;
              case '5ofakind':
                props.dispatch(evalHand('fiveOfAKind'));
                props.dispatch(handValue(props.stake * 100));
              break;
              case 'straightflush':
                props.dispatch(evalHand('straightFlush'));
                props.dispatch(handValue(props.stake * 50));
              break;
              case '4ofakind':
                props.dispatch(evalHand('fourOfAKind'));
                props.dispatch(handValue(props.stake * 20));
              break;
              case 'fullhouse':
                props.dispatch(evalHand('fullHouse'));
                props.dispatch(handValue(props.stake * 10));
              break;
              case 'flush':
                props.dispatch(evalHand('flush'));
                props.dispatch(handValue(props.stake * 4));
              break;
              case 'straight':
                props.dispatch(evalHand('straight'));
                props.dispatch(handValue(props.stake * 3));
              break;
              case '3ofakind':
                props.dispatch(evalHand('threeOfAKind'));
                props.dispatch(handValue(props.stake * 2));
              break;
              case '2pair':
                props.dispatch(evalHand('twoPair'));
                props.dispatch(handValue(props.stake * 1));
              break;
              case 'pair':
                props.dispatch(evalHand('pair'));
                props.dispatch(handValue(props.stake * 0.5));
              break;
              default: 
                props.dispatch(dudHand());
            }
            props.dispatch(inPlay());
            props.dispatch(standby());
          }}>Redraw</button>
        </div>
      </div>
    )
  } else {
    return (
      <button className="button" onClick={() => {
        props.dispatch(secondHand());
        props.dispatch(standby());
      }}>Finish game</button>
    )
  }
}

const mapStateToProps = (state) => ({
  chips: state.cards.chips,
  dealButton: state.cards.dealButton,
  currentHand: state.cards.currentHand,
  stake: state.cards.stake,
  standby: state.cards.standby,
})

export default connect(mapStateToProps)(dealButton);