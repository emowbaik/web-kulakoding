import { createRouter, createWebHistory } from "vue-router";
const Login = () => import("@/views/auth/Login.vue");
const Register = () => import("@/views/auth/Register.vue");
const VerifikasiEmail = () => import("../views/auth/VerificationEmail.vue");
const ResetPassword = () => import("../views/auth/ResetPassword.vue");
const Dashboard = () => import("@/views/Dashboard/Dashboard.vue");
const Detail = () => import("@/views/Dashboard/Detail.vue");
const Profile = () => import("@/views/Akun/Profile.vue");
const Upload = () => import("@/views/Akun/Upload.vue");
const About = () => import("@/views/Dashboard/About.vue");
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //   routes: [
  //     {
  //       path: "/login",
  //       name: "login",
  //       component: Login,
  //       // meta: {
  //       //   guestRequired: true,
  //       // },
  //     },
  //     {
  //       path: "/register",
  //       name: "register",
  //       component: Register,
  //       // meta: {
  //       //   guestRequired: true,
  //       // },
  //     },
  //     {
  //       path: "/reset-password",
  //       name: "reset-password",
  //       component: ResetPassword,
  //       // meta: {
  //       //   guestRequired: true,
  //       // },
  //     },
  //     {
  //       path: "/",
  //       name: "index",
  //       component: () => import("../views/Index.vue"),
  //       // redirect: { path: "/dashboard" },
  //       // meta: {
  //       //   authRequired: true,
  //       // },
  //       children: [
  //     {
  //       path: "/dashboard",
  //       name: "dashboard",
  //       component: Dashboard,
  //       // meta: {
  //       //   authRequired: true,
  //       // },
  //     },
  //     {
  //       path: "/user",
  //       name: "user",
  //       component: Profile,
  //     },
  //     {
  //       path: "/detail",
  //       name: "detail",
  //       component: Detail,
  //     },
  //     {
  //       path: "/upload",
  //       name: "upload",
  //       component: Upload,
  //     },
  //     {
  //       path: "/about",
  //       name: "about",
  //       component: About,
  //     },
  //       ],
  //     },
  //   ],
  // });
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("../views/Index.vue"),
      // meta: {
      //   guestRequired: true,
      // },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      // meta: {
      //   authRequired: true,
      // },
    },
    {
      path: "/user",
      name: "user",
      component: Profile,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: Detail,
    },
    {
      path: "/upload",
      name: "upload",
      component: Upload,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/verifikasi",
      name: "verifikasi",
      component: VerifikasiEmail,
    },
    {
      path: "/reset-password",
      name: "reset-password",
      component: ResetPassword,
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
