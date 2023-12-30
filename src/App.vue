<!-- <script setup lang="ts">

import Home from "./pages/Home.vue";
import Footer from "./layout/Footer.vue";
</script>

<template>
  <Header />
  <main class="pt-10">
    <Home />
  </main>
  <Footer />
</template>

<style scoped>
</style> -->

<script setup lang="ts">
import { ref, computed } from "vue";
import Header from "./layout/Header.vue";
import About from "./pages/About.vue";
import Home from "./pages/Home.vue";

const routes = {
  "/": Home,
  "/about": About,
};

const currentPath = ref(window.location.pathname);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentVView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"];
});
</script>

<template>
  <Header />
  <component :is="currentVView" />
</template>