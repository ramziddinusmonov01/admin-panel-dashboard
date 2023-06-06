import { createRouter, createWebHistory } from "vue-router";

// Default Pages
import Dashboard from "../views/Dashboard.vue";
// Component Pages
import Login from "../views/layouts/auth/Login.vue";
import Register from "../views/layouts/auth/Register.vue";
import ForgotPassword from "../views/layouts/auth/forgot-password.vue";

// pages 
import Header from "../views/components/header.vue";
import aboutUs from "../views/components/aboutUs.vue";
import Assortiment from "../views/components/assortiment.vue";
import Button from "../views/components/button.vue";
import BuyurtmaBerish from "../views/components/buyurtmaBerish.vue";0
import whyChoose from "../views/components/whyChoose.vue";
// layouts
import Blank from "../views/layouts/Blank.vue";

// error page
import Page404 from "../views/layouts/error/404.vue";
import Page500 from "../views/layouts/error/500.vue";
import PageMaintenance from "../views/layouts/error/maintenance.vue";

var appname = " - Windzo Dashboard Admin Template";

const routes = [
  // Routes
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: { title: "Dashboard " + appname },
  },

  {
    path: "/component/aboutUs",
    name: "aboutUs",
    component: aboutUs,
    meta: { title: "aboutUs" + appname },
  },
  {
    path: "/component/header",
    name: "Header",
    component: Header,
    meta: { title: "Header" + appname },
  },
  {
    path: "/component/assortiment",
    name: "Assortiment",
    component: Assortiment,
    meta: { title: "Assortiment" + appname },
  },
  {
    path: "/component/button",
    name: "Button",
    component: Button,
    meta: { title: "Button" + appname },
  },
  {
    path: "/component/buyurtmaBerish",
    name: "BuyurtmaBerish",
    component: BuyurtmaBerish,
    meta: { title: "BuyurtmaBerish" + appname },
  },
  {
    path: "/component/whyChoose",
    name: "whyChoose",
    component: whyChoose,
    meta: { title: "whyChoose" + appname },
  },


  // layouts

  {
    path: "/Blank",
    name: "Blank Page",
    component: Blank,
    meta: { title: "Blank Page" + appname },
  },

  {
    path: "/auth/login",
    name: "Login",
    component: Login,
    meta: { title: "Login" + appname, hideNav: true },
  },
  {
    path: "/auth/register",
    name: "Register",
    component: Register,
    meta: { title: "Register" + appname, hideNav: true },
  },
  {
    path: "/auth/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: { title: "i Forgot Password" + appname, hideNav: true },
  },
  // layout/error
  // default page 404
  {
    path: "/:pathMatch(.*)*",
    name: "Page404",
    component: Page404,
    meta: { title: "Upps! 404" + appname, hideNav: true },
  },
  {
    path: "/500",
    name: "Page500",
    component: Page500,
    meta: { title: "Server internal Error" + appname, hideNav: true },
  },
  {
    path: "/maintenance",
    name: "maintenance",
    component: PageMaintenance,
    meta: {
      title: "Sorry the app has been Maintenance" + appname,
      hideNav: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  linkExactActiveClass: "exact-active",
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;