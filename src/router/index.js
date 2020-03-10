import Vue from "vue";
import VueRouter from "vue-router";
import  Index from "../views/Index.vue";
import  Head from "../views/Head.vue";
import Footer from "../views/Footer.vue";

Vue.use(VueRouter);

const routes = [
  
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/head",
    name: "Head",
    component: Head
  },
  {
    path: "/footer",
    name: "Footer",
    component: Footer
  }
];

const router = new VueRouter({
  routes
});

export default router;
