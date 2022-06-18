<template>
  <button
    type="button"
    class="text-white bg-dark-shade-purple hover:bg-dark-purple font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-between"
  >
    <add-icon class="add-icon mr-1" />
    {{ text }}
  </button>
</template>

<script>
import AddIcon from "../icons/AddIcon.vue";
export default {
  name: "AddButton",
  components: { AddIcon },
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.add-icon path {
  fill: #fff;
}
</style>
