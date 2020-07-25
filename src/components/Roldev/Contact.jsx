import React, {useState} from 'react';
import {useGoogleReCaptcha} from 'react-google-recaptcha-v3';
import { useTranslation } from 'react-i18next';

import './Contact.css';

export default () => {
    const {t} = useTranslation();

    const { executeRecaptcha } = useGoogleReCaptcha();

    const [contactSent, setContactSent] = useState({sent: false, success: false});

    const initialContactData = {
        name: "",
        "phone-number": "",
        email: "",
        message: "",
    };

    const [contactFormData, setContactFormData] = useState(initialContactData);

    const [formErrors, setFormErrors] = useState({"phone-number": true, "email": true});

    const validateContact = (key, val) => {
        const requiredFields = ["phone-number", "email"];
        if (requiredFields.includes(key)) {
            switch(key) {
                case "phone-number":
                    return (val.length < 8)
                case "email":
                    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return !re.test(String(val).toLowerCase());
            }
        }
    }

    const isFormValid = () => {
        let isValid = true;
        Object.values(formErrors).forEach((val) => {
            if (val) {
                isValid = false;
            }
        });

        return isValid;
    }

    const handleChange = e => {
        const {id, value} = e.target;

        setFormErrors(prevErrors => ({
            ...prevErrors,
            [id]: validateContact(id, value)
        }));

        setContactFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        if(!executeRecaptcha) {
            return;
        }

        if(!isFormValid()) {
            return;
        }

        const token = await executeRecaptcha('contact_form');

        fetch(process.env.REACT_APP_BACKEND+'/api/lead/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...contactFormData,
                'token': token
            })
        })
        .then(response => {
            setContactSent({sent: true, success: response.status === 201});
            setContactFormData(initialContactData);
        })
        .catch(err => {
            console.log(err);
            setContactSent({sent: true, success: false});
        });
    }

    return (
        <div id="contact" className="contact green">
            <div className="content-wrap">
                <div className="contact-wrap">
                    <div className="contact-form">
                    <h2>{t('contact.header')}</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="name" className="half-width" placeholder={t('contact.name')} value={contactFormData.name} onChange={handleChange}></input>
                        <input type="tel" id="phone-number" className="half-width" placeholder={t('contact.phone')} value={contactFormData['phone-number']} onChange={handleChange}></input>
                        {contactFormData['phone-number'].length > 5 && formErrors['phone-number'] &&
                            <span className='error'>{t('contact.error.phone')}</span>}
                        <input type="email" id="email" placeholder={t('contact.email')} value={contactFormData.email} onChange={handleChange}></input>
                        {contactFormData.email.length > 5 && formErrors.email &&
                            <span className='error'>{t('contact.error.email')}</span>}
                        <textarea id="message" placeholder={t('contact.message')} value={contactFormData.message} onChange={handleChange}></textarea>
                        <input type="submit" value={t('contact.submit')} className="submit-btn"></input>
                        {contactSent.sent && contactSent.success &&
                            <span className="success">{t('contact.success')}</span>}
                        {contactSent.sent && !contactSent.success &&
                            <span className="error">{t('contact.error.submit')}</span>}
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
