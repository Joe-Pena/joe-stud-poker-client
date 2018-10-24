import React from 'react';
import './PokerTable.css';
import InfoBoard from './InfoBoard';
import DealerTable from './DealerTable';
import Hand from './Hand';
import ChipCounter from './ChipCounter';
import DealButton from './DealButton';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import StakeButton from './StakeButton';
import WelcomePage from './WelcomePage';

export function PokerTable(props) {
    if(!props.loggedIn) {
      return (
        <WelcomePage />
      )
    }

    return (
    <div>
      <InfoBoard />
      <DealerTable />
      <Hand />
      <div className="infoBoxes">
        <ChipCounter />
        <DealButton />
        <StakeButton />
      </div>
    </div>
    )
}

const mapStateToProps = (state) => ({
  loggedIn: !!state.cards.jwtToken,
})

export default withRouter(connect(mapStateToProps)(PokerTable));
