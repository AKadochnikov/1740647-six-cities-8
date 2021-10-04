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
}

ReactDOM.render(
  <React.StrictMode>
    <App displayStyle={MainSetting.DISPLAY_STYLE}
         tabIndex={MainSetting.TAB_INDEX}
         spanWidth80={MainSetting.SPAN_WIDTH_80}
    />
  </React.StrictMode>,
  document.getElementById('root'));
