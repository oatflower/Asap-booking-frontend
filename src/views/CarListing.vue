<template>
  <div class="car-listing">
    <SearchBar :couponCode="couponCode" />
    <CarListingSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import SearchBar from '../components/SearchBar.vue'
import CarListingSection from '../components/CarListingSection.vue'

const route = useRoute()
const couponCode = ref('')

onMounted(() => {
  // Get coupon code from query params if available
  if (route.query.coupon) {
    couponCode.value = route.query.coupon
  }
})
</script>

<style scoped>
.car-listing {
  width: 100%;
  padding-top: 80px;
}
</style>
