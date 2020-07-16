import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {GoogleReCaptchaProvider }from 'react-google-recaptcha-v3';

ReactDOM.render(
  <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCH_SITE_KEY}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleReCaptchaProvider>,
  document.getElementById('root')
);
