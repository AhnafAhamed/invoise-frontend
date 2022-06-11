import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import DashboardView from "../views/DashboardView.vue";
import InvoiceView from "../views/InvoiceView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
    },
    {
      path: "/invoices",
      name: "invoice",
      component: InvoiceView,
    },
    {
      path: "/qoutations",
      name: "qoutation",
      component: InvoiceView,
    },
    {
      path: "/settings",
      name: "settings",
      component: InvoiceView,
    },
  ],
});

export default router;
