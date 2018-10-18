import React from 'react';
import './PokerTable.css';
import InfoBoard from './InfoBoard';
import DealerTable from './DealerTable';
import Hand from './Hand';
import ChipCounter from './ChipCounter';
import DealButton from './DealButton';
import LoginPage from './LoginPage';
import {connect} from 'react-redux';
import StakeButton from './StakeButton';

export function PokerTable(props) {
    if(!props.loggedIn) {
      return (
        <LoginPage />
      )
    }

    return (
    <div>
      <InfoBoard />
      <DealerTable />
      <Hand />
      <ChipCounter />
      <DealButton />
      <StakeButton />
    </div>
    )
}

const mapStateToProps = (state) => ({
  loggedIn: state.cards.loggedIn,
})

export default connect(mapStateToProps)(PokerTable);
