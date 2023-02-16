// import Vue from 'vue';
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/HelloWorld.vue";
import DogJokes from "./components/DogJokes.vue";
// import {store} from './store/index.js';

// Vue.config.productionTip = false;
// 
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: {
        name: "ZarKie",
      }
    },
    {
      path: "/dogjokes",
      name: "dogjokes",
      component: DogJokes,
    },
  ],
});
// Vue.config.productionTip = false;
//global directive
// Vue.directive('focused', {
//     inserted : function(el) {
//         el.focus();
//     }
// });
// new Vue({store, render: (h) => h(App)}).$mount("#app");
createApp(App).use(router).mount("#app");
