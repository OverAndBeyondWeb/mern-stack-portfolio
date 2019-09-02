import React from 'react';
import './LandingPage.scss';

import Header from '../Header/Header';

let styles = {

}
export default () => (
  <div class="landing-page">
    <Header />
    <img src="bgPhoto" alt=""/>
    <div class="page-container wrap">      
      <h1>full stack web developer</h1>      
      <p><em>Do you have a need for a devloper who just gets it?</em></p>       
      <button class="contact-now">Let's Talk Now!</button>
    </div>
  </div>
);