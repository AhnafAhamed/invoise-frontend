<template>
  <div class="settings flex">
    <side-bar />
    <div class="settings-form m-auto mt-16 w-6/12">
      <settings-tab @tab-one-click="tabOneView" @tab-two-click="tabTwoView" />
      <profile-settings v-if="isTabOneView" />
      <app-settings v-if="isTabTwoView" />
    </div>
  </div>
</template>

<script>
import SettingsTab from "../components/settings/SettingsTab.vue";
import SideBar from "../components/global/SideBar.vue";
import ProfileSettings from "../components/settings/ProfileSettings.vue";
import AppSettings from "../components/settings/AppSettings.vue";
export default {
  components: { SideBar, SettingsTab, ProfileSettings, AppSettings },
  name: "SettingsView",
  data: function () {
    return {
      isTabOneView: true,
      isTabTwoView: false,
    };
  },
  methods: {
    tabOneView() {
      this.isTabOneView = true;
      this.isTabTwoView = false;
    },
    tabTwoView() {
      this.isTabTwoView = true;
      this.isTabOneView = false;
    },
  },
};
</script>

<style></style>
