import React from 'react';
import './InfoBoard.css';
import {connect} from 'react-redux';

export function infoBoard(props) {
  return(
    <div className='container'>
      <ul className='card-column left'>
        <li>Royal Flush: <span className='winning'>{props.stake * 500}</span></li>
        <li>Five of a Kind: <span className='winning'>{props.stake * 100}</span></li>
        <li>Straight Flush: <span className='winning'>{props.stake * 50}</span></li>
        <li>Four of a Kind: <span className='winning'>{props.stake * 20}</span></li>
        <li>Full House: <span className='winning'>{props.stake * 10}</span></li>
      </ul>
      <ul className='card-column right'>
        <li>Flush: <span className='winning'>{props.stake * 4}</span></li>
        <li>Straight: <span className='winning'>{props.stake * 3}</span></li>
        <li>Three of a kind: <span className='winning'>{props.stake * 1}</span></li>
        <li>Two Pair: <span className='winning'>{props.stake * 1}</span></li>
        <li>Pair: <span className='winning'>{props.stake * 0.5}</span></li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  stake: state.cards.stake,
});

export default connect(mapStateToProps)(infoBoard);