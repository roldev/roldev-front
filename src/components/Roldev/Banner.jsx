import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Banner.css';

export default () => (
  <div className="purple-back banner">
    <div className="content-wrap">
      <h1 className="white">YOUR WEBSITE JUST LIKE YOU LIKE IT</h1>
      <div className="buttons">
        {/* <Link className="green" to="/#projects">SEE WORKS</Link> */}
        <Link className="green" to="/#contact">GET PROPOSAL</Link>
      </div>
    </div>
  </div>
);