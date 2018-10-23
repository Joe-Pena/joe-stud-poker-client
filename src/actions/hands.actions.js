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

export const HOLD_CARD = 'HOLD_CARD';
export function holdCard(cardInt) {
  return({
  type: HOLD_CARD,
  cardInt,
  })
};

export const REDRAW_CARD = 'REDRAW_CARD';
export function reDrawCard(cardInt) {
  return({
  type: REDRAW_CARD,
  cardInt,
  })
};

export const REDRAW_HAND = 'REDRAW_HAND';
export function reDrawHand() {
  return({
  type: REDRAW_CARD,
  })
};

export const CHANGE_STAKE = 'CHANGE_STAKE';
export function changeStake(stake) {
  return({
  type: CHANGE_STAKE,
  stake,
  })
};

export const STAKE_ON_TABLE = 'STAKE_ON_TABLE';
export function stakeOnTable(stake) {
  return({
  type: STAKE_ON_TABLE,
  stake,
  })
};

export const EVAL_HAND = 'EVAL_HAND';
export function evalHand(hand) {
  return({
  type: EVAL_HAND,
  hand,
  })
};

export const DUD_HAND = 'DUD_HAND';
export function dudHand() {
  return({
  type: DUD_HAND,
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
};

//Change State hand count based on hand aquired

export const HAND_VALUE = 'HAND_VALUE';
export function handValue(amountWon) {
  return({
  type: HAND_VALUE,
  amountWon,
  })
};


export const IN_PLAY = 'IN_PLAY';
export function inPlay() {
  return({
  type: IN_PLAY,
  })
};

export const FIRST_HAND = 'FIRST_HAND';
export function firstHand() {
  return({
  type: FIRST_HAND,
  })
};

export const SECOND_HAND = 'SECOND_HAND';
export function secondHand() {
  return({
  type: SECOND_HAND,
  })
};

export const STANDBY = 'STANDBY';
export function standby() {
  return({
  type: STANDBY,
  })
};

export const NEW_HAND = 'NEW_HAND';
export function newHand(hand) {
  return({
  type: NEW_HAND,
  hand
  })
};