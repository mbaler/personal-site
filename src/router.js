import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    // {
    //   path: "/test",
    //   name: "test",
    //   // route level code-splitting
    //   // this generates a separate chunk (test.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "test" */ "./views/Test.vue")
    // }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      if (to.hash === "#contact") {
        // scroll to bottom
        return {x: 0, y: document.body.scrollHeight};
      }

      return {
        selector: to.hash,
        offset: {x: 0, y: 60}
      };
    }

    return {x: 0, y: 0};
  }
});
