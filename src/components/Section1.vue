<script lang="ts">
export default {
  name: "Section1",
};
</script>

<template>
  <section id="home" class="text-gray-600 body-fontn md:px-10">
    <div
      class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
    >
      <!-- Top Image -->
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="../assets/images/Image1.png"
        />
      </div>

      <!-- Bottom Section -->
      <div
        class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center gap-12"
      >
        <div
          class="title-font sm:text-5xl text-3xl font-medium text-gray-900 flex flex-col gap-5"
        >
          <h1>
            Angel Skin
            <h1>Repair Your Skin Barriers</h1>
          </h1>
        </div>
        <p class="text-lg leading-relaxed">
          Discover the art of skin care—a personalized routine crafted to
          nourish, protect, and enhance your skin's vitality. Our curated
          selection of products and expert tips cater to diverse skin types and
          concerns, offering solutions for a luminous, healthy complexion.
          Embrace a journey towards radiant skin, embracing the transformative
          power of a dedicated skin care regimen that elevates your natural
          beauty and confidence
        </p>
      </div>
    </div>
  </section>
</template>



<style lang="scss" scoped>
</style>