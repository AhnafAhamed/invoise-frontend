<template>
  <main
    class="flex justify-center items-center flex-col h-screen bg-light-purple"
  >
    <login-card />
  </main>
</template>

<script>
import LoginCard from "../components/LoginCard.vue";

export default {
  components: {
    LoginCard,
  },
};
</script>
