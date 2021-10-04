import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const MainSetting = {
  DISPLAY_STYLE: {
    display: 'none'
  },
  TAB_INDEX: 0,
  SPAN_WIDTH_80: {
    width: '80%'
  },
  COUNT_STAY: 300,
}

ReactDOM.render(
  <React.StrictMode>
    <App displayStyle={MainSetting.DISPLAY_STYLE}
         tabIndex={MainSetting.TAB_INDEX}
         spanWidth80={MainSetting.SPAN_WIDTH_80}
         count_stay={MainSetting.COUNT_STAY}
    />
  </React.StrictMode>,
  document.getElementById('root'));
