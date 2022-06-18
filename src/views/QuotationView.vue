<template>
  <div class="quotation flex">
    <side-bar />
    <div class="m-auto mt-16 w-8/12">
      <div class="flex justify-between items-end">
        <h1 class="text-2xl font-extrabold uppercase">Quotations</h1>
        <add-button :text="'New Quotation'" @click="addButtonClick" />
      </div>
      <main-table class="mt-12" />
      <quotation-modal
        v-show="isModalActive"
        @close-button-clicked="closeButtonClick"
      />
    </div>
  </div>
</template>

<script>
import AddButton from "../components/global/AddButton.vue";
import MainTable from "../components/global/MainTable.vue";
import QuotationModal from "../components/quotation/QuotationModal.vue";
import SideBar from "../components/global/SideBar.vue";
export default {
  components: { SideBar, MainTable, AddButton, QuotationModal },
  name: "QuotationView",
  data: function () {
    return {
      isModalActive: false,
    };
  },
  methods: {
    addButtonClick() {
      this.isModalActive = true;
    },
    closeButtonClick() {
      this.isModalActive = false;
    },
  },
};
</script>

<style></style>
