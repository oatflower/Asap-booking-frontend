<template>
  <section class="about-hero-section">
    <div class="about-hero-container">
      <!-- ASAP Logo -->
      <div class="logo-wrapper">
        <svg viewBox="0 0 400 200" class="asap-logo">
          <!-- Swoosh -->
          <path d="M50 80 Q 80 30, 120 50" stroke="#FF6B6B" stroke-width="12" fill="none" stroke-linecap="round"/>
          <!-- asap text -->
          <text x="140" y="130" fill="#FF6B6B" font-family="Arial, sans-serif" font-size="80" font-weight="bold">asap</text>
        </svg>
      </div>

      <!-- Hero Title -->
      <h1 class="hero-title">
        เราคือผู้ให้บริการรถเช่า <span class="highlight">ชั้นนำของประเทศไทย</span>
      </h1>

      <!-- Cars Image -->
      <div class="cars-image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=400&fit=crop"
          alt="ASAP Cars Fleet"
          class="cars-image"
        />
      </div>

      <!-- Bottom Text -->
      <div class="bottom-text-section">
        <h2 class="bottom-title">มุ่งมั่นนำเสนอบริการเช่ารถทั้งแบบรายวัน รายเดือน และรายปี</h2>
        <p class="bottom-description">
          พร้อมตอบโจทย์ทั้งลูกค้าทั่วไปและลูกค้าองค์กร ด้วยประสบการณ์กว่า<br>
          10 ปี ในอุดสาหกรรมรถเช่า เรามีความพร้อมทั้งด้านคุณภาพของรถ<br>
          บริการที่รวดเร็ว และราคาที่คุ้มค่า
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-hero-section {
  background: white;
  padding: 80px 0 100px;
  width: 100%;
}

.about-hero-container {
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.asap-logo {
  width: 300px;
  height: auto;
}

.hero-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #161c24;
  text-align: center;
  margin: 0;
  line-height: 1.5;
}

.hero-title .highlight {
  color: #FF6B6B;
}

.cars-image-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 20px 0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.1);
}

.cars-image {
  width: 100%;
  height: auto;
  display: block;
}

.bottom-text-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}

.bottom-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #161c24;
  text-align: center;
  margin: 0;
  line-height: 1.5;
}

.bottom-description {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #637381;
  text-align: center;
  margin: 0;
  line-height: 1.8;
}

@media (max-width: 1440px) {
  .about-hero-container {
    padding: 0 100px;
  }

  .hero-title {
    font-size: 36px;
  }

  .bottom-title {
    font-size: 24px;
  }
}

@media (max-width: 1024px) {
  .about-hero-container {
    padding: 0 40px;
  }

  .asap-logo {
    width: 250px;
  }

  .hero-title {
    font-size: 32px;
  }

  .bottom-title {
    font-size: 22px;
  }

  .bottom-description {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .about-hero-section {
    padding: 60px 0 80px;
  }

  .about-hero-container {
    padding: 0 20px;
    gap: 32px;
  }

  .asap-logo {
    width: 200px;
  }

  .hero-title {
    font-size: 26px;
  }

  .bottom-title {
    font-size: 20px;
  }

  .bottom-description {
    font-size: 15px;
    br {
      display: none;
    }
  }
}
</style>
