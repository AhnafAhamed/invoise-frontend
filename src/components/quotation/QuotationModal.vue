<template>
  <div
    class="flex m-auto bg-gray-900 bg-opacity-50 dark:bg-opacity-80 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
  >
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <close-button @click="$emit('close-button-clicked')" />
        <quotation-modal-form />
      </div>
    </div>
  </div>
</template>

<script>
import CloseButton from "../global/CloseButton.vue";
import QuotationModalForm from "./QuotationModalForm.vue";
export default {
  components: { CloseButton, QuotationModalForm },
  name: "QuotationModal",
};
</script>

<style></style>
