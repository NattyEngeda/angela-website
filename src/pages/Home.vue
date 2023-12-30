<script lang="ts">
import Section1 from '../components/Section1.vue';
import Section2 from '../components/Section2.vue';
import SectionContact from '../components/SectionContact.vue';

export default {
    name: "Home",
    components: { Section1, Section2, SectionContact }
}
</script>


<template>
  <div class="w-full min-h-screen flex flex-col gap-5">
    <Section1/>
    <Section2/>
    <SectionContact/>
  </div>
</template>
<style lang="scss" scoped>
</style>