import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';

const MainSetting = {
  OFFERS: offers,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      offers={MainSetting.OFFERS}
    />
  </React.StrictMode>,
  document.getElementById('root'));
