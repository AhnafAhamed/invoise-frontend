<template>
  <div class="flex">
    <side-bar />
    <div class="m-auto mt-16 w-8/12">
      <div class="flex justify-between items-end">
        <h1 class="text-2xl font-extrabold uppercase">Invoices</h1>
        <add-button :text="'New Invoice'" />
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
  name: "InvoiceView",
  components: { SideBar, MainTable, AddButton },
};
</script>

<style></style>
