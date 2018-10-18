import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as FormReducer} from 'redux-form';
import thunk from 'redux-thunk';
import cardReducer from './reducers/cardReducer';

const store = createStore(
  combineReducers({
  cards: cardReducer,
  form: FormReducer
  }),
  applyMiddleware(thunk)
);

export default store;