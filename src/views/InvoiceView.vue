<template>
  <div class="flex">
    <side-bar />
    <div class="m-auto mt-16 w-8/12">
      <div class="flex justify-between items-end">
        <h1 class="text-2xl font-extrabold uppercase">Invoices</h1>
        <add-button :text="'New Invoice'" @click="addButtonClick" />
      </div>
      <main-table class="mt-12" />
      <invoice-modal
        v-show="isModalActive"
        @close-button-clicked="closeButtonClick"
      />
    </div>
  </div>
</template>

<script>
import AddButton from "../components/AddButton.vue";
import InvoiceModal from "../components/InvoiceModal.vue";
import MainTable from "../components/MainTable.vue";
import SideBar from "../components/SideBar.vue";
export default {
  name: "InvoiceView",
  components: { SideBar, MainTable, AddButton, InvoiceModal },
  data: function () {
    return {
      isModalActive: false,
    };
  },
  methods: {
    addButtonClick() {
      this.isModalActive = true;
      console.log(this.isModalActive);
    },
    closeButtonClick() {
      this.isModalActive = false;
      console.log(this.isModalActive);
    },
  },
};
</script>

<style></style>
