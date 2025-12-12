<template>
  <section class="service-cards-section">
    <div class="service-container">
      <!-- Left Side: Section Header -->
      <div class="left-section">
        <div class="section-header">
          <h2 class="section-title">
            <span class="highlight">เอแซ็ป</span>
          </h2>
          <h2 class="section-title">พร้อมให้บริการ</h2>
        </div>
      </div>

      <!-- Right Side: Service Cards Grid -->
      <div class="right-section">
        <div class="cards-grid">
          <!-- Card 1: รถเช่ารายวัน/รายเดือน (with background image) -->
          <div class="service-card card-with-bg-image">
            <div class="card-content">
              <h3 class="card-title">รถเช่ารายวัน/รายเดือน</h3>
            </div>
            <button class="arrow-button">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M7 16H25M25 16L17 8M25 16L17 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

          <!-- Card 2: รถเช่ารายปี Car Subscription -->
          <div class="service-card card-no-image coral-gradient">
            <div class="card-content">
              <h3 class="card-title card-title-large">รถเช่ารายปี<br>Car Subscription</h3>
            </div>
            <button class="arrow-button">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M7 16H25M25 16L17 8M25 16L17 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

          <!-- Card 3: รถเช่า สำหรับองค์กร -->
          <div class="service-card card-no-image coral-gradient card-bottom-text">
            <div class="card-content">
              <h3 class="card-title card-title-large">รถเช่า<br>สําหรับองค์กร</h3>
            </div>
            <button class="arrow-button arrow-top">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M7 16H25M25 16L17 8M25 16L17 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

          <!-- Card 4: รถเช่าพร้อมคนขับ/พนักงานขับรถ (with background image) -->
          <div class="service-card card-with-bg-image-dark card-bottom-text">
            <div class="card-content">
              <h3 class="card-title">รถเช่าพร้อมคนขับ/<br>พนักงานขับรถ</h3>
            </div>
            <button class="arrow-button arrow-top">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M7 16H25M25 16L17 8M25 16L17 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
  width: 100%;
  height: 1400px;
  padding: 64px 56px;
  display: flex;
  align-items: center;
  gap: 64px;
  position: relative;
  overflow: hidden;
}

/* Top gradient overlay */
.service-cards-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 96px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
  z-index: 10;
  pointer-events: none;
}

.service-container {
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 64px;
}

.left-section {
  flex-shrink: 0;
  padding: 177px 0 0 56px;
  align-self: stretch;
}

.section-header {
  display: flex;
  flex-direction: column;
}

.right-section {
  flex: 1;
  padding-top: 32px;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 72px;
  color: #000000;
  margin: 0;
  line-height: 1.587;
  letter-spacing: 0.5%;
}

.section-title .highlight {
  color: #FF595A;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
  padding: 0 32px;
}

.service-card {
  position: relative;
  border-radius: 80px 20px 20px 20px;
  padding: 48px 48px 39px 100px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
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

/* Card 1: Background image with red tint */
.card-with-bg-image {
  background: #FF595A;
  background-image: url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
}

.coral-gradient {
  background: #FF595A;
  position: relative;
}

/* Add decorative circle gradient overlay for coral cards */
.coral-gradient::after {
  content: '';
  position: absolute;
  width: 1105px;
  height: 1090px;
  top: -451px;
  left: -280px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
  border-radius: 50%;
  pointer-events: none;
  opacity: 0.1;
}

/* Card 4: Background image with dark gradient overlay */
.card-with-bg-image-dark {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
              url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80');
  background-size: cover, cover;
  background-position: center, center;
}

.card-content {
  z-index: 2;
  position: absolute;
  top: 40px;
  left: 40px;
}

.card-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 41px;
  color: #F4F6F8;
  margin: 0;
  line-height: 1.463;
  letter-spacing: 0.5%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.card-title-large {
  font-size: 45px;
  line-height: 1.533;
}

/* Card content positioning for bottom text cards */
.card-bottom-text .card-content {
  position: absolute;
  bottom: 48px;
  left: 40px;
  right: 40px;
  top: auto;
}

.arrow-button {
  position: absolute;
  bottom: 32px;
  right: 48px;
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.10);
  border: none;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 3;
}

.arrow-button svg {
  width: 32px;
  height: 32px;
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
  top: 32px;
}

@media (max-width: 1440px) {
  .service-cards-section {
    height: auto;
    min-height: 900px;
    padding: 64px 40px;
  }

  .left-section {
    padding: 100px 0 0 40px;
  }

  .section-title {
    font-size: 56px;
  }

  .service-card {
    min-height: 450px;
    padding: 40px 40px 32px 80px;
  }

  .card-title {
    font-size: 36px;
  }
}

@media (max-width: 1024px) {
  .service-cards-section {
    height: auto;
    min-height: auto;
    padding: 60px 20px;
    flex-direction: column;
    align-items: flex-start;
  }

  .service-container {
    flex-direction: column;
    gap: 40px;
  }

  .left-section {
    padding: 0;
  }

  .section-title {
    font-size: 42px;
  }

  .right-section {
    padding-top: 0;
  }

  .cards-grid {
    gap: 32px;
    padding: 0;
  }

  .service-card {
    min-height: 350px;
    padding: 32px 32px 28px 60px;
    border-radius: 60px 16px 16px 16px;
  }

  .card-bottom-text .card-content {
    bottom: 28px;
    left: 28px;
    right: 28px;
  }

  .card-title {
    font-size: 32px;
  }

  .arrow-button {
    width: 56px;
    height: 56px;
    bottom: 28px;
    right: 32px;
  }

  .arrow-button.arrow-top {
    bottom: auto;
    top: 28px;
  }
}

@media (max-width: 768px) {
  .service-cards-section {
    padding: 40px 16px;
  }

  .service-cards-section::before {
    display: none;
  }

  .section-title {
    font-size: 32px;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .service-card {
    min-height: 280px;
    padding: 24px 24px 20px 48px;
    border-radius: 48px 12px 12px 12px;
  }

  .card-bottom-text .card-content {
    bottom: 20px;
    left: 20px;
    right: 20px;
  }

  .card-title {
    font-size: 26px;
  }

  .card-image {
    width: 50%;
    height: 60%;
  }

  .arrow-button {
    width: 48px;
    height: 48px;
    bottom: 20px;
    right: 24px;
  }

  .arrow-button.arrow-top {
    bottom: auto;
    top: 20px;
  }

  .arrow-button svg {
    width: 24px;
    height: 24px;
  }
}
</style>
