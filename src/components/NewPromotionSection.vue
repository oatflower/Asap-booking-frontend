<template>
  <section class="new-promotion-section">
    <!-- Section Header -->
    <div class="section-header">
      <h2 class="section-title">ลดเฉพาะช่วงนี้ คุ้มกว่าเดิม</h2>
      <p class="section-subtitle">Lorem ipsum dolor sit amet consectetur. Sagittis.</p>
    </div>

    <div class="promotion-container">
      <!-- Promotion Cards Slider -->
      <div class="slider-container">
        <button class="nav-arrow left" @click="prevSlide" :disabled="currentSlide === 0">
          <svg viewBox="0 0 18 18" width="18" height="18">
            <path d="M11 14L6 9L11 4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div class="cards-wrapper">
          <div class="cards-track" :style="{ transform: `translateX(-${currentSlide * (740 + 24)}px)` }">
            <div
              v-for="(promotion, index) in promotions"
              :key="index"
              class="card-slide"
              :class="{ 'center-card': index === currentSlide }"
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

// Import images
// Import images
import promoSeptember from '@/assets/images/figma-promo-1.png'
import promoMomsDay from '@/assets/images/figma-promo-2.png'
import promoDeepal from '@/assets/images/figma-promo-3.png'
import promoNewYear from '@/assets/images/promo-new-year.png'
import promoSummer from '@/assets/images/promo-summer.png'
import promoFlashSale from '@/assets/images/promo-flash-sale.png'

const promotions = ref([
  {
    imageUrl: promoSeptember,
    title: 'September Double Deal'
  },
  {
    imageUrl: promoMomsDay,
    title: 'Mom\'s Day Special'
  },
  {
    imageUrl: promoDeepal,
    title: 'Deepal Promotion'
  },
  {
    imageUrl: promoNewYear,
    title: 'New Year Deal'
  },
  {
    imageUrl: promoSummer,
    title: 'Summer Special'
  },
  {
    imageUrl: promoFlashSale,
    title: 'Flash Sale'
  }
])

const currentSlide = ref(0)
const visibleCards = 3

const maxSlide = computed(() => promotions.value.length - 1)

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
  padding: 32px 0;
  width: 100%;
  overflow: hidden;
  min-height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
}

.promotion-container {
  /* max-width: 1440px; Removed for full width */
  width: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.section-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 20px;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #161c24;
  margin: 0;
  line-height: 1.587;
  letter-spacing: 0.5%;
}

.section-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #637381;
  margin: 0;
  line-height: 1.587;
  letter-spacing: 0.5%;
}

.slider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  position: relative;
  /* Ensure the slider takes full width for the partial view of side cards */
}

.cards-wrapper {
  width: 100%;
  /* Adjust width to control how much of side cards is visible.
     Figma shows main card + partial side cards. */
  /* max-width: 1200px; Removed for full width */
  width: 100%;
  overflow: hidden;
  padding: 20px 0; /* Add padding for shadow/hover effects */
}

.cards-track {
  display: flex;
  gap: 24px;
  transition: transform 0.5s ease-in-out;
  padding-left: calc(50% - 370px); /* Center the first item: track width / 2 - card width / 2 */
}

.card-slide {
  width: 740px; /* Fixed width based on Figma approximation or ratio */
  min-width: 740px;
  height: 460px; /* Fixed height for aspect ratio */
  flex-shrink: 0;
  transition: all 0.3s ease;
  opacity: 0.5; /* Fade out side cards */
  transform: scale(0.9); /* Shrink side cards */
}

.card-slide.center-card {
  opacity: 1;
  transform: scale(1);
  z-index: 2;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}

.nav-arrow {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #dfe3e8;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  color: #637381;
  z-index: 10;
  /* Position arrows outside the track if needed, or keep inline */
}

.nav-arrow:hover:not(:disabled) {
  background: #f8f9fa;
  border-color: #c4cdd5;
}

.nav-arrow:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  display: none;
}

.view-all-container {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.view-all-btn {
  padding: 4px 20px;
  height: 56px;
  border: 1px solid #dfe3e8;
  border-radius: 12px;
  background: white;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #161c24;
  cursor: pointer;
  line-height: 1.587;
  letter-spacing: 0.5%;
  transition: all 0.2s;
}

.view-all-btn:hover {
  border-color: #FF595A;
  color: #FF595A;
}

@media (max-width: 1024px) {
  .card-slide {
    width: 600px;
    min-width: 600px;
    height: 380px;
  }
  .cards-track {
    padding-left: calc(50% - 300px);
  }
}

@media (max-width: 768px) {
  .cards-track {
    padding-left: 20px; /* formatted for simple scroll on mobile */
    gap: 16px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }

  .card-slide {
    width: 85vw;
    min-width: 85vw;
    height: auto;
    aspect-ratio: 16/10;
    opacity: 1;
    transform: none;
    scroll-snap-align: center;
  }

  .nav-arrow {
    display: none;
  }
}
</style>
