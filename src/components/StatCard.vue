<template>
  <div class="stat-card w-60 h-28 bg-white px-6 py-4 rounded-md">
    <p class="text-main-gray text-sm">{{ text }}</p>
    <p class="text-4xl font-bold mt-3">
      <span>{{ currency }}</span>
      {{ amount }}
    </p>
  </div>
</template>

<script>
export default {
  name: "StatCard",
  props: {
    text: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
