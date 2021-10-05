import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const MainSetting = {
    COUNT_STAY: 300,
}

ReactDOM.render(
  <React.StrictMode>
    <App count_stay={MainSetting.COUNT_STAY}/>
  </React.StrictMode>,
  document.getElementById('root'));
