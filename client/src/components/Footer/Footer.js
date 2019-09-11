import React from 'react';
import './Footer.scss';

export default () => (
  <footer>
    <div className="footer-content wrap">
      <p>
        &copy; 2017 Juan Fox
      </p>
      <div className="social-icons">
        <a href="mailto:foxj0875@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-envelope" aria-hidden="true" title="connect by email"></i>
        </a>
        <a href="http://www.linkedin.com/in/juan-fox-571612b2/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin-square" aria-hidden="true" title="connect on linked in"></i>
        </a>
        <a href="https://github.com/OverAndBeyondWeb" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github-square" aria-hidden="true" title="connect on github"></i>
        </a>
        <a href="https://twitter.com/the_right_juan" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter-square" aria-hidden="true" title="connect on twitter"></i>
        </a>
      </div>

    </div>
  </footer>
);