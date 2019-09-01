import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import {routes} from "./routes";
import './firebase';
import VueFire from 'vuefire';

import 'normalize.css';

Vue.use(VueFire);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
      console.log(window.location.hash);
      return {
        selector: to.hash
      };
    }
  }
});

export const eventBus = new Vue({
  methods: {
    changeFormState() {
      this.$emit('showForm');
    },
    closeForm() {
      this.$emit('closeForm');
    },
    logUserIn() {
      this.$emit('userLoggedIn');
    },
    logUserOut() {
      this.$emit('userLoggedOut');
    }
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});


