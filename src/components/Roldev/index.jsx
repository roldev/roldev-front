import React from 'react';

import Navbar from './Navbar';
import Banner from './Banner';
import About from './About';
import Contact from './Contact';

export default () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <About />
            <Contact />
        </div>
    );
};