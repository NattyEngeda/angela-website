<template>
  <header
    class="w-full h-20 md:px-20 py-1 bg-white flex flex-row gap-10 items-center justify-between shadow"
  >
    <!-- Angel Skin Logo -->
    <div>
      <img class="w-16 h-16" src="../assets/logo/logo.jpg" alt="Logo" />
    </div>

    <!-- Website Header -->
    <div>
      <!-- Desktop View -->
      <div class="flex flex-row gap-10">
        <h1 class="navbar-header">Home</h1>
        <h1 class="navbar-header">Services</h1>
        <h1 class="navbar-header">About</h1>
        <h1 class="navbar-header">Contact</h1>
      </div>
    </div>
  </header>
</template>


<script lang="ts">
export default {
  name: "Header",
};
</script>




<style lang="scss" scoped>
</style>