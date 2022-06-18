<template>
  <div class="app-settings">
    <form class="mt-8 w-3/4 m-auto">
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
        class="block mb-2 mt-6 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Your Address</label
      >
      <input
        type="text"
        id="address"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="address"
        required
      />
      <button
        type="submit"
        class="block w-2/4 m-auto mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Change
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AppSettings",
};
</script>

<style></style>
