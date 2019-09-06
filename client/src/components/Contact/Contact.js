import React, { Component } from 'react';
import './Contact.scss';

class Contact extends Component {
  
  state = {

  }

  render() {

    return (
      <form id="contact" class="container">
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
        <p class="back-link">&larr; Back</p>
      </form>
    )
  }
}

export default Contact;