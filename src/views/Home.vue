<template>
  <div class="home">
    <HeroSection />
    <PromotionSection />
    <CategorySection />
    <NewPromotionSection />
    <LocationMapSection />
    <BranchSelectionSection />
    <AppDownloadSection />
    <ServiceCardsSection />
    <WhyChooseUsSection />
    <TravelBlogSection />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import PromotionSection from '../components/PromotionSection.vue'
import CategorySection from '../components/CategorySection.vue'
import NewPromotionSection from '../components/NewPromotionSection.vue'
import LocationMapSection from '../components/LocationMapSection.vue'
import BranchSelectionSection from '../components/BranchSelectionSection.vue'
import AppDownloadSection from '../components/AppDownloadSection.vue'
import WhyChooseUsSection from '../components/WhyChooseUsSection.vue'
import ServiceCardsSection from '../components/ServiceCardsSection.vue'
import TravelBlogSection from '../components/TravelBlogSection.vue'
</script>

<style scoped>
.home {
  width: 100%;
}
</style>
