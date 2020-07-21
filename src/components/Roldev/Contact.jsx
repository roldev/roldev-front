import React, {useState} from 'react';
import {useGoogleReCaptcha} from 'react-google-recaptcha-v3';

import './Contact.css';

export default () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [contactSent, setContactSent] = useState(false);

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

    fetch('process.env.REACT_APP_BACKEND', {
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
        setContactSent(response.status === 201);
        setContactFormData(initialContactData);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
      <div id="contact" className="contact green">
        <div className="content-wrap">
          <div className="contact-wrap">
            <div className="contact-form">
              <h2>Leave a Message</h2>
              <form onSubmit={handleSubmit}>
                <input type="text" id="name" className="half-width" placeholder="Name" value={contactFormData.name} onChange={handleChange}></input>
                <input type="tel" id="phone-number" className="half-width" placeholder="Phone Number" value={contactFormData['phone-number']} onChange={handleChange}></input>
                {contactFormData['phone-number'].length > 5 && formErrors['phone-number'] &&
                  <span className='error'>Phone number is required and should be at least 9 numbers long</span>}
                <input type="email" id="email" placeholder="Email" value={contactFormData.email} onChange={handleChange}></input>
                {contactFormData.email.length > 5 && formErrors.email &&
                  <span className='error'>Email field is required</span>}
                <textarea id="message" placeholder="Message" value={contactFormData.message} onChange={handleChange}></textarea>
                <input type="submit" value="Submit" className="submit-btn"></input>
                {contactSent &&
                  <span className="success">Message Sent Successfully!</span>}
              </form>
            </div>
            <div className="social">
              <a href="https://github.com/roldev" target="_blank" rel="noopener noreferrer">
                <img className="img-xs" src="/images/social_media/github.svg" alt="github logo"/>
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};