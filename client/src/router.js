import Vue from "vue";
import Router from "vue-router";
import Oppdrag from "./views/Oppdrag.vue";
import Toppliste from "./views/Toppliste.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/oppdrag",
      name: "oppdrag",
      component: Oppdrag
    },
    {
      path: "/",
      name: "toppliste",
      component: Toppliste
    }
  ]
});
