<template>
  <section class="category-section">
    <div class="category-container">
      <!-- Section Header -->
      <div class="section-header">
        <div class="header-text">
          <h2 class="section-title">จองรถระยะสั้น/ระยะยาว</h2>
          <p class="section-subtitle">Lorem ipsum dolor sit amet consectetur. Enim.</p>
        </div>
      </div>

      <!-- Car Categories Slider -->
      <div class="slider-container">
        <div class="categories-wrapper">
          <div class="categories-track" :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }">
            <CarCategoryCard
              v-for="(category, index) in categories"
              :key="index"
              :modelCount="category.modelCount"
              :categoryName="category.name"
            />
          </div>
        </div>

        <!-- Navigation Controls -->
        <div class="navigation-controls">
          <button
            class="nav-arrow"
            @click="prevSlide"
            :disabled="currentSlide === 0"
          >
            <svg viewBox="0 0 18 18" width="18" height="18">
              <path d="M11 14L6 9L11 4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <span class="page-number">01</span>

          <div class="progress-bars">
            <div
              v-for="(page, index) in totalPages"
              :key="index"
              class="progress-bar"
              :class="{ active: index < currentPage }"
            ></div>
          </div>

          <span class="page-number">{{ String(totalPages).padStart(2, '0') }}</span>

          <button
            class="nav-arrow"
            @click="nextSlide"
            :disabled="currentSlide >= maxSlide"
          >
            <svg viewBox="0 0 18 18" width="18" height="18">
              <path d="M7 14L12 9L7 4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import CarCategoryCard from './CarCategoryCard.vue'

const categories = ref([
  { name: 'Economy', modelCount: 1 },
  { name: 'SUV', modelCount: 1 },
  { name: 'EV Car', modelCount: 1 },
  { name: 'Hybrid Car', modelCount: 1 },
  { name: 'Economy', modelCount: 1 },
  { name: 'SUV', modelCount: 1 },
  { name: 'EV Car', modelCount: 1 },
  { name: 'Hybrid Car', modelCount: 1 }
])

const currentSlide = ref(0)
const visibleCards = 5
const slideWidth = 296 // card width (272) + gap (24)

const totalPages = computed(() => Math.ceil(categories.value.length / visibleCards))
const currentPage = computed(() => Math.floor(currentSlide.value / visibleCards) + 1)
const maxSlide = computed(() => categories.value.length - visibleCards)

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const nextSlide = () => {
  if (currentSlide.value < maxSlide.value) {
    currentSlide.value++
  }
}
</script>

<style scoped>
.category-section {
  background: white;
  padding: 64px 0;
  width: 100%;
}

.category-container {
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #161c24;
  margin: 0;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
  letter-spacing: 0.21px;
  white-space: nowrap;
}

.section-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #637381;
  margin: 0;
  letter-spacing: 0.09px;
  text-align: left;
}

.slider-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.categories-wrapper {
  width: 100%;
  overflow: hidden;
}

.categories-track {
  display: flex;
  gap: 24px;
  transition: transform 0.3s ease-in-out;
}

.navigation-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 32px 0;
}

.nav-arrow {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid #dfe3e8;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  color: #637381;
}

.nav-arrow:hover:not(:disabled) {
  background: #f8f9fa;
  border-color: #c4cdd5;
}

.nav-arrow:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.page-number {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: black;
  opacity: 0.7;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
  letter-spacing: 0.08px;
}

.progress-bars {
  display: flex;
  gap: 0;
}

.progress-bar {
  width: 32px;
  height: 4px;
  background: #dfe3e8;
  transition: background 0.3s;
}

.progress-bar.active {
  background: #ff595a;
}

@media (max-width: 1440px) {
  .category-container {
    padding: 0 100px;
  }
}

@media (max-width: 1024px) {
  .category-container {
    padding: 0 40px;
  }

  .section-title {
    font-size: 32px;
  }

  .section-subtitle {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .category-section {
    padding: 48px 0;
  }

  .category-container {
    padding: 0 20px;
  }

  .section-title {
    font-size: 28px;
    white-space: normal;
  }

  .section-subtitle {
    font-size: 14px;
  }

  .categories-track {
    flex-direction: column;
    align-items: center;
  }

  .navigation-controls {
    gap: 16px;
  }

  .nav-arrow {
    width: 48px;
    height: 48px;
  }
}
</style>
