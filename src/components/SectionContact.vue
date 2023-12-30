<script lang="ts">
export default {
  name: "SectionContact",
};
</script>

<template>
  <div id="contact" class="w-full flex flex-col gap-5">
    <div
      class="w-full bg-darkPrimary h-20 flex flex-rows items-center justify-center"
    ></div>
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div
          class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
        >
          <iframe
            width="100%"
            height="100%"
            class="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1483637.7540187086!2d-77.82362002565236!3d43.42446785650652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cfeae460495ce5%3A0xc189aa7db4c23626!2sUpstate%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2set!4v1702641397805!5m2!1sen!2set"
            style="filter: "
          >
          </iframe>

          <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div class="lg:w-1/2 px-6">
              <h2
                class="title-font font-semibold text-gray-900 tracking-widest text-xs"
              >
                ADDRESS
              </h2>
              <p class="mt-1">New York, US, 543 behind the khalifa building</p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2
                class="title-font font-semibold text-gray-900 tracking-widest text-xs"
              >
                EMAIL
              </h2>
              <a class="text-indigo-500 leading-relaxed"
                >angelar316@icloud.com</a
              >
              <h2
                class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4"
              >
                PHONE
              </h2>
              <p class="leading-relaxed">+1 (845) 637-7476</p>
            </div>
          </div>
        </div>
        <div
          class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p class="leading-relaxed mb-5 text-gray-600">
            Feel Free to leave a feedback
          </p>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600"
              >Name</label
            >
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600"
              >Message</label
            >
            <textarea
              id="message"
              name="message"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            class="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-darkPrimary rounded text-lg"
          >
            Button
          </button>
          <p class="text-xs text-gray-500 mt-3">
            Your feedback means the world to us
          </p>
        </div>
      </div>
    </section>
  </div>
</template>



<style lang="scss" scoped>
</style>