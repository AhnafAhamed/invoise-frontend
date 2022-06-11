<template>
  <div class="flex">
    <side-bar />
    <div class="flex justify-between flex-wrap mt-16 ml-16">
      <stat-card
        :text="'Total in Paid Invoices'"
        :amount="2200"
        :currency="'$'"
        class="ml-3"
      />
      <stat-card
        :text="'Pending Invoices'"
        :amount="1720"
        :currency="'$'"
        class="ml-3"
      />
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import StatCard from "../components/StatCard.vue";
export default {
  components: { SideBar, StatCard },
  name: "DashboardView",
};
</script>

<style></style>
