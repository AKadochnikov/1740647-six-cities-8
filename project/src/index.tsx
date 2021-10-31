import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {requireAuthorization} from './store/actions';
import {AuthorizationStatus} from './const';
import {ThunkAppDispatch} from './types/action-types';
import {checkAuthAction, fetchHotelsAction} from './store/api-actions';

const MainSetting = {
  OFFERS: [],
};

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchHotelsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={MainSetting.OFFERS}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
