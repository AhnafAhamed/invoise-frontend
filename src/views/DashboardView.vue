<template>
  <div class="flex">
    <side-bar />
    <div class="flex justify-between flex-wrap m-auto mt-16 w-8/12">
      <stat-card
        :text="'Total in Paid Invoices'"
        :amount="2200"
        :currency="'$'"
      />
      <stat-card :text="'Pending Invoices'" :amount="1720" :currency="'$'" />
    </div>
  </div>
</template>

<script>
import SideBar from "../components/global/SideBar.vue";
import StatCard from "../components/global/StatCard.vue";
export default {
  components: { SideBar, StatCard },
  name: "DashboardView",
};
</script>

<style></style>
