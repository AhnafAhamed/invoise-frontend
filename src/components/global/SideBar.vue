<template>
  <div
    class="sidebar flex flex-col text-center w-max h-screen bg-white px-6 py-10 rounded-r-3xl"
  >
    <invoise-logo class="mb-10" />

    <router-link :to="{ name: 'dashboard' }">
      <side-bar-item :text="'Dashboard'" class="sidebar-item">
        <dashboard-icon class="sidebar-item__icon" />
      </side-bar-item>
    </router-link>

    <router-link :to="{ name: 'invoice' }">
      <side-bar-item :text="'Invoices'" class="sidebar-item">
        <secondary-invoice-icon class="sidebar-item__icon" />
      </side-bar-item>
    </router-link>

    <router-link :to="{ name: 'quotation' }">
      <side-bar-item :text="'Quotations'" class="sidebar-item">
        <quotation-icon class="sidebar-item__icon" />
      </side-bar-item>
    </router-link>

    <router-link :to="{ name: 'settings' }">
      <side-bar-item :text="'Settings'" class="sidebar-item">
        <settings-icon class="sidebar-item__icon" />
      </side-bar-item>
    </router-link>

    <div class="flex grow items-end">
      <side-bar-item
        :text="'Log out'"
        class="sidebar-item sidebar-item__log-out cursor-pointer"
      >
        <logout-icon class="sidebar-item__icon" />
      </side-bar-item>
    </div>
  </div>
</template>

<script>
import DashboardIcon from "../icons/DashboardIcon.vue";
import LogoutIcon from "../icons/LogoutIcon.vue";
import QuotationIcon from "../icons/QuotationIcon .vue";
import SecondaryInvoiceIcon from "../icons/SecondaryInvoiceIcon.vue";
import SettingsIcon from "../icons/SettingsIcon.vue";
import InvoiseLogo from "./InvoiseLogo.vue";
import SideBarItem from "./SideBarItem.vue";

export default {
  components: {
    SideBarItem,
    DashboardIcon,
    SecondaryInvoiceIcon,
    QuotationIcon,
    InvoiseLogo,
    SettingsIcon,
    LogoutIcon,
  },
};
</script>

<style>
.sidebar-item__icon path {
  fill: #a1a0bd;
}
.sidebar-item__log-out:hover p {
  color: #d14f4f;
  font-weight: 900;
}
.sidebar-item__log-out:hover path {
  fill: #d14f4f;
}
.router-link-active .sidebar-item {
  background-color: #f4f3fa;
}
.router-link-active .sidebar-item p {
  color: #4c49ed;
  font-weight: 900;
}
.router-link-active .sidebar-item svg path {
  fill: #4c49ed;
}
</style>
