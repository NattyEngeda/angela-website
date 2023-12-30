<script lang="ts">
export default {
  name: "Footer",
};
</script>

<template>
  <footer class="text-gray-600 body-font bg-gray-50">
    <div
      class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
    >
      <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a
          class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <img
            class="w-16 h-16 text-white p-1 bg-primary rounded-full"
            src="../assets/logo/logo.jpg"
            alt="Angel Skin Logo"
          />
          <span class="ml-3 text-2xl text-primary uppercase">Angel Skin</span>
        </a>
        <p class="mt-2 text-sm text-gray-500 p-2">Repair Your Skin Barriers</p>
      </div>
      <div
        class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"
      >
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2
            class="title-font font-medium text-primary tracking-widest text-sm mb-3 uppercase"
          >
            Our Services
          </h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-darkPrimary hover:text-gray-800">Facial</a>
            </li>
            <li>
              <a class="text-darkPrimary hover:text-gray-800"
                >Waxing Services</a
              >
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2
            class="title-font font-medium text-primary tracking-widest text-sm mb-3 uppercase"
          >
            Facial Services
          </h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-darkPrimary hover:text-gray-800">Basic Facial</a>
            </li>
            <li>
              <a class="text-darkPrimary hover:text-gray-800">Back Facial</a>
            </li>
            <li>
              <a class="text-darkPrimary hover:text-gray-800"
                >Deep Cleansing Detox Facial</a
              >
            </li>
            <li>
              <a class="text-darkPrimary hover:text-gray-800"
                >Calming and Smoothing Facial</a
              >
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2
            class="title-font font-medium text-primary tracking-widest text-sm mb-3 uppercase"
          >
            Waxing Services
          </h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-darkPrimary hover:text-gray-800">Upper Lip</a>
            </li>
            <li>
              <a class="text-darkPrimary hover:text-gray-800">Chin</a>
            </li>
            <li>
              <a class="text-darkPrimary hover:text-gray-800">Eyebrows</a>
            </li>
            <li>
              <a class="text-darkPrimary hover:text-gray-800"
                >Cheeks/Sideburns</a
              >
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2
            class="title-font font-medium text-primary tracking-widest text-sm mb-3 uppercase"
          >
            Facial Addons
          </h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-darkPrimary hover:text-gray-800">Scalp Massage</a>
            </li>
            <li>
              <a class="text-darkPrimary hover:text-gray-800">Foot Massage</a>
            </li>
            <li>
              <a class="text-darkPrimary hover:text-gray-800"
                >Jelly / Sheet Mask</a
              >
            </li>
            <li>
              <a class="text-darkPrimary hover:text-gray-800">High Frequency</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div class="bg-gray-100">
      <div
        class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
      >
        <p class="text-primary text-sm text-center sm:text-left">
          © 2024 Angel Skin.
          <a
            href="https://www.instagram.com/angelskinbyangela/"
            rel="noopener noreferrer"
            class="text-gray-600 ml-1"
            target="_blank"
            >@angelskinbyangela</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>



<style lang="scss" scoped>
</style>