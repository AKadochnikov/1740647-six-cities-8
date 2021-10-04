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
  SPAN_WIDTH_100: {
    width: '100%'
  },
}

ReactDOM.render(
  <React.StrictMode>
    <App displayStyle={MainSetting.DISPLAY_STYLE}
         tabIndex={MainSetting.TAB_INDEX}
         spanWidth80={MainSetting.SPAN_WIDTH_80}
         spanWidth100={MainSetting.SPAN_WIDTH_100}
    />
  </React.StrictMode>,
  document.getElementById('root'));
