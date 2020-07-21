import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Banner.css';

export default () => (
  <div className="banner">
    <div className="content-wrap">
      <h1>YOUR WEBSITE, JUST LIKE YOU LIKE IT</h1>
      <div className="buttons">
        <Link to="/#contact">GET PROPOSAL</Link>
      </div>
    </div>
  </div>
);