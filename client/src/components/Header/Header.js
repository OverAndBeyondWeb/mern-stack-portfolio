import React, { Component } from 'react';
import './Header.scss';

import { NavLink } from 'react-router-dom';

class Header extends Component {


  scrollToProjects() {
    console.log('yep');
    window.scrollTo(0, 100);
  }

  render() {
    return (
      <header>
        <div className="header-content wrap">
          <div className="branding">
            <div className="name">Juan Fox</div>
            <div className="position-title">Full Stack Developer</div>
          </div>
          <nav className="page-nav">
            <i id="open-nav" className="fa fa-bars" aria-hidden="true"></i>

            <ul id="site-nav">
              <i id="close-nav" className="fa fa-window-close-o" aria-hidden="true"></i>
              <li onClick={this.scrollToProjects}><NavLink to="/" className="navLink" activeClassName="current">HOME</NavLink></li>
              <li><NavLink to="/#projects" className="navLink" activeClassName="current">PROJECTS</NavLink></li>
              <li><NavLink to="/contact" className="navLink" activeClassName="current">CONTACT</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
};

export default Header;