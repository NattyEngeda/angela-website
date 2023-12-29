<script lang="ts">
export default {
  name: "Section2",

  data() {
    return {
      mainServices: [
        {
          id: 1,
          image:
            "https://medicismedicalspa.com/wp-content/uploads/2021/07/esthetician-performing-a-basic-facial-to-female-client.jpg",
          name: "Basic Facial",
          price: 65,
          description:
            "This facial is the best to go for if you're not too sure what you're looking for. This includes a thorough consultation with your esthetician to determine which treatment is best suited for your skin type. This includes cleansing of the skin, exfoliation, extractions, a mask and sun protection.",
        },
        {
          id: 2,
          image:
            "https://myskinph.com/wp-content/uploads/2020/06/Back-Facial-Treatment.jpg",
          name: "Back Facial",
          price: 70,
          description:
            "A commonly neglected area and troublesome area for many, this treatment includes the use of an invigorating enzyme scrub of your choice. This is ideal for those who want to ease muscle ache as well as giving your back the luxurious skin treatment it deserves! This service is great for any skin type. * Includes extractions if necessary *",
        },
        {
          id: 3,
          image:
            "https://eyesonskin.com/wp-content/uploads/2019/08/detox-facial.jpg",
          name: "Deep Cleansing Detox Facial ",
          price: 75,
          description:
            "This facial is designed for more acneic skin types, however it is also beneficial for normal to oily skin types looking for a deep pore cleanse.",
        },
        {
          id: 4,
          image:
            "https://jurlique.my/cdn/shop/products/CALMINGSOOTHINGFACIAL_480x.jpg?v=1659058491",
          name: "Calming and Smoothing Facial",
          price: 90,
          description:
            "This facial is perfect for those looking to instantly soothe irritated and compromised skin with the unique ingredients of Algae. Full of proteins, amino acids and vitamins, this treatment is guaranteed to repair and revive the skins natural lipid barrier.",
        },
        {
          id: 5,
          image:
            "https://images.ctfassets.net/lbv2usz5vbrz/0DR0lLKJdCs4mx11LrHv8/0aa22cfd2738f1ad7d1446ddd7f93389/soin-age-firming.jpg",
          name: "Firming and Lifting Facial",
          price: 105,
          description:
            "Renew and revitalize tired skin with potent anti-aging peptides, powerful antioxidants, stem cells and botanicals. This will help to stimulate new cell growth, leaving you with an instant firm luminous glow.",
        },
        {
          id: 6,
          image:
            "https://images.squarespace-cdn.com/content/v1/57071e4a9f726686e979990f/1649314480432-2VAOCN7POH5L6C7QSYCO/paramedical.png",
          name: "Vitamin Infusion Facial",
          price: 115,
          description:
            "This facial is great for any skin type by infusing essential vitamins. This luxurious facial will not only address current antioxidant and nourishment depletion but also protect the skin from future damage.",
        },
        {
          id: 7,
          image:
            "https://hips.hearstapps.com/hmg-prod/images/cutting-scars-woman-during-treatment-with-royalty-free-image-527863691-1552493543.jpg",
          name: "Dermaplaning Facial",
          price: 125,
          description:
            "This skin treatment is performed using a specialized surgical instrument and disposable blades designed specifically for dermaplaning your technician will hold the skin taught and gently scrape away soft facial hair or 'peach-fuzz' at a 45° degree angle. This treatment is highly exfoliating and can remove 2/3 weeks of dead skin buildup for a fresh, smooth and healthy glow.",
        },
        {
          id: 8,
          image:
            "https://dawaplatform.blob.core.windows.net/sidneyhealth-image/Blog/Blog/AdvancedAesthetics/chemcialpeel.jpeg",
          name: "Chemical Peel",
          price: 135,
          description:
            "This facial combines the hydrating, exfoliating and antioxidant properties of acid. This peel is known to remove dead skin cells, reduce fine lines and wrinkles, improves texture evening out skin tone and can even help to fade hyperpigmentation due to acne scarring or age spots due to over exposure to the Suns UVB Rays.",
        },
        {
          id: 9,
          image: "https://azurepg.com/wp-content/uploads/2018/12/c700x420.jpg",
          name: "Mircodermabrasion Facial ",
          price: 150,
          description:
            "This facial is a great exfoliating treatment for the skin. The procedure uses a special applicator with an abrasive surface to gently sand away the top layers of the skin helping to improve the appearance of fine lines and wrinkles, hyperpigmentation due to acne scarring and age/sun spots and other skin conditions. Overall, Mircodermabrasion is a minimally invasive procedure used to renew the skins outer surface for a bright healthy glow.",
        },
      ],

      facialAddons: [
        {
          id: 1,
          image:
            "https://images.squarespace-cdn.com/content/v1/5f2864b6ee63644ee0b157d3/2a0a667f-4fe2-4357-9964-1c14e6b29287/professional-head-massage.jpg",
          name: "Scalp Massage",
          price: 10,
        },
        {
          id: 2,
          image:
            "https://athleteschoicemassage.ca/wp-content/uploads/2023/05/nheikqvj0ii.jpg",
          name: "Foot Massage",
          price: 10,
        },
        {
          id: 3,
          image:
            "https://fashionista.com/.image/t_share/MTU1NzA1Mzg2ODM2NDM2NDc2/glow-recipe-watermelon-mask.jpg",
          name: "Jelly or Sheet Mask of choice",
          price: 15,
        },
        {
          id: 4,
          image:
            "https://www.buryskinandlaserclinic.co.uk/wp-content/uploads/2020/09/Direct-High-Level-Frequency-Facial-at-Bury-Skin-and-Laser-Clinic.jpg",
          name: "High Frequency",
          price: 25,
        },
        {
          id: 5,
          image:
            "https://thatfaceplace.com.au/wp-content/uploads/2023/01/LED-Light-Therapy-Treatment-1080x675.png",
          name: "LED Light Therapy",
          price: 25,
        },
        {
          id: 6,
          image:
            "https://dawaplatform.blob.core.windows.net/sidneyhealth-image/Blog/Blog/AdvancedAesthetics/chemcialpeel.jpeg",
          name: "Chemical Peel",
          price: 50,
        },
      ],

      waxingServices: [
        {
          id: 1,
          image:
            "https://www.ulike.com/wp-content/uploads/2023/08/Expert-Guide-and-Tips.jpg",
          name: "Upper Lip",
          price: 12,
        },
        {
          id: 2,
          image:
            "https://cdn11.bigcommerce.com/s-dhjryls/images/stencil/1280x1280/products/166/378/le_beau_waxing_face__68087.1400978565.jpg?c=2",
          name: "Chin",
          price: 10,
        },
        {
          id: 3,
          image:
            "https://dahliabywha.com/storage/2021/09/EYEBROW-WAXING-PROCEDURES-INVOLVED-IN-IT-AND-ITS-PROS-AND-CONS-scaled.jpg",
          name: "Eyebrows",
          price: 18,
        },
        {
          id: 4,
          image:
            "https://www.ulike.com/wp-content/uploads/2023/08/Waxing-Sideburns-Step-by-Step-Guide-Results-and-Other-Ways.jpg",
          name: "Cheeks/Sideburns",
          price: 15,
        },
        {
          id: 5,
          image:
            "https://eyesonskin.com/wp-content/uploads/2019/08/AdobeStock_217056099-e1565050098883.jpeg",
          name: "Half Arm",
          price: 30,
        },
        {
          id: 6,
          image:
            "https://www.zendayspa.co.uk/wp-content/uploads/2022/01/full-arms-waxing.jpeg",
          name: "Full Arm",
          price: 45,
        },
        {
          id: 7,
          image:
            "https://img.uenicdn.com/image/upload/v1528972666/service_images/adobestock_58226409.jpg",
          name: "Full Leg",
          price: 75,
        },
        {
          id: 8,
          image:
            "https://www.urbanspa.com.au/wp-content/uploads/2017/04/US_Treat_waxingtinting01.jpg",
          name: "Half Leg",
          price: 45,
        },
        {
          id: 9,
          image: "https://www.hushhair.com/files/2015/07/Underarm-waxing.jpg",
          name: "Under Arm",
          price: 30,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="w-full h-full flex flex-col gap-4 items-center justify-start">
    <div class="w-full flex flex-col gap-5 items-center justify-start">
      <h1 class="title-font sm:text-5xl text-3xl font-medium text-primary">
        Our Services
      </h1>
      <hr class="w-1/5 border-2 border-primary" />
    </div>

    <!-- Services -->

    <div class="w-full container mx-auto px-5 md:px-0 py-10">
      <ul class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <li
          class="w-full border border-gary-200 rounded-md shadow-md p-5 box-transition"
          v-for="item in mainServices"
          :key="item.id"
        >
          <div class="w-full h-40">
            <img
              class="w-full h-full object-cover object-center rounded-md"
              :src="item.image"
              alt="Basic Facial"
            />
          </div>
          <div class="w-full flex flex-col gap-2 items-start justify-start">
            <h1 class="text-xl font-medium text-primary">{{ item.name }}</h1>
            <p class="text-sm text-gray-500">{{ item.description }}</p>
            <h1 class="text-xl font-medium text-primary">${{ item.price }}</h1>
          </div>
        </li>
      </ul>
    </div>

    <div
      class="w-full bg-primary h-20 flex flex-rows items-center justify-center"
    >
      <p class="text-white text-lg md:text-2xl text-center">
        All Facial services include an arm and hand massage for complete
        relaxation.
      </p>
    </div>

    <!-- Facial Addons -->
    <div
      class="w-full container mx-auto flex flex-col gap-10 items-center py-5"
    >
      <div>
        <h1 class="text-primary sm:text-5xl text-3xl">Facial Addon(s)</h1>
      </div>

      <div>
        <ul
          class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
        >
          <li
            class="w-full border border-gary-200 rounded-md shadow-md p-5 box-transition"
            v-for="item in facialAddons"
            :key="item.id"
          >
            <div class="w-full h-40">
              <img
                class="w-full h-full object-cover object-center rounded-md"
                :src="item.image"
                alt="Basic Facial"
              />
            </div>
            <div class="w-full flex flex-col gap-2 items-start justify-start">
              <h1 class="text-xl font-medium text-primary">{{ item.name }}</h1>
              <h1 class="text-xl font-medium text-primary">
                ${{ item.price }}
              </h1>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Our Waxing Services -->
    <div
      class="w-full container mx-auto flex flex-col gap-10 items-center py-10"
    >
      <div>
        <h1 class="text-darkPrimary sm:text-5xl text-3xl font-semibold">
          Our Waxing Services
        </h1>
      </div>

      <div>
        <ul
          class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
        >
          <li
            class="w-full border border-gary-200 rounded-md shadow-md p-5 box-transition"
            v-for="item in waxingServices"
            :key="item.id"
          >
            <div class="w-full h-40">
              <img
                class="w-full h-full object-cover object-center rounded-md"
                :src="item.image"
                alt="Basic Facial"
              />
            </div>
            <div class="w-full flex flex-col gap-2 items-start justify-start">
              <h1 class="text-xl font-medium text-primary">{{ item.name }}</h1>
              <h1 class="text-xl font-medium text-primary">
                ${{ item.price }}
              </h1>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
</style>