<template>
  <div class="about">
    <AboutHeroSection />
    <AboutImageSection />
    <AboutServicesSection />
    <AboutWhyChooseSection />
    <AboutRentalServiceSection />
    <AboutLocationMapSection />
  </div>
</template>

<script setup>
import AboutHeroSection from '../components/AboutHeroSection.vue'
import AboutImageSection from '../components/AboutImageSection.vue'
import AboutServicesSection from '../components/AboutServicesSection.vue'
import AboutWhyChooseSection from '../components/AboutWhyChooseSection.vue'
import AboutRentalServiceSection from '../components/AboutRentalServiceSection.vue'
import AboutLocationMapSection from '../components/AboutLocationMapSection.vue'
</script>

<style scoped>
.about {
  width: 100%;
}
</style>
