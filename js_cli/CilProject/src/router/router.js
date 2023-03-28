import { createRouter, createWebHistory } from 'vue-router';
import Calculator from '@/views/Calculator';
import Post from '@/views/Post';

const routes = [
  {
    path:'/',
    redirect: '/Home'
  },
  {
    path:'/calculator',
    component: Calculator
  },
  {
    path:'/post',
    component: Post
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router

// import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// const routes: Array<RouteRecordRaw> = [
//   // {
//   //   path: "/",
//   //   component: () => import("../views/Home.vue"),
//   // },
//   // {
//   //   path: "/about",
//   //   component: () => import("../views/About.vue"),
//   // },
// ];

// export default createRouter({
//   history: createWebHistory(),
//   routes,
// });