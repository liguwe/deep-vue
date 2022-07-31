import { createRouter, createWebHistory } from "vue-router";
import d1 from "../views/d1.vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import d2 from "../views/d2.vue";
import d3 from "../views/d3.vue";
import d4 from "../views/d4.vue";
import d5 from "../views/d5.vue";
import d5_1 from "../views/d5_1.vue";
import d6 from "../views/d6.vue";
import d9 from "../views/d9.vue";
import d11 from "../views/d11.vue";
import d13 from "../views/d13.vue";
import d15 from "../views/d15.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: d1,
    },
    {
      path: "/d1",
      name: "home",
      component: d1,
    },
    {
      path: "/d2",
      name: "d2",
      component: d2,
    },
    {
      path: "/d3",
      name: "d3",
      component: d3,
    },
    {
      path: "/d4",
      name: "d4",
      component: d4,
    },
    {
      path: "/d5",
      name: "d5",
      component: d5,
    },
    {
      path: "/d5_1",
      name: "d5_1",
      component: d5_1,
    },
    {
      path: "/d6",
      name: "d6",
      component: d6,
    },
    {
      path: "/d9",
      name: "d9",
      component: d9,
    },
    {
      path: "/d11",
      name: "d11",
      component: d11,
    },
    {
      path: "/d13",
      name: "d13",
      component: d13,
    },
    {
      path: "/d15",
      name: "d15",
      component: d15,
    },
  ]
});

export default router;
