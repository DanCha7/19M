// import  Vue, { VueElement } from "vue";
// import VueRouter from "vue-router";
// import mainPage from "/src/pages/mainPage.vue"

// Vue.use(VueRouter);

// const router = {
//     {name:"main" , component : mainPage , path: "/" }
// }

// const router = new VueRouter(); 

// export default router;

import { createRouter, createWebHistory } from 'vue-router';
import MainPage from "/src/pages/MainPage.vue"
import PostsPage from "/src/pages/PostsPage.vue"

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: MainPage
  },
  {
    path: '/watch',
    name: 'Watch',
    component:  PostsPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes 
});

export default router;



