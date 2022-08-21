import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NProgress from "nprogress";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("~/views/home/index.vue"),
  },
  {
    path: "/catalog",
    name: "Products",
    component: () => import("~/views/catalog/index.vue"),
  },
  {
    path: "/category/:category",
    name: "Category",
    component: () => import("~/views/category/index.vue"),
  },
  {
    path: "/card",
    name: "Card",
    component: () => import("~/views/card/index.vue"),
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () => import("~/views/favorites/index.vue"),
  },
];

const index = createRouter({
  history: createWebHistory(),
  routes,
});
index.beforeEach((to, from) => {
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
});

index.afterEach((to, from) => {
  NProgress.done();
});

export default index;
