import React, { Component } from 'react';
import './Home.scss';

import LandingPage from '../LandingPage/LandingPage';
import Skills from '../Skills/Skills';

class Home extends Component {


  render() { 
    return (
      <div className="Home">
        <LandingPage />
        <Skills />
      </div>
      
    );
  }
}

export default Home;