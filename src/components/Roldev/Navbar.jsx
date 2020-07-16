import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Navbar.css';

export default () => {
    return (
        <nav>
            <div className="content-wrap">
                <Link to="/"><img className="img-sm" src={"/images/logo/logo.png"} alt="roldev logo"/></Link>
                <Link className="black" to="#about">about</Link>
                <Link className="black" to="#contact">Contact</Link>
            </div>
        </nav>
    );
};