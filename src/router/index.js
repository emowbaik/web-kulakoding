import { createRouter, createWebHistory } from "vue-router";

const Login = () => import("@/views/auth/Login.vue");
const Register = () => import("@/views/auth/Register.vue");
const VerifikasiEmail = () => import("@/views/auth/VerificationEmail.vue");
const ResetPassword = () => import("@/views/auth/ResetPassword.vue");
const Dashboard = () => import("@/views/Dashboard/Dashboard.vue");
const Detail = () => import("@/views/Dashboard/Detail.vue");
const Explore = () => import("@/views/Dashboard/Explore.vue");
const Profile = () => import("@/views/Akun/Profile.vue");
const Upload = () => import("@/views/Akun/Upload.vue");
const Edit = () => import("@/views/Akun/Update.vue");
const About = () => import("@/views/Dashboard/About.vue");
const Index = () => import("../views/Index.vue");
const Project = () => import("../views/project/Project.vue");
const DetailProject = () => import("../views/Project/DetailProject.vue");

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
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
  {
    path: "/project",
    name: "project",
    component: Project,
  },
  {
    path: "/project/:id",
    name: "detail.project",
    component: DetailProject,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
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