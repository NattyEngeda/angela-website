<script  lang="ts">
  export default {
    name: 'Contact',
    mounted() {
    this.scrollToTop();
  },
    methods: {
    scrollToTop(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
  }
</script>

<template>
  <div class="relative w-full mx-auto container h-full flex flex-col items-start justify-center pt-10 md:px-20 font-Assistant">
   
    <!-- Form -->
    <div class="w-full lg:w-1/2 px-5 mx-auto h-full flex flex-col items-center justify-start gap-20 py-28">
    <div class="w-full">
      <h1 class="text-4xl md:text-6xl font-Assistant">Contact</h1>
    </div>

    <!-- Contact Form -->
    <div class="w-full flex flex-col items-start justify-normal gap-5">

      <!-- Name and Email -->
      <div class="w-full grid grid-cols-2 gap-5 ">
        <input
        type="text"
        class="border border-black px-2 py-3 focus:outline-none focus:border-2 focus:border-black"
        placeholder="Name">

        <input
        type="email"
        class="border border-black px-2 py-3 focus:outline-none"
        placeholder="Email*">
      </div>

      <!-- Phone Number -->
      <div class="w-full">
        <input
        type="text"
        class="border border-black px-2 py-3 w-full focus:outline-none"
        placeholder="Phone number">
      </div>

      <!-- Comment -->
      <div class="w-full">
        <textarea
        rows="5"
        class="border border-black px-2 py-3 w-full focus:outline-none"
        placeholder="Comment"/>
      </div>

      <div>
          <button class="px-10 py-3 bg-black text-white btn-trns">Send</button>
      </div>
    </div>

   </div>
  </div>
</template>



<style lang="scss" scoped>

</style>