import { createRouter, createWebHistory } from "vue-router";

// Default Pages
// Component Pages

// pages 
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/layouts/auth/Login.vue";
import Register from "../views/layouts/auth/Register.vue";
import Settings from "../views/components/settings.vue";
import Navigation from "../views/components/Navigation.vue"
import aboutUs from "../views/components/aboutUs.vue";
import Assortiment from "../views/components/assortiment.vue";
import videoPrice from "../views/components/videoPrice.vue";
import DarslikdanFoydalanish from "../views/components/darslikdanFoydalanish.vue"
import RarslinkdanFoydalanishImg from "../views/components/darslikdanFoydalanishImg.vue"
import whyChoose from "../views/components/whyChoose.vue";
<<<<<<< HEAD
import works from "../views/components/works.vue";
import comments from "../views/components/comments.vue";
import register from "../views/components/register.vue";
import footer from "../views/components/footer.vue";
=======
import works from "../views/components/author-main.vue";
import socials from "../views/components/socials.vue";
import customers from "../views/components/customers.vue";
import fikrlar from "../views/components/fikrlar.vue";
>>>>>>> 1edc02004d930244ff2552beb2349c6a8b60d544
import assortimentNav from "../views/components/assortimentNav.vue";
import authorMain from "../views/components/author-main.vue";
import authorImages from "../views/components/author-images.vue";
// layouts
// import Blank from "../views/layouts/Blank.vue";

// error page
import Page404 from "../views/layouts/error/404.vue";
import Page500 from "../views/layouts/error/500.vue";
import PageMaintenance from "../views/layouts/error/maintenance.vue";

var appname = " - Fazl Mebel dashboard";

const routes = [
  // Routes
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: { title: "Dashboard " + appname },
  },
  {
    path: "/component/assortimentNav",
    name: "assortimentNav",
    component: assortimentNav,
    meta: { title: "assortimentNav" + appname },
  },
  {
    path: "/component/footer",
    name: "footer",
    component: footer,
    meta: { title: "footer" + appname },
  },
  {
    path: "/component/aboutUs",
    name: "aboutUs",
    component: aboutUs,
    meta: { title: "aboutUs" + appname },
  },
  {
    path: "/component/register",
    name: "register",
    component: register,
    meta: { title: "register" + appname },
  },
  {
    path: "/component/settings",
    name: "Settings",
    component: Settings,
    meta: { title: "Settings" + appname },
  },
  {
    path: "/component/navigation",
    name: "navigation",
    component: Navigation,
    meta: { title: "navigation" + appname },
  },
  {
    path: "/component/assortiment",
    name: "Assortiment",
    component: Assortiment,
    meta: { title: "Assortiment" + appname },
  },
  {
    path: "/component/videoPrice",
    name: "videoPrice",
    component: videoPrice,
    meta: { title: "videoPrice" + appname },
  },
  {
    path: "/component/darslikdanfoydalanish",
    name: "Darslikdanfoydalanish",
    component: DarslikdanFoydalanish,
    meta: { title: "Darslikdanfoydalanish" + appname },
  },
  {
    path:"/component/darslikdanfoydalanishimg",
    name:"Darslikdanfoydalanishimg",
    component:RarslinkdanFoydalanishImg,
    meta: {title:"Darslikdanfoydalanishimg" + appname }
  },
  {
    path: "/component/whyChoose",
    name: "whyChoose",
    component: whyChoose,
    meta: { title: "whyChoose" + appname },
  },
  {
    path: "/component/socials",
    name: "socials",
    component: socials,
    meta: { title: "socials" + appname },
  },
  {
    path: "/author/about",
    name: "authorMain",
    component: authorMain,
    meta: { title: "authorMain" + appname },
  },
  {
    path: "/author/images",
    name: "authorImages",
    component: authorImages,
    meta: { title: "authorImages" + appname },
  },


  // layouts

  // {
  //   path: "/Blank",
  //   name: "Blank Page",
  //   component: Blank,
  //   meta: { title: "Blank Page" + appname },
  // },

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
