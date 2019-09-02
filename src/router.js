import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Dice from "./views/Dice.vue";
import Faq from "./views/Faq.vue";
import Calc from "./views/Calc.vue";
import Clock from "./views/Clock.vue";
import Counters from "./views/Counters.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/dice",
      name: "dice",
      component: Dice
    },
    {
      path: "/faq",
      name: "faq",
      component: Faq
    },
    {
      path: "/calc",
      name: "calculator",
      component: Calc
    },
    {
      path: "/clock",
      name: "clock",
      component: Clock
    },
    {
      path: "/counters",
      name: "counters",
      component: Counters
    }
  ]
});
