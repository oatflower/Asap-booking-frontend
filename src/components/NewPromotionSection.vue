<template>
  <section class="new-promotion-section">
    <div class="promotion-container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">
          ลดเฉพาะช่วงนี้ <span class="highlight">คุ้มกว่าเดิม</span>
        </h2>
        <p class="section-subtitle">Lorem ipsum dolor sit amet consectetur. Sagittis.</p>
      </div>

      <!-- Promotion Cards Slider -->
      <div class="slider-container">
        <button class="nav-arrow left" @click="prevSlide" :disabled="currentSlide === 0">
          <svg viewBox="0 0 18 18" width="18" height="18">
            <path d="M11 14L6 9L11 4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div class="cards-wrapper">
          <div class="cards-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div
              v-for="(promotion, index) in promotions"
              :key="index"
              class="card-slide"
              :class="{ 'center-card': index % 3 === 1 }"
            >
              <NewPromotionCard
                :imageUrl="promotion.imageUrl"
                :title="promotion.title"
              />
            </div>
          </div>
        </div>

        <button class="nav-arrow right" @click="nextSlide" :disabled="currentSlide >= maxSlide">
          <svg viewBox="0 0 18 18" width="18" height="18">
            <path d="M7 14L12 9L7 4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <!-- View All Button -->
      <div class="view-all-container">
        <button class="view-all-btn">ดูทั้งหมด</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import NewPromotionCard from './NewPromotionCard.vue'

const promotions = ref([
  {
    imageUrl: 'https://via.placeholder.com/400x300/e8f5e9/000000?text=September+Double+Deal',
    title: 'September Double Deal'
  },
  {
    imageUrl: 'https://via.placeholder.com/500x350/e3f2fd/000000?text=Mom\'s+Day+Special',
    title: 'Mom\'s Day Special'
  },
  {
    imageUrl: 'https://via.placeholder.com/400x300/fce4ec/000000?text=Deepal+Promotion',
    title: 'Deepal Promotion'
  },
  {
    imageUrl: 'https://via.placeholder.com/400x300/f3e5f5/000000?text=New+Year+Deal',
    title: 'New Year Deal'
  },
  {
    imageUrl: 'https://via.placeholder.com/500x350/fff3e0/000000?text=Summer+Special',
    title: 'Summer Special'
  },
  {
    imageUrl: 'https://via.placeholder.com/400x300/e0f2f1/000000?text=Flash+Sale',
    title: 'Flash Sale'
  }
])

const currentSlide = ref(0)
const visibleCards = 3

const maxSlide = computed(() => Math.ceil(promotions.value.length / visibleCards) - 1)

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
.new-promotion-section {
  background: white;
  padding: 80px 0;
  width: 100%;
}

.promotion-container {
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.section-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #161c24;
  margin: 0;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
  letter-spacing: 0.21px;
}

.section-title .highlight {
  color: #ff595a;
}

.section-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #637381;
  margin: 0;
  letter-spacing: 0.09px;
}

.slider-container {
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;
  position: relative;
}

.cards-wrapper {
  flex: 1;
  overflow: hidden;
}

.cards-track {
  display: flex;
  gap: 24px;
  transition: transform 0.5s ease-in-out;
}

.card-slide {
  min-width: calc((100% - 48px) / 3);
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.card-slide.center-card {
  transform: scale(1.1);
  z-index: 2;
}

.nav-arrow {
  width: 56px;
  height: 56px;
  min-width: 56px;
  border-radius: 50%;
  border: 1px solid #dfe3e8;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  color: #637381;
  flex-shrink: 0;
}

.nav-arrow:hover:not(:disabled) {
  background: #f8f9fa;
  border-color: #c4cdd5;
}

.nav-arrow:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.view-all-container {
  display: flex;
  justify-content: center;
  padding-top: 16px;
}

.view-all-btn {
  padding: 12px 32px;
  border: 1px solid #dfe3e8;
  border-radius: 8px;
  background: white;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #161c24;
  cursor: pointer;
  transition: all 0.2s;
}

.view-all-btn:hover {
  background: #f8f9fa;
  border-color: #c4cdd5;
}

@media (max-width: 1440px) {
  .promotion-container {
    padding: 0 100px;
  }
}

@media (max-width: 1024px) {
  .promotion-container {
    padding: 0 40px;
  }

  .section-title {
    font-size: 36px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  .card-slide {
    min-width: calc((100% - 24px) / 2);
  }

  .card-slide.center-card {
    transform: scale(1.05);
  }
}

@media (max-width: 768px) {
  .new-promotion-section {
    padding: 60px 0;
  }

  .promotion-container {
    padding: 0 20px;
    gap: 32px;
  }

  .section-title {
    font-size: 28px;
  }

  .section-subtitle {
    font-size: 14px;
  }

  .slider-container {
    gap: 16px;
  }

  .card-slide {
    min-width: 100%;
  }

  .card-slide.center-card {
    transform: scale(1);
  }

  .nav-arrow {
    width: 48px;
    height: 48px;
    min-width: 48px;
  }
}
</style>
