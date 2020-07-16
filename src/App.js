import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Roldev from './components/Roldev';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Roldev} />
      </Switch>
    </BrowserRouter>
  );
};
