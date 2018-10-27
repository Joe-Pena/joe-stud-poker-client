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


export function PokerTable(props) {
    if(!props.landing) {
      return (
        <LandingPage />
      )
    }

    if(!props.loggedIn && props.landing) {
      return (
        <WelcomePage />
      )
    }

    else if(props.loggedIn) {
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
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.cards.jwtToken,
  landing: state.cards.landing,
})

export default withRouter(connect(mapStateToProps)(PokerTable));
