import React from 'react';
import './BottomButton.css';
import {connect} from 'react-redux';

export function chipCounter(props) {
  return(
    <div>
      <button className="button">Chips: {props.chips}</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  chips: state.chips,
})

export default connect(mapStateToProps)(chipCounter);

