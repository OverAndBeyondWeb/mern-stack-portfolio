import React, { Component } from 'react';
import './Home.scss';

import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import Skills from '../Skills/Skills';
import Quote from '../Quote/Quote';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

class Home extends Component {


  scrollToProjects = () => {
    let projPos = this.projects.getBoundingClientRect().top;
    window.scrollTo(0, projPos);
  } 

  render() { 
    return (
      <div className="Home">
        <Header scrollToProjects={this.scrollToProjects} />
        <LandingPage />
        <Skills />
        <Quote />
        <Projects projectsRef={el => this.projects = el} />
        <Footer />
      </div>
      
    );
  }
}

export default Home;