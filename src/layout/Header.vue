<template>
  <header class="w-full fixed h-20 md:px-20 py-1 bg-white z-50">
    <div
      class="w-full container mx-auto flex flex-row gap-10 items-center justify-between"
    >
      <!-- Angel Skin Logo -->
      <div class="px-5 md:px-0">
        <img class="w-16 h-16" src="../assets/logo/logo.jpg" alt="Logo" />
      </div>

      <!-- Website Header -->
      <div>
        <!-- Desktop View -->
        <div class="hidden md:flex flex-row gap-10">
          <router-link to="/" class="navbar-header" active-class="active"
            >Home</router-link
          >
          <router-link to="/about" class="navbar-header" active-class="active"
            >About</router-link
          >
          <router-link to="/contact" class="navbar-header" active-class="active"
            >Contact</router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>


<script lang="ts">
export default {
  name: "Header",
};
</script>

<style lang="css" scoped>
.active {
}
</style>