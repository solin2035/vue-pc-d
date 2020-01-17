


import Vue from "vue";

import VueRouter from "vue-router";

import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Index from "./views/Index.vue";
import GoodList from "./views/GoodList.vue";
import Register from "./views/Register.vue";


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Index,
        redirect: { name: "h" },
        children: [
            {
                path: "/home",
                component: Home,
                name: "h"
            },
            {
                path: "/goodlist/:goodClass/:className/:leixin?",
                component: GoodList,
                name: "goodlist"
            },
            {
                path: "/login",
                component: Login,
                name: "login"
            },
            {
                path: "/register",
                component: Register,
                name: "register"
            },
        ],
        path: "*",
        component: Index,
        redirect: { name: "h" },
    }
];

const router = new VueRouter({
    routes
});

export default router;