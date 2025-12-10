<template>
  <section class="about-location-section">
    <div class="location-container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">
          เช่ารถได้สะดวก <span class="highlight">ทุกจุดหมาย</span>
        </h2>
        <p class="section-subtitle">
          สาขาครอบคลุมทั้งในกรุงเทพ<br>
          สนามบิน และเมืองหลักทั่วประเทศ
        </p>
      </div>

      <!-- Map Container -->
      <div class="map-container">
        <!-- Thailand Map SVG (simplified) -->
        <div class="map-wrapper">
          <svg viewBox="0 0 800 600" class="thailand-map">
            <!-- Simplified Thailand map shape -->
            <path d="M200 100 L300 80 L350 120 L400 100 L450 150 L480 200 L500 280 L480 350 L450 420 L420 480 L380 520 L320 540 L280 520 L250 480 L220 420 L200 350 L180 280 L160 200 L180 150 Z"
                  fill="#E5E7EB"
                  stroke="#D1D5DB"
                  stroke-width="2"/>
          </svg>

          <!-- Location Markers and Labels -->
          <!-- Left side locations -->
          <div class="location-marker" style="top: 15%; left: 20%;">
            <div class="marker-dot"></div>
            <div class="marker-label left">
              <p class="location-name">สนามบินเชียงใหม่</p>
              <p class="location-name">สยาม เชียงใหม่ (SELECT)</p>
            </div>
          </div>

          <!-- Center locations -->
          <div class="location-marker" style="top: 35%; left: 50%;">
            <div class="marker-dot"></div>
            <div class="marker-label center">
              <p class="location-name">สนามบินสุวรรณภูมิ</p>
            </div>
          </div>

          <!-- Right side locations (Bangkok area) -->
          <div class="location-marker" style="top: 30%; left: 75%;">
            <div class="marker-dot"></div>
            <div class="marker-label right">
              <p class="location-name">สนามบินดอนเมือง</p>
              <p class="location-name">สนามบินสุวรรณภูมี</p>
              <p class="location-name">สยาม เทพารักษ์</p>
              <p class="location-name">สยาม พระราม 6</p>
            </div>
          </div>

          <!-- South locations -->
          <div class="location-marker" style="top: 70%; left: 65%;">
            <div class="marker-dot"></div>
            <div class="marker-label right">
              <p class="location-name">สนามบินหาดใหญ่</p>
              <p class="location-name">สนามบินสมุย</p>
              <p class="location-name">สนามบินภูเก็ต</p>
              <p class="location-name">สนามบินกระบี่</p>
              <p class="location-name">สยาม หาดใหญ่ (ดำเนิน) สะเดา</p>
            </div>
          </div>

          <!-- Car Icon -->
          <div class="car-icon" style="bottom: 10%; right: 15%;">
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
              <ellipse cx="40" cy="35" rx="30" ry="3" fill="#00000015"/>
              <path d="M20 25 L15 30 L65 30 L60 25 L55 20 L50 15 L30 15 L25 20 Z" fill="#637381"/>
              <rect x="25" y="18" width="30" height="8" rx="1" fill="#E5E7EB"/>
              <circle cx="25" cy="28" r="3" fill="#161c24"/>
              <circle cx="55" cy="28" r="3" fill="#161c24"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-location-section {
  background: white;
  padding: 80px 0;
  width: 100%;
}

.location-container {
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}

.section-title {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #161c24;
  margin: 0;
  line-height: 1.3;
}

.section-title .highlight {
  color: #FF6B6B;
}

.section-subtitle {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #637381;
  margin: 0;
  line-height: 1.8;
}

.map-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.map-wrapper {
  position: relative;
  width: 100%;
  max-width: 900px;
  height: 600px;
}

.thailand-map {
  width: 100%;
  height: 100%;
}

.location-marker {
  position: absolute;
  z-index: 10;
}

.marker-dot {
  width: 12px;
  height: 12px;
  background: #FF6B6B;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0px 2px 8px rgba(255, 107, 107, 0.4);
  position: relative;
  z-index: 2;
}

.marker-label {
  position: absolute;
  top: -8px;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.marker-label.left {
  right: 20px;
  align-items: flex-end;
}

.marker-label.right {
  left: 20px;
  align-items: flex-start;
}

.marker-label.center {
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}

.location-name {
  font-family: 'Sukhumvit Set', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #637381;
  margin: 0;
  line-height: 1.6;
}

.location-name::before {
  content: '●';
  color: #FF6B6B;
  margin-right: 6px;
  font-size: 10px;
}

.car-icon {
  position: absolute;
  z-index: 5;
}

@media (max-width: 1440px) {
  .location-container {
    padding: 0 100px;
  }

  .section-title {
    font-size: 36px;
  }

  .map-wrapper {
    max-width: 800px;
    height: 550px;
  }
}

@media (max-width: 1024px) {
  .location-container {
    padding: 0 40px;
    gap: 48px;
  }

  .section-title {
    font-size: 32px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  .map-wrapper {
    max-width: 700px;
    height: 500px;
  }

  .location-name {
    font-size: 13px;
  }
}

@media (max-width: 768px) {
  .about-location-section {
    padding: 60px 0;
  }

  .location-container {
    padding: 0 20px;
    gap: 40px;
  }

  .section-title {
    font-size: 28px;
  }

  .section-subtitle {
    font-size: 15px;
  }

  .map-wrapper {
    height: 400px;
  }

  .location-name {
    font-size: 11px;
  }

  .marker-dot {
    width: 10px;
    height: 10px;
  }

  .car-icon svg {
    width: 60px;
    height: 30px;
  }
}
</style>
