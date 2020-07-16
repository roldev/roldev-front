import React from 'react';
import {useGoogleReCaptcha} from 'react-google-recaptcha-v3';

import './Contact.css';

export default () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const token = executeRecaptcha('contact_form');

  return (
      <div id="contact" className="black-back contact green">
        <div className="content-wrap">
          <div className="contact-wrap">
            <div className="contact-form">
              <h2>Leave a Message</h2>
              <form>
                <input type="text" id="name" class="half-width" placeholder="Name"></input>
                <input type="tel" id="phone-number" class="half-width" placeholder="Phone Number"></input>
                <input type="email" id="email" placeholder="Email"></input>
                <textarea id="message" placeholder="Message"></textarea>
                <input type="hidden" value={token}></input>
                <input type="submit" value="Submit" class="submit-btn green green-border black-back"></input>
              </form>
            </div>
            <div className="social">
              <a href="https://github.com/roldev" target="_blank">
                <img class="img-sm" src="/images/social_media/github.svg" alt="github logo"/>
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};