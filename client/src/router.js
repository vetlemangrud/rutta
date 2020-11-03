import Vue from "vue";
import Router from "vue-router";
import Oppdrag from "./views/Oppdrag.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "oppdrag",
      component: Oppdrag
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    }
  ]
});
