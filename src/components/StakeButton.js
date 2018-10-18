import React from 'react';
import {connect} from 'react-redux';

export function StakeButton(props) {
  return (
    <div>
      <input type="number" step="5" value={props.stakeAmount}></input>
    </div>
  )
};

const mapStateToProps = (state) => ({
  stakeAmount: state.stake,
})

export default connect(mapStateToProps)(StakeButton);