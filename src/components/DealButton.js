import React from 'react';
import './BottomButton.css';
import {decks} from 'cards';
import {connect} from 'react-redux';
import {dealHand, dealPressed, holdCard, reDrawCard, stakeOnTable, evalHand, dudHand, handValue, inPlay, firstHand, secondHand, standby, newHand, userUpdateDB, hiStake, hiWin} from '../actions/hands.actions';
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

  //if deal hasn't been pressed and game is not on standby
  if(!props.dealButton && !props.standby) {
    return(
      <div>
        <button className="button" onClick={() => { //onclick DEAL
          if(props.chips === 0 || props.chips - props.stake < 0) {
            return alert('You can\' afford it');
          }
          props.dispatch(dealPressed());
          props.dispatch(stakeOnTable(props.stake));
          props.dispatch(hiStake(props.stake));
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
  } 
  //if deal has been pressed once but game is not on standby
  else if (props.dealButton && !props.standby){
    return(
      <div>
        <div>
          {
            props.currentHand.map((card, index) => {
              if(!card.held) {
                return <button className="holdBtn" key={index} onClick={() => props.dispatch(holdCard(index))}>Draw</button>
              } else {
                return <button className="holdBtn" key={index} onClick={() => props.dispatch(reDrawCard(index))}>Hold</button>
              }
            })
          }
        </div>
        <div>
          <button className="button redeal" onClick={() => { //Onclick REDEAL
            props.dispatch(firstHand());
            props.dispatch(dealPressed());
            props.dispatch(secondHand());
            //REMOVE CARDS THAT HAVE HELD: FALSE
            let counter = 0;
            const remainingCards = props.currentHand.map(card => {
             if(!card.held) {
               counter++
               return undefined;
             } else {
               return card;
             }
            });
            //DRAW THE SAME AMOUNT OF CARDS THAT WERE DISCARDED
            const newCards = deck.draw(counter);
            //refactor new card objects
            const newSet = newCards.map(card => ({
              rank: card.rank.shortName,
              suit: card.suit.name[0].toUpperCase(),
              held: false,
            }));
            //Add cards to last hand, keeping last cards in their same index position
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
                props.dispatch(hiWin(props.stake * 500));
              break;
              case '5ofakind':
                props.dispatch(evalHand('fiveOfAKind'));
                props.dispatch(handValue(props.stake * 100));
                props.dispatch(hiWin(props.stake * 100));
              break;
              case 'straightflush':
                props.dispatch(evalHand('straightFlush'));
                props.dispatch(handValue(props.stake * 50));
                props.dispatch(hiWin(props.stake * 50));
              break;
              case '4ofakind':
                props.dispatch(evalHand('fourOfAKind'));
                props.dispatch(handValue(props.stake * 20));
                props.dispatch(hiWin(props.stake * 20));
              break;
              case 'fullhouse':
                props.dispatch(evalHand('fullHouse'));
                props.dispatch(handValue(props.stake * 10));
                props.dispatch(hiWin(props.stake * 10));
              break;
              case 'flush':
                props.dispatch(evalHand('flush'));
                props.dispatch(handValue(props.stake * 4));
                props.dispatch(hiWin(props.stake * 4));
              break;
              case 'straight':
                props.dispatch(evalHand('straight'));
                props.dispatch(handValue(props.stake * 3));
                props.dispatch(hiWin(props.stake * 3));
              break;
              case '3ofakind':
                props.dispatch(evalHand('threeOfAKind'));
                props.dispatch(handValue(props.stake * 2));
                props.dispatch(hiWin(props.stake * 2));
              break;
              case '2pair':
                props.dispatch(evalHand('twoPair'));
                props.dispatch(handValue(props.stake * 1));
                props.dispatch(hiWin(props.stake * 1));
              break;
              case 'pair':
                props.dispatch(evalHand('pair'));
                props.dispatch(handValue(props.stake * 0.5));
                props.dispatch(hiWin(props.stake * 0.5));
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
        props.dispatch(userUpdateDB(props.userInfo))
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
  userInfo: {
    userId: state.cards.userId,
    username: state.cards.username,
    email: state.cards.email,
    jwtToken: state.cards.jwtToken,
    hands: state.cards.hands,
    chips: state.cards.chips,
    hiStake: state.cards.hiStake,
    hiWin: state.cards.hiWin,
  }
})

export default connect(mapStateToProps)(dealButton);