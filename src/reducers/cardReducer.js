const initialState = {
  loggedIn: true,
  error: null,
  currentHand: [],
  cardsToHold: null,
  dealButton: false,
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
  stake: 100,
};

const cardReducer = (state = initialState, action) => {

  if(action.type === 'DEAL_HAND') {
    console.log(action.hand);
    return Object.assign({}, state, {
      currentHand: action.hand,
    })
  } else if (action.type === 'DEAL_PRESSED'){
    return Object.assign({}, state, {
      dealButton: !state.dealButton,
    });
  }else if(action.type === 'ADD_CHIPS') {
    return Object.assign({}, state, {
      chips: state.chips + 500,
    });
  } else if (action.type === 'HI_STAKE') {
    if(action.stakeAmount > state.hiStake) {
      return Object.assign({}, state, {
        hiStake: action.stakeAmount
      });
    }
  } else if(action.type === 'HI_WIN') {
    if(action.winAmount > state.hiWin) {
      return Object.assign({}, state, {
        hiWin: action.winAmount,
      });
    }
  } else if (action.type === 'HAND_VALUE') {
    return Object.assign({}, state, {
      hands: {...state.hands, [action.hand]: state.hands[action.hand] + 1, totalHands: state.totalHands + 1}
    });
  }
  return state;
};

export default cardReducer;