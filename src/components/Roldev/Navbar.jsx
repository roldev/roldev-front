import React from 'react';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';

import './Navbar.css';
import BurgerMenu from './BurgerMenu';

export default () => {
    return (
        <nav>
            <div className="content-wrap">
                <HashLink to="/"><img className="img-sm" src={"/images/logo/logo.png"} alt="roldev logo"/></HashLink>
                <BurgerMenu />
            </div>
        </nav>
    );
};