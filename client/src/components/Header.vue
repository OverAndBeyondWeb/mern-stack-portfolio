<template>
  <header>
    <div class="header-content wrap">
      <div class="branding">
        <div class="name">{{developer}}</div>
        <div class="position-title">{{title}}</div>
      </div>
      <nav class="page-nav">
        <i id="open-nav" class="fa fa-bars" aria-hidden="true" @click="showHideNav"></i>

        <ul id="site-nav" @click="showHideNav">
          <i id="close-nav" class="fa fa-window-close-o" aria-hidden="true"></i>
          <li class="navLink current"><router-link to="/" exact>HOME</router-link></li>
          <li class="navLink"><router-link :to="{hash: '#projects'}" >PROJECTS</router-link></li>
          <li class="navLink"><router-link to='/contact'>CONTACT</router-link></li>
          <li class="login-btn" @click="showLoginForm"  ref="loginBtn">LOGIN</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  import { eventBus } from '../main';

  export default {
    data () {
      return {
        developer: 'juan fox',
        title: 'web developer',
        current: true,
        showForm: false
      }
    },
    methods: {
      currentLink(e) {
        let links = document.querySelectorAll('.navLink');

        links.forEach( link => {
          link.classList.remove('current');
        });
        e.target.parentNode.classList.add('current');
      },
      showHideNav() {
        let openNav = document.getElementById('open-nav'),
            siteNav = document.getElementById('site-nav');

        if(openNav.classList.contains('hidden')) {
          openNav.classList.remove('hidden');
          siteNav.classList.remove('slide-nav');
          siteNav.classList.remove(siteNav.classList[0]);
        } else {
          openNav.classList.add('hidden');
          siteNav.classList.add('slide-nav');
          siteNav.classList.add('jjwiz');
        }

      },
      showLoginForm() {
        if(this.$refs.loginBtn.innerText === 'LOGIN') {
          eventBus.changeFormState();
        } else {
          this.logout();
        } 
      },
      logout() {
        if(this.$refs.loginBtn.innerText === 'LOGOUT') {
          console.log('logged out');
          eventBus.logUserOut();
          this.$refs.loginBtn.innerText = this.$refs.loginBtn.innerText === 'LOGIN' ? 'LOGOUT' : 'LOGIN';
        }
      }

    },
    mounted() {
      eventBus.$on('userLoggedIn', () => this.$refs.loginBtn.innerText = this.$refs.loginBtn.innerText === 'LOGIN' ? 'LOGOUT' : 'LOGIN');
    }
  }
</script>

<style lang="scss">
  @import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);

  $main-color: purple;
  $secondary-color: lighten($main-color, 20%);

  header {
    width: 100%;
  }
  .header-content {
    color: #283b4a;
    padding: 10px 5px;
  }

  .branding {
    height: 100%;
    width: 50%;
    float: left;

    .name {
      font-family: 'Merriweather', serif;
      font-size: 1.5em;
      font-weight: bold;
      text-transform: uppercase;
    }

    .position-title {
      font-size: 1em;
      text-transform: uppercase;
    }

    @media screen and (max-width: 30rem){
      .name {
        font-size: 1.125em;
      }
      .position-title {
        font-size: .75em;
      }
    }

  }

  .page-nav {
    width: 50%;
    height: 100%;
    float: right;

    .fa {
      display: none;
      float: right;
    }

    ul {
      margin: 0;
      padding: 15px 0 0 0;
      display: flex;
      white-space: nowrap;
    }

    li {
      flex-grow: 1;
      text-align: center;
    }

    .navLink a{
      color: #283b4a;

      &.router-link-active {
      color: #7CB9C0;
    }

      &:hover {
        color: #A7CBDD;
      }

      &:after {
        content: "";
        height: 1px;
        width: 100%;
        position: absolute;
        bottom: -2px;
        left: 0;
        background: $secondary-color;
        visibility: hidden;
        transform: scaleX(0);
        transition: transform .25s;
      }

      &:hover:after {
        visibility: visible;
        transform: scaleX(1);
        color: #A7CBDD;
      }
    }

    .router-link-active {
      color: #A7CBDD;
    }

    .login-btn {
      cursor: pointer;

      &:hover {
        color: #A7CBDD;
      }
    }

    @media screen and (max-width: 37.5rem){

      ul {
        display: inline-block;
        background: rgba(0, 0, 0, .6);
        z-index: 1000;
        height: 100vh;
        width: 40vw;
        position: fixed;
        top: 5px;
        right: -40vw;
        transition: all .25s linear;

        li {
          padding: 10px 0;
          border-bottom: 2px solid black;
        }
      }
      .fa {
        display: inline-block;
      }
      .fa-window-close-o {
        position: absolute;
        top: 3px;
        left: 3px;
      }
      .hidden {
        display: none;
      }
      .slide-nav {
        right: 0;
      }
    }
  }

</style>