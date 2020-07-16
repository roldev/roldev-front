import React from 'react';

import './About.css';

export default () => (
  <div className="gray-back about">
    <div className="content-wrap content">
      <div className="block">
        <h1 className="purple-dark">who i am</h1>
        <p className="black">
          A capable, versitile and experienced full-stack developer, that will quickly learn the code base to deliver quick, and excelent results.
        </p>
      </div>
      <div className="block">
        <h1 className="purple-dark">what i do</h1>
        <p className="black">
          Build, fix, add, or upgrade web-applications, and desktop applications. 
        </p>
      </div>
      <div className="block">
        <h1 className="purple-dark">what i've done</h1>
        <p className="black">
          Developed a low-level cutting-edge anti-malware application as a part of IBM Security Group. 
          Developed for Buyme, and Madlan full-stack features to increase functionality and user throughput.
        </p>
      </div>
      <div className="block">
        <h1 className="purple-dark">what i use</h1>
        <p className="black">
          I have worked on C++, JAVA, Clojure, PHP, React, Ember, Jquery projects, with MySQL and PostgreSQL projects, using latest Git and CI/CD practices.
        </p>
      </div>
    </div>
  </div>
);