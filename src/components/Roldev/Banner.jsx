import React from 'react';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';

import './Banner.css';

export default () => {
    const {t, i18n} = useTranslation();

    return (
        <div className="banner">
            <div className="content-wrap">
            <h1>{t('banner.header')}</h1>
            <div className="buttons">
                <HashLink to="/#contact">{t('banner.get-proposal')}</HashLink>
            </div>
            </div>
        </div>
)};