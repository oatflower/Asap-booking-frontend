<template>
  <section class="mobile-branch-section">
    <!-- Header -->
    <div class="section-header">
      <h2 class="section-title">จองรถระยะสั้น/ระยะยาว</h2>
      <p class="section-subtitle">Lorem ipsum dolor sit amet consectetur. Enim.</p>
    </div>

    <!-- Carousel Container -->
    <div class="carousel-container">
      <div
        class="carousel-track"
        :style="{ transform: `translateX(${-currentIndex * (cardWidth + cardGap)}px)` }"
      >
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="category-card"
          :class="{ 'large': index === currentIndex }"
        >
          <div class="card-content">
            <div class="card-text">
              <span class="card-models">{{ category.models }} รุ่น</span>
              <span class="card-name">{{ category.name }}</span>
            </div>
            <div class="card-image">
              <img :src="category.image" :alt="category.name" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="carousel-nav">
      <button class="nav-btn prev" @click="prevSlide" :disabled="currentIndex === 0">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M11.25 13.5L6.75 9L11.25 4.5" stroke="#637381" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <div class="nav-indicators">
        <span class="nav-index">{{ String(currentIndex + 1).padStart(2, '0') }}</span>
        <div class="nav-dots">
          <div
            v-for="(_, index) in categories"
            :key="index"
            class="dot"
            :class="{ active: index === currentIndex }"
          ></div>
        </div>
        <span class="nav-index">{{ String(categories.length).padStart(2, '0') }}</span>
      </div>

      <button class="nav-btn next" @click="nextSlide" :disabled="currentIndex === categories.length - 1">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M6.75 4.5L11.25 9L6.75 13.5" stroke="#637381" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import mobileCarEconomy from '@/assets/images/mobile/mobile-car-economy.png'
import mobileCarSuv from '@/assets/images/mobile/mobile-car-suv.png'
import mobileCarEv from '@/assets/images/mobile/mobile-car-ev.png'
import mobileCarHybrid from '@/assets/images/mobile/mobile-car-hybrid.png'

const categories = ref([
  { name: 'Economy', models: 1, image: mobileCarEconomy },
  { name: 'SUV', models: 1, image: mobileCarSuv },
  { name: 'EV Car', models: 1, image: mobileCarEv },
  { name: 'Hybrid Car', models: 1, image: mobileCarHybrid }
])

const currentIndex = ref(0)
const cardWidth = 271.8
const cardGap = 12

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const nextSlide = () => {
  if (currentIndex.value < categories.value.length - 1) {
    currentIndex.value++
  }
}
</script>

<style scoped>
.mobile-branch-section {
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: white;
}

.section-header {
  display: flex;
  flex-direction: column;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #161c24;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
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

.carousel-container {
  width: 100%;
  overflow: hidden;
  height: 270px;
}

.carousel-track {
  display: flex;
  gap: 12px;
  transition: transform 0.3s ease;
  padding-left: 16px;
}

.category-card {
  flex-shrink: 0;
  width: 271.8px;
  height: 243px;
}

.card-content {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #f4f6f8 0%, #ffffff 100%);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
}

.card-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-models {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: rgba(0, 0, 0, 0.7);
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
}

.card-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: #000000;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
}

.category-card.large .card-name {
  font-size: 28px;
}

.card-image {
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.card-image img {
  max-width: 100%;
  max-height: 140px;
  object-fit: contain;
}

.carousel-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  gap: 32px;
}

.nav-btn {
  width: 39.2px;
  height: 39.2px;
  border: 1px solid #dfe3e8;
  border-radius: 100px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s;
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nav-btn svg {
  width: 18px;
  height: 18px;
}

.nav-indicators {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex: 1;
}

.nav-index {
  font-family: 'Sukhumvit Set', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.587;
  letter-spacing: 0.5%;
  color: rgba(0, 0, 0, 0.7);
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
}

.nav-dots {
  display: flex;
  align-items: center;
  gap: 4px;
}

.dot {
  width: 8px;
  height: 4px;
  border-radius: 2px;
  background: #dfe3e8;
  transition: all 0.3s ease;
}

.dot.active {
  width: 32px;
  background: #ff595a;
}
</style>
