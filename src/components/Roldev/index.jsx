import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next';

import {GApageView} from '../../index';

import Navbar from './Navbar';
import Banner from './Banner';
import About from './About';
import Contact from './Contact';

export default () => {
    const {i18n} = useTranslation();
    const rtlClass = i18n.language === 'he-IL' ? 'rtl' : '';

    useEffect(() => {
        // backend is a free heroku which means it goes to sleep every 30 minutes
        fetch(process.env.REACT_APP_BACKEND+'/keep-alive/', {
            method: 'GET'
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    useEffect(() => { GApageView("landing"); }, []);

    return (
        <div className={rtlClass}>
            <Navbar />
            <Banner />
            <About />
            <Contact />
        </div>
    );
};