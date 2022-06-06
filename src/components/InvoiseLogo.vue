<template>
  <div class="logo flex items-center">
    <invoice-icon class="mr-2" />
    <p class="font-extrabold text-2xl tracking-wider">
      IN<span class="text-dark-purple tracking-tight">VOISE</span>
    </p>
  </div>
</template>

<script>
import InvoiceIcon from "./icons/InvoiceIcon.vue";
export default {
  components: { InvoiceIcon },
  name: "InvoiseLogo",
};
</script>

<style></style>
