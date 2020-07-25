import React from 'react';
import { useTranslation } from 'react-i18next';

import Navbar from './Navbar';
import Banner from './Banner';
import About from './About';
import Contact from './Contact';

export default () => {
    const {i18n} = useTranslation();
    const rtlClass = i18n.language === 'he-IL' ? 'rtl' : '';

    return (
        <div className={rtlClass}>
            <Navbar />
            <Banner />
            <About />
            <Contact />
        </div>
    );
};