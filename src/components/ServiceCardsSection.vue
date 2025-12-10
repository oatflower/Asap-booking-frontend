<template>
  <section class="service-cards-section">
    <div class="service-container">
      <!-- Left Side: Section Header -->
      <div class="left-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="highlight">เอแซ็ป</span><br>พร้อมให้บริการ
          </h2>
        </div>
      </div>

      <!-- Right Side: Service Cards Grid -->
      <div class="right-section">
        <div class="cards-grid">
        <!-- Card 1: รถเช่ารายวัน/รายเดือน -->
        <div class="service-card card-with-image blue-gradient">
          <div class="card-content">
            <h3 class="card-title">รถเช่ารายวัน/<br>รายเดือน</h3>
          </div>
          <div class="card-image">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop"
              alt="รถเช่ารายวัน/รายเดือน"
              class="service-image"
            />
          </div>
          <button class="arrow-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <!-- Card 2: รถเช่ารายปี Car Subscription -->
        <div class="service-card card-no-image coral-gradient">
          <div class="card-content">
            <h3 class="card-title">รถเช่ารายปี<br>Car Subscription</h3>
          </div>
          <button class="arrow-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <!-- Card 3: รถเช่า สำหรับองค์กร -->
        <div class="service-card card-no-image coral-gradient card-bottom-text">
          <div class="card-content">
            <h3 class="card-title">รถเช่า<br>สำหรับองค์กร</h3>
          </div>
          <button class="arrow-button arrow-top">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <!-- Card 4: รถเช่าพร้อมคนขับ/พนักงานขับรถ -->
        <div class="service-card card-with-image gray-gradient card-bottom-text">
          <div class="card-content">
            <h3 class="card-title">รถเช่าพร้อมคนขับ/<br>พนักงานขับรถ</h3>
          </div>
          <div class="card-image">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop"
              alt="รถเช่าพร้อมคนขับ"
              class="service-image"
            />
          </div>
          <button class="arrow-button arrow-top">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.service-cards-section {
  background: white;
  padding: 80px 0;
  width: 100%;
}

.service-container {
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 200px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
  align-items: center;
}

.left-section {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.section-header {
  display: flex;
  align-items: center;
}

.right-section {
  width: 100%;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #161c24;
  margin: 0;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
  letter-spacing: 0.21px;
  line-height: 1.3;
}

.section-title .highlight {
  color: #ff595a;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.service-card {
  position: relative;
  border-radius: 20px 20px 20px 80px;
  padding: 40px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 15.3px 5px rgba(0, 0, 0, 0.04);
}

.service-card::before {
  content: '';
  position: absolute;
  width: 873.57px;
  height: 680.99px;
  left: 173.85px;
  top: -451.13px;
  transform: rotate(42deg);
  transform-origin: top left;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.14) 100%);
  border-radius: 9999px;
  pointer-events: none;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
}

.service-card:hover .arrow-button {
  transform: translateX(4px);
}

.blue-gradient {
  background: linear-gradient(135deg, #7BA4DB 0%, #B8C9E0 100%);
}

.coral-gradient {
  background: linear-gradient(135deg, #FF7E7E 0%, #FF9999 100%);
}

.gray-gradient {
  background: linear-gradient(135deg, #B8C5D0 0%, #D4DBE3 100%);
}

.card-content {
  z-index: 2;
  position: relative;
}

.card-bottom-text .card-content {
  position: absolute;
  bottom: 40px;
  left: 40px;
  right: 40px;
  z-index: 3;
}

.card-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 45px;
  color: #F4F6F8;
  margin: 0;
  line-height: 69px;
  letter-spacing: 0.23px;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
}

.card-image {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 55%;
  height: 65%;
  z-index: 1;
  border-radius: 20px 0 24px 0;
  overflow: hidden;
}

.card-bottom-text .card-image {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 24px;
}

.card-bottom-text .card-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.5) 100%);
  z-index: 1;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
}

.card-bottom-text .service-image {
  opacity: 1;
}

.arrow-button {
  position: absolute;
  bottom: 40px;
  right: 40px;
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 3;
}

.arrow-button:hover {
  background: rgba(255, 255, 255, 0.20);
  transform: translateX(4px);
}

.card-no-image .arrow-button {
  background: rgba(255, 255, 255, 0.10);
}

.card-no-image .arrow-button:hover {
  background: rgba(255, 255, 255, 0.20);
}

.arrow-button.arrow-top {
  bottom: auto;
  top: 40px;
}

@media (max-width: 1440px) {
  .service-container {
    padding: 0 100px;
    gap: 60px;
  }
}

@media (max-width: 1024px) {
  .service-container {
    padding: 0 40px;
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .section-title {
    font-size: 36px;
  }

  .cards-grid {
    gap: 24px;
  }

  .service-card {
    padding: 32px;
    min-height: 280px;
  }

  .card-bottom-text .card-content {
    bottom: 32px;
    left: 32px;
    right: 32px;
  }

  .card-title {
    font-size: 32px;
    line-height: 48px;
  }

  .arrow-button {
    width: 56px;
    height: 56px;
    bottom: 32px;
    right: 32px;
  }

  .arrow-button.arrow-top {
    bottom: auto;
    top: 32px;
  }

  .service-card {
    border-radius: 20px 20px 20px 60px;
  }
}

@media (max-width: 768px) {
  .service-cards-section {
    padding: 60px 0;
  }

  .service-container {
    padding: 0 20px;
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .section-title {
    font-size: 28px;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .service-card {
    padding: 28px;
    min-height: 240px;
  }

  .card-bottom-text .card-content {
    bottom: 28px;
    left: 28px;
    right: 28px;
  }

  .card-title {
    font-size: 28px;
    line-height: 42px;
  }

  .card-image {
    width: 50%;
    height: 60%;
  }

  .arrow-button {
    width: 52px;
    height: 52px;
    bottom: 24px;
    right: 24px;
  }

  .arrow-button.arrow-top {
    bottom: auto;
    top: 24px;
  }

  .arrow-button svg {
    width: 24px;
    height: 24px;
  }

  .service-card {
    border-radius: 20px 20px 20px 48px;
  }
}
</style>
