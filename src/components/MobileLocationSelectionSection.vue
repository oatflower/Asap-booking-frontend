<template>
  <section class="mobile-location-selection">
    <div class="content-wrapper">
      <!-- Location Cards Carousel -->
      <div class="location-carousel">
        <div class="carousel-track" :style="{ transform: `translateX(${-currentIndex * 314}px)` }">
          <div
            v-for="(location, index) in locations"
            :key="index"
            class="location-card"
            :class="{ active: currentIndex === index }"
            @click="currentIndex = index"
          >
            <img :src="location.image" :alt="location.name" class="location-bg" />
            <div class="location-overlay"></div>
            <div class="location-info">
              <img src="@/assets/images/mobile/mobile-pin-icon.svg" alt="pin" class="pin-icon" />
              <span class="location-name">{{ location.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Car Image -->
      <div class="car-image-container">
        <img src="@/assets/images/mobile/mobile-car-select-4714f6.png" alt="car" class="car-image" />
      </div>

      <!-- Selection Form -->
      <div class="selection-form">
        <h3 class="form-title">เลือกสาขารับรถ & จองเลย</h3>

        <div class="branch-select">
          <span class="branch-text">เชียงใหม่ - สนามบินเชียงใหม่</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6L8 10L12 6" stroke="#637381" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <button class="book-btn">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.75 15.75L12.4875 12.4875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>จองเลย</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import locationKrabi from '@/assets/images/mobile/mobile-location-krabi.png'
import locationChiangmai from '@/assets/images/mobile/mobile-location-chiangmai.png'
import locationBangkok from '@/assets/images/mobile/mobile-location-bangkok.png'

const locations = ref([
  { name: 'กระบี่', image: locationKrabi },
  { name: 'เชียงใหม่', image: locationChiangmai },
  { name: 'กรุงเทพ', image: locationBangkok }
])

const currentIndex = ref(1)
</script>

<style scoped>
.mobile-location-selection {
  background: #ffffff;
  box-shadow: 0px -24px 24px rgba(0, 0, 0, 0.1);
  padding: 56px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
}

.location-carousel {
  width: 100%;
  overflow: hidden;
  margin: 0 -16px;
  padding: 0 16px;
}

.carousel-track {
  display: flex;
  gap: 16px;
  transition: transform 0.3s ease;
}

.location-card {
  flex-shrink: 0;
  width: 298px;
  height: 421px;
  border-radius: 32px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.location-card:not(.active) {
  opacity: 0.7;
  transform: scale(0.95);
}

.location-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.location-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
}

.location-info {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
}

.pin-icon {
  width: 24px;
  height: 24px;
}

.location-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.587;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.car-image-container {
  width: 274px;
  margin-top: -48px;
  z-index: 10;
}

.car-image {
  width: 100%;
  height: auto;
}

.selection-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.form-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.587;
  color: #161c24;
  opacity: 0.96;
  margin: 0;
  text-align: center;
}

.branch-select {
  width: 100%;
  background: #f8f8f8;
  border-radius: 12px;
  padding: 16px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.branch-text {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.587;
  color: #161c24;
}

.book-btn {
  width: 100%;
  background: #ff595a;
  border: none;
  border-radius: 12px;
  padding: 10px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: background 0.2s;
}

.book-btn span {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.587;
  color: #ffffff;
}

.book-btn:hover {
  background: #e04f50;
}
</style>
