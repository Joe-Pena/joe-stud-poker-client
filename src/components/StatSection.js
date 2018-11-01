import React from 'react';
import {connect} from 'react-redux';
import {logout, refill, userUpdateDB} from '../actions/hands.actions';
import './StatSection.css';

export function StatSection(props) {
  return(
    <div className="statContainer">
      <h2 className="sUsername">{props.username}</h2>
      <h3 className="sStatHands">Hands: </h3>
        <ul>
          <li className="sSingleHand sRoyalflush">Royal Flush: {props.hands.royalFlush}</li>
          <li className="sSingleHand sFiveofakind">Five of a Kind: {props.hands.fiveOfAKind}</li>
          <li className="sSingleHand sStraightflush">Straight Flush: {props.hands.straightFlush}</li>
          <li className="sSingleHand sFourofakind">Four of a Kind: {props.hands.fourOfAKind}</li>
          <li className="sSingleHand sFullhouse">FullHouse: {props.hands.fullHouse}</li>
          <li className="sSingleHand sFlush">Flush: {props.hands.flush}</li>
          <li className="sSingleHand sStraight">Straight: {props.hands.straight}</li>
          <li className="sSingleHand sThreeofakind">Three of a Kind: {props.hands.threeOfAKind}</li>
          <li className="sSingleHand sTwopair">Two Pair: {props.hands.twoPair}</li>
          <li className="sSingleHand sPair">Pair: {props.hands.pair}</li>
          <li className="sSingleHand sTotalhands">Total Hands: {props.hands.totalHands}</li>
        </ul>
      <h3 className="sStatWins">Highest Win: {props.hiWin}</h3>
      <h3 className="sStatStake">Highest Stake: {props.hiStake}</h3>
      <button className="sLogOutButton" onClick={() => props.dispatch(logout())}>logout</button>
      <button className="sChipRefillButton" onClick={()=> {
        props.dispatch(refill());
        props.dispatch(userUpdateDB(props.userInfo));
        }}>More Chips!</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userId: state.cards.userId,
  username: state.cards.username,
  jwtToken: state.cards.jwtToken,
  hands: state.cards.hands,
  chips: state.cards.chips,
  hiStake: state.cards.hiStake,
  hiWin: state.cards.hiWin,
  userInfo: {
    userId: state.cards.userId,
    username: state.cards.username,
    email: state.cards.email,
    jwtToken: state.cards.jwtToken,
    hands: state.cards.hands,
    chips: state.cards.chips,
    hiStake: state.cards.hiStake,
    hiWin: state.cards.hiWin,
  },
})

export default connect(mapStateToProps)(StatSection);