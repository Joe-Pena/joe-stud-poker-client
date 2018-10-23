import React from 'react';
import {connect} from 'react-redux';
import { changeStake } from '../actions/hands.actions';
import './BottomButton.css';

export function StakeButton(props) {
  if(props.inPlay) {
    return (
      <div>
        <input className="button" type="number" step="5" onChange={(e) => props.dispatch(changeStake(e.target.value))} placeholder="Stake" disabled></input>
      </div>
    )
  } else {
    return (
      <div>
        <input className="button" type="number" step="5" onChange={(e) => props.dispatch(changeStake(e.target.value))} placeholder="Stake"></input>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  stakeAmount: state.cards.stake,
  inPlay: state.cards.inPlay,
})

export default connect(mapStateToProps)(StakeButton);