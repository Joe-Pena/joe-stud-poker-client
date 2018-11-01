import React from 'react';
import LandingPage from './LandingPage';
import InfoBoard from './InfoBoard';
import Hand from './Hand';
import ChipCounter from './ChipCounter';
import DealButton from './DealButton';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import StakeButton from './StakeButton';
import logo from '../images/studPokerFull.png';
import WelcomePage from './WelcomePage';
import './PokerTable.css';
import StatSection from './StatSection';
import { loadAuthToken, jwtToken, landing, refreshUser} from '../actions/hands.actions';


export function PokerTable(props) {

    if(!props.landing) {
      return (
        <LandingPage />
      )
    }

    else if(!props.loggedIn && props.landing) {
      return (
        <WelcomePage />
      )
    }

    else if(props.loggedIn && props.landing) {
    return (
    <div className="parentView">
      <div className="topSection">
        <img className="logo" alt="Stud Poker" src={logo} /> 
        <InfoBoard />
      </div>
      <div className="middleSection">
        <Hand />
      </div>
      <div className="seperator">
      </div>
      <div className="lowerSection">
        <ChipCounter className="counter"/>
        <DealButton className="deal"/>
        <StakeButton className="stake"/>
        <div className="controllerLine">
        </div>
        <StatSection className="stats"/>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.cards.jwtToken,
  landing: state.cards.landing,
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

export default withRouter(connect(mapStateToProps)(PokerTable));
