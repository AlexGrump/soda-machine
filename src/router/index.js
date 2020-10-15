import Vue from "vue";
import VueRouter from "vue-router";

// Rooms
import Hall from "../views/Hall.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Hall",
    component: Hall,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
