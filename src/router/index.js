import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: () => import("../views/Dashboard.vue"),
      // meta: {
      //   guestRequired: true,
      // },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      // meta: {
      //   authRequired: true,
      // },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("auth_token");
  if (to.matched.some((record) => record.meta.authRequired)) {
    if (isLoggedIn == null) {
      next("/");
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guestRequired)) {
    if (isLoggedIn == null) {
      next();
    } else {
      next("/home");
    }
  } else {
    next();
  }
});

export default router;
