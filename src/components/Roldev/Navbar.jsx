import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Navbar.css';

export default () => {
    return (
        <nav>
            <div className="content-wrap">
                <Link to="/"><img className="img-sm" src={"/images/logo/logo.png"} alt="roldev logo"/></Link>
                <div className="menu">
                    <Link to="#about">about</Link>
                    <Link to="#contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
};