import React, { Component } from 'react';
import './Contact.scss';

import { Link } from 'react-router-dom';

class Contact extends Component {
  
  state = {

  }

  render() {

    return (
      <form id="contact" className="container">
        <h3>Let's get some things done!</h3>
        <h4>What do you have in mind?</h4>
        <fieldset>
          <input placeholder="Your name (required)" type="text" tabindex="1" required autofocus />
        </fieldset>
        <fieldset>
          <input
          placeholder="Your Email Address (required)" type="email" tabindex="2" required />
        </fieldset>
        <fieldset>
          <input placeholder="Your Phone Number" type="tel" tabindex="3" />
        </fieldset>
        <fieldset>
          <input placeholder="Your Company" type="url" tabindex="4" />
        </fieldset>
        <fieldset>
          <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
        </fieldset>
        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
        <p className="back-link"><Link to="/">&larr; Back</Link></p>
      </form>
    )
  }
}

export default Contact;