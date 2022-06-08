<template>
  <div class="flex px-7 py-4 w-auto mb-5 rounded-md cursor-pointer">
    <div class="mr-2"><slot></slot></div>

    <p class="text-main-gray">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "SideBarItem",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
