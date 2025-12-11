<template>
  <section class="about-image-section">
    <div class="image-container">
      <!-- Main Image -->
      <img
        :src="aboutHeroImage"
        alt="ASAP Car Rental Experience"
        class="main-image"
      />

      <!-- Back to Top Button -->
      <button class="back-to-top" @click="scrollToTop">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="arrow-icon">
          <path d="M10 15V5M10 5L5 10M10 5L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>กลับไปด้านบนสุด</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import aboutHeroImage from '@/assets/images/about-hero-image.png'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.about-image-section {
  width: 100%;
  background: white;
  padding: 80px 0;
}

.image-container {
  position: relative;
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 200px;
}

.main-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.08);
}

.back-to-top {
  position: absolute;
  top: 32px;
  right: 232px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #FF7E7E 0%, #FF6B6B 100%);
  border: none;
  border-radius: 50px;
  color: white;
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 8px 24px rgba(255, 107, 107, 0.3);
  z-index: 10;
}

.back-to-top:hover {
  transform: translateY(-2px);
  box-shadow: 0px 12px 32px rgba(255, 107, 107, 0.4);
}

.back-to-top:active {
  transform: translateY(0);
}

.arrow-icon {
  flex-shrink: 0;
}

@media (max-width: 1440px) {
  .image-container {
    padding: 0 100px;
  }

  .back-to-top {
    right: 132px;
  }
}

@media (max-width: 1024px) {
  .image-container {
    padding: 0 40px;
  }

  .back-to-top {
    right: 72px;
    font-size: 14px;
    padding: 10px 20px;
  }
}

@media (max-width: 768px) {
  .about-image-section {
    padding: 60px 0;
  }

  .image-container {
    padding: 0 20px;
  }

  .back-to-top {
    top: 20px;
    right: 40px;
    font-size: 13px;
    padding: 10px;
    width: 44px;
    height: 44px;
    justify-content: center;
  }

  .back-to-top span {
    display: none;
  }

  .main-image {
    border-radius: 12px;
  }
}
</style>
