import React from 'react';
import ReactDOM from 'react-dom';
import PokerTable from './components/PokerTable';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import store from './store';
import WebFont from 'webfontloader';
import * as serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['Roboto', 'sans-serif']
  }
})

ReactDOM.render(<BrowserRouter>
                  <Provider store={store}>
                    <PokerTable />
                  </Provider>
                </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
