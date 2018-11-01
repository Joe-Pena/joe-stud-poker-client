import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as FormReducer} from 'redux-form';
import jwtDecode from 'jwt-decode';
import thunk from 'redux-thunk';
import cardReducer from './reducers/cardReducer';
import {takeAuthToken} from './local-storage';
import { jwtToken, userState, landing, refreshToken } from './actions/hands.actions';


const store = createStore(
  combineReducers({
    cards: cardReducer,
    form: FormReducer
  }),
  applyMiddleware(thunk)
  );
  
const authToken = takeAuthToken();

if(authToken) {
  const token = authToken;
  const decodedToken = jwtDecode(token);
  store.dispatch(jwtToken(token));
  store.dispatch(userState(decodedToken.user));
  store.dispatch(landing());
  store.dispatch(refreshToken());
}

export default store;