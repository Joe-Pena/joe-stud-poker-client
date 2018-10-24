import React from 'react';
import {connect} from 'react-redux';
import './Hand.css';
import twoOfSpades from '../images/2S.png';
import threeOfSpades from '../images/3S.png';
import fourOfSpades from '../images/4S.png';
import fiveOfSpades from '../images/5S.png';
import sixOfSpades from '../images/6S.png';
import sevenOfSpades from '../images/7S.png';
import eightOfSpades from '../images/8S.png';
import nineOfSpades from '../images/9S.png';
import tenOfSpades from '../images/10S.png';
import jackOfSpades from '../images/JS.png';
import queenOfSpades from '../images/QS.png';
import kingOfSpades from '../images/KS.png';
import aceOfSpades from '../images/AS.png';

import twoOfHearts from '../images/2H.png';
import threeOfHearts from '../images/3H.png';
import fourOfHearts from '../images/4H.png';
import fiveOfHearts from '../images/5H.png';
import sixOfHearts from '../images/6H.png';
import sevenOfHearts from '../images/7H.png';
import eightOfHearts from '../images/8H.png';
import nineOfHearts from '../images/9H.png';
import tenOfHearts from '../images/10H.png';
import jackOfHearts from '../images/JH.png';
import queenOfHearts from '../images/QH.png';
import kingOfHearts from '../images/KH.png';
import aceOfHearts from '../images/AH.png';

import twoOfClubs from '../images/2C.png';
import threeOfClubs from '../images/3C.png';
import fourOfClubs from '../images/4C.png';
import fiveOfClubs from '../images/5C.png';
import sixOfClubs from '../images/6C.png';
import sevenOfClubs from '../images/7C.png';
import eightOfClubs from '../images/8C.png';
import nineOfClubs from '../images/9C.png';
import tenOfClubs from '../images/10C.png';
import jackOfClubs from '../images/JC.png';
import queenOfClubs from '../images/QC.png';
import kingOfClubs from '../images/KC.png';
import aceOfClubs from '../images/AC.png';

import twoOfDiamonds from '../images/2D.png';
import threeOfDiamonds from '../images/3D.png';
import fourOfDiamonds from '../images/4D.png';
import fiveOfDiamonds from '../images/5D.png';
import sixOfDiamonds from '../images/6D.png';
import sevenOfDiamonds from '../images/7D.png';
import eightOfDiamonds from '../images/8D.png';
import nineOfDiamonds from '../images/9D.png';
import tenOfDiamonds from '../images/10D.png';
import jackOfDiamonds from '../images/JD.png';
import queenOfDiamonds from '../images/QD.png';
import kingOfDiamonds from '../images/KD.png';
import aceOfDiamonds from '../images/AD.png';

export function Hand(props) {
  // let handImages = [];

  if(props.firstHand) {
    const firstHand = props.hand.map((card, index) => {
      if (card.suit === 'S' && card.rank === 'A') {
        return (<img className="card" alt="Ace Of Spades" src={aceOfSpades} key={index}/>)
      } else if (card.suit === 'S' && card.rank === '2') {
        return (<img className="card" alt="Two Of Spades" src={twoOfSpades} key={index} />)      
      } else if (card.suit === 'S' && card.rank === '3') {
        return (<img className="card" alt="Three Of Spades" src={threeOfSpades} key={index} />)
      } else if (card.suit === 'S' && card.rank === '4') {
        return (<img className="card" alt="Four Of Spades" src={fourOfSpades} key={index} />)
      } else if (card.suit === 'S' && card.rank === '5') {
        return (<img className="card" alt="Five Of Spades" src={fiveOfSpades} key={index} />)
      } else if (card.suit === 'S' && card.rank === '6') {
        return (<img className="card" alt="Six Of Spades" src={sixOfSpades} key={index} />)
      } else if (card.suit === 'S' && card.rank === '7') {
        return (<img className="card" alt="Seven Of Spades" src={sevenOfSpades} key={index} />)
      } else if (card.suit === 'S' && card.rank === '8') {
        return (<img className="card" alt="Eight Of Spades" src={eightOfSpades} key={index} />)
      } else if (card.suit === 'S' && card.rank === '9') {
        return (<img className="card" alt="Nine Of Spades" src={nineOfSpades} key={index} />)
      } else if (card.suit === 'S' && card.rank === '10') {
        return (<img className="card" alt="Ten Of Spades" src={tenOfSpades} key={index} />)
      } else if (card.suit === 'S' && card.rank === 'J') {
        return (<img className="card" alt="Jack Of Spades" src={jackOfSpades} key={index} />)
      } else if (card.suit === 'S' && card.rank === 'Q') {
        return (<img className="card" alt="Queen Of Spades" src={queenOfSpades} key={index} />)
      } else if (card.suit === 'S' && card.rank === 'K') {
        return (<img className="card" alt="King Of Spades" src={kingOfSpades} key={index} />)
      } else if (card.suit === 'H' && card.rank === 'A') {
        return (<img className="card" alt="Ace Of Hearts" src={aceOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === '2') {
        return (<img className="card" alt="Two Of Hearts" src={twoOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === '3') {
        return (<img className="card" alt="Three Of Hearts" src={threeOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === '4') {
        return (<img className="card" alt="Four Of Hearts" src={fourOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === '5') {
        return (<img className="card" alt="Five Of Hearts" src={fiveOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === '6') {
        return (<img className="card" alt="Six Of Hearts" src={sixOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === '7') {
        return (<img className="card" alt="Seven Of Hearts" src={sevenOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === '8') {
        return (<img className="card" alt="Eight Of Hearts" src={eightOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === '9') {
        return (<img className="card" alt="Nine Of Hearts" src={nineOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === '10') {
        return (<img className="card" alt="Ten Of Hearts" src={tenOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === 'J') {
        return (<img className="card" alt="Jack Of Hearts" src={jackOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === 'Q') {
        return (<img className="card" alt="Queen Of Hearts" src={queenOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === 'K') {
        return (<img className="card" alt="King Of Hearts" src={kingOfHearts} key={index} />)
      } else if (card.suit === 'D' && card.rank === 'A') {
        return (<img className="card" alt="Ace Of Diamonds" src={aceOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === '2') {
        return (<img className="card" alt="Two Of Diamonds" src={twoOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === '3') {
        return (<img className="card" alt="Three Of Diamonds" src={threeOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === '4') {
        return (<img className="card" alt="Four Of Diamonds" src={fourOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === '5') {
        return (<img className="card" alt="Five Of Diamonds" src={fiveOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === '6') {
        return (<img className="card" alt="Six Of Diamonds" src={sixOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === '7') {
        return (<img className="card" alt="Seven Of Diamonds" src={sevenOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === '8') {
        return (<img className="card" alt="Eight Of Diamonds" src={eightOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === '9') {
        return (<img className="card" alt="Nine Of Diamonds" src={nineOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === '10') {
        return (<img className="card" alt="Ten Of Diamonds" src={tenOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === 'J') {
        return (<img className="card" alt="Jack Of Diamonds" src={jackOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === 'Q') {
        return (<img className="card" alt="Queen Of Diamonds" src={queenOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === 'K') {
        return (<img className="card" alt="King Of Diamonds" src={kingOfDiamonds} key={index} />)
      } else if (card.suit === 'C' && card.rank === 'A') {
        return (<img className="card" alt="Ace Of Clubs" src={aceOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === '2') {
        return (<img className="card" alt="Two Of Clubs" src={twoOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === '3') {
        return (<img className="card" alt="Three Of Clubs" src={threeOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === '4') {
        return (<img className="card" alt="Four Of Clubs" src={fourOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === '5') {
        return (<img className="card" alt="Five Of Clubs" src={fiveOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === '6') {
        return (<img className="card" alt="Six Of Clubs" src={sixOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === '7') {
        return (<img className="card" alt="Seven Of Clubs" src={sevenOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === '8') {
        return (<img className="card" alt="Eight Of Clubs" src={eightOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === '9') {
        return (<img className="card" alt="Nine Of Clubs" src={nineOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === '10') {
        return (<img className="card" alt="Ten Of Clubs" src={tenOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === 'J') {
        return (<img className="card" alt="Jack Of Clubs" src={jackOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === 'Q') {
        return (<img className="card" alt="Queen Of Clubs" src={queenOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === 'K') {
        return (<img className="card" alt="King Of Clubs" src={kingOfClubs} key={index} />)
      };
      return card;
    })
    return (
      <div className="cardContainer" >
        {firstHand}
      </div>
    )
  } else if(props.secondHand) {
    const secondHand = props.hand.map((card, index) => {
      if (card.suit === 'S' && card.rank === 'A') {
        return (<img className="card" alt="Ace Of Spades" src={aceOfSpades} key={index}/>)
      } else if (card.suit === 'S' && card.rank === '2') {
        return (<img className="card" alt="Two Of Spades" src={twoOfSpades} key={index} />)      
      } else if (card.suit === 'S' && card.rank === '3') {
        return (<img className="card" alt="Three Of Spades" src={threeOfSpades} key={index} />)
      } else if (card.suit === 'S' && card.rank === '4') {
        return (<img className="card" alt="Four Of Spades" src={fourOfSpades} key={index} />)
      } else if (card.suit === 'S' && card.rank === '5') {
        return (<img className="card" alt="Five Of Spades" src={fiveOfSpades} key={index} />)
      } else if (card.suit === 'S' && card.rank === '6') {
        return (<img className="card" alt="Six Of Spades" src={sixOfSpades} key={index} />)
      } else if (card.suit === 'S' && card.rank === '7') {
        return (<img className="card" alt="Seven Of Spades" src={sevenOfSpades} key={index} />)
      } else if (card.suit === 'S' && card.rank === '8') {
        return (<img className="card" alt="Eight Of Spades" src={eightOfSpades} key={index} />)
      } else if (card.suit === 'S' && card.rank === '9') {
        return (<img className="card" alt="Nine Of Spades" src={nineOfSpades} key={index} />)
      } else if (card.suit === 'S' && card.rank === '10') {
        return (<img className="card" alt="Ten Of Spades" src={tenOfSpades} key={index} />)
      } else if (card.suit === 'S' && card.rank === 'J') {
        return (<img className="card" alt="Jack Of Spades" src={jackOfSpades} key={index} />)
      } else if (card.suit === 'S' && card.rank === 'Q') {
        return (<img className="card" alt="Queen Of Spades" src={queenOfSpades} key={index} />)
      } else if (card.suit === 'S' && card.rank === 'K') {
        return (<img className="card" alt="King Of Spades" src={kingOfSpades} key={index} />)
      } else if (card.suit === 'H' && card.rank === 'A') {
        return (<img className="card" alt="Ace Of Hearts" src={aceOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === '2') {
        return (<img className="card" alt="Two Of Hearts" src={twoOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === '3') {
        return (<img className="card" alt="Three Of Hearts" src={threeOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === '4') {
        return (<img className="card" alt="Four Of Hearts" src={fourOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === '5') {
        return (<img className="card" alt="Five Of Hearts" src={fiveOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === '6') {
        return (<img className="card" alt="Six Of Hearts" src={sixOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === '7') {
        return (<img className="card" alt="Seven Of Hearts" src={sevenOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === '8') {
        return (<img className="card" alt="Eight Of Hearts" src={eightOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === '9') {
        return (<img className="card" alt="Nine Of Hearts" src={nineOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === '10') {
        return (<img className="card" alt="Ten Of Hearts" src={tenOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === 'J') {
        return (<img className="card" alt="Jack Of Hearts" src={jackOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === 'Q') {
        return (<img className="card" alt="Queen Of Hearts" src={queenOfHearts} key={index} />)
      } else if (card.suit === 'H' && card.rank === 'K') {
        return (<img className="card" alt="King Of Hearts" src={kingOfHearts} key={index} />)
      } else if (card.suit === 'D' && card.rank === 'A') {
        return (<img className="card" alt="Ace Of Diamonds" src={aceOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === '2') {
        return (<img className="card" alt="Two Of Diamonds" src={twoOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === '3') {
        return (<img className="card" alt="Three Of Diamonds" src={threeOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === '4') {
        return (<img className="card" alt="Four Of Diamonds" src={fourOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === '5') {
        return (<img className="card" alt="Five Of Diamonds" src={fiveOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === '6') {
        return (<img className="card" alt="Six Of Diamonds" src={sixOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === '7') {
        return (<img className="card" alt="Seven Of Diamonds" src={sevenOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === '8') {
        return (<img className="card" alt="Eight Of Diamonds" src={eightOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === '9') {
        return (<img className="card" alt="Nine Of Diamonds" src={nineOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === '10') {
        return (<img className="card" alt="Ten Of Diamonds" src={tenOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === 'J') {
        return (<img className="card" alt="Jack Of Diamonds" src={jackOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === 'Q') {
        return (<img className="card" alt="Queen Of Diamonds" src={queenOfDiamonds} key={index} />)
      } else if (card.suit === 'D' && card.rank === 'K') {
        return (<img className="card" alt="King Of Diamonds" src={kingOfDiamonds} key={index} />)
      } else if (card.suit === 'C' && card.rank === 'A') {
        return (<img className="card" alt="Ace Of Clubs" src={aceOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === '2') {
        return (<img className="card" alt="Two Of Clubs" src={twoOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === '3') {
        return (<img className="card" alt="Three Of Clubs" src={threeOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === '4') {
        return (<img className="card" alt="Four Of Clubs" src={fourOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === '5') {
        return (<img className="card" alt="Five Of Clubs" src={fiveOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === '6') {
        return (<img className="card" alt="Six Of Clubs" src={sixOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === '7') {
        return (<img className="card" alt="Seven Of Clubs" src={sevenOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === '8') {
        return (<img className="card" alt="Eight Of Clubs" src={eightOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === '9') {
        return (<img className="card" alt="Nine Of Clubs" src={nineOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === '10') {
        return (<img className="card" alt="Ten Of Clubs" src={tenOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === 'J') {
        return (<img className="card" alt="Jack Of Clubs" src={jackOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === 'Q') {
        return (<img className="card" alt="Queen Of Clubs" src={queenOfClubs} key={index} />)
      } else if (card.suit === 'C' && card.rank === 'K') {
        return (<img className="card" alt="King Of Clubs" src={kingOfClubs} key={index} />)
      };
      return card;
    })
    return(
      <div className="cardContainer">
        {secondHand}
      </div>
    )
  } else {
    return (
      <div>
        <h2>Click deal to begin</h2>
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