import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {


  render() {
    return (
      <header>
        <div class="header-content wrap">
          <div class="branding">
            <div class="name">Juan Fox</div>
            <div class="position-title">Full Stack Developer</div>
          </div>
          <nav class="page-nav">
            <i id="open-nav" class="fa fa-bars" aria-hidden="true"></i>

            <ul id="site-nav">
              <i id="close-nav" class="fa fa-window-close-o" aria-hidden="true"></i>
              <li class="navLink current">HOME</li>
              <li class="navLink">PROJECTS</li>
              <li class="navLink">CONTACT</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
};

export default Header;