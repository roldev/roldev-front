import React from 'react';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';

import './Navbar.css';

export default () => {
    const {t, i18n} = useTranslation();

    const handleChangeLanguage = (event) => {
        const newlang = event.target.value;
        if(newlang === 'en') {
            i18n.changeLanguage('en-US');
        } else {
            i18n.changeLanguage('he-IL');
        }
    }
    
    return (
        <nav>
            <div className="content-wrap">
                <HashLink to="/"><img className="img-sm" src={"/images/logo/logo.png"} alt="roldev logo"/></HashLink>
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
        </nav>
    );
};