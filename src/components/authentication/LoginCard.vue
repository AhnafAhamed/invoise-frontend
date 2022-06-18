<template>
  <div
    class="w-max p-12 rounded-md bg-white login-card flex flex-col items-center shadow-md"
  >
    <invoise-logo class="mb-3" />
    <p class="mb-3">Sign into your account</p>
    <form action="" class="flex flex-col">
      <label class="mb-2" for="email">Email</label>
      <input
        class="mb-2 w-60 border-2 p-2 text-sm rounded focus:border-light-purple focus:outline-none"
        type="email"
        placeholder="Email"
        name="email"
        id=""
      />
      <label class="mb-2" for="password">Password</label>
      <input
        class="mb-2 w-60 border-2 p-2 text-sm rounded"
        type="password"
        placeholder="Password"
        name="password"
        id=""
      />
      <button
        type="submit"
        class="mt-6 p-2 bg-dark-shade-purple uppercase text-white rounded hover:bg-dark-purple ease-linear duration-300"
      >
        Login
      </button>
    </form>
    <p class="mt-6 text-main-gray flex flex-col items-center">
      Don't have an account?
      <span
        class="text-dark-purple hover:font-semibold cursor-pointer ease-linear duration-300"
        >Register</span
      >
    </p>
  </div>
</template>

<script>
import InvoiseLogo from "../global/InvoiseLogo.vue";
export default {
  components: { InvoiseLogo },
  name: "LoginCard",
};
</script>
