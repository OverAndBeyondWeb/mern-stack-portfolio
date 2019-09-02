import React, { Component } from 'react';
import './Home.scss';

import LandingPage from '../LandingPage/LandingPage';
import Skills from '../Skills/Skills';
import Quote from '../Quote/Quote';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

class Home extends Component {


  render() { 
    return (
      <div className="Home">
        <LandingPage />
        <Skills />
        <Quote />
        <Projects />
        <Footer />
      </div>
      
    );
  }
}

export default Home;