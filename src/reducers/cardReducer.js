const initialState = {
  jwtToken: null, //TO NULL
  landing: false, //TO FALSE
  userId: null,
  username: null,//to null
  error: null,
  currentHand: [],
  cardsToHold: [false, false, false, false, false], //TODO RID OF ACTIONS AND CARDSTOHOLD
  dealButton: false,
  standby: false,
  firstHand: false,
  secondHand: false,
  hands: {
    royalFlush: 0,
    fiveOfAKind: 0,
    straightFlush: 0,
    fourOfAKind: 0,
    fullHouse: 0,
    flush: 0,
    straight: 0,
    threeOfAKind: 0,
    twoPair: 0,
    pair: 0,
    totalHands: 0,
  },
  chips: 2000,
  hiStake: 0,
  hiWin: 0,
  stake: 0,
  inPlay: false,
};

const cardReducer = (state = initialState, action) => {

  if(action.type === 'DEAL_HAND') {
    return Object.assign({}, state, {
      currentHand: action.hand,
    })
  } else if (action.type === 'NEW_HAND'){
    return Object.assign({}, state, {
      currentHand: action.hand,
    });
  } else if (action.type === 'DEAL_PRESSED'){
    return Object.assign({}, state, {
      dealButton: !state.dealButton,
    });
  } else if (action.type === 'HOLD_CARD'){
    return Object.assign({}, state, {
      currentHand: state.currentHand.map(
        (card, index) => (index === action.cardInt) ? {...card, held: true} : card
      ),
    });
  } else if (action.type === 'REDRAW_CARD'){
    return Object.assign({}, state, {
      currentHand: state.currentHand.map(
        (card, index) => (index === action.cardInt) ? {...card, held: false} : card
      ),
    });
  } else if (action.type === 'CHANGE_STAKE'){
    return Object.assign({}, state, {
      stake: action.stake
    });
  } else if (action.type === 'STAKE_ON_TABLE'){
    return Object.assign({}, state, {
      chips: state.chips - action.stake,
    });
  } else if(action.type === 'ADD_CHIPS') {
    return Object.assign({}, state, {
      chips: state.chips + 500,
    });
  } else if (action.type === 'HI_STAKE') {
    if(action.stakeAmount > state.hiStake) {
      console.log('current hiStake: ', state.hiStake, 'curent stake: ', action.stakeAmount);
      return Object.assign({}, state, {
        hiStake: action.stakeAmount
      });
    }
    return state;
  } else if(action.type === 'HI_WIN') {
    if(action.winAmount > state.hiWin) {
      console.log('New highest win!', action.winAmount);
      return Object.assign({}, state, {
        hiWin: action.winAmount,
      });
    }
    return state;
  } else if (action.type === 'HAND_VALUE') {
    return Object.assign({}, state, {
      chips: state.chips + action.amountWon
    });
  } else if (action.type === 'EVAL_HAND') {
    return Object.assign({}, state, {
      hands: {...state.hands, [action.hand]: state.hands[action.hand] + 1, totalHands: state.hands.totalHands + 1}
    });
  } else if (action.type === 'DUD_HAND') {
    return Object.assign({}, state, {
      hands: {...state.hands, totalHands: state.hands.totalHands + 1}
    });
  } else if (action.type === 'IN_PLAY') {
    return Object.assign({}, state, {
      inPlay: !state.inPlay,
    });
  } else if (action.type === 'FIRST_HAND') {
    return Object.assign({}, state, {
      firstHand: !state.firstHand,
    });
  } else if (action.type === 'SECOND_HAND') {
    return Object.assign({}, state, {
      secondHand: !state.secondHand,
    });
  } else if (action.type === 'STANDBY') {
    return Object.assign({}, state, {
      standby: !state.standby,
    });
  } else if (action.type === 'JWT_TOKEN') {
    return Object.assign({}, state, {
      jwtToken: action.token,
    });
  } else if (action.type === 'USER_STATE') {
    return Object.assign({}, state, {
      userId: action.user.id,
      username: action.user.username,
      hands: action.user.hands,
      chips: action.user.chips,
      hiStake: action.user.hiStake,
      hiWin: action.user.hiWin,
    });
  } else if (action.type === 'LANDING') {
    return Object.assign({}, state, {
      landing: !state.landing,
    });
  }

  return state;
};

export default cardReducer;