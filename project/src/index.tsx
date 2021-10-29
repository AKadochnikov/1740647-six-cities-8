import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import {Provider} from 'react-redux';
import {createStore} from '@reduxjs/toolkit';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const MainSetting = {
  OFFERS: offers,
};

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={MainSetting.OFFERS}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
