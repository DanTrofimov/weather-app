import Vue from "vue";
import Router from "vue-router";
import HomePage from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/default",
      // lazy loading for page
      // eslint-disable-next-line
      component: () => import('./views/Weather.vue')
    },
  ],
});
