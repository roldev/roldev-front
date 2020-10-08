import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {initGA} from './index';
import './App.css';
import Roldev from './components/Roldev';

export default () => {
    useEffect(() => {
        initGA();
    }, []);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Roldev} />
            </Switch>
        </BrowserRouter>
    );
};
