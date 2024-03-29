import { createRouter, createWebHistory } from "vue-router";

const Login = () => import("@/views/auth/Login.vue");
const Register = () => import("@/views/auth/Register.vue");
const VerifikasiEmail = () => import("@/views/auth/VerificationEmail.vue");
const ResetPassword = () => import("@/views/auth/ResetPassword.vue");
const Dashboard = () => import("@/views/Dashboard/Dashboard.vue");
const Profile = () => import("@/views/Akun/Profile.vue");
const Upload = () => import("@/views/Akun/Upload.vue");
const About = () => import("@/views/Dashboard/About.vue");
const Index = () => import("@/views/Index.vue");
const Edit = () => import("@/views/Akun/Update.vue");
const Project = () => import("@/views/project/Explore.vue");
const DetailProject = () => import("@/views/Project/DetailProject.vue");
const IndexBlog = () => import("@/views/blog/Index.vue");
const DetailBlog = () => import("@/views/blog/Detail.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        guestRequired: true,
      },
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        guestRequired: true,
      },
    },
    {
      path: "/verifikasi",
      name: "verifikasi",
      component: VerifikasiEmail,
      meta: {
        guestRequired: true,
      },
    },
    {
      path: "/reset-password",
      name: "reset-password",
      component: ResetPassword,
      meta: {
        guestRequired: true,
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: {
        authRequired: true,
      },
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/user",
      name: "user",
      component: Profile,
      meta: {
        authRequired: true,
      },
    },
    {
      path: "/user/edit",
      name: "user.edit",
      component: Edit,
      meta: {
        authRequired: true,
      },
    },
    {
      path: "/project",
      name: "project",
      component: Project,
      meta: {
        authRequired: true,
      },
    },
    {
      path: "/project/:id",
      name: "detail.project",
      component: DetailProject,
      meta: {
        authRequired: true,
      },
    },
    {
      path: "/upload",
      name: "upload",
      component: Upload,
      meta: {
        authRequired: true,
      },
    },
    {
      path: "/blog",
      name: "blog",
      component: IndexBlog,
    },
    {
      path: "/blog/:slug",
      name: "blog.detail",
      component: DetailBlog,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("auth_token");

  if (to.matched.some((record) => record.meta.authRequired)) {
    if (!isLoggedIn) {
      // Pengguna tidak terotentikasi, redirect ke halaman login
      next({ name: "login" });
    } else {
      // Pengguna terotentikasi, izinkan navigasi
      next();
    }
  } else if (to.matched.some((record) => record.meta.guestRequired)) {
    if (!isLoggedIn) {
      // Pengguna tidak terotentikasi, izinkan navigasi
      next();
    } else {
      // Pengguna terotentikasi, redirect ke dashboard
      next({ name: "dashboard" });
    }
  } else {
    // Jika tidak ada meta yang didefinisikan, izinkan navigasi
    next();
  }
});

export default router;
