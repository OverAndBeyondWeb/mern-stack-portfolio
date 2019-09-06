import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {


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
              <li className="navLink current">HOME</li>
              <li className="navLink">PROJECTS</li>
              <li className="navLink">CONTACT</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
};

export default Header;