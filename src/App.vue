<script  lang="ts">
  import Header from './layout/Header.vue';
  import Footer from './layout/Footer.vue';

export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
};
</script>

<template>
  <div id="app">
    <Header/>
      <main class="md:pt-10">
        <router-view>
        </router-view>
      </main>
      <Footer/>
  
  </div>
</template>
