<template>
  <form id="login" class="container">
    <div class="close-btn" @click="closeForm">X</div>
    <h3>Would you like to login?</h3>
    <fieldset>
      <input v-model="email" placeholder="Your email (required)" type="email" tabindex="1" required autofocus>
    </fieldset>
    <fieldset>
      <input v-model="password" placeholder="password (required)" type="password" tabindex="2" required>
    </fieldset>
    <fieldset>
      <button @click.prevent="checkCredentials" name="submit" type="submit" id="login-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</template>

<script>
  import { adminRef } from '../firebase';
  import { eventBus } from '../main';

  export default {
    data() {
      return {
        email: '',
        password: '',
        loggedIn: false,
        loginMessage: ''
      }
    },
    firebase: {
      admin: adminRef
    },
    methods: {
      checkCredentials() {

        let correctEmail = this.admin.some(item => {
          return item['.key'] === 'email' && item['.value'] === this.email;
        });

        let correctPassword = this.admin.some(item => {
          
          return item['.key'] === 'password' && item['.value'] === +this.password;
        });

        if (!correctEmail && !this.loginMessage) {
          this.loginMessage = 'incorrect email';
          return;
        }

        if (!correctPassword && !this.loginMessage) {
          this.loginMessage = 'incorrect password';
        }
        
        if (correctEmail && correctPassword) {
          this.loggedIn = true;
          this.loginMessage = 'successful login';
          eventBus.logUserIn();
        }
        console.log(this.loginMessage, correctEmail, correctPassword);
      },
      closeForm() {
        eventBus.closeForm();
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
    width: 400px;
    margin: 150px auto;
    position: absolute;
  }

  .close-btn {
    cursor: pointer;
  }

  #login input[type="text"],
  #login input[type="password"],
  #login input[type="tel"],
  #login input[type="url"],
  #login textarea,
  #login button[type="submit"] {
    font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
  }

  #login {
    background: #F9F9F9;
    padding: 25px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }

  #login h3 {
    display: block;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 10px;
  }

  #login h4 {
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

  #login input[type="text"],
  #login input[type="email"],
  #login input[type="tel"],
  #login input[type="url"],
  #login input[type="password"],
  #login textarea {
    width: 100%;
    border: 1px solid #ccc;
    background: #FFF;
    margin: 0 0 5px;
    padding: 10px;
  }

  #login input[type="text"]:hover,
  #login input[type="email"]:hover,
  #login input[type="tel"]:hover,
  #login input[type="url"]:hover,
  #login input[type="password"]:hover,
  #login textarea:hover {
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
  }

  #login textarea {
    height: 100px;
    max-width: 100%;
    resize: none;
  }

  #login button[type="submit"] {
    cursor: pointer;
    width: 100%;
    border: none;
    background: #283b4a;
    color: #FFF;
    margin: 0 0 5px;
    padding: 10px;
    font-size: 15px;
  }

  #login button[type="submit"]:hover {
    background: lighten(#283b4a, 20%);
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
  }

  #login button[type="submit"]:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
  }

  .copyright {
    text-align: center;
  }

  #login input:focus,
  #login textarea:focus {
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