<template>
  <section class="mobile-promo-cards-section">
    <!-- Header -->
    <div class="section-header">
      <h2 class="section-title">ลดเฉพาะช่วงนี้ คุ้มกว่าเดิม</h2>
      <p class="section-subtitle">Lorem ipsum dolor sit amet consectetur. Enim.</p>
    </div>

    <!-- Promotion Cards Carousel -->
    <div class="promo-carousel-container">
      <div
        class="promo-carousel-track"
        :style="{ transform: `translateX(${-currentIndex * (cardWidth + cardGap)}px)` }"
      >
        <div
          v-for="(promo, index) in promotions"
          :key="index"
          class="promo-card"
          :class="{ 'large': promo.isLarge }"
        >
          <div class="card-inner">
            <div class="card-image">
              <img :src="promo.image" :alt="promo.alt" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- See All Button -->
    <div class="see-all-container">
      <button class="see-all-btn">
        <span>ดูทั้งหมด</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import promoCard1 from '@/assets/images/mobile/mobile-promo-card-1.png'
import promoCard2 from '@/assets/images/mobile/mobile-promo-card-2.png'
import promoCard3 from '@/assets/images/mobile/mobile-promo-card-3.png'

const promotions = ref([
  { image: promoCard1, alt: 'Promotion 1', isLarge: false },
  { image: promoCard2, alt: 'Promotion 2', isLarge: true },
  { image: promoCard3, alt: 'Promotion 3', isLarge: false }
])

const currentIndex = ref(0)
const cardWidth = 237
const cardGap = 32
</script>

<style scoped>
.mobile-promo-cards-section {
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #161c24;
  margin: 0;
}

.section-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #637381;
  margin: 0;
}

.promo-carousel-container {
  width: 100%;
  height: 539px;
  overflow: hidden;
}

.promo-carousel-track {
  display: flex;
  gap: 16px;
  padding: 16px;
  transition: transform 0.3s ease;
}

.promo-card {
  flex-shrink: 0;
  width: 237px;
  height: 422px;
  border-radius: 8px;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

.promo-card.large {
  width: 288px;
  height: 513px;
}

.card-inner {
  width: 100%;
  height: 100%;
  background: white;
  padding: 8px;
  border-radius: 8px;
}

.card-image {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.see-all-container {
  display: flex;
  justify-content: center;
}

.see-all-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 4px 20px;
  height: 56px;
  background: transparent;
  border: 1px solid #dfe3e8;
  border-radius: 12px;
  cursor: pointer;
}

.see-all-btn span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #161c24;
}

.see-all-btn:hover {
  background: #f4f6f8;
}
</style>
