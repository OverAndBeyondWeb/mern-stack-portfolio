import React from 'react';
import './LandingPage.scss';

import Header from '../Header/Header';

export default () => (
  <div className="landing-page">
    <Header />
    <div className="page-container wrap">
      <div className="page-content">
        <h1>full stack web developer</h1>      
        <p><em>Do you have a need for a devloper who just gets it?</em></p>       
        <button className="contact-now">Let's Talk Now!</button>
      </div>      
      
    </div>
  </div>
);