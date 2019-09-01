<template>
  <form id="contact" class="container">
    <h3>Let's get some things done!</h3>
    <h4>What do you have in mind?</h4>
    <fieldset>
      <input v-model="contact.name" placeholder="Your name (required)" type="text" tabindex="1" required autofocus>
    </fieldset>
    <fieldset>
      <input v-model="contact.email" placeholder="Your Email Address (required)" type="email" tabindex="2" required>
    </fieldset>
    <fieldset>
      <input v-model="contact.phone" placeholder="Your Phone Number" type="tel" tabindex="3">
    </fieldset>
    <fieldset>
      <input v-model="contact.company" placeholder="Your Company" type="url" tabindex="4">
    </fieldset>
    <fieldset>
      <textarea v-model="contact.message" placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button @click.prevent="submitContact" name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
    <router-link to="/"><p class="back-link">&larr; Back</p></router-link>
  </form>
</template>

<script>
  import { contactsRef } from '../firebase';

  export default {
    data () {
      return {
        contact: {
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        }
      }
    },
    methods: {
      submitContact () {
        contactsRef.push(this.contact)
        for (let cat in this.contact) {
          this.contact[cat] = '';
        }
      }
    }
  }
</script>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    font-weight: 100;
    font-size: 12px;
    line-height: 30px;
    color: #777;
    background: #4CAF50;
  }

  .container {
    width: 350px;
    margin: 150px auto;
    position: relative;
  }

  #contact input[type="text"],
  #contact input[type="email"],
  #contact input[type="tel"],
  #contact input[type="url"],
  #contact textarea,
  #contact button[type="submit"] {
    font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
  }

  #contact {
    background: #F9F9F9;
    padding: 25px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }

  #contact h3 {
    display: block;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 10px;
  }

  #contact h4 {
    margin: 5px 0 15px;
    display: block;
    font-size: 13px;
    font-weight: 400;
  }

  fieldset {
    border: medium none !important;
    margin: 0 0 10px;
    min-width: 100%;
    padding: 0;
    width: 100%;
  }

  #contact input[type="text"],
  #contact input[type="email"],
  #contact input[type="tel"],
  #contact input[type="url"],
  #contact textarea {
    width: 100%;
    border: 1px solid #ccc;
    background: #FFF;
    margin: 0 0 5px;
    padding: 10px;
  }

  #contact input[type="text"]:hover,
  #contact input[type="email"]:hover,
  #contact input[type="tel"]:hover,
  #contact input[type="url"]:hover,
  #contact textarea:hover {
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
  }

  #contact textarea {
    height: 100px;
    max-width: 100%;
    resize: none;
  }

  #contact button[type="submit"] {
    cursor: pointer;
    width: 100%;
    border: none;
    background: #283b4a;
    color: #FFF;
    margin: 0 0 5px;
    padding: 10px;
    font-size: 15px;
  }

  #contact button[type="submit"]:hover {
    background: lighten(#283b4a, 20%);
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
  }

  #contact button[type="submit"]:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
  }

  .copyright {
    text-align: center;
  }

  #contact input:focus,
  #contact textarea:focus {
    outline: 0;
    border: 1px solid #aaa;
  }

  ::-webkit-input-placeholder {
    color: #888;
  }

  :-moz-placeholder {
    color: #888;
  }

  ::-moz-placeholder {
    color: #888;
  }

  :-ms-input-placeholder {
    color: #888;
  }
  .back-link {
    font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
    color: #4c4c4c;
    margin-top: 10px;
  }

  .back-link:hover {
    color: #283b4a;
    font-weight: bold
  }
</style>