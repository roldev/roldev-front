import React from 'react';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';

import './Banner.css';

export default () => {
    const {t} = useTranslation();

    return (
        <div className="banner">
            <div className="content-wrap">
                <div className="banner-img"></div>
                <div className="banner-content">
                    <h1>{t('banner.header')}</h1>
                    <div className="buttons">
                        <HashLink to="/#contact">{t('banner.get-proposal')}</HashLink>
                    </div>
                </div>
            </div>
        </div>
)};