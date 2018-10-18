export const DEAL_HAND = 'DEAL_HAND';
export function dealHand(hand) {
  return({
  type: DEAL_HAND,
  hand,
  })
};

export const DEAL_PRESSED = 'DEAL_PRESSED';
export function dealPressed() {
  return({
  type: DEAL_PRESSED,
  })
};

//Add chips
export const ADD_CHIPS = 'ADD_CHIPS';
export function addChips() {
  return({
  type: ADD_CHIPS,
  })
};

//Compare this win to the current highest win, then compare the highest stake
export const HI_WIN = 'HI_WIN';
export function hiWin(winAmount) {
  return({
  type: HI_WIN,
  winAmount,
  })
};

export const HI_STAKE = 'HI_STAKE';
export function hiStake(stakeAmount) {
  return({
    type: HI_STAKE,
    stakeAmount,
  })
}

//Change State hand count based on hand aquired

export const HAND_VALUE = 'HAND_VALUE';
export function handValue(hand) {
  return({
  type: HAND_VALUE,
  hand,
  })
}