import React from 'react';
import './InfoBoard.css';
import {connect} from 'react-redux';

export function infoBoard(props) {
  return(
    <div className='board'>
        <li className="royalFlush card"><span className="handName">Royal Flush: </span><span className='winning'>{props.stake * 500}</span></li>
        <li className="fiveOfAKind card"><span className="handName">Five of a Kind: </span><span className='winning'>{props.stake * 100}</span></li>
        <li className="straightFlush card"><span className="handName">Straight Flush: </span><span className='winning'>{props.stake * 50}</span></li>
        <li className="fourOfAKind card"><span className="handName">Four of a Kind: </span><span className='winning'>{props.stake * 20}</span></li>
        <li className="fullHouse card"><span className="handName">Full House: </span><span className='winning'>{props.stake * 10}</span></li>
        <li className="flush card"><span className="handName">Flush: </span><span className='winning'>{props.stake * 4}</span></li>
        <li className="straight card"><span className="handName">Straight: </span><span className='winning'>{props.stake * 3}</span></li>
        <li className="threeOfAKind card"><span className="handName">Three of a Kind: </span><span className='winning'>{props.stake * 2}</span></li>
        <li className="twoPair card"><span className="handName">Two Pair: </span><span className='winning'>{props.stake * 1}</span></li>
        <li className="pair card"><span className="handName">Pair: </span><span className='winning'>{props.stake * 0.5}</span></li>
    </div>
  )
}

const mapStateToProps = (state) => ({
  stake: state.cards.stake,
});

export default connect(mapStateToProps)(infoBoard);