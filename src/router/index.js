import { createRouter, createWebHistory } from "vue-router";

const Login = () => import("@/views/auth/Login.vue");
const Register = () => import("@/views/auth/Register.vue");
const VerifikasiEmail = () => import("@/views/auth/VerificationEmail.vue");
const ResetPassword = () => import("@/views/auth/ResetPassword.vue");
const Dashboard = () => import("@/views/Dashboard/Dashboard.vue");
const Detail = () => import("@/views/Dashboard/Detail.vue");
const Profile = () => import("@/views/Akun/Profile.vue");
const Upload = () => import("@/views/Akun/Upload.vue");
const About = () => import("@/views/Dashboard/About.vue");
const Index = () => import("@/views/Index.vue");
const Project = () => import("@/views/project/Project.vue");
const DetailProject = () => import("@/views/Project/DetailProject.vue");
const EditAkun = () => import("@/views/akun/Edit.vue");
const IndexBlog = () => import("@/views/blog/Index.vue");
const DetailBlog = () => import("@/views/blog/Detail.vue");

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
    path: "/edit-user",
    name: "user.edit",
    component: EditAkun,
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
