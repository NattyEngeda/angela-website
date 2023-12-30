<script lang="ts">
export default {
  name: "Header",
};
</script>

<template>
  <header class="w-full fixed h-20 md:px-20 py-1 z-50 glassy-header">
    <div
      class="w-full container mx-auto flex flex-row gap-10 items-center justify-between"
    >
      <!-- Angel Skin Logo -->
      <router-link to="/" class="px-5 md:px-0">
        <img class="w-16 h-16" src="../assets/logo/logo.jpg" alt="Logo" />
      </router-link>

      <!-- Website Header -->
      <div>
        <!-- Desktop View -->
        <div class="hidden md:flex flex-row gap-10 items-center">
          <router-link to="/" class="navbar-header" active-class="active">
            Home
          </router-link>
          <!-- <router-link to="/about" class="navbar-header" active-class="active">
            About
          </router-link> -->
          <router-link to="/contact" class="navbar-header" active-class="active">
            Contact
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="css" scoped>
.active {
  color: #d5ac89;
  font: 700 1.2rem "Roboto", sans-serif;
}
</style>