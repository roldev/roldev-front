import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ReactGA from 'react-ga';

import './App.css';
import Roldev from './components/Roldev';

export default () => {
    useEffect(() => {
        ReactGA.initialize(process.env.REACT_APP_GA_ID);
        ReactGA.pageview(window.location.pathname);
    }, []);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Roldev} />
            </Switch>
        </BrowserRouter>
    );
};
