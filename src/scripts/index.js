

console.log("vue js  入口文件")

import Vue from "vue";

import ElementUI from "element-ui";
Vue.use(ElementUI); // 全局声明

import VueResource from "vue-resource";
Vue.use(VueResource);

import router from "./router";
import store from "./vuex/store";

const vm = new Vue({
    el: "#app",
    router,
    store,
    data:{
        title:"这是vue-webpack项目",
        url: require("../assets/images/img1.jpg"),
        count: 1809,
    }
})