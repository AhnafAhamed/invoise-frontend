<template>
  <div class="settings-tabborder-b border-gray-200 dark:border-gray-700">
    <ul
      class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
    >
      <li
        @click="isTabOneActive"
        :class="{ 'border-blue-600': TabOneActive }"
        class="flex-1 border-b-2"
      >
        <a
          href="#"
          :class="{
            'text-blue-600 active dark:text-blue-500 dark:border-blue-500 group':
              TabOneActive,
          }"
          class="inline-flex p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
        >
          <svg
            :class="{ 'text-blue-600 dark:text-blue-500': TabOneActive }"
            class="mr-2 w-5 h-5 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            ></path></svg
          >Profile
        </a>
      </li>

      <li
        @click="isTabTwoActive"
        :class="{ 'border-blue-600': TabTwoActive }"
        class="flex-1 border-b-2"
      >
        <a
          href="#"
          :class="{
            'text-blue-600 active dark:text-blue-500 dark:border-blue-500 group':
              TabTwoActive,
          }"
          class="inline-flex p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
        >
          <svg
            :class="{
              'text-blue-600 active dark:text-blue-500 dark:border-blue-500 group':
                TabTwoActive,
            }"
            class="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
            <path
              fill-rule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clip-rule="evenodd"
            ></path></svg
          >App Settings
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SettingsTab",
  data: function () {
    return {
      TabOneActive: true,
      TabTwoActive: false,
    };
  },
  methods: {
    isTabOneActive() {
      this.TabOneActive = true;
      this.TabTwoActive = false;
      this.$emit("tab-one-active");
    },
    isTabTwoActive() {
      this.TabTwoActive = true;
      this.TabOneActive = false;
      this.$emit("tab-two-active");
    },
  },
};
</script>

<style></style>
