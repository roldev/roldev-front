import React from 'react';
import { useTranslation } from 'react-i18next';

import './About.css';

export default () => {
    const {t} = useTranslation();

    return (
        <div className="about" id="about">
            <div className="content-wrap content">
            <div className="block">
                <h1>{t('about.who-i-am.header')}</h1>
                <p>
                    {t('about.who-i-am.content')}
                </p>
            </div>
            <div className="block">
                <h1>{t('about.what-i-do.header')}</h1>
                <p>
                    {t('about.what-i-do.content')}
                </p>
            </div>
            <div className="block">
                <h1>{t('about.what-i-did.header')}</h1>
                <p>
                    {t('about.what-i-did.content.part-one')}
                    <br />
                    {t('about.what-i-did.content.part-two')}
                </p>
            </div>
            <div className="block">
                <h1>{t('about.what-i-use.header')}</h1>
                <p>
                    {t('about.what-i-use.content')}
                </p>
            </div>
            </div>
        </div>
    )
};