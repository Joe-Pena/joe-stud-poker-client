import React from 'react';
import {connect} from 'react-redux';
import './Hand.css';

export function Hand(props) {
  // let handImages = [];

  if(props.firstHand) {
    const firstHand = props.hand.map(card => {
      if (card.suit === 'S' && card.rank === 'A') {
        return ('U+1F0A1')
      } else if (card.suit === 'S' && card.rank === '2') {
        return ('U+1F0A2')      
      } else if (card.suit === 'S' && card.rank === '3') {
        return ('U+1F0A3')
      } else if (card.suit === 'S' && card.rank === '4') {
        return ('U+1F0A4')
      } else if (card.suit === 'S' && card.rank === '5') {
        return ('U+1F0A5')
      } else if (card.suit === 'S' && card.rank === '6') {
        return ('U+1F0A6')
      } else if (card.suit === 'S' && card.rank === '7') {
        return ('U+1F0A7')
      } else if (card.suit === 'S' && card.rank === '8') {
        return ('U+1F0A8')
      } else if (card.suit === 'S' && card.rank === '9') {
        return ('U+1F0A9')
      } else if (card.suit === 'S' && card.rank === '10') {
        return ('U+1F0AA')
      } else if (card.suit === 'S' && card.rank === 'J') {
        return ('U+1F0AB')
      } else if (card.suit === 'S' && card.rank === 'Q') {
        return ('U+1F0AD')
      } else if (card.suit === 'S' && card.rank === 'K') {
        return ('U+1F0AE')
      } else if (card.suit === 'H' && card.rank === 'A') {
        return ('U+1F0B1')
      } else if (card.suit === 'H' && card.rank === '2') {
        return ('U+1F0B2')
      } else if (card.suit === 'H' && card.rank === '3') {
        return ('U+1F0B3')
      } else if (card.suit === 'H' && card.rank === '4') {
        return ('U+1F0B4')
      } else if (card.suit === 'H' && card.rank === '5') {
        return ('U+1F0B5')
      } else if (card.suit === 'H' && card.rank === '6') {
        return ('U+1F0B6')
      } else if (card.suit === 'H' && card.rank === '7') {
        return ('U+1F0B7')
      } else if (card.suit === 'H' && card.rank === '8') {
        return ('U+1F0B8')
      } else if (card.suit === 'H' && card.rank === '9') {
        return ('U+1F0B9')
      } else if (card.suit === 'H' && card.rank === '10') {
        return ('U+1F0BA')
      } else if (card.suit === 'H' && card.rank === 'J') {
        return ('U+1F0BB')
      } else if (card.suit === 'H' && card.rank === 'Q') {
        return ('U+1F0BD')
      } else if (card.suit === 'H' && card.rank === 'K') {
        return ('U+1F0BE')
      } else if (card.suit === 'D' && card.rank === 'A') {
        return ('U+1F0C1')
      } else if (card.suit === 'D' && card.rank === '2') {
        return ('U+1F0C2')
      } else if (card.suit === 'D' && card.rank === '3') {
        return ('U+1F0C3')
      } else if (card.suit === 'D' && card.rank === '4') {
        return ('U+1F0C4')
      } else if (card.suit === 'D' && card.rank === '5') {
        return ('U+1F0C5')
      } else if (card.suit === 'D' && card.rank === '6') {
        return ('U+1F0C6')
      } else if (card.suit === 'D' && card.rank === '7') {
        return ('U+1F0C7')
      } else if (card.suit === 'D' && card.rank === '8') {
        return ('U+1F0C8')
      } else if (card.suit === 'D' && card.rank === '9') {
        return ('U+1F0C9')
      } else if (card.suit === 'D' && card.rank === '10') {
        return ('U+1F0CA')
      } else if (card.suit === 'D' && card.rank === 'J') {
        return ('U+1F0CB')
      } else if (card.suit === 'D' && card.rank === 'Q') {
        return ('U+1F0CD')
      } else if (card.suit === 'D' && card.rank === 'K') {
        return ('U+1F0CE')
      } else if (card.suit === 'C' && card.rank === 'A') {
        return ('U+1F0D1')
      } else if (card.suit === 'C' && card.rank === '2') {
        return ('U+1F0D2')
      } else if (card.suit === 'C' && card.rank === '3') {
        return ('U+1F0D3')
      } else if (card.suit === 'C' && card.rank === '4') {
        return ('U+1F0D4')
      } else if (card.suit === 'C' && card.rank === '5') {
        return ('U+1F0D5')
      } else if (card.suit === 'C' && card.rank === '6') {
        return ('U+1F0D6')
      } else if (card.suit === 'C' && card.rank === '7') {
        return ('U+1F0D7')
      } else if (card.suit === 'C' && card.rank === '8') {
        return ('U+1F0D8')
      } else if (card.suit === 'C' && card.rank === '9') {
        return ('U+1F0D9')
      } else if (card.suit === 'C' && card.rank === '10') {
        return ('U+1F0DA')
      } else if (card.suit === 'C' && card.rank === 'J') {
        return ('U+1F0DB')
      } else if (card.suit === 'C' && card.rank === 'Q') {
        return ('U+1F0DD')
      } else if (card.suit === 'C' && card.rank === 'K') {
        return ('U+1F0DE')
      };
    })
    return (
      <div>
        {firstHand}
      </div>
    )
  } else if(props.secondHand) {
    const secondHand = props.hand.map(card => {
      if (card.suit === 'S' && card.rank === 'A') {
        return ('U+1F0A1')
      } else if (card.suit === 'S' && card.rank === '2') {
        return ('U+1F0A2')      
      } else if (card.suit === 'S' && card.rank === '3') {
        return ('U+1F0A3')
      } else if (card.suit === 'S' && card.rank === '4') {
        return ('U+1F0A4')
      } else if (card.suit === 'S' && card.rank === '5') {
        return ('U+1F0A5')
      } else if (card.suit === 'S' && card.rank === '6') {
        return ('U+1F0A6')
      } else if (card.suit === 'S' && card.rank === '7') {
        return ('U+1F0A7')
      } else if (card.suit === 'S' && card.rank === '8') {
        return ('U+1F0A8')
      } else if (card.suit === 'S' && card.rank === '9') {
        return ('U+1F0A9')
      } else if (card.suit === 'S' && card.rank === '10') {
        return ('U+1F0AA')
      } else if (card.suit === 'S' && card.rank === 'J') {
        return ('U+1F0AB')
      } else if (card.suit === 'S' && card.rank === 'Q') {
        return ('U+1F0AD')
      } else if (card.suit === 'S' && card.rank === 'K') {
        return ('U+1F0AE')
      } else if (card.suit === 'H' && card.rank === 'A') {
        return ('U+1F0B1')
      } else if (card.suit === 'H' && card.rank === '2') {
        return ('U+1F0B2')
      } else if (card.suit === 'H' && card.rank === '3') {
        return ('U+1F0B3')
      } else if (card.suit === 'H' && card.rank === '4') {
        return ('U+1F0B4')
      } else if (card.suit === 'H' && card.rank === '5') {
        return ('U+1F0B5')
      } else if (card.suit === 'H' && card.rank === '6') {
        return ('U+1F0B6')
      } else if (card.suit === 'H' && card.rank === '7') {
        return ('U+1F0B7')
      } else if (card.suit === 'H' && card.rank === '8') {
        return ('U+1F0B8')
      } else if (card.suit === 'H' && card.rank === '9') {
        return ('U+1F0B9')
      } else if (card.suit === 'H' && card.rank === '10') {
        return ('U+1F0BA')
      } else if (card.suit === 'H' && card.rank === 'J') {
        return ('U+1F0BB')
      } else if (card.suit === 'H' && card.rank === 'Q') {
        return ('U+1F0BD')
      } else if (card.suit === 'H' && card.rank === 'K') {
        return ('U+1F0BE')
      } else if (card.suit === 'D' && card.rank === 'A') {
        return ('U+1F0C1')
      } else if (card.suit === 'D' && card.rank === '2') {
        return ('U+1F0C2')
      } else if (card.suit === 'D' && card.rank === '3') {
        return ('U+1F0C3')
      } else if (card.suit === 'D' && card.rank === '4') {
        return ('U+1F0C4')
      } else if (card.suit === 'D' && card.rank === '5') {
        return ('U+1F0C5')
      } else if (card.suit === 'D' && card.rank === '6') {
        return ('U+1F0C6')
      } else if (card.suit === 'D' && card.rank === '7') {
        return ('U+1F0C7')
      } else if (card.suit === 'D' && card.rank === '8') {
        return ('U+1F0C8')
      } else if (card.suit === 'D' && card.rank === '9') {
        return ('U+1F0C9')
      } else if (card.suit === 'D' && card.rank === '10') {
        return ('U+1F0CA')
      } else if (card.suit === 'D' && card.rank === 'J') {
        return ('U+1F0CB')
      } else if (card.suit === 'D' && card.rank === 'Q') {
        return ('U+1F0CD')
      } else if (card.suit === 'D' && card.rank === 'K') {
        return ('U+1F0CE')
      } else if (card.suit === 'C' && card.rank === 'A') {
        return ('U+1F0D1')
      } else if (card.suit === 'C' && card.rank === '2') {
        return ('U+1F0D2')
      } else if (card.suit === 'C' && card.rank === '3') {
        return ('U+1F0D3')
      } else if (card.suit === 'C' && card.rank === '4') {
        return ('U+1F0D4')
      } else if (card.suit === 'C' && card.rank === '5') {
        return ('U+1F0D5')
      } else if (card.suit === 'C' && card.rank === '6') {
        return ('U+1F0D6')
      } else if (card.suit === 'C' && card.rank === '7') {
        return ('U+1F0D7')
      } else if (card.suit === 'C' && card.rank === '8') {
        return ('U+1F0D8')
      } else if (card.suit === 'C' && card.rank === '9') {
        return ('U+1F0D9')
      } else if (card.suit === 'C' && card.rank === '10') {
        return ('U+1F0DA')
      } else if (card.suit === 'C' && card.rank === 'J') {
        return ('U+1F0DB')
      } else if (card.suit === 'C' && card.rank === 'Q') {
        return ('U+1F0DD')
      } else if (card.suit === 'C' && card.rank === 'K') {
        return ('U+1F0DE')
      };
  })
    return(
      <div>
        {secondHand}
      </div>
    )
  } else {
    return (
      <div>
        <h2>Press Deal to start</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  hand: state.cards.currentHand,
  firstHand: state.cards.firstHand,
  secondHand: state.cards.secondHand,
})

export default connect(mapStateToProps)(Hand);
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