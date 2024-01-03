<script lang="ts">
import Image1 from '../assets/images/about/1.jpg';
import Image2 from '../assets/images/about/2.jpg';
import Image3 from '../assets/images/about/3.jpg';


export default {
  name: "About",
  mounted() {
    this.scrollToTop();
  },
  data(){
    return {
      aboutImages: [
        {
          id: 1,
          image: Image1,
        },
        {
          id: 2,
          image: Image2,
        },
        {
          id: 3,
          image: Image3,
        },
      ]
    }
  },
  methods: {
    scrollToTop(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

};
</script>

<template>
  <div class="w-full h-full min-h-screen pt-10 flex flex-col gap-12">
    <div class="w-full mx-auto py-10">
      <div class="w-4/5 mx-auto h-full flex flex-col gap-10 items-center ">
        <div class="w-full flex flex-col gap-2 items-center">
          <h1 class="text-3xl md:text-6xl font-Assistant">About Me</h1>
          <hr class="w-1/5 border-2 border-primary">
        </div>
        <div class="w-full text-center">
          <h1 class=" text-lg md:text-xl font-Assistant gap-y-1 ">My journey to become an esthetician was definitely not an easy journey, but was well worth the time and effort that I put in. Being a licensed skincare expert is crucial to clients who seek out professional help with their skincare needs. Their are several people all across the world,
             who will come to you for your advice regarding their skin concerns. This could range from mild irritation to severe cystic acne. Either way, it is our responsibility to ensure that the client gets the adequate care they need. However, in this field of work you make people glow inside 
             and out!It's a mix of pampering clients, giving them a true spa like experience, staying updated on the latest skincare trends, and creating personalized treatments to help everyone feel  their best.
          </h1>
        </div>
        <div class="w-full">
          <ul class="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
            <li
            v-for="item in aboutImages"
            :key="item.id"
            >
            <img 
            :src="item.image" 
            alt="Angel Skin Images">
            </li>
          </ul>

        </div>

      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
</style>