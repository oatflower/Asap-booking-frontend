<template>
  <div class="home">
    <StickySearchBar :is-visible="showStickySearch" />

    <!-- 1. Hero Section -->
    <div class="desktop-only">
      <HeroSection />
    </div>
    <div class="mobile-only">
      <MobileHeroSection />
    </div>

    <!-- 2. Promo/Coupon Section -->
    <div class="desktop-only">
      <PromotionSection />
    </div>
    <div class="mobile-only">
      <MobilePromotionSection />
    </div>

    <!-- 3. จองรถระยะสั้น/ยาว -->
    <div class="desktop-only">
      <CategorySection />
    </div>

    <!-- 4. ลดเฉพาะช่วงนี้ คุ้มกว่าเดิม -->
    <div class="desktop-only">
      <NewPromotionSection />
    </div>

    <!-- 5. เช่ารถได้สะดวก ทุกจุดหมาย -->
    <div class="desktop-only">
      <LocationMapSection />
    </div>
    <div class="mobile-only">
      <MobileLocationSelectionSection />
    </div>

    <!-- 6. เลือกสาขารับรถ & จองเลย -->
    <div class="desktop-only">
      <BranchSelectionSection />
    </div>
    <div class="mobile-only">
      <MobileBranchSelectionSection />
    </div>

    <!-- 7. จองสะดวกขึ้นผ่านแอปเอแซ็ป (asap app) -->
    <div class="desktop-only">
      <AppDownloadSection />
    </div>
    <div class="mobile-only">
      <MobileAppDownloadSection />
    </div>

    <!-- 8. asap พร้อมให้บริการ -->
    <div class="desktop-only">
      <ServiceCardsSection />
    </div>
    <div class="mobile-only">
      <MobileServiceCardsSection />
    </div>

    <!-- 9. เพราะเราเข้าใจ ทุกความต้องการ -->
    <div class="desktop-only">
      <WhyChooseUsSection />
    </div>
    <div class="mobile-only">
      <MobileWhyChooseUsSection />
    </div>

    <!-- 10. Travel Blog Section -->
    <div class="desktop-only">
      <TravelBlogSection />
    </div>
    <div class="mobile-only">
      <MobileTravelBlogSection />
    </div>

    <!-- 11. Links Section (desktop only) -->
    <div class="desktop-only">
      <LinksSection />
    </div>

    <!-- Footer Links Section (mobile only) -->
    <div class="mobile-only">
      <MobileFooterLinksSection />
    </div>

    <!-- Footer is rendered globally in App.vue -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import StickySearchBar from '@/components/StickySearchBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import MobileHeroSection from '@/components/MobileHeroSection.vue'
import PromotionSection from '@/components/PromotionSection.vue'
import MobilePromotionSection from '@/components/MobilePromotionSection.vue'
import CategorySection from '@/components/CategorySection.vue'
import NewPromotionSection from '@/components/NewPromotionSection.vue'
import LocationMapSection from '@/components/LocationMapSection.vue'
import MobileLocationSelectionSection from '@/components/MobileLocationSelectionSection.vue'
import BranchSelectionSection from '@/components/BranchSelectionSection.vue'
import MobileBranchSelectionSection from '@/components/MobileBranchSelectionSection.vue'
import AppDownloadSection from '@/components/AppDownloadSection.vue'
import MobileAppDownloadSection from '@/components/MobileAppDownloadSection.vue'
import ServiceCardsSection from '@/components/ServiceCardsSection.vue'
import MobileServiceCardsSection from '@/components/MobileServiceCardsSection.vue'
import WhyChooseUsSection from '@/components/WhyChooseUsSection.vue'
import MobileWhyChooseUsSection from '@/components/MobileWhyChooseUsSection.vue'
import TravelBlogSection from '@/components/TravelBlogSection.vue'
import MobileTravelBlogSection from '@/components/MobileTravelBlogSection.vue'
import LinksSection from '@/components/LinksSection.vue'
import MobileFooterLinksSection from '@/components/MobileFooterLinksSection.vue'

const showStickySearch = ref(false)

const handleScroll = () => {
    // Show sticky bar when scrolled past ~600px (Hero section height)
    showStickySearch.value = window.scrollY > 600
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.home {
  width: 100%;
}
</style>
