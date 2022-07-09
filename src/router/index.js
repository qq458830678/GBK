import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Home from "../views/home";
import Register from "../views/register";
import Search from "@/views/Search";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/search", name: "search", component: Search },
  ],
});
