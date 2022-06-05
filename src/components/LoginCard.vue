<template>
  <div class="login-card flex flex-col items-center">
    <p class="mb-3">INVOICE</p>
    <p class="mb-3">Sign into your account</p>
    <form action="" class="flex flex-col">
      <label class="mb-2" for="email">Email</label>
      <input
        class="mb-2 w-52 border-2 p-2 text-sm rounded"
        type="email"
        placeholder="Email"
        name="email"
        id=""
      />
      <label class="mb-2" for="password">Password</label>
      <input
        class="mb-2 w-52 border-2 p-2 text-sm rounded"
        type="password"
        placeholder="Password"
        name="password"
        id=""
      />
      <button type="submit" class="mt-6 p-2 bg-cyan-500 text-white rounded">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginCard",
};
</script>
