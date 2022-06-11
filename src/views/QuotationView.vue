<template>
  <div class="quotation flex">
    <side-bar />
    <div class="mt-16 ml-16">
      <div class="flex justify-between items-end">
        <h1 class="text-2xl font-extrabold uppercase">Quotations</h1>
        <add-button :text="'New Quotation'" />
      </div>
      <main-table class="mt-12" />
    </div>
  </div>
</template>

<script>
import AddButton from "../components/AddButton.vue";
import MainTable from "../components/MainTable.vue";
import SideBar from "../components/SideBar.vue";
export default {
  components: { SideBar, MainTable, AddButton },
  name: "QuotationView",
};
</script>

<style></style>
