import React from 'react';
import { HashLink } from 'react-router-hash-link';

import './Navbar.css';

export default () => {
    return (
        <nav>
            <div className="content-wrap">
                <HashLink to="/"><img className="img-sm" src={"/images/logo/logo.png"} alt="roldev logo"/></HashLink>
                <div className="menu">
                    <HashLink className="internal" to="#about">about</HashLink>
                    <HashLink className="internal" to="#contact">Contact</HashLink>
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