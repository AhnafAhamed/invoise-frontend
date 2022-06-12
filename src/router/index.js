import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import DashboardView from "../views/DashboardView.vue";
import InvoiceView from "../views/InvoiceView.vue";
import QuotationView from "../views/QuotationView.vue";
import SettingsView from "../views/SettingsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "HOME",
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        title: "LOGIN",
      },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: {
        title: "REGISTER",
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      meta: {
        title: "DASHBOARD",
      },
    },
    {
      path: "/invoices",
      name: "invoice",
      component: InvoiceView,
      meta: {
        title: "INVOICE",
      },
    },
    {
      path: "/quotations",
      name: "quotation",
      component: QuotationView,
      meta: {
        title: "QUOTATION",
      },
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsView,
      meta: {
        title: "SETTINGS",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | INVOISE`;
  next();
});

export default router;
