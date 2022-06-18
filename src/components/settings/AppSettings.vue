<template>
  <div class="app-settings">
    <form class="mt-8">
      <label
        for="name"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Currency Prefix</label
      >
      <input
        type="text"
        id="name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="USD"
        required
      />
      <label
        for="address"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Your Address</label
      >
      <input
        type="text"
        id="address"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="address"
        required
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "AppSettings",
};
</script>

<style></style>
