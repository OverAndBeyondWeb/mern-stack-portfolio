<template>
  <form id="add-a-project" class="container">
    <h3>Would you like to add a project?</h3>
    <fieldset>
      <input v-model.trim="title" type="text" tabindex="1" placeholder="Title goes here..." required autofocus>
    </fieldset>
    <fieldset>
      <input v-model.trim="link" type="url" tabindex="2" placeholder="Site link goes here..." required autofocus>
    </fieldset>
    <fieldset>
      <input v-model.trim="imgUrl" type="url" tabindex="3" placeholder="Image source goes here..." required autofocus>
    </fieldset>
    <fieldset>
      <textarea  v-model.trim="description" name="" id="" cols="30" rows="10" tabindex="4" placeholder="describe the project here..." required></textarea>
    </fieldset>
    <fieldset>
      <button @click.prevent="addProject" name="submit" type="submit" id="add-a-project-submit" data-submit="...Sending">Add Project</button>
    </fieldset>
  </form>
</template>

<script>
  import { projectsRef } from '../firebase';

  export default {
    data() {
      return {
        title: '',
        link: '',
        imgUrl: '',
        description: ''
      }
    },
    methods: {
      addProject() {
        projectsRef.push({
          title: this.title,
          link: this.link,
          imgUrl: this.imgUrl,
          description: this.description
        });

        this.title = '';
        this.link = '';
        this.imgUrl = '';
        this.description = '';
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
    font-smoothing: antialiased;
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
    width: 80%;
    margin: 150px auto;
    position: relative;
  }

  #add-a-project input[type="text"],
  #add-a-project input[type="password"],
  #add-a-project input[type="tel"],
  #add-a-project input[type="url"],
  #add-a-project textarea,
  #add-a-project button[type="submit"] {
    font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
  }

  #add-a-project {
    background: #F9F9F9;
    padding: 25px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }

  #add-a-project h3 {
    display: block;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 10px;
  }

  #add-a-project h4 {
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

  #add-a-project input[type="text"],
  #add-a-project input[type="email"],
  #add-a-project input[type="tel"],
  #add-a-project input[type="url"],
  #add-a-project input[type="password"],
  #add-a-project textarea {
    width: 100%;
    border: 1px solid #ccc;
    background: #FFF;
    margin: 0 0 5px;
    padding: 10px;
  }

  #add-a-project input[type="text"]:hover,
  #add-a-project input[type="email"]:hover,
  #add-a-project input[type="tel"]:hover,
  #add-a-project input[type="url"]:hover,
  #add-a-project input[type="password"]:hover,
  #add-a-project textarea:hover {
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
  }

  #add-a-project textarea {
    height: 100px;
    max-width: 100%;
    resize: none;
  }

  #add-a-project button[type="submit"] {
    cursor: pointer;
    width: 100%;
    border: none;
    background: #d827b3;
    color: #FFF;
    margin: 0 0 5px;
    padding: 10px;
    font-size: 15px;
  }

  #add-a-project button[type="submit"]:hover {
    background: #e600e6;
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
  }

  #add-a-project button[type="submit"]:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
  }

  .copyright {
    text-align: center;
  }

  #add-a-project input:focus,
  #add-a-project textarea:focus {
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
    color: #d827b3;
    font-weight: bold
  }
</style>