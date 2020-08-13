import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ReactGA from 'react-ga';

import './App.css';
import Roldev from './components/Roldev';

export default () => {
    ReactGA.initialize(process.env.REACT_APP_GA_ID, { standardImplementation: true });
  
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Roldev} />
            </Switch>
        </BrowserRouter>
    );
};
