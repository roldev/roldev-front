import React from 'react';
import { HashLink } from 'react-router-hash-link';

import './Banner.css';

export default () => (
  <div className="banner">
    <div className="content-wrap">
      <h1>YOUR WEBSITE, JUST LIKE YOU LIKE IT</h1>
      <div className="buttons">
        <HashLink to="/#contact">GET PROPOSAL</HashLink>
      </div>
    </div>
  </div>
);