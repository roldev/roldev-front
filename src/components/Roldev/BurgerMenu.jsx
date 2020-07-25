import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';

import './BurgerMenu.css';

export default () => {
    const {t, i18n} = useTranslation();

    const handleChangeLanguage = (event) => {
        const newlang = event.target.value;
        if(newlang === 'en') {
            i18n.changeLanguage('en-US');
        } else {
            i18n.changeLanguage('he-IL');
        }
    };

    const [open, setOpen] = useState(false);

    const handleOpenMenu = () => setOpen(!open);
    const openMenuClass = open ? 'open' : '';

    return (
        <div className={`menu-wrap ${openMenuClass}`}>
            <div className="burger-wrap" onClick={handleOpenMenu}>
                <div className="burger-line" />
                <div className="burger-line" />
                <div className="burger-line" />
            </div>
            <div className="menu">
                <HashLink className="item" to="#about">{t('navbar.about')}</HashLink>
                <HashLink className="item" to="#contact">{t('navbar.contact')}</HashLink>
                <input type="button" className="change-language item" onClick={handleChangeLanguage} value={t('navbar.language')} />
                <div className="social">
                    <a href="https://www.facebook.com/RoldevSoftwareSolutions" target="_blank" rel="noopener noreferrer">
                        <img className="img-xs" src="/images/social_media/facebook.svg" alt="facebook logo"/>
                    </a>
                    <a href="https://www.linkedin.com/company/roldev-software-solutions" target="_blank" rel="noopener noreferrer">
                        <img className="img-xs" src="/images/social_media/linkedin.svg" alt="linkedin logo"/>
                    </a>
                    <a href="https://github.com/roldev" target="_blank" rel="noopener noreferrer">
                        <img className="img-xs" src="/images/social_media/github.svg" alt="github logo"/>
                    </a>
                </div>
            </div>
        </div>
    );
};