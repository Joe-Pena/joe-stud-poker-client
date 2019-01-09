import React from 'react';
import {connect} from 'react-redux';
import { changeStake } from '../actions/hands.actions';
import './BottomButton.css';

export function StakeButton(props) {
  if(props.inPlay || props.standby) {
    return (
      <div className="stake-form">
        <label className="stake-label" htmlFor="stakebtn">Stake: </label>
        <input className="button stakebtn" id="stakebtn" type="number" step="5" onChange={(e) => props.dispatch(changeStake(e.target.value))} value={props.stakeAmount} placeholder="Stake" disabled></input>
      </div>
    )
  } else {
    return (
      <div className="stake-form">
        <label className="stake-label" htmlFor="stakebtn">Stake: </label>
        <input className="button stakebtn" id="stakebtn" type="number" step="5" onChange={(e) => props.dispatch(changeStake(e.target.value))} value={props.stakeAmount} placeholder="Stake"></input>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  stakeAmount: state.cards.stake,
  inPlay: state.cards.inPlay,
  standby: state.cards.standby,
})

export default connect(mapStateToProps)(StakeButton);