import React from 'react';
import './PokerTable.css';
import InfoBoard from './InfoBoard';
import Hand from './Hand';
import ChipCounter from './ChipCounter';
import DealButton from './DealButton';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import StakeButton from './StakeButton';
import WelcomePage from './WelcomePage';
import logo from '../images/studPokerFull.png';
import 'typeface-roboto';

export function PokerTable(props) {
    if(!props.loggedIn) {
      return (
        <WelcomePage />
      )
    }

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

// const styles = StyleSheet.create({
//   parentView: {
//     flex: 1,
//   },
//   topView: {
//     flex: 1,
//   },
//   middleView: {
//     flex: 1,
//   },
//   lowerView: {
//     flex: 1,
//   },
// });

const mapStateToProps = (state) => ({
  loggedIn: state.cards.jwtToken,
})

export default withRouter(connect(mapStateToProps)(PokerTable));
