<template>
  <div
    class="sidebar flex flex-col text-center w-max h-screen bg-white px-6 py-10 rounded-r-3xl"
  >
    <invoise-logo class="mb-10" />
    <side-bar-item class="sidebar-item--active" :text="'Dashboard'">
      <dashboard-icon class="sidebar-item__icon" />
    </side-bar-item>
    <side-bar-item :text="'Invoices'">
      <secondary-invoice-icon class="sidebar-item__icon" />
    </side-bar-item>
    <side-bar-item :text="'Quotations'">
      <quotation-icon class="sidebar-item__icon" />
    </side-bar-item>
    <side-bar-item :text="'Settings'">
      <settings-icon class="sidebar-item__icon" />
    </side-bar-item>
    <div class="flex grow items-end">
      <side-bar-item
        :text="'Log out'"
        class="sidebar-item__log-out cursor-pointer"
      >
        <logout-icon class="sidebar-item__icon" />
      </side-bar-item>
    </div>
  </div>
</template>

<script>
import DashboardIcon from "./icons/DashboardIcon.vue";
import LogoutIcon from "./icons/LogoutIcon.vue";
import QuotationIcon from "./icons/QuotationIcon .vue";
import SecondaryInvoiceIcon from "./icons/SecondaryInvoiceIcon.vue";
import SettingsIcon from "./icons/SettingsIcon.vue";
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
.sidebar-item--active {
  background-color: #f4f3fa;
}
.sidebar-item--active p {
  color: #4c49ed;
  font-weight: 900;
}
.sidebar-item--active svg path {
  fill: #4c49ed;
}
</style>
