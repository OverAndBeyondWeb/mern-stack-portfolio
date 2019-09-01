<template>
  <div id="projects" class="projects">
    <div class="projects-container wrap">
      <h1>Projects</h1>
      <ul>
        <li v-for="project of projects" :key="project['.key']">
          <project>
            <div class="project-content">
              <a :href="project.link" target="_blank">
                <h3>{{project.title}}</h3>
              </a>
              <p v-html="project.description"></p>
            </div>
            <a class="project-link" :href="project.link" target="_blank">
              <div class="image-link panel-1">
                <button>
                  visit site!
                </button>
              </div>
              <div
                class="project-image" 
                :style="'background: url(/images/' + project.imgUrl + ') center center;background-size:100% 100%'">
              </div>
            </a>
          </project>
        </li>
      </ul>
      <!-- <p v-if="projectRouteActive" class="back-link"><router-link to="/">&larr; Back</router-link></p> -->
      <add-proj-form v-if="loggedIn"></add-proj-form>
    </div> 
  </div>
</template>

<script>
  import Project from './Project.vue';
  import AddProjForm from './AddProjForm.vue';
  import { projectsRef } from '../firebase';
  import { eventBus } from '../main';

  export default {
    data() {
      return {
        loggedIn: false
      }
    },
    components: {
      'project': Project,
      'add-proj-form': AddProjForm
    },
    firebase: {
      projects: projectsRef
    },
    created() {
      eventBus.$on('userLoggedIn', () => this.loggedIn = true);
      eventBus.$on('userLoggedOut', () => this.loggedIn = false);
    }
  }
</script>

<style lang="scss">
  .projects {
    background: lighten(#CFC6BA, 20%);
    color: rgba(#283b4a, .7);
    margin-top: 200px;
    padding-bottom: 20%;
    border-top-right-radius: 300px;
    position: relative;

    @media screen and (max-width: 64.25rem) {
      border-top-right-radius: 200px;
      top: -220px;
    }

    h1 {
      width: 75%;
      font-family: 'Merriweather', sans-serif;
      text-shadow: 1px 1px 2px rgba(#39607d, .5);
      font-size: 3em;
      margin: 10% auto 5%;
      text-transform: uppercase;

      @media screen and (max-width: 30rem){
        font-size: 2em;
      }
    }

    ul {
      padding: 0;
    }
  }

  .project {
    display: flex;
    width: 75%;
    margin: 0 auto 50px;
    padding-bottom: 25px;
    border-bottom: 2px dotted #4c4c4c;

    h3 {
      color: #39607d;
      font-size: 1.75em;
    }

    @media screen and (max-width: 56.25rem) {
      flex-direction: column-reverse;
    }
  }

  .project-content {
    flex: 1 1 60%;
    color: #283b4a;
    text-align: left;
    padding-right: 8.33333%;

    p {
      line-height: 1.5;
    }

    a {
      color: #1C96C3;

      &:hover {
        text-decoration: underline;
      }
    }
    @media screen and (max-width: 56.25rem) {
      padding-right: 0;
    }
  }

  .project-link {
    display: inline-block;
    height: 200px;
    width: 400px;
    position: relative;

    @media screen and (max-width: 56.25rem) {
      margin-right: 0;
    }

    @media screen and (max-width: 650px) {
      max-height: 200px;
      width: 100%;
    }

    @media screen and (max-width: 27.5rem) {
      max-height: 150px;
    }
  }

  .image-link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, .5);
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    z-index: 5;
    transition: opacity .3s;

    &:hover {
      opacity: 1;
    }

    &:hover + .project-image {
      filter:blur(1px);
    }

    button {
      border: 2px solid #F1A500;
      border-radius: 15px;
      background-color: transparent;
      color: #F1A500;
      text-transform: uppercase;
      padding: 7px 10px;
    }
  }

  .project-image {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transition: filter .3s;
  }

</style>