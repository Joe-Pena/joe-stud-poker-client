import React from 'react';
import logo from '../images/studPokerFull.png';
import './LandingPage.css';
import fourOfSpades from '../images/4S.png';
import fiveOfSpades from '../images/5S.png';
import tenOfSpades from '../images/10S.png';
import jackOfSpades from '../images/JS.png';
import queenOfSpades from '../images/QS.png';
import kingOfSpades from '../images/KS.png';
import aceOfSpades from '../images/AS.png';

import twoOfHearts from '../images/2H.png';
import fourOfHearts from '../images/4H.png';
import fiveOfHearts from '../images/5H.png';
import sixOfHearts from '../images/6H.png';
import eightOfHearts from '../images/8H.png';
import tenOfHearts from '../images/10H.png';
import kingOfHearts from '../images/KH.png';
import aceOfHearts from '../images/AH.png';

import sixOfClubs from '../images/6C.png';
import sevenOfClubs from '../images/7C.png';
import eightOfClubs from '../images/8C.png';
import nineOfClubs from '../images/9C.png';
import tenOfClubs from '../images/10C.png';
import kingOfClubs from '../images/KC.png';
import aceOfClubs from '../images/AC.png';

import twoOfDiamonds from '../images/2D.png';
import threeOfDiamonds from '../images/3D.png';
import fiveOfDiamonds from '../images/5D.png';
import eightOfDiamonds from '../images/8D.png';
import tenOfDiamonds from '../images/10D.png';
import jackOfDiamonds from '../images/JD.png';
import queenOfDiamonds from '../images/QD.png';
import kingOfDiamonds from '../images/KD.png';
import aceOfDiamonds from '../images/AD.png';
import {Link} from 'react-router-dom';

export function LandingPage() {
  return(
    <div className="parentView">
      <div className="topView">
      <header className="heading">
        <img alt="studPoker" className="logo" src={logo} />
      </header>
        <div className="message">
          <h1>Welcome to Stud Poker!</h1>
          <p>If you're unfamiliar with how poker works, look below to see the directions.</p>
          <p>Otherwise, log in below!</p>
          <Link to='/login'><button type="link" className='loginBtn'>Start Playing!</button></Link>
        </div>
      </div>
      <div className="bottomView">
        <h1 className="instructions">Instructions</h1>
        <div className="instructionsObj">
          <p className="objectiveOne">The objective of stud poker is to get the highest value from the five cards you are given.</p>
          <p className="objectiveTwo">Once you receive your initial five card hand, you will have the opportunity to redraw up to five cards to 
            try to get the best value out of your hand. You can choose which cards you want to keep, or if not, simply redraw 
            a brand new hand!</p>
          <p className="objectiveThree">To receive your first hand, simply click the <button className="dealbtn" disabled>Deal</button> button. 
            You will be dealt a random 5 card hand like the one in the right.</p>
        </div>
        <p className="objectiveFour">The value of your hand is based on the suit (symbol) and rank (number or face)
          of your card, we'll take a look at them below.</p>
        <div className="randomHand">
          <img className="exampleCard" alt="random card" src={twoOfDiamonds}/>
          <img className="exampleCard" alt="random card" src={kingOfHearts}/>
          <img className="exampleCard" alt="random card" src={eightOfHearts}/>
          <img className="exampleCard" alt="random card" src={aceOfClubs}/>
          <img className="exampleCard" alt="random card" src={fiveOfSpades}/>
        </div>
        <div className="instructionsRedeal">
          <p className="insRand">We can see that the first hand is not worth much (Actually, it's worth nothing).
            What we should do is redraw a new set, and keep some cards if we want.
          </p>
          <p className="insRandTwo">When <button className="dealbtn" disabled>Deal</button> is pressed the first time, 
            five <button className="holdBtn" disabled>Hold</button> buttons will appear, each <button className="holdBtn" disabled>Hold</button>
            represents each of the five cards in your hand. If you want to keep a card, then click on the corresponding
            <button className="holdBtn" disabled>Hold</button> button.
          </p> 
          <p className="insRandThree">You will notice that the <button className="holdBtn" disabled>Hold</button> button
            changes to <button className="holdBtn" disabled>Redraw</button> when clicked. To stop holding that card
            simply press the <button className="holdBtn" disabled>Redraw</button> to have it be switched with a new card.
          </p>
        </div>
          <p className="insRandFour">When <button className="dealbtn" disabled>Redraw</button> is pressed, the dealer
            will deal you the amount of cards you need to complete a new five card hand, replacing the hands that you
            chose not to hold. In this example, let's keep the King of hearts.
          </p>
        <div className="newHand">
          <ul className="holdButtons">
          <button className="holdBtn" disabled>Hold</button>
          <button className="holdBtn" disabled>Redraw</button>
          <button className="holdBtn" disabled>Hold</button>
          <button className="holdBtn" disabled>Hold</button>
          <button className="holdBtn" disabled>Hold</button>
          </ul>
          <div className="newCards">
            <img className="exampleCard" alt="random card" src={fiveOfSpades}/>
            <img className="exampleCard" alt="random card" src={kingOfHearts}/>
            <img className="exampleCard" alt="random card" src={queenOfDiamonds}/>
            <img className="exampleCard" alt="random card" src={kingOfClubs}/>
            <img className="exampleCard" alt="random card" src={fourOfHearts}/>
          </div>
          <p>
            Now we have a pair of Kings!
          </p>
        </div>
        <div className="handValues">
          <p className="handExplain">In order to set a stake(a bet) you must enter the amount you will be putting on 
          the <input className="stakebtn" type="number" step="5" placeholder="Stake" disabled></input> box,
            note that once you press the <button className="dealbtn" disabled>Deal</button> button, your stake
            will be "on the table", meaning the bet is set and your chips will not be coming back unless you make a win.
          </p>
          <p className="handExplainTwo">
            The amount you win is dependent on the hand you get. Different hands will multiply your stake and that will
            be your payout! Here are all the hands you can possibly get and their multipliers.
          </p>
        </div>
        <div className="handNames">
          <div className="royalflush">
            <img className="exampleCardH" alt="random card" src={tenOfSpades}/>
            <img className="exampleCardH" alt="random card" src={jackOfSpades}/>
            <img className="exampleCardH" alt="random card" src={queenOfSpades}/>
            <img className="exampleCardH" alt="random card" src={kingOfSpades}/>
            <img className="exampleCardH" alt="random card" src={aceOfSpades}/>
          </div>
          <div className="straightflush">
            <img className="exampleCardH" alt="random card" src={sixOfClubs}/>
            <img className="exampleCardH" alt="random card" src={sevenOfClubs}/>
            <img className="exampleCardH" alt="random card" src={eightOfClubs}/>
            <img className="exampleCardH" alt="random card" src={nineOfClubs}/>
            <img className="exampleCardH" alt="random card" src={tenOfClubs}/>
          </div>
          <div className="fourofakind">
            <img className="exampleCardH" alt="random card" src={kingOfSpades}/>
            <img className="exampleCardH" alt="random card" src={kingOfHearts}/>
            <img className="exampleCardH" alt="random card" src={kingOfClubs}/>
            <img className="exampleCardH" alt="random card" src={kingOfDiamonds}/>
            <img className="exampleCardH" alt="random card" src={fiveOfSpades}/>
          </div>
          <div className="fullhouse">
            <img className="exampleCardH" alt="random card" src={aceOfDiamonds}/>
            <img className="exampleCardH" alt="random card" src={aceOfHearts}/>
            <img className="exampleCardH" alt="random card" src={aceOfClubs}/>
            <img className="exampleCardH" alt="random card" src={tenOfHearts}/>
            <img className="exampleCardH" alt="random card" src={tenOfDiamonds}/>
          </div>
          <div className="flush">
            <img className="exampleCardH" alt="random card" src={twoOfDiamonds}/>
            <img className="exampleCardH" alt="random card" src={kingOfDiamonds}/>
            <img className="exampleCardH" alt="random card" src={eightOfDiamonds}/>
            <img className="exampleCardH" alt="random card" src={aceOfDiamonds}/>
            <img className="exampleCardH" alt="random card" src={fiveOfDiamonds}/>
          </div>
        </div>
        <div className="handNamesTwo">
          <div className="straight">
            <img className="exampleCardH" alt="random card" src={threeOfDiamonds}/>
            <img className="exampleCardH" alt="random card" src={fourOfSpades}/>
            <img className="exampleCardH" alt="random card" src={fiveOfDiamonds}/>
            <img className="exampleCardH" alt="random card" src={sixOfHearts}/>
            <img className="exampleCardH" alt="random card" src={sevenOfClubs}/>
          </div>
          <div className="threeofakind">
            <img className="exampleCardH" alt="random card" src={aceOfClubs}/>
            <img className="exampleCardH" alt="random card" src={aceOfDiamonds}/>
            <img className="exampleCardH" alt="random card" src={aceOfSpades}/>
            <img className="exampleCardH" alt="random card" src={fiveOfHearts}/>
            <img className="exampleCardH" alt="random card" src={kingOfClubs}/>
          </div>
          <div className="twopair">
            <img className="exampleCardH" alt="random card" src={twoOfDiamonds}/>
            <img className="exampleCardH" alt="random card" src={twoOfHearts}/>
            <img className="exampleCardH" alt="random card" src={fiveOfSpades}/>
            <img className="exampleCardH" alt="random card" src={fiveOfDiamonds}/>
            <img className="exampleCardH" alt="random card" src={jackOfDiamonds}/>
          </div>
          <div className="pair">
            <img className="exampleCardH" alt="random card" src={twoOfDiamonds}/>
            <img className="exampleCardH" alt="random card" src={aceOfDiamonds}/>
            <img className="exampleCardH" alt="random card" src={eightOfHearts}/>
            <img className="exampleCardH" alt="random card" src={aceOfClubs}/>
            <img className="exampleCardH" alt="random card" src={fiveOfSpades}/>
          </div>
        </div>
        <div className="handDesc">
          <p className="royalflushdesc">10, J, Q, K, and A all of the same suit <span className="winning">x500</span></p>
          <p className="straightflushdesc">Rank in order and same suit <span className="winning">x50</span></p>
          <p className="fourofakinddesc">Four cards of the same rank <span className="winning">x20</span></p>
          <p className="fullhousedesc">Three cards of the same rank, then a pair <span className="winning">x10</span></p>
          <p className="flushdesc">All cards are the same suit <span className="winning">x4</span></p>
        </div>
        <div className="handDescTwo">
          <p className="straightdesc">Card ranks in order <span className="winning">x3</span></p>
          <p className="threeofakinddesc">Three cards of the same rank <span className="winning">x2</span></p>
          <p className="twopair">Two pairs of the same rank <span className="winning">x1</span></p>
          <p className="pair">A pair of the same rank <span className="winning">x0.5</span></p>
        </div>
      </div>
    </div>
  )
}